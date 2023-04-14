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
