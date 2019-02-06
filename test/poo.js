const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function draw() {
  ctx.fillStyle = "#BADA55";
  ctx.fillRect(100, 100, 50, 50);
};

function drawCircle() {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(40, 40, 25, 0, Math.PI * 2, false);
  ctx.fill();
}

class Block {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
  draw() {
    ctx.fillStyle = "#BADA55";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

const block = new Block(50, 50, 25);
