import { useEffect } from 'react';
// elRef if defined prevent autoplay on hover
const sliderAutoplayHook = (emblaApi, elRef = false, delay = 4000) => {
  useEffect(() => {
    if (emblaApi) {
      let banerAutoplay = 0;
      let bannerStop = false;

      const stop = () => {
        window.clearTimeout(banerAutoplay);
        banerAutoplay = 0;
      };

      const play = () => {
        stop();
        window.requestAnimationFrame(() => {
          banerAutoplay = window.setTimeout(() => {
            if (!bannerStop) {
              emblaApi.scrollNext();
              play();
            }
          }, delay);
        });
      };

      play();
      emblaApi.on('select', () => play());

      if (elRef.current) {
        let mouseOutTimer = null;
        elRef.current.addEventListener('mouseover', () => {
          window.clearTimeout(mouseOutTimer);
          bannerStop = true;
          stop();
        });
        elRef.current.addEventListener('mouseout', () => {
          // prevent too many mouseouts
          mouseOutTimer = window.setTimeout(() => {
            bannerStop = false;
            play();
          }, 100);
        });
      }
    }
  }, [emblaApi]);
};

export default sliderAutoplayHook;
