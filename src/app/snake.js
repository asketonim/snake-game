class Snake {
  constructor(windowSize) {
    this.locations = [];
    this.xdir = 0;
    this.ydir = 0;
    this.score = 1;
    this.window = windowSize;
    this.size = 20;
    this.head = createVector(this.size, this.size);
    this.locations.push(this.head);
    this.food = createVector(200, 260);
    this.dead = false;
  }

  show() {
    fill('#f2ed6f');
    strokeWeight(1);
    stroke('#393e46');
    this.locations.forEach((block) => {
      rect(block.x, block.y, this.size, this.size);
    });
  }

  updateOnMove() {
    this.head.x += this.xdir * this.size;
    this.head.y += this.ydir * this.size;

    this.locations.unshift(createVector(this.head.x, this.head.y));
    this.locations.pop();
  }

  setDir(newX, newY) {
    this.xdir = newX;
    this.ydir = newY;
  }

  generateFood() {
    if (this.head.x === this.food.x && this.head.y === this.food.y) {
      do {
        this.food.x = Math
          .floor(random(this.size, this.window - this.size) / this.size) * this.size;
        this.food.y = Math
          .floor(random(this.size, this.window - this.size) / this.size) * this.size;
      } while (this.locations
        .forEach((location) => location.x === this.food.x && location.y === this.food.y));

      return true;
    }

    noStroke();
    fill('#ec185d');
    rect(this.food.x, this.food.y, this.size, this.size);
    return false;
  }

  grow() {
    this.locations.push(createVector(this.head.x, this.head.y));
    this.score++;
    document.getElementById('score-value').innerHTML = `${this.score}`;
  }

  getScore() {
    return this.score;
  }

  checkDeath() {
    if (this.head.x >= this.window - 2 * this.size + 1
        || this.head.x <= this.size - 1
        || this.head.y >= this.window - 2 * this.size + 1
        || this.head.y <= this.size - 1
    ) this.dead = true;

    this.locations.forEach((location, i) => {
      if (this.head.x === location.x && this.head.y === location.y && i) this.dead = true;
    });

    if (this.dead) {
      noLoop();
      strokeWeight(1);
      textSize(32);
      background(255);
      text('GAME OVER', 100, 200);
      textSize(24);
      text(`Score: ${this.score}`, 150, 250);
      textSize(16);
      text('Press \'SPACE\' to try again!', 100, 300);
    }
  }

  replay() {
    this.head = createVector(this.size, this.size);
    this.locations = [];
    this.locations.push(this.head);
    this.xdir = 0;
    this.ydir = 0;
    this.food = createVector(200, 260);
    this.score = 1;
    document.getElementById('score-value').innerHTML = '1';
    this.dead = false;
    loop();
  }
}
