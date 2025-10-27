// Week 1 JS recap 1 - task 4

const output = document.getElementById('output');
const promptBtn = document.getElementById('prompt');

const gradeMap = [
  [0, 39],  // 0
  [40, 51], // 1
  [52, 63], // 2
  [64, 75], // 3
  [76, 87], // 4
  [88, 100] // 5
]

let score;

const calculateGrade = (score) => {
  for (let i = 0; i < gradeMap.length; i++) {
    if (score >= gradeMap[i][0] && score <= gradeMap[i][1]) {
      return i;
    }
  }
}

promptBtn.addEventListener('click', (e) => {
  score = Number(prompt("Enter course score (0 - 100)"));

  output.textContent = calculateGrade(score);
});
