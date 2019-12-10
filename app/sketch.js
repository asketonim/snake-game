let snake;
const windowSize = {
  x: 400,
  y: 400
}

function setup() {
  const snakeField = createCanvas(windowSize.x, windowSize.y);
  snake = new Snake();
  frameRate(10);

  // create
}

function draw() {
  background("#39375b");
  buildWalls(windowSize.x);
  if (snake.generateFood()) snake.grow();
  snake.updateOnMove();
  snake.show();
  snake.death();
}
