// Matrix Operations (Determinant + Transpose)
// Date: 2025-09-15

// Function to calculate transpose of a matrix
function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

// Function to calculate determinant (recursive)
function determinant(matrix) {
  const n = matrix.length;

  // Base case 1x1
  if (n === 1) return matrix[0][0];

  // Base case 2x2
  if (n === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  // Recursive case
  let det = 0;
  for (let col = 0; col < n; col++) {
    const subMatrix = matrix.slice(1).map(row => row.filter((_, j) => j !== col));
    det += ((col % 2 === 0 ? 1 : -1) * matrix[0][col] * determinant(subMatrix));
  }
  return det;
}

// Example usage
const matrix = [
  [2, 5, 3],
  [1, -2, -1],
  [1, 3, 4]
];

console.log("Original Matrix:");
console.table(matrix);

console.log("Transpose:");
console.table(transpose(matrix));

console.log("Determinant:", determinant(matrix));
