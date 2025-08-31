// Day 4 – Fibonacci Sequence
// Date: 2025-08-31

// Iterative approach
function fibonacciIterative(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// Recursive approach
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Example usage:
console.log("Fibonacci (Iterative, 10 numbers):", fibonacciIterative(10));
console.log("Fibonacci (Recursive, 10th number):", fibonacciRecursive(10));
