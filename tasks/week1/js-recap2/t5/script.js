// Week 1 JS recap 2 - task 5

function sortArray(array, order) {
  switch (order) {
    case 'asc':
      return array.sort((a, b) => a - b);
    case 'desc':
      return array.sort((a, b) => b - a);
  }
}

const testArray = [1, 5, 3, 9, 26, 7];

console.log(sortArray(testArray, "asc"));
console.log(sortArray(testArray, "desc"));
