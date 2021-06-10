const main = document.querySelector("main");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");

function setColorTheme() {
  if (input1.checked === true) {
    main.classList.add("dark");
  } else {
    main.classList.remove("dark");
    input1.checked = false;
  }
  if (input2.checked === true) {
    main.classList.add("light");
  } else {
    main.classList.remove("light");
    input2.checked = false;
  }
  if (input3.checked === true) {
    main.classList.add("saturated");
  } else {
    main.classList.remove("saturated");
    input3.checked = false;
  }

  document.addEventListener("DOMContentLoaded", () => {
    input1.checked = true;
  });

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
