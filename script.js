//your code here
const input = document.querySelector('#input');
const buttons = document.querySelectorAll('.calculator-buttons button');
let operator = '';
let firstValue = '';
let secondValue = '';

buttons.forEach(button => {
  button.addEventListener('click', function() {
    if (button.id === 'clr') {
      input.value = '';
      operator = '';
      firstValue = '';
      secondValue = '';
    } else if (button.id === 'plus' || button.id === 'minus' || button.id === 'multiply' || button.id === 'divide') {
      operator = button.id;
      firstValue = input.value;
      input.value = '';
    } else if (button.id === 'ans') {
      secondValue = input.value;
      if (operator === 'plus') {
        input.value = parseFloat(firstValue) + parseFloat(secondValue);
      } else if (operator === 'minus') {
        input.value = parseFloat(firstValue) - parseFloat(secondValue);
      } else if (operator === 'multiply') {
        input.value = parseFloat(firstValue) * parseFloat(secondValue);
      } else if (operator === 'divide') {
        if (secondValue == 0) {
          input.value = 'Infinity';
        } else {
          input.value = parseFloat(firstValue) / parseFloat(secondValue);
        }
      }
    } else {
      input.value += button.innerText;
    }
  });
});
