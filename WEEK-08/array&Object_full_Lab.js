




/*
================================================================================
ARRAYS AND OBJECTS -
===================================

This file contains:
1. Teaching Examples for each concept
2. Live Coding Exercise Solutions (Exercises 1-4)
3. Homework Solutions
4. Additional Practice Examples

Author: Instructor Guide
Date: December 27, 2025
================================================================================
*/

console.log("=== ARRAYS AND OBJECTS LECTURE - INSTRUCTOR GUIDE ===\n");

/*
================================================================================
SECTION 1: ARRAY BASICS - TEACHING EXAMPLES
================================================================================
*/

console.log("--- SECTION 1: ARRAY BASICS ---\n");

// Example 1.1: Creating Arrays
console.log("Example 1.1: Creating Arrays");
const fruits = ["apple", "banana", "cherry"];
const mixedArray = ["apple", 42, "banana", 3.14, "cherry", true];
const emptyArray = [];

console.log("Fruits array:", fruits);
console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);
console.log();

// Example 1.2: Accessing Elements (Zero-based indexing)
console.log("Example 1.2: Accessing Elements");
console.log("First fruit (index 0):", fruits[0]); // "apple"
console.log("Second fruit (index 1):", fruits[1]); // "banana"
console.log("Last fruit:", fruits[fruits.length - 1]); // "cherry"
console.log();

// Example 1.3: Modifying Arrays
console.log("Example 1.3: Modifying Arrays");
const scores = [85, 92, 78];
console.log("Original scores:", scores);
scores[0] = 90; // Update first element
console.log("After updating index 0:", scores);
console.log("Array length:", scores.length);
console.log();

/*
================================================================================
SECTION 2: MUTATING ARRAY METHODS - TEACHING EXAMPLES
================================================================================
*/

console.log("--- SECTION 2: MUTATING ARRAY METHODS ---\n");

// Example 2.1: push() and pop()
console.log("Example 2.1: push() and pop()");
let nums = [1, 2, 3];
console.log("Original array:", nums);

nums.push(4); // Add to end
console.log("After push(4):", nums);

let last = nums.pop(); // Remove from end
console.log("Popped value:", last);
console.log("After pop():", nums);
console.log();

// Example 2.2: shift() and unshift()
console.log("Example 2.2: shift() and unshift()");
let colors = ["red", "green", "blue"];
console.log("Original array:", colors);

colors.unshift("yellow"); // Add to beginning
console.log("After unshift('yellow'):", colors);

let first = colors.shift(); // Remove from beginning
console.log("Shifted value:", first);
console.log("After shift():", colors);
console.log();

/*
================================================================================
SECTION 3: NON-MUTATING ARRAY METHODS - TEACHING EXAMPLES
================================================================================
*/

console.log("--- SECTION 3: NON-MUTATING ARRAY METHODS ---\n");

// Example 3.1: map() - Transform each element
console.log("Example 3.1: map() - Transform each element");
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
const squared = numbers.map(n => n * n);

console.log("Original numbers:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
console.log("Original unchanged:", numbers);
console.log();

// Example 3.2: filter() - Keep elements that pass a test
console.log("Example 3.2: filter() - Keep elements that pass a test");
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = allNumbers.filter(n => n % 2 === 0);
const greaterThanFive = allNumbers.filter(n => n > 5);

console.log("Original numbers:", allNumbers);
console.log("Even numbers:", evens);
console.log("Greater than 5:", greaterThanFive);
console.log();

// Example 3.3: forEach() - Execute function for each element
console.log("Example 3.3: forEach() - Execute function for each element");
const names = ["Alice", "Bob", "Charlie"];
console.log("Using forEach to greet each person:");
names.forEach(name => {
    console.log(`  Hello, ${name}!`);
});
console.log();

/*
================================================================================
SECTION 4: ITERATING OVER ARRAYS - TEACHING EXAMPLES
================================================================================
*/

console.log("--- SECTION 4: ITERATING OVER ARRAYS ---\n");

// Example 4.1: Traditional for loop
console.log("Example 4.1: Traditional for loop");
const cities = ["New York", "London", "Tokyo"];
console.log("Using traditional for loop:");
for (let i = 0; i < cities.length; i++) {
    console.log(`  ${i}: ${cities[i]}`);
}
console.log();

// Example 4.2: for...of loop
console.log("Example 4.2: for...of loop");
console.log("Using for...of loop:");
for (const city of cities) {
    console.log(`  ${city.toUpperCase()}`);
}
console.log();

// Example 4.3: forEach method
console.log("Example 4.3: forEach method");
console.log("Using forEach:");
cities.forEach((city, index) => {
    console.log(`  City ${index + 1}: ${city}`);
});
console.log();

/*
================================================================================
SECTION 5: OBJECTS - TEACHING EXAMPLES
================================================================================
*/

console.log("--- SECTION 5: OBJECTS (KEY-VALUE PAIRS) ---\n");

// Example 5.1: Creating Objects
console.log("Example 5.1: Creating Objects");
const user = {
    name: "Alice",
    age: 22,
    isAdmin: true,
    hobbies: ["reading", "coding"]
};

console.log("User object:", user);
console.log();

// Example 5.2: Accessing Object Properties
console.log("Example 5.2: Accessing Object Properties");
console.log("Dot notation - user.name:", user.name);
console.log("Bracket notation - user['age']:", user['age']);

// Dynamic property access
let prop = "isAdmin";
console.log(`Dynamic access - user[prop]:`, user[prop]);
console.log();

// Example 5.3: Adding and Modifying Properties
console.log("Example 5.3: Adding and Modifying Properties");
console.log("Original user:", user);

user.email = "alice@email.com"; // Add new property
user.age = 23; // Modify existing property

console.log("After adding email and updating age:", user);
console.log();

/*
================================================================================
SECTION 6: ITERATING OVER OBJECTS - TEACHING EXAMPLES
================================================================================
*/

console.log("--- SECTION 6: ITERATING OVER OBJECTS ---\n");

// Example 6.1: for...in loop
console.log("Example 6.1: for...in loop");
const student = { name: "Bob", score: 95, grade: "A" };
console.log("Using for...in:");
for (let key in student) {
    console.log(`  ${key}: ${student[key]}`);
}
console.log();

// Example 6.2: Object.keys()
console.log("Example 6.2: Object.keys()");
const keys = Object.keys(student);
console.log("Keys:", keys);
keys.forEach(key => {
    console.log(`  ${key}: ${student[key]}`);
});
console.log();

// Example 6.3: Object.values()
console.log("Example 6.3: Object.values()");
const values = Object.values(student);
console.log("Values:", values);
values.forEach(val => {
    console.log(`  Value: ${val}`);
});
console.log();

// Example 6.4: Object.entries()
console.log("Example 6.4: Object.entries()");
const entries = Object.entries(student);
console.log("Entries:", entries);
entries.forEach(([key, value]) => {
    console.log(`  ${key} => ${value}`);
});
console.log();

/*
================================================================================
LIVE CODING EXERCISES - SOLUTIONS
================================================================================
*/

console.log("\n" + "=".repeat(80));
console.log("LIVE CODING EXERCISES - SOLUTIONS");
console.log("=".repeat(80) + "\n");

/*
--------------------------------------------------------------------------------
EXERCISE 1: ARRAY BASICS
--------------------------------------------------------------------------------
Tasks:
1. Create: Declare an empty array shoppingList
2. Add: Use push() to add "Milk", "Bread", "Eggs"
3. Remove: Use pop() to remove the last item
4. Access: Print the item at index 0
5. Modify: Change index 1 to "Whole Wheat Bread"
6. Loop: Use for...of to print every item
*/

console.log("--- EXERCISE 1: ARRAY BASICS ---\n");

// Step 1: Create empty array
let shoppingList = [];
console.log("Step 1 - Created empty array:", shoppingList);

// Step 2: Add items using push()
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Eggs");
console.log("Step 2 - After adding items:", shoppingList);

// Step 3: Remove last item using pop()
let removedItem = shoppingList.pop();
console.log("Step 3 - Removed item:", removedItem);
console.log("Step 3 - Array after pop():", shoppingList);

// Step 4: Access item at index 0
console.log("Step 4 - Item at index 0:", shoppingList[0]);

// Step 5: Modify item at index 1
shoppingList[1] = "Whole Wheat Bread";
console.log("Step 5 - After modifying index 1:", shoppingList);

// Step 6: Loop using for...of
console.log("Step 6 - Looping through items:");
for (const item of shoppingList) {
    console.log(`  - ${item}`);
}
console.log();

/*
--------------------------------------------------------------------------------
EXERCISE 2: ARRAY METHODS
--------------------------------------------------------------------------------
Tasks:
1. Data: Start with [75, 88, 92, 65, 98]
2. Filter: Create passingScores for grades >= 80
3. Map: Create curvedScores by adding 5 points to each
4. Iterate: Use forEach to log each curved score
*/

console.log("--- EXERCISE 2: ARRAY METHODS ---\n");

// Step 1: Starting data
const grades = [75, 88, 92, 65, 98];
console.log("Original grades:", grades);

// Step 2: Filter for passing scores (>= 80)
const passingScores = grades.filter(score => score >= 80);
console.log("Passing scores (>= 80):", passingScores);

// Step 3: Map to create curved scores (add 5 to each)
const curvedScores = grades.map(score => score + 5);
console.log("Curved scores (+5 each):", curvedScores);

// Step 4: Use forEach to log each curved score
console.log("Logging each curved score:");
curvedScores.forEach((score, index) => {
    console.log(`  Student ${index + 1}: ${score}`);
});
console.log();

// BONUS: Combining filter and map
console.log("BONUS - Curved passing scores:");
const curvedPassingScores = grades
    .filter(score => score >= 80)
    .map(score => score + 5);
console.log(curvedPassingScores);
console.log();

/*
--------------------------------------------------------------------------------
EXERCISE 3: THE BOOK PROFILE
--------------------------------------------------------------------------------
Tasks:
1. Create a book object with title, pages, and published year
2. Add an author property dynamically
3. Access title via dot notation and pages via bracket notation
4. Loop through all keys using Object.keys()
*/

console.log("--- EXERCISE 3: THE BOOK PROFILE ---\n");

// Step 1: Create book object
const book = {
    title: "JavaScript: The Good Parts",
    pages: 176,
    publishedYear: 2008
};
console.log("Step 1 - Created book object:", book);

// Step 2: Add author property dynamically
book.author = "Douglas Crockford";
console.log("Step 2 - After adding author:", book);

// Step 3: Access properties using different notations
console.log("Step 3 - Accessing properties:");
console.log("  Title (dot notation):", book.title);
console.log("  Pages (bracket notation):", book["pages"]);

// Step 4: Loop through all keys
console.log("Step 4 - All book properties:");
Object.keys(book).forEach(key => {
    console.log(`  ${key}: ${book[key]}`);
});
console.log();

/*
--------------------------------------------------------------------------------
EXERCISE 4: ARRAY OF OBJECTS (THE CRM)
--------------------------------------------------------------------------------
Tasks:
1. Start with an array of user objects (id, name, isActive)
2. Filter for activeUsers where isActive is true
3. Map to create a userNames array of strings
4. Loop to print the name of each active user
*/

console.log("--- EXERCISE 4: ARRAY OF OBJECTS (THE CRM) ---\n");

// Step 1: Create array of user objects
const users = [
    { id: 1, name: "Alice Johnson", isActive: true },
    { id: 2, name: "Bob Smith", isActive: false },
    { id: 3, name: "Charlie Brown", isActive: true },
    { id: 4, name: "Diana Prince", isActive: true },
    { id: 5, name: "Eve Adams", isActive: false }
];
console.log("All users:", users);

// Step 2: Filter for active users
const activeUsers = users.filter(user => user.isActive);
console.log("\nActive users:", activeUsers);

// Step 3: Map to create userNames array
const userNames = activeUsers.map(user => user.name);
console.log("\nActive user names:", userNames);

// Step 4: Loop to print each active user's name
console.log("\nPrinting each active user:");
activeUsers.forEach(user => {
    console.log(`  - ${user.name} (ID: ${user.id})`);
});
console.log();

// BONUS: One-liner to get active user names
console.log("BONUS - One-liner approach:");
const activeUserNames = users
    .filter(user => user.isActive)
    .map(user => user.name);
console.log(activeUserNames);
console.log();

/*
================================================================================
HOMEWORK SOLUTIONS
================================================================================
*/

console.log("\n" + "=".repeat(80));
console.log("HOMEWORK SOLUTIONS");
console.log("=".repeat(80) + "\n");

/*
--------------------------------------------------------------------------------
HOMEWORK 1: GRADE SCORES (processScores function)
--------------------------------------------------------------------------------
Requirements:
1. Create a function processScores that takes an array like [65, 82, 78, 55, 91]
2. Filter scores >= 70
3. Add 5% to them (multiply by 1.05)
4. Use reduce to find the average
*/

console.log("--- HOMEWORK 1: GRADE SCORES ---\n");

function processScores(scores) {
    console.log("Input scores:", scores);

    // Step 1: Filter scores >= 70
    const passingScores = scores.filter(score => score >= 70);
    console.log("Passing scores (>= 70):", passingScores);

    // Step 2: Add 5% to each passing score (multiply by 1.05)
    const boostedScores = passingScores.map(score => score * 1.05);
    console.log("Boosted scores (+5%):", boostedScores);

    // Step 3: Calculate average using reduce
    const sum = boostedScores.reduce((accumulator, score) => accumulator + score, 0);
    const average = boostedScores.length > 0 ? sum / boostedScores.length : 0;
    console.log("Sum of boosted scores:", sum);
    console.log("Average of boosted scores:", average.toFixed(2));

    return {
        passingScores: passingScores,
        boostedScores: boostedScores,
        average: parseFloat(average.toFixed(2))
    };
}

// Test the function
console.log("\nTest Case 1:");
const result1 = processScores([65, 82, 78, 55, 91]);
console.log("Result:", result1);

console.log("\nTest Case 2:");
const result2 = processScores([45, 50, 55, 60, 65]);
console.log("Result:", result2);

console.log("\nTest Case 3:");
const result3 = processScores([85, 90, 95, 100]);
console.log("Result:", result3);
console.log();

/*
--------------------------------------------------------------------------------
HOMEWORK 2: INVENTORY MANAGER
--------------------------------------------------------------------------------
Requirements:
1. Create an inventory object to track store items
   Example: { "apples": 10, "bananas": 5 } (quantity as values)
2. Write a function addItem(inventory, item, qty) to dynamically add or update items
   Example: addItem(inventory, "oranges", 8)
*/

console.log("--- HOMEWORK 2: INVENTORY MANAGER ---\n");

// Initial inventory
const inventory = {
    "apples": 10,
    "bananas": 5
};

console.log("Initial inventory:", inventory);

// Function to add or update items
function addItem(inventory, item, qty) {
    console.log(`\nAdding/Updating: ${item} with quantity ${qty}`);

    if (inventory[item]) {
        console.log(`  ${item} already exists with quantity ${inventory[item]}`);
        inventory[item] += qty;
        console.log(`  Updated quantity: ${inventory[item]}`);
    } else {
        console.log(`  ${item} is a new item`);
        inventory[item] = qty;
        console.log(`  Added with quantity: ${inventory[item]}`);
    }

    return inventory;
}

// Test the function
addItem(inventory, "oranges", 8);
console.log("Inventory after adding oranges:", inventory);

addItem(inventory, "apples", 5);
console.log("Inventory after adding more apples:", inventory);

addItem(inventory, "grapes", 15);
console.log("Inventory after adding grapes:", inventory);

// Bonus: Additional inventory management functions
console.log("\n--- BONUS: Additional Inventory Functions ---\n");

// Function to remove items
function removeItem(inventory, item, qty) {
    console.log(`\nRemoving ${qty} of ${item}`);

    if (!inventory[item]) {
        console.log(`  Error: ${item} not found in inventory`);
        return inventory;
    }

    if (inventory[item] < qty) {
        console.log(`  Warning: Only ${inventory[item]} ${item}(s) available`);
        console.log(`  Removing all ${inventory[item]} ${item}(s)`);
        delete inventory[item];
    } else {
        inventory[item] -= qty;
        console.log(`  Removed ${qty}. Remaining: ${inventory[item]}`);

        if (inventory[item] === 0) {
            delete inventory[item];
            console.log(`  ${item} is now out of stock and removed from inventory`);
        }
    }

    return inventory;
}

// Function to display inventory
function displayInventory(inventory) {
    console.log("\n--- Current Inventory ---");
    const items = Object.keys(inventory);

    if (items.length === 0) {
        console.log("Inventory is empty");
        return;
    }

    items.forEach(item => {
        console.log(`  ${item}: ${inventory[item]}`);
    });

    const totalItems = Object.values(inventory).reduce((sum, qty) => sum + qty, 0);
    console.log(`\nTotal items in stock: ${totalItems}`);
}

// Function to get low stock items
function getLowStockItems(inventory, threshold = 10) {
    console.log(`\n--- Items with stock <= ${threshold} ---`);
    const lowStockItems = Object.entries(inventory)
        .filter(([item, qty]) => qty <= threshold)
        .map(([item, qty]) => ({ item, qty }));

    if (lowStockItems.length === 0) {
        console.log("No low stock items");
    } else {
        lowStockItems.forEach(({ item, qty }) => {
            console.log(`  ${item}: ${qty} (needs restock)`);
        });
    }

    return lowStockItems;
}

// Test bonus functions
removeItem(inventory, "bananas", 3);
displayInventory(inventory);
getLowStockItems(inventory, 10);
console.log();

/*
================================================================================
ADDITIONAL PRACTICE EXAMPLES
================================================================================
*/

console.log("\n" + "=".repeat(80));
console.log("ADDITIONAL PRACTICE EXAMPLES");
console.log("=".repeat(80) + "\n");

/*
--------------------------------------------------------------------------------
EXAMPLE 1: Student Grade Management System
--------------------------------------------------------------------------------
*/

console.log("--- EXAMPLE 1: STUDENT GRADE MANAGEMENT SYSTEM ---\n");

const students = [
    { id: 1, name: "Alice", grades: [85, 92, 78, 90] },
    { id: 2, name: "Bob", grades: [70, 65, 72, 68] },
    { id: 3, name: "Charlie", grades: [95, 98, 92, 96] },
    { id: 4, name: "Diana", grades: [88, 85, 90, 87] }
];

// Calculate average grade for each student
const studentsWithAverages = students.map(student => {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / student.grades.length;
    return {
        ...student,
        average: parseFloat(average.toFixed(2))
    };
});

console.log("Students with averages:");
studentsWithAverages.forEach(student => {
    console.log(`  ${student.name}: ${student.average}`);
});

// Find top performer
const topStudent = studentsWithAverages.reduce((top, student) =>
    student.average > top.average ? student : top
);

console.log(`\nTop performer: ${topStudent.name} with average ${topStudent.average}`);
console.log();

/*
--------------------------------------------------------------------------------
EXAMPLE 2: E-Commerce Product Catalog
--------------------------------------------------------------------------------
*/

console.log("--- EXAMPLE 2: E-COMMERCE PRODUCT CATALOG ---\n");

const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
    { id: 2, name: "Mouse", price: 25, category: "Electronics", inStock: true },
    { id: 3, name: "Desk", price: 299, category: "Furniture", inStock: false },
    { id: 4, name: "Chair", price: 199, category: "Furniture", inStock: true },
    { id: 5, name: "Monitor", price: 349, category: "Electronics", inStock: true }
];

// Filter available electronics
const availableElectronics = products.filter(p =>
    p.category === "Electronics" && p.inStock
);

console.log("Available Electronics:");
availableElectronics.forEach(p => {
    console.log(`  ${p.name}: $${p.price}`);
});

// Calculate total value of in-stock items
const totalValue = products
    .filter(p => p.inStock)
    .reduce((sum, p) => sum + p.price, 0);

console.log(`\nTotal value of in-stock items: $${totalValue}`);

// Group products by category
const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
}, {});

console.log("\nProducts by category:");
Object.entries(productsByCategory).forEach(([category, items]) => {
    console.log(`  ${category}: ${items.length} items`);
});
console.log();

/*
--------------------------------------------------------------------------------
EXAMPLE 3: Todo List Application
--------------------------------------------------------------------------------
*/

console.log("--- EXAMPLE 3: TODO LIST APPLICATION ---\n");

const todos = [
    { id: 1, task: "Complete homework", completed: false, priority: "high" },
    { id: 2, task: "Buy groceries", completed: true, priority: "medium" },
    { id: 3, task: "Call dentist", completed: false, priority: "high" },
    { id: 4, task: "Read book", completed: false, priority: "low" },
    { id: 5, task: "Exercise", completed: true, priority: "medium" }
];

// Get incomplete high-priority tasks
const urgentTasks = todos.filter(todo =>
    !todo.completed && todo.priority === "high"
);

console.log("Urgent tasks (incomplete, high priority):");
urgentTasks.forEach(todo => {
    console.log(`  - ${todo.task}`);
});

// Count completed vs incomplete
const completedCount = todos.filter(t => t.completed).length;
const incompleteCount = todos.filter(t => !t.completed).length;

console.log(`\nCompleted: ${completedCount}, Incomplete: ${incompleteCount}`);

// Group by priority
const tasksByPriority = todos.reduce((acc, todo) => {
    if (!acc[todo.priority]) {
        acc[todo.priority] = [];
    }
    acc[todo.priority].push(todo.task);
    return acc;
}, {});

console.log("\nTasks by priority:");
Object.entries(tasksByPriority).forEach(([priority, tasks]) => {
    console.log(`  ${priority}: ${tasks.join(", ")}`);
});
console.log();

/*
================================================================================
ADVANCED CONCEPTS (FOR CURIOUS STUDENTS)
================================================================================
*/

console.log("\n" + "=".repeat(80));
console.log("ADVANCED CONCEPTS (BONUS)");
console.log("=".repeat(80) + "\n");

/*
--------------------------------------------------------------------------------
ADVANCED 1: Array Destructuring
--------------------------------------------------------------------------------
*/

console.log("--- ADVANCED 1: ARRAY DESTRUCTURING ---\n");

const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;
console.log(`x: ${x}, y: ${y}, z: ${z}`);

// Swapping values
let a = 1, b = 2;
[a, b] = [b, a];
console.log(`After swap - a: ${a}, b: ${b}`);
console.log();

/*
--------------------------------------------------------------------------------
ADVANCED 2: Object Destructuring
--------------------------------------------------------------------------------
*/

console.log("--- ADVANCED 2: OBJECT DESTRUCTURING ---\n");

const person = { firstName: "John", lastName: "Doe", age: 30 };
const { firstName, lastName, age } = person;
console.log(`${firstName} ${lastName} is ${age} years old`);

// With renaming
const { firstName: fName, lastName: lName } = person;
console.log(`Renamed: ${fName} ${lName}`);
console.log();

/*
--------------------------------------------------------------------------------
ADVANCED 3: Spread Operator
--------------------------------------------------------------------------------
*/

console.log("--- ADVANCED 3: SPREAD OPERATOR ---\n");

// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined arrays:", combined);

// Object spreading
const baseUser = { name: "Alice", age: 25 };
const extendedUser = { ...baseUser, email: "alice@example.com" };
console.log("Extended user:", extendedUser);
console.log();

/*
--------------------------------------------------------------------------------
ADVANCED 4: Array Methods - find, some, every
--------------------------------------------------------------------------------
*/

console.log("--- ADVANCED 4: FIND, SOME, EVERY ---\n");

const ages = [18, 21, 16, 25, 30];

// find - returns first element that matches
const firstAdult = ages.find(age => age >= 18);
console.log("First adult age:", firstAdult);

// some - returns true if at least one element matches
const hasMinor = ages.some(age => age < 18);
console.log("Has minor:", hasMinor);

// every - returns true if all elements match
const allAdults = ages.every(age => age >= 18);
console.log("All adults:", allAdults);
console.log();

/*
================================================================================
COMMON MISTAKES
================================================================================
*/

console.log("\n" + "=".repeat(80));
console.log("TEACHING TIPS AND COMMON MISTAKES TO HIGHLIGHT");
console.log("=".repeat(80) + "\n");

console.log("COMMON MISTAKE 1: Confusing array indices");
console.log("  ❌ Wrong: Thinking first element is at index 1");
console.log("  ✅ Correct: First element is at index 0");
console.log();

console.log("COMMON MISTAKE 2: Mutating vs Non-mutating methods");
console.log("  ❌ Mutating: push, pop, shift, unshift (change original)");
console.log("  ✅ Non-mutating: map, filter, slice (return new array)");
console.log();

console.log("COMMON MISTAKE 3: Accessing object properties");
console.log("  ❌ Wrong: obj.property-name (hyphens not allowed)");
console.log("  ✅ Correct: obj['property-name'] or obj.propertyName");
console.log();

console.log("COMMON MISTAKE 4: Forgetting return in map/filter");
const badMap = [1, 2, 3].map(n => { n * 2 }); // Missing return!
const goodMap = [1, 2, 3].map(n => n * 2); // Implicit return
console.log("  Bad map (missing return):", badMap);
console.log("  Good map:", goodMap);
console.log();

console.log("=".repeat(80));
console.log("END OF INSTRUCTOR GUIDE");
console.log("=".repeat(80));
