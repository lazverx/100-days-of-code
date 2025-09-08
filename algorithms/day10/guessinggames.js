// Day 10 – Number Guessing Game (Console)
// Date: 2025-09-06

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const target = Math.floor(Math.random() * 100) + 1; // number 1–100
let attempts = 0;

console.log("🎮 Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100...");

function askGuess() {
  readline.question("Enter your guess: ", (input) => {
    const guess = parseInt(input);
    attempts++;

    if (isNaN(guess)) {
      console.log("❌ Please enter a valid number!");
      return askGuess();
    }

    if (guess === target) {
      console.log(`✅ Correct! The number was ${target}. You guessed it in ${attempts} tries.`);
      readline.close();
    } else if (guess < target) {
      console.log("📉 Too low, try again!");
      askGuess();
    } else {
      console.log("📈 Too high, try again!");
      askGuess();
    }
  });
}

askGuess();
