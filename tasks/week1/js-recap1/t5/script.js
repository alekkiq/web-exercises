// Week 1 JS recap 1 - task 5

const output = document.getElementById('output');
const promptBtn = document.getElementById('prompt');

const calculateLoopSum = (value) => {
  let sum = value;

  while (value > 0) {
    sum += --value;
  }

  return sum;
}

promptBtn.addEventListener('click', (e) => {
  const value = Number(prompt('Enter a positive integer:'));

  output.textContent = `Loop sum of ${value}: ${calculateLoopSum(value)}`;
});
