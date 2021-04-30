const handleHeaderFixed = require('./src/utils/header-fixed.js').default;

exports.shouldUpdateScroll = ({ routerProps }) => {
  if (routerProps?.location?.state?.lang) {
    const wrapper = document.querySelector('.tl-wrapper');
    wrapper.scrollTo(0, routerProps.location.state.wrapperTopPosition);
  }
  return false;
};
exports.onRouteUpdate = () => {
  handleHeaderFixed();
};
