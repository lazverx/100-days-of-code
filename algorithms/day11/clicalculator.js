// Day 11 – Calculator CLI
// Date: 2025-09-07

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🧮 Welcome to Calculator CLI!");
console.log("You can perform +, -, *, / operations.");

function calculator() {
  readline.question("Enter first number: ", (num1) => {
    readline.question("Enter operator (+, -, *, /): ", (op) => {
      readline.question("Enter second number: ", (num2) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let result;

        switch (op) {
          case "+":
            result = a + b;
            break;
          case "-":
            result = a - b;
            break;
          case "*":
            result = a * b;
            break;
          case "/":
            result = b !== 0 ? a / b : "❌ Cannot divide by zero";
            break;
          default:
            result = "❌ Invalid operator";
        }

        console.log(`Result: ${result}`);

        readline.question("Do you want to calculate again? (y/n): ", (ans) => {
          if (ans.toLowerCase() === "y") {
            calculator();
          } else {
            console.log("👋 Thanks for using Calculator CLI!");
            readline.close();
          }
        });
      });
    });
  });
}

calculator();
