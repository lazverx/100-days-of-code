
// Day 13 – Quiz App CLI
// Date: 2025-09-09

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  {
    q: "What is the capital of France?",
    options: ["1. Paris", "2. Rome", "3. Berlin", "4. Madrid"],
    answer: 1,
  },
  {
    q: "Which planet is known as the Red Planet?",
    options: ["1. Venus", "2. Mars", "3. Jupiter", "4. Saturn"],
    answer: 2,
  },
  {
    q: "What is 5 * 6?",
    options: ["1. 30", "2. 56", "3. 25", "4. 60"],
    answer: 1,
  },
];

let score = 0;
let index = 0;

function askQuestion() {
  if (index < questions.length) {
    const current = questions[index];
    console.log(`\nQ${index + 1}: ${current.q}`);
    current.options.forEach((opt) => console.log(opt));

    readline.question("Your answer (1-4): ", (input) => {
      const userAnswer = parseInt(input);
      if (userAnswer === current.answer) {
        console.log("✅ Correct!");
        score++;
      } else {
        console.log("❌ Wrong!");
      }
      index++;
      askQuestion();
    });
  } else {
    console.log(`\n🎉 Quiz Finished! Your score: ${score}/${questions.length}`);
    readline.close();
  }
}

console.log("📚 Welcome to the Quiz App!");
askQuestion();
