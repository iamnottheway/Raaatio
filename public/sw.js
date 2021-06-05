importScripts("/static/perlin.js");

let mainCanvas = null;
let downloadData = "";
self.addEventListener("message", (event) => {
  if (event.data.canvas) {
    mainCanvas = event.data.canvas;
  }
  if (event.data.type === "run_canvas") {
    gridNoise(event.data.animData);
  }

  if (event.data.type === "download") {
    console.log(downloadData);
  }
});

function gridNoise(animationData) {
  let dotMargin = 0;
  let dotDiameter = 1;
  let dotRadius = dotDiameter / 2;
  let xMargin = animationData.xMargin;
  let distortion = animationData.distortion;
  var numRows = 300;
  var numCols = 300;
  let outsideMargin = animationData.outsideMargin;

  const ctx = mainCanvas.getContext("2d");
  ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  if (animationData.bgEnabled) {
    ctx.fillStyle = animationData.backgroundColor;
    ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
  }

  let c = animationData.color; //"#fff"; //`hsl(${hue},${sat}%,50%)`;
  ctx.fillStyle = c;

  let p = new Path2D();

  if (animationData.shouldRecalculate) {
    for (let x = 0; x <= 1; x++) {
      distortion = Math.random() * 500;
      // let n1 = Math.random() * 100;
      // let n2 = Math.random() * 100;
      for (let i = outsideMargin; i < numRows - outsideMargin; i++) {
        for (let j = outsideMargin; j < numCols - outsideMargin; j++) {
          let x =
            j * (dotDiameter + xMargin) + dotMargin + xMargin / 2 + dotRadius;
          let y =
            i * (dotDiameter + xMargin) + dotMargin + xMargin / 2 + dotRadius;

          let noisex = noise.perlin2(
            x / animationData.n1,
            y / animationData.n2
          );
          let noisey = noise.perlin2(
            x / animationData.n2,
            y / animationData.n1
          );

          let x2 = x + distortion * noisex;
          let y2 = y + distortion * noisey;

          p.rect(x2, y2, 1, 1);
        }
      }
    }
  }

  ctx.fill(p);

  mainCanvas.convertToBlob({ quality: 1 }).then(function (blob) {
    downloadData = blob;
  });
}
