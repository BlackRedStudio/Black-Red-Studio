const interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

Object.defineProperty(exports, '__esModule', {
  value: true,
});

exports.default = undefined;

const extends2 = interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);

const react = interopRequireWildcard(require('react'));

const aniLink = interopRequireDefault(
  require('gatsby-plugin-transition-link/AniLink')
);

const gsap = interopRequireDefault(require('gsap'));

const colorConvert = interopRequireDefault(require('color-convert'));

const handleHeaderFixed = require('./header-fixed').default;

class PaintDrip extends react.Component {
  constructor(props) {
    super(props);

    this.createRipple = ({ length }, event, hex, color, node) => {
      const { body } = document;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const piTwo = Math.PI * 2;
      let rgb = hex ? colorConvert.default.hex.rgb(hex).join(',') : '0,0,255';
      rgb = color ? colorConvert.default.keyword.rgb(color) : rgb;
      canvas.style.zIndex = 10000;
      canvas.style.top = 0;
      canvas.style.position = 'fixed';
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      let vw = canvas.width;
      let vh = canvas.height;
      body.appendChild(canvas); // Event coords

      const x = event.clientX;
      const y = event.clientY; // Delta - difference between event and farthest corner

      const dx = x < vw / 2 ? vw - x : x;
      const dy = y < vh / 2 ? vh - y : y;
      const radius = Math.sqrt(dx * dx + dy * dy);
      const ripple = {
        alpha: 0,
        radius: 0,
        x,
        y,
      };
      const seconds = length;

      function drawRipple() {
        ctx.clearRect(0, 0, vw, vh);
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, piTwo, false);
        const fillStyle = `rgba(${rgb},${ripple.alpha})`;
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }

      function removeCanvas(wait = 0) {
        setTimeout(() => {
          body.removeChild(canvas);
        }, wait);
      }

      function onResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        vw = canvas.width;
        vh = canvas.height;
      }

      window.addEventListener('resize', onResize);

      gsap.default
        .timeline({
          onUpdate: drawRipple,
          onComplete: () => removeCanvas(seconds / 3),
        })
        .to(ripple, {
          alpha: 1,
          duration: seconds / 4,
        })
        .to(
          ripple,
          {
            radius,
            ease: 'power1.easeIn',
            duration: seconds - seconds / 3,
          },
          0
        )
        .set(node, {
          visibility: 'hidden',
        })
        .to(
          canvas,
          {
            x: '100%',
            ease: 'power1.easeIn',
            duration: seconds / 3,
          },
          `+=${seconds * 0.4}`
        )
        .then(() => {
          handleHeaderFixed();
        });
    };

    this.getDirection = from => {
      switch (from) {
        case 'left':
          return {
            xPercent: -5,
          };

        case 'right':
          return {
            xPercent: 5,
          };

        case 'top':
          return {
            yPercent: -5,
          };

        case 'bottom':
          return {
            yPercent: 5,
          };

        default:
          return {};
      }
    };

    this.slideIn = ({ length }, node, from) => {
      gsap.default
        .timeline()
        .from(node, length, {
          ...this.getDirection(from),
          ease: 'power1.easeOut',
        })
        .set(node, { clearProps: 'transform' });
    };

    this.onResize = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.vw = this.canvas.width;
      this.vh = this.canvas.height;
    };

    this.createRipple = this.createRipple.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    const {
      exit: removedExit,
      entry: removedEntry,
      paintDrip: removedProp,
      duration,
      direction = 'left',
      ...props
    } = this.props;
    const aniLength = duration || 1;
    const aniDelay = aniLength / 1.75;
    return react.default.createElement(
      react.default.Fragment,
      null,
      react.default.createElement(
        aniLink.default,
        (0, extends2.default)(
          {
            exit: {
              length: aniLength,
              trigger: ({ exit, e, node }) =>
                this.createRipple(exit, e, props.hex, props.color, node),
            },
            entry: {
              delay: aniDelay,
              length: aniLength,
              trigger: ({ entry, node }) =>
                this.slideIn(entry, node, direction),
            },
          },
          props,
          {
            __self: this,
          }
        ),
        props.children
      )
    );
  }
}

exports.default = PaintDrip;
