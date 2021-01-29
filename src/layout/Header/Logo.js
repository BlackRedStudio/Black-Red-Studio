import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LogoContainerS, LogoS } from '../../styles/LogoStyles';

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulAsset(
        filter: { title: { glob: "logo-blackred*" }, node_locale: { eq: "en" } }
      ) {
        edges {
          node {
            contentful_id
            title
            file {
              url
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      <h1>
        <LogoContainerS to="/">
          {data.allContentfulAsset.edges.map(
            ({ node: { contentful_id, title, file } }) => (
              <LogoS
                key={contentful_id}
                src={file.url}
                logoTitle={title}
                alt={title}
              />
            )
          )}
        </LogoContainerS>
      </h1>
    </div>
  );
};

export default Logo;
