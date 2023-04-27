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
var canvas = document.getElementById("particlesBackground");
// console.log(canvas);
// *Canvas settlement
var width = window.innerWidth;
var height = window.innerHeight;

var c = canvas.getContext("2D");

var colors = ["#A020F0", "#5CACEE", "#0FDDAF", "#006888"];

// *
canvas.width = width;
canvas.height = height;
