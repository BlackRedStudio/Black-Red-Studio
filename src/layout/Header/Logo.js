import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LogoContainerS, LogoLinkS, LogoS } from '../../styles/HeaderStyles';

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

  let site = 'default';
  site =
    window.location.pathname === '/' || window.location.pathname === '/pl/'
      ? 'homepage'
      : 'default';
  return (
    <LogoContainerS>
      <h1>
        <LogoLinkS to="/">
          {data.allContentfulAsset.edges.map(
            ({ node: { contentful_id, title, file } }) => {
              if (site === 'homepage' && title === 'logo-blackred-white-alt')
                return false;
              if (site === 'default' && title === 'logo-blackred-white')
                return false;
              return (
                <LogoS
                  key={contentful_id}
                  src={file.url}
                  logoTitle={title}
                  alt={title}
                />
              );
            }
          )}
        </LogoLinkS>
      </h1>
    </LogoContainerS>
  );
};

export default Logo;
