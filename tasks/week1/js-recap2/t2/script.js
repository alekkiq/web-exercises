// Week 1 JS recap 2 - task 2

const msg = document.getElementById("message");

// i
const numbers = [];

// ii
for (let i = 0; i < 5; i++) {
  numbers.push(prompt("Enter a number:"));
}

// iii
console.log(numbers);

// iv
const newNum = prompt("Enter another number:");

// v
if (numbers.includes(newNum)) {
  msg.innerText = "Number already exists";
} else {
  msg.innerText = "Added new number: " + newNum;
}

// vi
numbers.pop();

// vii
console.log(numbers);

// viii
numbers.sort((a, b) => a - b);

// ix
console.log(numbers);
