const smoothVerticalScrolling = (distance, time) => {
  const top = distance;
  const amplitude = top / 200;
  let curTime = 0;
  while (curTime <= time) {
    window.setTimeout(() => window.scrollBy(0, amplitude), curTime);
    curTime += time / 100;
  }
};

export default smoothVerticalScrolling;
