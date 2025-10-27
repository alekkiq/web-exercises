// Week 1 JS recap 2 - task 3

const msg = document.getElementById('message');

// i
const numbers = [];

// ii
while (true) {
  const input = prompt("Enter a number (enter \"done\" to stop)");

  if (input === 'done') break;

  numbers.push(input);
}

// iii
for (let number of numbers) {
  console.log(number);

  // iv
  if (number % 2 === 0) {
    // v
    msg.textContent += number + ' ';
  }
}

// vi
msg.innerHTML += '<br>Program finished'
