const buildWalls = (size) => {
  fill(255, 0, 0);
  stroke('#000');
  strokeWeight(1);

  for (let i = 0; i <= size - 10; i += 10) {
    rect(i, 0, 9, 9);
    rect(size - 10, i, 9, 9);
  }
  for (let i = size; i >= 0; i -= 10) {
    rect(i, size - 10, 9, 9);
    rect(0, i, 9, 9);
  }
};
