// ========================================
// JAVASCRIPT TERNARY OPERATOR
// ========================================

// The ternary operator is a shorthand for if-else statements
// Syntax: condition ? valueIfTrue : valueIfFalse

console.log('=== Basic Ternary Examples ===');

// 1. BASIC TERNARY OPERATOR
let age = 20;
let canVote = age >= 18 ? "Can vote!" : "Cannot vote yet";
console.log(`Age ${age}: ${canVote}`);

// Compare with if-else equivalent:
let canVoteIfElse;
if (age >= 18) {
    canVoteIfElse = "Can vote!";
} else {
    canVoteIfElse = "Cannot vote yet";
}
console.log(`If-else result: ${canVoteIfElse}`);

// 2. MULTIPLE TERNARY EXAMPLES
console.log('\n=== Multiple Examples ===');

let temperature = 25;
let weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : temperature > 10 ? "Cool" : "Cold";
console.log(`Temperature ${temperature}°C: ${weather}`);

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(`Score ${score}: Grade ${grade}`);

let time = 14; // 24-hour format
let greeting = time < 12 ? "Good morning!" : time < 18 ? "Good afternoon!" : "Good evening!";
console.log(`Time ${time}:00 - ${greeting}`);

// 3. TERNARY WITH FUNCTIONS
console.log('\n=== Ternary with Functions ===');

function checkAccess(userRole) {
    return userRole === "admin" ? "Full access granted" : "Limited access";
}

function getDiscount(isMember) {
    return isMember ? "20% discount applied" : "No discount available";
}

function validatePassword(password) {
    return password.length >= 8 ? "Strong password" : "Password too short";
}

console.log(checkAccess("admin"));        // Full access granted
console.log(checkAccess("user"));         // Limited access
console.log(getDiscount(true));           // 20% discount applied
console.log(getDiscount(false));          // No discount available
console.log(validatePassword("mypass123")); // Strong password
console.log(validatePassword("123"));      // Password too short

// 4. TERNARY IN ARRAY OPERATIONS
console.log('\n=== Ternary in Arrays ===');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Check if numbers are even or odd
const evenOdd = numbers.map(num => num % 2 === 0 ? "even" : "odd");
console.log("Even/Odd:", evenOdd);

// Categorize numbers
const categories = numbers.map(num => 
    num <= 3 ? "small" : 
    num <= 7 ? "medium" : 
    "large"
);
console.log("Categories:", categories);

// 5. TERNARY WITH OBJECTS
console.log('\n=== Ternary with Objects ===');

const users = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 17, isActive: false },
    { name: "Charlie", age: 30, isActive: true }
];

users.forEach(user => {
    const status = user.isActive ? "Active" : "Inactive";
    const ageGroup = user.age >= 18 ? "Adult" : "Minor";
    const access = user.age >= 18 && user.isActive ? "Granted" : "Denied";
    
    console.log(`${user.name}: ${status}, ${ageGroup}, Access: ${access}`);
});

// 6. NESTED TERNARY (USE WITH CAUTION)
console.log('\n=== Nested Ternary (Complex) ===');

function getShippingCost(weight, isPriority, isMember) {
    return weight > 10 
        ? (isPriority ? (isMember ? 15 : 20) : (isMember ? 10 : 12))
        : (isPriority ? (isMember ? 8 : 10) : (isMember ? 5 : 7));
}

// Better alternative using if-else for complex logic
function getShippingCostClear(weight, isPriority, isMember) {
    let baseCost = weight > 10 ? 12 : 7;
    let priorityExtra = isPriority ? 5 : 0;
    let memberDiscount = isMember ? 2 : 0;
    
    return baseCost + priorityExtra - memberDiscount;
}

console.log("Heavy, Priority, Member:", getShippingCost(15, true, true));
console.log("Light, Regular, Non-member:", getShippingCost(5, false, false));

// 7. PRACTICAL EXAMPLES
console.log('\n=== Practical Examples ===');

// Login status
function getLoginMessage(username) {
    return username ? `Welcome back, ${username}!` : "Please log in";
}

// Shopping cart
function getCartMessage(itemCount) {
    return itemCount === 0 ? "Your cart is empty" : 
           itemCount === 1 ? "You have 1 item in cart" : 
           `You have ${itemCount} items in cart`;
}

// File size formatter
function formatFileSize(bytes) {
    return bytes < 1024 ? `${bytes} B` :
           bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` :
           `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Theme selector
function getThemeClass(isDark) {
    return isDark ? "dark-theme" : "light-theme";
}

console.log(getLoginMessage("John"));           // Welcome back, John!
console.log(getLoginMessage(""));               // Please log in
console.log(getCartMessage(0));                // Your cart is empty
console.log(getCartMessage(1));                // You have 1 item in cart
console.log(getCartMessage(5));                // You have 5 items in cart
console.log(formatFileSize(500));              // 500 B
console.log(formatFileSize(2048));             // 2.0 KB
console.log(formatFileSize(5242880));          // 5.0 MB
console.log(getThemeClass(true));              // dark-theme

// 8. WHEN TO USE TERNARY VS IF-ELSE
console.log('\n=== Best Practices ===');

// ✅ Good use of ternary (simple, readable)
const buttonText = isLoggedIn ? "Logout" : "Login";
const maxValue = a > b ? a : b;
const displayName = user.nickname || user.fullName ? user.nickname || user.fullName : "Anonymous";

// ❌ Avoid complex nested ternary (hard to read)
// const complexResult = condition1 ? (condition2 ? value1 : (condition3 ? value2 : value3)) : value4;

// ✅ Better: Use if-else for complex logic
function getComplexResult(condition1, condition2, condition3) {
    if (condition1) {
        if (condition2) {
            return "value1";
        } else if (condition3) {
            return "value2";
        } else {
            return "value3";
        }
    } else {
        return "value4";
    }
}

// 9. TERNARY WITH MODERN JAVASCRIPT
console.log('\n=== Modern JavaScript Features ===');

// With template literals
const user = { name: "Alice", premium: true };
const welcomeMessage = `Hello ${user.name}! ${user.premium ? "Welcome to Premium!" : "Consider upgrading to Premium!"}`;
console.log(welcomeMessage);

// With destructuring
const { name, premium } = user;
const userType = premium ? "Premium User" : "Regular User";
console.log(`${name} is a ${userType}`);

// With optional chaining (ES2020)
const userData = { profile: { settings: { theme: "dark" } } };
const theme = userData?.profile?.settings?.theme ? "Custom theme set" : "Default theme";
console.log(theme);

console.log('\n=== Summary ===');
console.log('Ternary operator is perfect for:');
console.log('• Simple conditional assignments');
console.log('• Short conditional expressions');
console.log('• Inline conditional rendering');
console.log('• Default value assignments');
console.log('\nAvoid ternary for:');
console.log('• Complex nested conditions');
console.log('• Multiple statements');
console.log('• When readability suffers');