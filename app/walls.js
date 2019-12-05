const buildWalls = () => {
   
    fill(255,0,0);
    stroke('#000')
    strokeWeight(1);
    let block = createVector(0, 0);

    // for (let i = 0; i <= 199; i++) {
    //     if (i <= 49) block.x += 10;
    //     if (i <= 99 && i >= 50) block.y += 10;
    //     if (i <= 149 && i >= 100) block.x -= 10;
    //     if (i <= 199 && i >= 150) block.y -= 10;
    //     rect(block.x, block.y, 10, 10)
    //     // console.log(block.location)
    // }
    for (let i = 0; i <= 490; i += 10)
        rect(i, 0, 10, 10)
    for (let i = 0; i <= 490; i += 10)
        rect(490, i, 10, 10)
    for (let i = 500; i >= 0; i -= 10)
        rect(i, 490, 10, 10)
    for (let i = 500; i >= 0; i -= 10)
        rect(0, i, 10, 10)
}