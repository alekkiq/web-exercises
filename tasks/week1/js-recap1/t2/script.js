// Week 1 JS recap 1 - task 2

const valuesEl = document.getElementsByClassName('values');
const output = document.getElementById('output');
const promptBtn = document.getElementById('prompt');

let x1, x2, y1, y2;

const promptValues = () => {
  x1 = prompt("Enter the x1 point");
  y1 = prompt("Enter the y1 point");
  x2 = prompt("Enter the x2 point");
  y2 = prompt("Enter the y2 point");
}

const calculateDistance = (x1, x2, y1, y2) => {
  return Math.sqrt(
    (x2 - x1) ** 2 +
       (y2 - y1) ** 2
  ).toFixed(3);
}

promptBtn.addEventListener('click', (e) => {
  promptValues();

  output.innerText = "Euclidean distance: " + calculateDistance(x1, x2, y1, y2);
});
