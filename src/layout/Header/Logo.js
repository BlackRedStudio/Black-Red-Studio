import React, { useContext, useEffect, useRef } from 'react';
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

  const logoRefs = useRef([]);

  useEffect(() => {
    const locationPath = window.location.pathname;
    const site =
      locationPath === '/' || locationPath === '/pl/' ? 'homepage' : 'default';

    if (site === 'homepage') {
      logoRefs.current[1].classList.add('hidden');
      logoRefs.current[0].classList.remove('hidden');
    }
    if (site === 'default') {
      logoRefs.current[0].classList.add('hidden');
      logoRefs.current[1].classList.remove('hidden');
    }
  });

  const homepageUrl = currentLang === 'en' ? '/' : '/pl';

  return (
    <LogoContainerS>
      <h1>
        <LogoLinkS to={homepageUrl} paintDrip hex="#fc3031">
          {data.allContentfulAsset.edges.map(
            ({ node: { contentful_id, title, file } }) => (
              <LogoS
                key={contentful_id}
                src={file.url}
                logoTitle={title}
                alt={title}
                ref={el => logoRefs.current.push(el)}
              />
            )
          )}
        </LogoLinkS>
      </h1>
    </LogoContainerS>
  );
};

export default Logo;
