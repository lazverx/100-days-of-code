// Day 5 – Prime Number Checker

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage
const testNumbers = [1, 2, 3, 4, 17, 20, 23, 29, 30];
testNumbers.forEach(n => {
  console.log(`${n} is ${isPrime(n) ? "prime" : "not prime"}`);
});
