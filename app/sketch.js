let snake;

function setup() {
  createCanvas(400, 400);
  snake = new Snake();
  frameRate(10);
}

function draw() {
  background(220);
  if (snake.generateFood()) snake.grow();
  snake.updateOnMove();
  snake.show();
  snake.death();

}