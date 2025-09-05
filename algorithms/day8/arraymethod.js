// Day 8 – Array Methods Practice
// Date: 2025-09-04

// Initial array
let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// push (add element at the end)
numbers.push(6);
console.log("After push:", numbers);

// pop (remove last element)
numbers.pop();
console.log("After pop:", numbers);

// shift (remove first element)
numbers.shift();
console.log("After shift:", numbers);

// unshift (add element at the beginning)
numbers.unshift(0);
console.log("After unshift:", numbers);

// map (create new array by doubling values)
let doubled = numbers.map(num => num * 2);
console.log("Mapped (doubled):", doubled);

// filter (keep only even numbers)
let evens = numbers.filter(num => num % 2 === 0);
console.log("Filtered (evens):", evens);

// reduce (sum of array elements)
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduced (sum):", sum);
