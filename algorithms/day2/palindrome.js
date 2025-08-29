// Day 2 – Palindrome Checker
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a word to check if it's a palindrome: ", word => {
  const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, ""); 
  const reversed = cleaned.split("").reverse().join("");

  if (cleaned === reversed) {
    console.log(`${word} is a palindrome! 🎉`);
  } else {
    console.log(`${word} is NOT a palindrome.`);
  }

  readline.close();
});
