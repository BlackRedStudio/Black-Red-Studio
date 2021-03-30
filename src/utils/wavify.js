// Copyright (c) 2021 by Mikołaj Stolarski (https://codepen.io/grimor/pen/qbXLdN)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
const container = document.body;
const height = container.offsetHeight;
let width = container.offsetWidth;

window.addEventListener('resize', () => {
  width = container.offsetWidth;
});

const calculateWavePoints = (factor, options) => {
  const waveWidth = container.offsetWidth;
  const waveHeight = options?.waveHeight || 200;
  const waveDelta = options?.waveDelta || 100;
  const speed = options?.speed || 0.15;
  const wavePoints = options?.wavePoints || 3;

  const points = [];

  for (let i = 0; i <= wavePoints; i++) {
    const x = (i / wavePoints) * waveWidth;
    const sinSeed = (factor + (i + (i % wavePoints))) * speed * 100;
    const sinHeight = Math.sin(sinSeed / 100) * waveDelta;
    const yPos = Math.sin(sinSeed / 100) * sinHeight + waveHeight;
    points.push({ x, y: yPos });
  }

  return points;
};

const buildPath = points => {
  let SVGString = `M ${points[0].x} ${points[0].y}`;

  const cp0 = {
    x: (points[1].x - points[0].x) / 2,
    y: points[1].y - points[0].y + points[0].y + (points[1].y - points[0].y),
  };

  SVGString += ` C ${cp0.x} ${cp0.y} ${cp0.x} ${cp0.y} ${points[1].x} ${points[1].y}`;

  let prevCp = cp0;
  let inverted = -1;

  for (let i = 1; i < points.length - 1; i++) {
    const cp1 = {
      x: points[i].x - prevCp.x + points[i].x,
      y: points[i].y - prevCp.y + points[i].y,
    };

    SVGString += ` C ${cp1.x} ${cp1.y} ${cp1.x} ${cp1.y} ${points[i + 1].x} ${
      points[i + 1].y
    }`;
    prevCp = cp1;
    inverted = -inverted;
  }

  SVGString += ` L ${width} ${height}`;
  SVGString += ` L 0 ${height} Z`;
  return SVGString;
};

let lastUpdate;
let totalTime = 0;

const wavify = (wave, options) => {
  const now = window.Date.now();

  if (lastUpdate) {
    const elapsed = (now - lastUpdate) / 1000;
    lastUpdate = now;

    totalTime += elapsed;

    const factor = totalTime * Math.PI;
    wave.setAttribute('d', buildPath(calculateWavePoints(factor, options)));
  } else {
    lastUpdate = now;
  }

  window.requestAnimationFrame(() => wavify(wave, options));
};

export default wavify;
