const main = document.querySelector("main");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  reset.classList.add("open");
});

console.log(reset);

function setColorTheme() {
  document.addEventListener("DOMContentLoaded", () => {
    input1.checked = true;
  });

  if (input1.checked == true) {
    main.classList.add("dark");
  } else {
    input1.checked = false;
    main.classList.remove("dark");
  }
  if (input2.checked == true) {
    main.classList.add("light");
  } else {
    input2.checked = false;
    main.classList.remove("light");
  }
  if (input3.checked == true) {
    main.classList.add("saturated");
  } else {
    input3.checked = false;
    main.classList.remove("saturated");
  }

  console.log(input1);
  console.log(input2);
  console.log(input3);
}

console.log(main);

setColorTheme();

// function makeInputActive() {
//   input1.addEventListener("click", () => {
//     input1.classList.add("active");
//     input2.classList.remove("active");
//     input3.classList.remove("active");
//   });

//   input2.addEventListener("click", () => {
//     input2.classList.add("active");
//     input1.classList.remove("active");
//     input3.classList.remove("active");
//   });

//   input3.addEventListener("click", () => {
//     input3.classList.add("active");
//     input1.classList.remove("active");
//     input2.classList.remove("active");
//   });
// }
