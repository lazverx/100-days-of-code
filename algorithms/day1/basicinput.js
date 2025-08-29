// Day 1 – Hello World + Input Example
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Hello, 100 Days of Code!");

readline.question("What's your name? ", name => {
  console.log(`Hi, ${name}! Welcome to Day 1.`);
  readline.close();
});
