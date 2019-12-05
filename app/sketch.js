let snake;

function setup() {
  const snakeField = createCanvas(500, 500);
  snake = new Snake();
  frameRate(10);
}

function draw() {
  background("#39375b");
  buildWalls();
  if (snake.generateFood()) snake.grow();
  snake.updateOnMove();
  snake.show();
  snake.death();
}
