// console.log("test");
const weekDate = document.getElementById("choose_week");

weekDate.addEventListener("change", (e) => {
  console.log(e.target.value);
  //   input type = week
  //   return = 2023-W16
});

// *---------------------------------------------------------
const colorPicker = document.getElementById("choose_col");

colorPicker.addEventListener("change", (e) => {
  console.log(e.target.value);
  //   input type = color
  // return = #983a3a
});
// *---------------------------------------------------
// !----------------------------------------------
// * Canvas
let canvas = document.getElementById("particlesBackground");
// console.log(canvas);
// *Canvas settlement
let width = window.innerWidth - 5;
let height = window.innerHeight - 5;

canvas.width = width;
canvas.height = height;

let ctx = canvas.getContext("2d");

// console.log(ctx);

let colors = ["#A020F0", "#5CACEE", "#0FDDAF", "#00688B"];

// *

function Circle(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.radius = r;
  this.startX = x - 15;
  this.endX = x + 15;
  this.startY = y - 15;
  this.endY = y + 15;
  this.dx = Math.random() - 0.5;
  this.dy = Math.random() - 0.5;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
  };

  this.update = function () {
    if (
      this.x > this.endX ||
      this.y > this.endY ||
      this.x < this.startX ||
      this.y < this.startY
    ) {
      this.dx = -this.dx;
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

let circlesArray = [];

for (let i = 0; i < 150; i++) {
  let x = Math.random() * width;
  let y = Math.random() * height;
  let r = Math.random() * 10;
  let index = Math.floor(Math.random() * colors.length);

  let circle = new Circle(x, y, r, colors[index]);

  circlesArray.push(circle);
}

console.log(circlesArray);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let circle of circlesArray) {
    circle.update();
  }
}
animate();
