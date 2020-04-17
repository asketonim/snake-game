let snake;
const windowSize = 600;

function setup() {
  const snakeField = createCanvas(windowSize - 1, windowSize - 1);
  snake = new Snake(windowSize);
  frameRate(10);
}

function draw() {
  background('#745c97');
  buildWalls(windowSize, 20);
  if (snake.generateFood()) snake.grow();
  snake.updateOnMove();
  snake.show();
  snake.checkDeath();
}
