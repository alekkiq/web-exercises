// Week 1 JS recap 2 - task 4

function sortArray(array) {
  return array.sort((a, b) => a - b);
}

const testArray = [1, 5, 3, 9, 26, 7];

console.log(testArray);
console.log(sortArray(testArray));
