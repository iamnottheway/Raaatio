importScripts("/static/perlin.js");

let mainCanvas = null;
self.addEventListener("message", (event) => {
  if (event.data.canvas) {
    mainCanvas = event.data.canvas;
  }
  if (event.data.type === "run_canvas") {
    gridNoise(event.data.animData);
  }
});

function gridNoise(animationData) {
  var dotMargin = 0;
  let dotDiameter = 1;
  let dotRadius = dotDiameter / 2;
  let xMargin = 4;
  let distortion = 10;
  var numRows = 100;
  var numCols = 100;

  const ctx = mainCanvas.getContext("2d");

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let x = j * (dotDiameter + xMargin) + dotMargin + xMargin / 2 + dotRadius;
      let y = i * (dotDiameter + xMargin) + dotMargin + xMargin / 2 + dotRadius;

      // let hue = 150 * noise.perlin2(x / 200, y / 200);
      // let sat = 100;

      let noisex = noise.perlin2(x / animationData.n1, y / animationData.n2);
      let noisey = noise.perlin2(x / animationData.n2, y / animationData.n1);

      let x2 = x + distortion * noisex;
      let y2 = y + distortion * noisey;

      let c = "black"; //`hsl(${hue},${sat}%,50%)`;
      ctx.fillStyle = c;
      ctx.fillRect(x2, y2, 1, 1);
    }
  }
}
