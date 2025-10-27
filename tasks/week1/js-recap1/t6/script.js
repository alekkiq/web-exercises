// Week 1 JS recap 1 - task 6

const output = document.getElementById('output');
const promptBtn = document.getElementById('prompt');

const createArray = (value) => {
  const arr = new Array(value);

  for (let i = 0; i < value; i++) {
    arr[i] = [];
    for (let j = 0; j < value; j++) {
      arr[i][j] = (i + 1) * (j + 1);
    }
  }

  return arr;
}

const populateTable = (arr, target) => {
  target.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    const tRow = document.createElement('tr');
    for (let j = 0; j < arr.length; j++) {
      const td = document.createElement('td');
      td.textContent = arr[i][j];
      tRow.appendChild(td);
    }
    target.appendChild(tRow);
  }
}

promptBtn.addEventListener('click', (e) => {
  const value = Number(prompt('Enter a positive integer:'));
  const tableArray = createArray(value);

  populateTable(tableArray, output);
});
