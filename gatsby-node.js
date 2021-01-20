const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulMenuPosition {
        group(field: node_locale) {
          edges {
            node {
              link
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
        path: localePrefix + node.link.trim(),
        component: path.resolve(`src/templates/${node.template}.js`),
        context: {
          locale,
        },
      });
    });
  });
};
