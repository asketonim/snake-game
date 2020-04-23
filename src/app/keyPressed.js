function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      if (snake.getDir().y !== 1) snake.setDir(0, -1);
      break;
    case DOWN_ARROW:
      if (snake.getDir().y !== -1) snake.setDir(0, 1);
      break;
    case LEFT_ARROW:
      if (snake.getDir().x !== 1) snake.setDir(-1, 0);
      break;
    case RIGHT_ARROW:
      if (snake.getDir().x !== -1) snake.setDir(1, 0);
      break;
    case 32:
      if (snake.dead) snake.replay();
      break;
    default:
  }
  return false;
}
