const handleHeaderFixed = require('./src/utils/header-fixed.js').default;

exports.shouldUpdateScroll = ({ routerProps }) => {
  if (routerProps?.location?.state?.lang) {
    const wrapper = document.querySelector('.tl-wrapper');
    console.log('test');
    wrapper.scrollTo(0, routerProps.location.state.wrapperTopPosition);
  }
  return false;
};
exports.onRouteUpdate = () => {
  handleHeaderFixed();
};
exports.onInitialClientRender = () => {
  function scrollUp(wrapper) {
    wrapper.scrollTop -= 150;
  }

  function scrollDown(wrapper) {
    wrapper.scrollTop += 150;
  }

  window.addEventListener('keydown', e => {
    const wrapper = document.querySelector('.tl-wrapper');

    if (e.code === 'ArrowUp') {
      scrollUp(wrapper);
    } else if (e.code === 'ArrowDown') {
      scrollDown(wrapper);
    }
  });
};
