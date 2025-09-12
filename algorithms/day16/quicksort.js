// Day 16 – Quick Sort
// Date: 2025-09-12

const readline = require("readline");

function partition(arr, low, high, steps) {
  let pivot = arr[high];
  let i = low - 1;

  steps.push(`Partitioning with pivot ${pivot} (from index ${high})`);

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      steps.push(`Swap ${arr[i]} and ${arr[j]} → [${arr}]`);
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  steps.push(`Move pivot ${pivot} to correct position → [${arr}]`);

  return i + 1;
}

function quickSort(arr, low, high, steps) {
  if (low < high) {
    let pi = partition(arr, low, high, steps);
    quickSort(arr, low, pi - 1, steps);
    quickSort(arr, pi + 1, high, steps);
  }
  return arr;
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
    let sorted = quickSort([...arr], 0, arr.length - 1, steps);

    console.log("\n--- Quick Sort Steps ---");
    steps.forEach(step => console.log(step));

    console.log("\n✅ Final Sorted Array:", sorted);
    rl.close();
  });
}

// Run
runInteractive();
