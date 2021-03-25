const checkScrollPosition = (body, header) => {
  if (body.scrollTop > 150) header[0].classList.add('scrolled');
  else header[0].classList.remove('scrolled');
};

exports.shouldUpdateScroll = ({ routerProps }) => {
  if (routerProps?.location?.state?.lang) {
    const wrapper = document.querySelector('.tl-wrapper');
    wrapper.scrollTo(0, routerProps.location.state.wrapperTopPosition);
  }
  return false;
};
exports.onRouteUpdate = () => {
  document.querySelector('header').classList.remove('scrolled');
  const body = document.querySelector('.tl-wrapper');
  const header = document.getElementsByTagName('header');
  checkScrollPosition(body, header);
  body.addEventListener('scroll', () => {
    checkScrollPosition(body, header);
  });
};
// exports.shouldUpdateScroll = ({ routerProps, getSavedScrollPosition }) => {
//   if (routerProps?.location?.state?.lang) return false;
//   return getSavedScrollPosition(routerProps.location);
// };
