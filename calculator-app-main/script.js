let main = document.querySelector("main");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");

// window.onload = function () {
//   setColorTheme();
// };

function setColorTheme() {
  // document.addEventListener("DOMContentLoaded", () => {
  //   input1.checked = true;
  // });

  input1.checked = true;

  if (input1.checked == true) {
    main.classList.add("dark");
    console.log("hello");
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
}

setColorTheme();
