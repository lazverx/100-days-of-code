// Prime Factorization with Exponents
// Date: 2025-09-12

function primeFactorization(n) {
  const factors = {};
  let divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      factors[divisor] = (factors[divisor] || 0) + 1;
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

function formatFactors(factors) {
  return Object.entries(factors)
    .map(([prime, power]) => (power > 1 ? `${prime}^${power}` : prime))
    .join(" × ");
}

// Example usage
const number = 120;
const factors = primeFactorization(number);

console.log(`Prime factorization of ${number}:`);
console.log(`${number} = ${formatFactors(factors)}`);
