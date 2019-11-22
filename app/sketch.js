let snake;

function setup() {
  createCanvas(400, 500);
  snake = new Snake();
  frameRate(10);
}

function draw() {
  background(220);
  line(0, 100, 400, 100);

  if (snake.generateFood()) snake.grow();
  snake.updateOnMove();
  snake.show();
  snake.death();

}
