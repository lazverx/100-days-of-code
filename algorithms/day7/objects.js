// Day 7 – Objects Basic Implementation
// Date: 2025-09-03

// Create an object
const student = {
  name: "Laz",
  age: 17,
  grade: "11th",
  hobbies: ["reading", "coding", "gaming"]
};

// Access object properties
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student["grade"]);
console.log("Hobbies:", student.hobbies);

// Add new property
student.school = "High School";
console.log("After adding school:", student);

// Update property
student.age = 18;
console.log("After updating age:", student);

// Delete property
delete student.grade;
console.log("After deleting grade:", student);

// Iterate over keys
console.log("Iterating over student object:");
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
