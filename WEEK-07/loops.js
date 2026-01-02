// ========================================
// JAVASCRIPT LOOPS
// ========================================

// Sample data for examples
const students = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const scores = [85, 92, 78, 96, 88, 0, null, 73];
const products = [
    { name: "Laptop", price: 999 },
    { name: "Phone", price: 599 },
    { name: "Tablet", price: 299 }
];

console.log('=== FOR LOOP ===');

// 1. BASIC FOR LOOP
// Syntax: for (initialization; condition; increment)
for (let i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}: ${students[i]}`);
}

// Counting backwards
console.log('\nCounting backwards:');
for (let i = students.length - 1; i >= 0; i--) {
    console.log(`${i + 1}. ${students[i]}`);
}

// Skip by 2
console.log('\nEvery other student:');
for (let i = 0; i < students.length; i += 2) {
    console.log(`${students[i]}`);
}

console.log('\n=== WHILE LOOP ===');

// 2. WHILE LOOP
// Continues while condition is true
let countdown = 5;
console.log('Countdown:');
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log('Blast off!');

// Finding an element
let searchName = "Charlie";
let index = 0;
let found = false;

while (index < students.length && !found) {
    if (students[index] === searchName) {
        console.log(`Found ${searchName} at position ${index}`);
        found = true;
    }
    index++;
}

console.log('\n=== DO-WHILE LOOP ===');

// 3. DO-WHILE LOOP
// Executes at least once, then checks condition
let userInput;
let attempts = 0;

do {
    attempts++;
    userInput = Math.floor(Math.random() * 10); // Simulate user input
    console.log(`Attempt ${attempts}: Generated number ${userInput}`);
} while (userInput !== 7 && attempts < 5);

if (userInput === 7) {
    console.log('Success! Found the lucky number 7');
} else {
    console.log('Max attempts reached');
}

console.log('\n=== FOR...OF LOOP ===');

// 4. FOR...OF LOOP (ES6)
// Iterates over iterable objects (arrays, strings, etc.)
console.log('Students using for...of:');
for (const student of students) {
    console.log(`Hello, ${student}!`);
}

// With strings
const message = "Hello";
console.log('\nLetters in "Hello":');
for (const letter of message) {
    console.log(letter);
}

console.log('\n=== FOR...IN LOOP ===');

// 5. FOR...IN LOOP
// Iterates over object properties or array indices
const person = {
    name: "John",
    age: 30,
    city: "New York",
    job: "Developer"
};

console.log('Person properties:');
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// With arrays (gets indices)
console.log('\nArray indices:');
for (const index in students) {
    console.log(`Index ${index}: ${students[index]}`);
}

console.log('\n=== BREAK AND CONTINUE ===');

// 6. BREAK STATEMENT
// Exits the loop completely
console.log('Finding first high score (>90):');
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 90) {
        console.log(`Found high score: ${scores[i]} at position ${i}`);
        break; // Exit the loop
    }
    console.log(`Checking score: ${scores[i]}`);
}

// 7. CONTINUE STATEMENT
// Skips current iteration and continues with next
console.log('\nValid scores only (skipping 0 and null):');
for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0 || scores[i] === null) {
        console.log(`Skipping invalid score at position ${i}`);
        continue; // Skip to next iteration
    }
    console.log(`Valid score: ${scores[i]}`);
}

console.log('\n=== NESTED LOOPS ===');

// 8. NESTED LOOPS
// Multiplication table
console.log('Multiplication table (3x3):');
for (let i = 1; i <= 3; i++) {
    let row = '';
    for (let j = 1; j <= 3; j++) {
        row += `${i * j}\t`;
    }
    console.log(row);
}

console.log('\n=== PRACTICAL EXAMPLES ===');

// 9. ARRAY METHODS (Modern alternatives to traditional loops)
console.log('Using modern array methods:');

// forEach - execute function for each element
students.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
});

// map - transform each element
const upperCaseStudents = students.map(student => student.toUpperCase());
console.log('Uppercase names:', upperCaseStudents);

// filter - select elements that meet criteria
const validScores = scores.filter(score => score > 0 && score !== null);
console.log('Valid scores:', validScores);

// find - get first element that matches
const highScore = scores.find(score => score > 90);
console.log('First high score:', highScore);

// reduce - accumulate values
const totalScore = validScores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / validScores.length;
console.log(`Average score: ${averageScore.toFixed(2)}`);

// 10. PERFORMANCE COMPARISON
console.log('\n=== Performance Tips ===');

// Cache array length for better performance in large loops
const largeArray = new Array(1000).fill(0);

console.time('Without caching length');
for (let i = 0; i < largeArray.length; i++) {
    // Some operation
}
console.timeEnd('Without caching length');

console.time('With cached length');
const length = largeArray.length;
for (let i = 0; i < length; i++) {
    // Some operation
}
console.timeEnd('With cached length');