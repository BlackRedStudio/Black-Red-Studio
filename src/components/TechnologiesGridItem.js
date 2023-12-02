import React from 'react';

import PaintDrip from '../utils/paint-drip-transition';
import {
  TechnologiesItemImageS,
  TechnologiesItemS,
} from '../styles/TechnologiesGridStyles';

const TechnologiesGridItem = ({ extraUrl, slug, phrase, title, url }) => {
  return (
    <TechnologiesItemS
      data-sal={phrase === null && `zoom-in`}
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease-out-bounce"
    >
      <PaintDrip to={extraUrl + slug} paintDrip hex="#fc3031">
        <TechnologiesItemImageS src={url} alt={title} />
      </PaintDrip>
    </TechnologiesItemS>
  );
};

export default TechnologiesGridItem;
