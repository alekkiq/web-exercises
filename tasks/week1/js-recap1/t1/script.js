// Week 1 JS recap 1 - task 1

const output = document.getElementById('output');
const promptBtn = document.getElementById('prompt');

const promptCelsius = () => {
  let value;

  do {
    value = prompt('Enter a celsius temperature:');
  } while (isNaN(value) || value.trim() === '');

  return Number(value);
}

const celsiusToF = (celsius) => {
  return (celsius * 1.8 + 32).toFixed(2);
}

promptBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const valueToConvert = promptCelsius();

  output.innerText = celsiusToF(valueToConvert) + 'F';
});
