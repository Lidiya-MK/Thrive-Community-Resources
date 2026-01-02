// ========================================
// JAVASCRIPT BLOCK SCOPE AND FUNCTIONS
// ========================================

// Understanding scope, hoisting, and variable declarations

console.log('=== VARIABLE DECLARATIONS ===');

// 1. VAR - Function scoped, hoisted, can be redeclared
console.log('\n--- VAR Examples ---');

// Hoisting example with var
console.log('Before declaration:', typeof varExample); // undefined (hoisted but not initialized)
var varExample = "I'm a var variable";
console.log('After declaration:', varExample);

// Function scope with var
function varScopeExample() {
    if (true) {
        var functionScoped = "I'm accessible throughout the function";
    }
    console.log('Inside function:', functionScoped); // Works! var is function-scoped
}
varScopeExample();

// Redeclaration with var (allowed but not recommended)
var redeclareExample = "First value";
var redeclareExample = "Second value"; // No error
console.log('Redeclared var:', redeclareExample);

// 2. LET - Block scoped, not hoisted, cannot be redeclared
console.log('\n--- LET Examples ---');

// Block scope with let
function letScopeExample() {
    if (true) {
        let blockScoped = "I'm only accessible in this block";
        console.log('Inside block:', blockScoped);
    }
    // console.log(blockScoped); // Error! blockScoped is not defined
    console.log('Outside block: blockScoped is not accessible');
}
letScopeExample();

// Temporal Dead Zone with let
// console.log(letHoisting); // Error! Cannot access before initialization
let letHoisting = "I'm not hoisted like var";
console.log('Let after declaration:', letHoisting);

// Cannot redeclare let in same scope
let uniqueName = "First";
// let uniqueName = "Second"; // Error! Identifier 'uniqueName' has already been declared

// 3. CONST - Block scoped, not hoisted, cannot be redeclared or reassigned
console.log('\n--- CONST Examples ---');

const PI = 3.14159;
console.log('PI constant:', PI);

// const must be initialized
// const uninitialized; // Error! Missing initializer

// Cannot reassign const
// PI = 3.14; // Error! Assignment to constant variable

// But objects and arrays can be mutated
const person = { name: "Alice", age: 25 };
person.age = 26; // This works! We're modifying the object, not reassigning
console.log('Modified const object:', person);

const numbers = [1, 2, 3];
numbers.push(4); // This works! We're modifying the array, not reassigning
console.log('Modified const array:', numbers);

// 4. BLOCK SCOPE EXAMPLES
console.log('\n=== BLOCK SCOPE EXAMPLES ===');

// Different behaviors in loops
console.log('--- Loop Variable Behavior ---');

// With var (function scoped)
console.log('Using var in loop:');
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log('var i:', i), 10); // All print 3!
}

// With let (block scoped)
console.log('Using let in loop:');
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log('let j:', j), 20); // Prints 0, 1, 2
}

// Block scope in if statements
if (true) {
    var varInBlock = "I'm accessible outside";
    let letInBlock = "I'm only in this block";
    const constInBlock = "I'm also only in this block";
}

console.log('var outside block:', varInBlock); // Works
// console.log(letInBlock); // Error!
// console.log(constInBlock); // Error!

// 5. FUNCTION DECLARATIONS VS EXPRESSIONS
console.log('\n=== FUNCTION DECLARATIONS VS EXPRESSIONS ===');

// Function declarations are hoisted
console.log('Calling hoisted function:', hoistedFunction()); // Works!

function hoistedFunction() {
    return "I'm hoisted and can be called before declaration";
}

// Function expressions are not hoisted
// console.log(notHoisted()); // Error! Cannot access before initialization

const notHoisted = function() {
    return "I'm not hoisted";
};

console.log('Calling after declaration:', notHoisted());

// Arrow functions are also not hoisted
// console.log(arrowNotHoisted()); // Error!

const arrowNotHoisted = () => "Arrow functions aren't hoisted either";
console.log('Arrow function after declaration:', arrowNotHoisted());

// 6. CLOSURES AND SCOPE
console.log('\n=== CLOSURES AND SCOPE ===');

function outerFunction(x) {
    // This is the outer scope
    
    function innerFunction(y) {
        // Inner function has access to outer scope
        return x + y;
    }
    
    return innerFunction;
}

const addFive = outerFunction(5);
console.log('Closure example:', addFive(3)); // 8

// Counter example with closure
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log('Counter initial:', counter.getCount()); // 0
console.log('After increment:', counter.increment()); // 1
console.log('After increment:', counter.increment()); // 2
console.log('After decrement:', counter.decrement()); // 1

// 7. TEMPORAL DEAD ZONE
console.log('\n=== TEMPORAL DEAD ZONE ===');

function temporalDeadZoneExample() {
    console.log('Before let declaration');
    
    // This would cause an error:
    // console.log(temporalVar); // ReferenceError
    
    let temporalVar = "Now I exist";
    console.log('After let declaration:', temporalVar);
}

temporalDeadZoneExample();

// 8. BEST PRACTICES
console.log('\n=== BEST PRACTICES ===');

// ✅ Use const by default
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};

// ✅ Use let when you need to reassign
let currentUser = null;
currentUser = { name: "John", id: 123 };

// ❌ Avoid var in modern JavaScript
// var oldStyle = "Don't use this";

// ✅ Use meaningful names and proper scope
function calculateTotal(items) {
    let total = 0;
    
    for (const item of items) {
        total += item.price;
    }
    
    return total;
}

const shoppingCart = [
    { name: "Book", price: 15 },
    { name: "Pen", price: 2 },
    { name: "Notebook", price: 8 }
];

console.log('Shopping cart total:', calculateTotal(shoppingCart));

// 9. COMMON PITFALLS
console.log('\n=== COMMON PITFALLS ===');

// Pitfall 1: Modifying const objects
const settings = { theme: "dark" };
settings.theme = "light"; // This works (modifying property)
console.log('Modified settings:', settings);

// Pitfall 2: Loop variables with var
console.log('Loop pitfall with var:');
var callbacks = [];
for (var k = 0; k < 3; k++) {
    callbacks.push(() => console.log('Callback k:', k)); // All will log 3
}
callbacks.forEach(callback => callback());

// Solution: Use let
console.log('Loop solution with let:');
var betterCallbacks = [];
for (let m = 0; m < 3; m++) {
    betterCallbacks.push(() => console.log('Better callback m:', m)); // Will log 0, 1, 2
}
betterCallbacks.forEach(callback => callback());

console.log('\n=== SUMMARY ===');
console.log('• Use const for values that won\'t be reassigned');
console.log('• Use let for values that will be reassigned');
console.log('• Avoid var in modern JavaScript');
console.log('• Understand block scope vs function scope');
console.log('• Be aware of hoisting and temporal dead zone');
console.log('• Use closures to create private variables');