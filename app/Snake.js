class Snake {

  constructor() {
    this.head = createVector(10, 10);
    this.locations = [];
    this.locations.push(this.head);
    this.xdir = 0;
    this.ydir = 0;
    
    this.score = 1;
    this.size = 10;
    this.food = createVector(200, 250);
  }

  show() {
    fill("#745c97");
    noStroke();
    this.locations.forEach(block => {
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
        this.food.x = Math.floor(random(0, 490) / 10) * 10;
        this.food.y = Math.floor(random(0, 490) / 10) * 10;
      } while (
        this.locations.forEach(location => location.x === this.food.x && location.y === this.food.y)
      )

      return true;
    }
    
    fill("#f5b0cb");
    rect(this.food.x, this.food.y, this.size, this.size);
    return false;
  }

  grow() {
    this.locations.push(createVector(this.head.x, this.head.y));
    this.score++;
  }

  getScore() {
    return this.score;
  }

  death() {
    let death = false;
    
    if ( (this.head.x >= 491 || this.head.x <= -1) && (this.ydir === 0) ||
         (this.head.y >= 491 || this.head.y <= -1) && (this.xdir === 0)
       ) {
      death = true;
    }
    
    this.locations.forEach((location, i) => {
      if (this.head.x === location.x && this.head.y === location.y && i) death = true;
    })
    
    if (death) {
      noLoop();
      textSize(32);
      background(255)
      text("GAME OVER", 100, 200);
      textSize(24);
      text(`Score: ${this.score}`, 150, 250);
      textSize(16);
      text('Press \'SPACE\' to try again!', 100, 300);
    }
  }
  
  replay() {
    this.head = createVector(10, 10);
    this.locations = [];
    this.locations.push(this.head);
    this.xdir = 0;
    this.ydir = 0;
    this.food = createVector(200, 250);
    this.score = 1;
    loop();
  }

}