const buildWalls = (size, blockSize) => {
  stroke('#ff9171');
  strokeWeight(2);

  for (let i = 0; i <= size - blockSize; i += blockSize) {
    rect(i, 0, blockSize - 1, blockSize - 1);
    rect(size - blockSize, i, blockSize - 1, blockSize - 1);
  }
  for (let i = size; i >= 0; i -= blockSize) {
    rect(i, size - blockSize, blockSize - 1, blockSize - 1);
    rect(0, i, blockSize - 1, blockSize - 1);
  }
};
