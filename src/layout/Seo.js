import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import LangContext from '../contexts/LangContext';

function SEO({ description, meta, title }) {
  const currentLang = useContext(LangContext);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title {
              pl
              en
            }
            description {
              pl
              en
            }
            author
          }
        }
      }
    `
  );

  const metaDescription =
    description || site.siteMetadata.description[currentLang];
  const defaultTitle = site.siteMetadata?.title[currentLang];

  return (
    <Helmet
      htmlAttributes={{
        currentLang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  meta: [],
  description: ``,
};

export default SEO;
