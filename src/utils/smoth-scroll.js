const smoothVerticalScrolling = (distance, time) => {
  const wrapper = document.querySelector('.tl-wrapper');
  const amplitude = (distance - wrapper.scrollTop) / 100;
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(() => wrapper.scrollBy(0, amplitude), curTime);
    curTime += time / 100;
  }
};

export default smoothVerticalScrolling;
