import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LangContext from '../../contexts/LangContext';
import { LogoContainerS, LogoLinkS, LogoS } from '../../styles/HeaderStyles';

const Logo = () => {
  const currentLang = useContext(LangContext);
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

  const homepageUrl = currentLang === 'en' ? '/' : '/pl';

  const locationPath =
    typeof window !== 'undefined' ? window.location.pathname : null;
  const site =
    locationPath === '/' || locationPath === '/pl/' ? 'homepage' : 'default';
  return (
    <LogoContainerS>
      <h1>
        <LogoLinkS to={homepageUrl} paintDrip hex="#fc3031">
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
