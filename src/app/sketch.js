let snake;
const windowSize = 600;

function setup() {
  const snakeField = createCanvas(windowSize - 1, windowSize - 1);
  snake = new Snake(windowSize);
  frameRate(8);
}

function draw() {
  background('#a3f7bf');
  buildWalls(windowSize, 20);
  if (snake.generateFood()) snake.grow();
  snake.updateOnMove();
  snake.show();
  snake.checkDeath();
}
