// Day 6 – Arrays Basic Manipulation
// Date: 2025-09-02

const fruits = ["apple", "banana", "cherry"];
console.log("Initial array:", fruits);

// Add element to the end
fruits.push("orange");
console.log("After push:", fruits);

// Remove last element
fruits.pop();
console.log("After pop:", fruits);

// Add element to the beginning
fruits.unshift("mango");
console.log("After unshift:", fruits);

// Remove first element
fruits.shift();
console.log("After shift:", fruits);

// Access by index
console.log("Second fruit:", fruits[1]);

// Length of array
console.log("Number of fruits:", fruits.length);
