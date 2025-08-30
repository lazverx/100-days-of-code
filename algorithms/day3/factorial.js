// Day 3 - Factorial Algorithm

function calculateFactorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Test cases
console.log(calculateFactorial(5)); // 120
console.log(calculateFactorial(0)); // 1
console.log(calculateFactorial(7)); // 5040
console.log(calculateFactorial(-3)); // Factorial is not defined for negative numbers.
