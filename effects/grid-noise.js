const hex2rgba = (hex, a = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return { r, g, b, a };
};

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function gridNoise(animationData, canvas) {
  let NUM_PARTICLES;
  let THICKNESS = Math.pow(300, 2);
  let SPACING = 4;
  let MARGIN = 100;
  let COLOR = 220;
  let DRAG = 0.95;
  let EASE = 0.25;
  let ROWS, COLS;
  let dx, dy, mx, my, d, t, f, a, b, i, n, w, h, p, s, r, c;

  let distortion = animationData.distortion;
  MARGIN = 0;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let list = [];

  let exportSize = 1;

  w = canvas.width = animationData.cWidth * exportSize;
  h = canvas.height = animationData.cHeight * exportSize;

  if (w <= 0) {
    w = 1;
  }

  if (h <= 0) {
    h = 1;
  }

  let columns = w / (MARGIN * 2 + SPACING);
  let rows = h / (MARGIN * 2 + SPACING);

  NUM_PARTICLES = (ROWS = rows) * (COLS = columns);

  let particle = {
    vx: 0,
    vy: 0,
    x: 0,
    y: 0,
  };

  for (i = 0; i < NUM_PARTICLES; i++) {
    p = Object.create(particle);
    p.x = p.ox = MARGIN + SPACING * (i % COLS);
    p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS);

    list[i] = p;
  }

  function renderParticles() {
    b = (a = ctx.createImageData(w, h)).data;
    const background = hex2rgba(animationData.backgroundColor);
    const fillColor = hex2rgba(animationData.color);

    for (let i = 0; i < b.length; i += 4) {
      // Modify pixel data
      // b[i + 0] = randomInteger(0, 255); // R value
      // b[i + 1] = randomInteger(0, 255); // G value
      // b[i + 2] = randomInteger(0, 255); // B value
      // b[i + 3] = 255; // A value
      if (animationData.bgEnabled) {
        b[i + 0] = background.r; // R value
        b[i + 1] = background.g; // G value
        b[i + 2] = background.b; // B value
        b[i + 3] = 255; // A value
      } else {
        b[i + 3] = 0; // A value
      }
    }

    for (i = 0; i < NUM_PARTICLES; i++) {
      p = list[i];

      b[(n = (~~p.x + ~~p.y * w) * 4)] = fillColor.r;
      b[n + 1] = fillColor.g;
      b[n + 2] = fillColor.b;
      b[n + 3] = 255;
    }

    ctx.putImageData(a, 0, 0);
  }

  t = +new Date() * 0.001;
  mx = w * 0.5 + Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45;
  my = h * 0.5 + Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45;

  for (i = 0; i < NUM_PARTICLES; i++) {
    p = list[i];

    d = (dx = mx - p.x) * dx + (dy = my - p.y) * dy;
    f = -THICKNESS / d;

    if (d < THICKNESS) {
      t = Math.atan2(dy, dx);
      p.vx += f * Math.cos(t);
      p.vy += f * Math.sin(t);
    }

    let noisex = noise.perlin2(p.x / animationData.n1, p.y / animationData.n2);
    let noisey = noise.perlin2(p.x / animationData.n2, p.y / animationData.n1);

    p.x = p.x + distortion * noisex;
    p.y = p.y + distortion * noisey;
  }

  renderParticles();
}

export default gridNoise;
