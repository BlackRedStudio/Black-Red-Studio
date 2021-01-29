exports.shouldUpdateScroll = ({ routerProps, getSavedScrollPosition }) => {
  if (routerProps.location.state.lang) return false;
  return getSavedScrollPosition(routerProps.location);
};
