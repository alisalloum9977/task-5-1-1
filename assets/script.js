/* start */

const innerContainer = document.querySelector(".inner-container");

const buttons = document.querySelectorAll("button");

const char = ["%", "*", "/", "-", "+", "="];

let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && char.includes(btnValue)) return;
    output += btnValue;
  }
  innerContainer.value = output;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
/* end */
