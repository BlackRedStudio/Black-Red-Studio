const path = require('path');
const remark = require('remark');
const guide = require('remark-preset-lint-markdown-style-guide');
const html = require('remark-html');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (
    node.internal.mediaType === `text/markdown` &&
    node.description !== undefined
  ) {
    remark()
      .use(guide)
      .use(html)
      .process(node.description, (err, file) => {
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
};
