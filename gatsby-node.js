const path = require('path');
const remark = require('remark');
const guide = require('remark-preset-lint-markdown-style-guide');
const html = require('remark-html');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const dataToConvert =
    node.description ||
    node.addressData ||
    node.contactFooter ||
    node.modalDescription;
  if (
    node.internal.mediaType === `text/markdown` &&
    dataToConvert !== undefined
  ) {
    remark()
      .use(guide)
      .use(html)
      .process(dataToConvert, (err, file) => {
        if (err) throw err;

        createNodeField({
          node,
          name: `htmlData`,
          value: String(file),
        });
      });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulMenuPosition {
        group(field: node_locale) {
          edges {
            node {
              slug
              node_locale
              template
            }
          }
        }
      }
      allContentfulTechnologies {
        group(field: node_locale) {
          edges {
            node {
              slug
              node_locale
              internal {
                type
              }
            }
          }
        }
      }
      allContentfulPortfolio {
        group(field: node_locale) {
          edges {
            node {
              slug
              node_locale
              internal {
                type
              }
            }
          }
        }
      }
      allContentfulOffer {
        group(field: node_locale) {
          edges {
            node {
              slug
              node_locale
              internal {
                type
              }
            }
          }
        }
      }
      allContentfulSettings {
        group(field: node_locale) {
          edges {
            node {
              categorySlugList
            }
          }
          fieldValue
        }
      }
      allContentfulTechnologiesPage {
        group(field: node_locale) {
          nodes {
            technologiesToShow {
              slug
            }
          }
          fieldValue
        }
      }
      allContentfulOfferPage {
        group(field: node_locale) {
          nodes {
            offerToShow {
              slug
            }
          }
          fieldValue
        }
      }
      allContentfulPortfolioPage {
        group(field: node_locale) {
          nodes {
            portfolioToShow {
              slug
            }
          }
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allContentfulMenuPosition.group.forEach(({ edges }) => {
    edges.forEach(({ node }) => {
      const locale = node.node_locale;
      const localePrefix = locale !== 'en' ? `/${locale}/` : `/`;
      createPage({
        path: localePrefix + node.slug.trim(),
        component: path.resolve(`src/templates/${node.template}.js`),
        context: {
          locale,
        },
      });
    });
  });
  // Generate pages for categories
  const categorySlugsArr = {};
  const categorySlugList = result.data.allContentfulSettings.group;
  const technologies = result.data.allContentfulTechnologies.group;
  const offer = result.data.allContentfulOffer.group;
  const portfolio = result.data.allContentfulPortfolio.group;

  // Build slug array grouped by languages
  for (let i = 0; i < categorySlugList.length; i++) {
    const langName = categorySlugList[i].fieldValue;
    categorySlugsArr[langName] =
      categorySlugList[i].edges[0].node.categorySlugList;
  }

  // generate siblings slugs for items, for prev/next functionality
  const createSiblings = (locale, pageSlug, type) => {
    const siblings = {};
    let allSiblings = null;
    let nodeName = null;
    if (type === 'TechnologiesItem') {
      allSiblings = result.data.allContentfulTechnologiesPage.group;
      nodeName = 'technologiesToShow';
    } else if (type === 'OfferItem') {
      allSiblings = result.data.allContentfulOfferPage.group;
      nodeName = 'offerToShow';
    } else if (type === 'PortfolioItem') {
      allSiblings = result.data.allContentfulPortfolioPage.group;
      nodeName = 'portfolioToShow';
    } else return null;

    allSiblings.forEach(({ nodes, fieldValue }) => {
      siblings[fieldValue] = nodes[0][nodeName].map(({ slug }) => slug);
    });
    const siblingIndex = siblings[locale].indexOf(pageSlug);
    const siblingsLength = siblings[locale].length;
    // if  siblingIndex is last in array get first item from array for nextSibling, otherwise take next
    const nextSibling =
      siblingsLength - 1 === siblingIndex
        ? siblings[locale][0]
        : siblings[locale][siblingIndex + 1];
    // if  siblingIndex is first in array get last item from array for prevSibling, otherwise take prev
    const prevSibling =
      siblingIndex === 0
        ? siblings[locale][siblingsLength - 1]
        : siblings[locale][siblingIndex - 1];

    return { nextSibling, prevSibling };
  };

  const generatePagesForCategories = (data, template) => {
    data.forEach(({ edges }) => {
      edges.forEach(({ node }) => {
        const locale = node.node_locale;
        const localePrefix = locale !== 'en' ? `/${locale}/` : `/`;
        const entryType = node.internal.type
          .replace('Contentful', '')
          .toLowerCase();
        const categorySlugIndex = categorySlugsArr.en.indexOf(entryType);
        const categorySlug = `${categorySlugsArr[locale][categorySlugIndex]}/`;
        const pageSlug = node.slug.trim();
        const slug = localePrefix + categorySlug + pageSlug;
        const { nextSibling, prevSibling } = createSiblings(
          locale,
          pageSlug,
          template
        );
        createPage({
          path: slug,
          component: path.resolve(`src/templates/${template}.js`),
          context: {
            locale,
            pageSlug,
            nextSibling,
            prevSibling,
          },
        });
      });
    });
  };
  generatePagesForCategories(technologies, 'TechnologiesItem');
  generatePagesForCategories(offer, 'OfferItem');
  generatePagesForCategories(portfolio, 'PortfolioItem');
};
