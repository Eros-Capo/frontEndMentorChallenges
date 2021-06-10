const main = document.querySelector("main");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");

function makeInputActive() {
  input1.addEventListener("click", () => {
    input1.classList.add("active");
    input2.classList.remove("active");
    input3.classList.remove("active");
  });

  input2.addEventListener("click", () => {
    input2.classList.add("active");
    input1.classList.remove("active");
    input3.classList.remove("active");
  });

  input3.addEventListener("click", () => {
    input3.classList.add("active");
    input1.classList.remove("active");
    input2.classList.remove("active");
  });

  document.addEventListener("DOMContentLoaded", () => {
    input1.classList.add("active");
  });
}

function setColorTheme() {
  if (input1.classList.contains("active")) {
    main.classList.add("dark");
  } else {
    main.classList.remove("dark");
  }
  if (input2.classList.contains("active")) {
    main.classList.add("light");
  } else {
    main.classList.remove("light");
  }
  if (input3.classList.contains("saturated")) {
    main.classList.add("saturated");
  } else {
    main.classList.remove("saturated");
  }
  console.log(input1);
  console.log(input2);
  console.log(input3);
}

console.log(main);

setColorTheme();
makeInputActive();
