// Week 1 JS recap 1 - task 3

const output = document.getElementById('output');
const promptBtn = document.getElementById('prompt');

let s1, s2, s3;

const promptSides = () => {
  s1 = Number(prompt("Enter side 1"));
  s2 = Number(prompt("Enter side 2"));
  s3 = Number(prompt("Enter side 3"));
}

const determineType = (s1, s2, s3) => {
  if (s1 === s2 && s2 === s3) {
    return 'equilateral';
  } else if (s1 === s2 || s1 === s3 || s2 === s3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

promptBtn.addEventListener('click', (e) => {
  promptSides();

  output.textContent = 'Triangle type: ' + determineType(s1, s2, s3);
})
