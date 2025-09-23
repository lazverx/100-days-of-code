// Matrix Multiplication
// Date: 2025-09-14

function multiplyMatrices(A, B) {
  const rowsA = A.length;
  const colsA = A[0].length;
  const rowsB = B.length;
  const colsB = B[0].length;

  if (colsA !== rowsB) {
    throw new Error("Matrix multiplication not possible: columns of A must match rows of B");
  }

  const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
}

// Example usage
const A = [
  [1, 2, 3],
  [4, 5, 6]
];

const B = [
  [7, 8],
  [9, 10],
  [11, 12]
];

console.log("Matrix A:");
console.table(A);

console.log("Matrix B:");
console.table(B);

console.log("Result of A x B:");
console.table(multiplyMatrices(A, B));
