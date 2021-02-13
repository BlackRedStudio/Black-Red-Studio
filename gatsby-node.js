const path = require('path');
const remark = require('remark');
const guide = require('remark-preset-lint-markdown-style-guide');
const html = require('remark-html');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const dataToConvert = node.description || node.process;
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
        const slug = localePrefix + categorySlug + node.slug.trim();
        createPage({
          path: slug,
          component: path.resolve(`src/templates/${template}.js`),
          context: {
            locale,
          },
        });
      });
    });
  };
  generatePagesForCategories(technologies, 'TechnologiesItem');
  generatePagesForCategories(offer, 'OfferItem');
  generatePagesForCategories(portfolio, 'PortfolioItem');
};
