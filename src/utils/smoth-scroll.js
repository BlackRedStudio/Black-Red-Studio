const smoothVerticalScrolling = (distance, time) => {
  const amplitude = (distance - window.scrollY) / 100;
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(() => window.scrollBy(0, amplitude), curTime);
    curTime += time / 100;
  }
};

export default smoothVerticalScrolling;
