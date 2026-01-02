// ========================================
// JAVASCRIPT FUNCTIONS
// ========================================

// 1. FUNCTION DECLARATION
// Traditional way to declare functions
function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {
    return a + b;
}

function multiply(x, y) {
    return x * y;
}

// 2. FUNCTION EXPRESSION
// Functions stored in variables
const subtract = function(a, b) {
    return a - b;
};

// 3. ARROW FUNCTIONS
// Modern ES6 syntax - shorter and cleaner
const divide = (a, b) => {
    return a / b;
};

// Arrow function with single expression (implicit return)
const square = (num) => num * num;

// Arrow function with single parameter (parentheses optional)
const double = num => num * 2;

// Arrow function with no parameters
const getRandomNumber = () => Math.floor(Math.random() * 100);

// 4. FUNCTION WITH DEFAULT PARAMETERS
function createUser(name, age = 18, role = 'user') {
    return {
        name: name,
        age: age,
        role: role
    };
}

// 5. FUNCTION WITH REST PARAMETERS
function calculateSum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// ========================================
// EXAMPLES AND USAGE
// ========================================

console.log('=== Function Examples ===');

// Basic function calls
console.log(greet('Alice'));           // Hello, Alice!
console.log(add(5, 3));               // 8
console.log(multiply(4, 7));          // 28

// Function expressions and arrow functions
console.log(subtract(10, 4));         // 6
console.log(divide(15, 3));           // 5
console.log(square(6));               // 36
console.log(double(9));               // 18
console.log(getRandomNumber());       // Random number 0-99

// Default parameters
console.log(createUser('John'));                    // {name: 'John', age: 18, role: 'user'}
console.log(createUser('Sarah', 25));               // {name: 'Sarah', age: 25, role: 'user'}
console.log(createUser('Mike', 30, 'admin'));       // {name: 'Mike', age: 30, role: 'admin'}

// Rest parameters
console.log(calculateSum(1, 2, 3, 4, 5));          // 15
console.log(calculateSum(10, 20));                  // 30

// 6. HIGHER-ORDER FUNCTIONS
// Functions that take other functions as parameters
function processArray(arr, callback) {
    return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
console.log(processArray(numbers, double));         // [2, 4, 6, 8, 10]
console.log(processArray(numbers, square));         // [1, 4, 9, 16, 25]