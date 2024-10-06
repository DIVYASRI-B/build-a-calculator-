let display = document.getElementById('result');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  // Prevent adding multiple consecutive operators
  if (display.value !== '' && !isNaN(display.value[display.value.length - 1])) {
    display.value += operator;
  }
}

function clearScreen() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    // Evaluate the mathematical expression
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
