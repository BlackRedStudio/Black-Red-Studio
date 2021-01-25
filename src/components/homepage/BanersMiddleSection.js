import React from 'react';

import {
  BannersMiddleContainerS,
  BannersMiddleImageS,
  BannersMiddleTextWrapperS,
  BannersMiddleTextS,
} from '../../styles/BannersMiddleStyles';

const BanersMiddleSection = ({ text, baners }) => (
  <BannersMiddleContainerS>
    <div>
      <BannersMiddleImageS
        elWidth="820px"
        elHeight="500px"
        fluid={baners[0].localFile.childImageSharp.fluid}
      />
      <BannersMiddleImageS
        elWidth="820px"
        elHeight="350px"
        fluid={baners[1].localFile.childImageSharp.fluid}
      />
      <BannersMiddleTextWrapperS>
        <BannersMiddleTextS>{text}</BannersMiddleTextS>
      </BannersMiddleTextWrapperS>
    </div>
    <div>
      <BannersMiddleImageS
        elWidth="430px"
        elHeight="250px"
        fluid={baners[2].localFile.childImageSharp.fluid}
        hiddenMobile
      />
      <BannersMiddleImageS
        elWidth="430px"
        elHeight="600px"
        fluid={baners[3].localFile.childImageSharp.fluid}
        hiddenMobile
      />
    </div>
  </BannersMiddleContainerS>
);

export default BanersMiddleSection;
