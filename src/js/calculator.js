let currentOperand = '';
let previousOperand = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
  if (currentOperand.length < 10) {
    currentOperand += number;
    updateDisplay();
  }
}

function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') calculateResult();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function calculateResult() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation.toString().slice(0, 10);
  operation = null;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentOperand || '0';
}