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
      <div
        data-sal="zoom-in"
        data-sal-duration="1200"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      >
        <BanersMiddleImageS
          $elWidth="820px"
          $elHeight="500px"
          image={baners[0].localFile.childImageSharp.gatsbyImageData}
          alt=""
        />
      </div>

      <div
        data-sal="zoom-in"
        data-sal-duration="1200"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      >
        <BanersMiddleImageS
          $elWidth="820px"
          $elHeight="350px"
          image={baners[1].localFile.childImageSharp.gatsbyImageData}
          alt=""
        />
      </div>

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
      <div
        data-sal="zoom-in"
        data-sal-duration="1200"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      >
        <BanersMiddleImageS
          $elWidth="430px"
          $elHeight="250px"
          image={baners[2].localFile.childImageSharp.gatsbyImageData}
          alt=""
          $hiddenMobile
        />
      </div>
      <div
        data-sal="zoom-in"
        data-sal-duration="1200"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      >
        <BanersMiddleImageS
          $elWidth="430px"
          $elHeight="600px"
          image={baners[3].localFile.childImageSharp.gatsbyImageData}
          alt=""
          $hiddenMobile
        />
      </div>
    </BanersMiddleWrapperS>
  </BanersMiddleContainerS>
);

export default BanersMiddle;
