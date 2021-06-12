function setColorTheme() {
  let main = document.getElementById("main");
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let input3 = document.getElementById("input3");

  input1.checked = true;

  if (input1.checked == true) {
    main.classList.add("dark");
    console.log("hello");
  } else {
    main.classList.remove("dark");
  }
  if (input2.checked == true) {
    main.classList.add("light");
    console.log("hello2");
  } else {
    main.classList.remove("light");
  }
  if (input3.checked == true) {
    main.classList.add("saturated");
    console.log("hello3");
  } else {
    main.classList.remove("saturated");
  }

  console.log(main);
  console.log(input1);
}

setColorTheme();
