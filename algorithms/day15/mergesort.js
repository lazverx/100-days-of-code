// Day 15 – Merge Sort 
// Date: 2025-09-07

const readline = require("readline");

function merge(left, right, steps) {
  let result = [];
  let i = 0, j = 0;

  steps.push(`Merging [${left}] and [${right}]`);

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      steps.push(`Take ${left[i]} from left`);
      i++;
    } else {
      result.push(right[j]);
      steps.push(`Take ${right[j]} from right`);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    steps.push(`Take remaining ${left[i]} from left`);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    steps.push(`Take remaining ${right[j]} from right`);
    j++;
  }

  steps.push(`→ Result after merge: [${result}]`);
  return result;
}

function mergeSort(arr, steps = []) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), steps);
  let right = mergeSort(arr.slice(mid), steps);

  return merge(left, right, steps);
}

function runInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter numbers separated by spaces: ", inputArr => {
    let arr = inputArr.split(" ").map(Number).filter(n => !isNaN(n));

    if (arr.length === 0) {
      console.log("⚠️ Invalid input. Please enter numbers only.");
      rl.close();
      return;
    }

    let steps = [];
    let sorted = mergeSort(arr, steps);

    console.log("\n--- Merge Sort Steps ---");
    steps.forEach(step => console.log(step));

    console.log(`\n🎉 Sorted Result: [${sorted}]`);
    rl.close();
  });
}

function runTestCases() {
  console.log("\n=== Running Test Cases ===");
  const testCases = [
    [38, 27, 43, 3, 9, 82, 10],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [],
    [42]
  ];

  testCases.forEach((arr, index) => {
    let steps = [];
    let sorted = mergeSort(arr, steps);
    console.log(`Case ${index + 1}: [${arr}] → [${sorted}]`);
  });
}

// Run test cases and interactive mode
runTestCases();
runInteractive();
