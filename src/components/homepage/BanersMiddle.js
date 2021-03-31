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
        data-sal="zoom-in"
        data-sal-duration="1200"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      />
      <BanersMiddleImageS
        elWidth="820px"
        elHeight="350px"
        fluid={baners[1].localFile.childImageSharp.fluid}
        data-sal="zoom-in"
        data-sal-duration="1200"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      />
      <BanersMiddleTextWrapperS
        data-sal="zoom-in"
        data-sal-duration="1000"
        data-sal-delay="500"
        data-sal-easing="ease-out-bounce"
      >
        <BanersMiddleTextS>{text}</BanersMiddleTextS>
      </BanersMiddleTextWrapperS>
    </BanersMiddleWrapperS>
    <BanersMiddleWrapperS>
      <BanersMiddleImageS
        elWidth="430px"
        elHeight="250px"
        fluid={baners[2].localFile.childImageSharp.fluid}
        hiddenMobile
        data-sal="zoom-in"
        data-sal-duration="1200"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      />
      <BanersMiddleImageS
        elWidth="430px"
        elHeight="600px"
        fluid={baners[3].localFile.childImageSharp.fluid}
        hiddenMobile
        data-sal="zoom-in"
        data-sal-duration="1200"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      />
    </BanersMiddleWrapperS>
  </BanersMiddleContainerS>
);

export default BanersMiddle;
