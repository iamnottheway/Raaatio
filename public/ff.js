var NUM_PARTICLES = (ROWS = 100) * (COLS = 300),
  THICKNESS = Math.pow(80, 2),
  SPACING = 3,
  MARGIN = 100,
  COLOR = 220,
  DRAG = 0.95,
  EASE = 0.25,
  /*

used for sine approximation, but Math.sin in Chrome is still fast enough :)http://jsperf.com/math-sin-vs-sine-approximation

B = 4 / Math.PI,
C = -4 / Math.pow( Math.PI, 2 ),
P = 0.225,

*/

  container,
  particle,
  canvas,
  mouse,
  stats,
  list,
  ctx,
  tog,
  man,
  dx,
  dy,
  mx,
  my,
  d,
  t,
  f,
  a,
  b,
  i,
  n,
  w,
  h,
  p,
  s,
  r,
  c;

particle = {
  vx: 0,
  vy: 0,
  x: 0,
  y: 0,
};

function init() {
  container = document.getElementById("container");
  canvas = document.createElement("canvas");

  ctx = canvas.getContext("2d");
  man = false;
  tog = true;

  list = [];

  w = canvas.width = COLS * SPACING + MARGIN * 2;
  h = canvas.height = ROWS * SPACING + MARGIN * 2;

  container.style.marginLeft = Math.round(w * -0.5) + "px";
  container.style.marginTop = Math.round(h * -0.5) + "px";

  for (i = 0; i < NUM_PARTICLES; i++) {
    p = Object.create(particle);
    p.x = p.ox = MARGIN + SPACING * (i % COLS);
    p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS);

    list[i] = p;
  }
}

function step() {
  // you dont manipulate the pixels, you change the particle property
  // if ( !man ) {

  //   t = +new Date() * 0.001;
  //   mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
  //   my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
  // }

  // for ( i = 0; i < NUM_PARTICLES; i++ ) {

  //   p = list[i];

  //   d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
  //   f = -THICKNESS / d;

  //   if ( d < THICKNESS ) {
  //     t = Math.atan2( dy, dx );
  //     p.vx += f * Math.cos(t);
  //     p.vy += f * Math.sin(t);
  //   }

  //   p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
  //   p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;

  // }

  // creating an image inside the canvas with specified width and height
  b = (a = ctx.createImageData(w, h)).data;
  // b is a 1D array with pixel values. Each particle represents 1 of the rgba values.
  // index 0 starting with R, and 1 as G, 2 as B and 3 as A
  // the array can be divided into groups of 4 numbers representing a color

  // going thru each particle
  for (i = 0; i < NUM_PARTICLES; i++) {
    p = list[i];
    // now we need to find the position of the current particle in the 1D array
    // ~~ is an alternative to math.floor
    // finding the first color, ie is n, is a bit tricky
    //vthe rest of the code sets the rest of the pixels to a random color
    (b[(n = (~~p.x + ~~p.y * w) * 4)] =
      b[n + 1] =
      b[n + 2] =
        Math.random() * 255),
      (b[n + 3] = 255);
  }

  ctx.putImageData(a, 0, 0);
}

init();
step();
