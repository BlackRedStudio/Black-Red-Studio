import React from 'react';

import {
  BanersMiddleContainerS,
  BanersMiddleWrapperS,
  BanersMiddleImageS,
  BanersMiddleTextWrapperS,
  BanersMiddleTextS,
} from '../../styles/BanersMiddleStyles';

const BanersMiddle = ({ text, baners }) => (
  <BanersMiddleContainerS>
    <BanersMiddleWrapperS>
      <BanersMiddleImageS
        elWidth="820px"
        elHeight="500px"
        fluid={baners[0].localFile.childImageSharp.fluid}
      />
      <BanersMiddleImageS
        elWidth="820px"
        elHeight="350px"
        fluid={baners[1].localFile.childImageSharp.fluid}
      />
      <BanersMiddleTextWrapperS>
        <BanersMiddleTextS>{text}</BanersMiddleTextS>
      </BanersMiddleTextWrapperS>
    </BanersMiddleWrapperS>
    <BanersMiddleWrapperS>
      <BanersMiddleImageS
        elWidth="430px"
        elHeight="250px"
        fluid={baners[2].localFile.childImageSharp.fluid}
        hiddenMobile
      />
      <BanersMiddleImageS
        elWidth="430px"
        elHeight="600px"
        fluid={baners[3].localFile.childImageSharp.fluid}
        hiddenMobile
      />
    </BanersMiddleWrapperS>
  </BanersMiddleContainerS>
);

export default BanersMiddle;
