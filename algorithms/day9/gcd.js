// Day 9 – Greatest Common Divisor (GCD) – Euclidean Algorithm
// Date: 2025-09-05

// Iterative approach
function gcdIterative(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Recursive approach
function gcdRecursive(a, b) {
  if (b === 0) return a;
  return gcdRecursive(b, a % b);
}

// Example usage
console.log("Iterative GCD of 48 and 18:", gcdIterative(48, 18));
console.log("Recursive GCD of 48 and 18:", gcdRecursive(48, 18));

console.log("Iterative GCD of 101 and 103:", gcdIterative(101, 103));
console.log("Recursive GCD of 101 and 103:", gcdRecursive(101, 103));
