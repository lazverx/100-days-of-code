// Day 14 – Binary Search (Complex Version)
// Date: 2025-09-06

const readline = require("readline");

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let steps = [];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    steps.push(`Checking middle index ${mid} → value ${arr[mid]}`);

    if (arr[mid] === target) {
      steps.push(`✅ Found target ${target} at index ${mid}`);
      return { found: true, index: mid, steps };
    } else if (arr[mid] < target) {
      steps.push(`Target > ${arr[mid]} → Move right`);
      left = mid + 1;
    } else {
      steps.push(`Target < ${arr[mid]} → Move left`);
      right = mid - 1;
    }
  }
  steps.push(`❌ Target ${target} not found`);
  return { found: false, index: -1, steps };
}

function runInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter numbers separated by spaces (sorted): ", inputArr => {
    let arr = inputArr.split(" ").map(Number).filter(n => !isNaN(n));

    if (arr.length === 0) {
      console.log("⚠️ Invalid input. Please enter numbers only.");
      rl.close();
      return;
    }

    rl.question("Enter target number: ", inputTarget => {
      let target = Number(inputTarget);

      if (isNaN(target)) {
        console.log("⚠️ Target must be a number.");
        rl.close();
        return;
      }

      let result = binarySearch(arr, target);

      console.log("\n--- Binary Search Steps ---");
      result.steps.forEach(step => console.log(step));

      if (result.found) {
        console.log(`\n🎉 Result: Target ${target} found at index ${result.index}`);
      } else {
        console.log(`\n😢 Result: Target ${target} not found`);
      }

      rl.close();
    });
  });
}

// Run some test cases automatically
function runTestCases() {
  console.log("\n=== Running Test Cases ===");
  const testCases = [
    { arr: [1, 3, 5, 7, 9, 11], target: 7 },
    { arr: [2, 4, 6, 8, 10], target: 5 },
    { arr: [-10, -5, 0, 5, 10, 15], target: -5 }
  ];

  testCases.forEach(({ arr, target }, index) => {
    let { found, index: idx } = binarySearch(arr, target);
    console.log(
      `Case ${index + 1}: Search ${target} in [${arr}] → ${
        found ? "Found at index " + idx : "Not Found"
      }`
    );
  });
}

// Run both demo and interactive
runTestCases();
runInteractive();
