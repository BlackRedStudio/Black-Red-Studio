import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LogoLinkContainer, LogoContainer } from '../../styles/LogoStyles';

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulAsset(filter: { title: { glob: "logo-blackred*" } }) {
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
        <LogoLinkContainer to="/">
          {data.allContentfulAsset.edges.map(
            ({ node: { contentful_id, title, file } }) => (
              <LogoContainer
                key={contentful_id}
                src={file.url}
                logoTitle={title}
                alt={title}
              />
            )
          )}
        </LogoLinkContainer>
      </h1>
    </div>
  );
};

export default Logo;
