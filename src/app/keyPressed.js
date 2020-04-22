function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      snake.setDir(0, -1);
      break;
    case DOWN_ARROW:
      snake.setDir(0, 1);
      break;
    case LEFT_ARROW:
      snake.setDir(-1, 0);
      break;
    case RIGHT_ARROW:
      snake.setDir(1, 0);
      break;
    case 32:
      if (snake.dead) snake.replay();
      break;
    default:
  }
  return false;
}
