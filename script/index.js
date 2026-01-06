

const display = document.getElementById("display");
const operators = ["+", "-", "*", "/"];

function appendToDisplay(value) {
  const lastChar = display.value.slice(-1);


  if (operators.includes(value) && operators.includes(lastChar)) {
    return;
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    if (display.value === "") return;

    const result = Function(
      `"use strict"; return (${display.value})`
    )();

    display.value = result;
  } catch {
    display.value = "Error";
  }
}
