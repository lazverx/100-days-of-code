// Day 12 – To-Do List CLI
// Date: 2025-09-08

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = [];

console.log("✅ Welcome to To-Do List CLI!");
console.log("Commands: add, list, remove, exit");

function showMenu() {
  readline.question("\nEnter command: ", (command) => {
    switch (command.toLowerCase()) {
      case "add":
        readline.question("Enter a new task: ", (task) => {
          todos.push(task);
          console.log(`📝 Task added: "${task}"`);
          showMenu();
        });
        break;

      case "list":
        if (todos.length === 0) {
          console.log("📭 No tasks yet!");
        } else {
          console.log("📋 Your Tasks:");
          todos.forEach((t, i) => console.log(`${i + 1}. ${t}`));
        }
        showMenu();
        break;

      case "remove":
        readline.question("Enter task number to remove: ", (num) => {
          const index = parseInt(num) - 1;
          if (index >= 0 && index < todos.length) {
            console.log(`🗑️ Removed: "${todos[index]}"`);
            todos.splice(index, 1);
          } else {
            console.log("❌ Invalid task number.");
          }
          showMenu();
        });
        break;

      case "exit":
        console.log("👋 Goodbye! Keep being productive!");
        readline.close();
        break;

      default:
        console.log("❌ Unknown command. Use: add, list, remove, exit");
        showMenu();
    }
  });
}

showMenu();
