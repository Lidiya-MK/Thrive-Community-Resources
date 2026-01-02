// ========================================
// JAVASCRIPT CONDITIONALS (IF/ELSE)
// ========================================

// 1. BASIC IF STATEMENT
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside!");
}

// 2. IF-ELSE STATEMENT
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// 3. IF-ELSE IF-ELSE CHAIN
let grade = 85;

if (grade >= 90) {
    console.log('Grade: A - Excellent!');
} else if (grade >= 80) {
    console.log('Grade: B - Good job!');
} else if (grade >= 70) {
    console.log('Grade: C - Average');
} else if (grade >= 60) {
    console.log('Grade: D - Below average');
} else {
    console.log('Grade: F - Failed');
}

// 4. COMPARISON OPERATORS
console.log('\n=== Comparison Operators ===');

// Equality vs Strict Equality
console.log('5 == "5":', 5 == "5");     // true (type coercion)
console.log('5 === "5":', 5 === "5");   // false (no type coercion)

console.log('0 == false:', 0 == false);     // true
console.log('0 === false:', 0 === false);   // false

// Other comparison operators
let x = 10;
let y = 5;

console.log('x > y:', x > y);           // true
console.log('x < y:', x < y);           // false
console.log('x >= 10:', x >= 10);       // true
console.log('x <= 5:', x <= 5);         // false
console.log('x != y:', x != y);         // true
console.log('x !== "10":', x !== "10"); // true

// 5. LOGICAL OPERATORS
console.log('\n=== Logical Operators ===');

let isLoggedIn = true;
let hasPermission = false;
let isAdmin = true;

// AND (&&) - both conditions must be true
if (isLoggedIn && hasPermission) {
    console.log("Access granted");
} else {
    console.log("Access denied - missing permission");
}

// OR (||) - at least one condition must be true
if (isLoggedIn || isAdmin) {
    console.log("Welcome to the system");
}

// NOT (!) - reverses the boolean value
if (!hasPermission) {
    console.log("User lacks permission");
}

// 6. COMPLEX CONDITIONS
let userAge = 25;
let hasLicense = true;
let hasInsurance = true;

if (userAge >= 18 && hasLicense && hasInsurance) {
    console.log("You can rent a car");
} else if (userAge < 18) {
    console.log("You must be 18 or older");
} else if (!hasLicense) {
    console.log("You need a valid driver's license");
} else if (!hasInsurance) {
    console.log("You need insurance coverage");
}

// 7. NESTED CONDITIONS
let weather = "sunny";
let hasUmbrella = false;

if (weather === "rainy") {
    if (hasUmbrella) {
        console.log("Good, you have an umbrella!");
    } else {
        console.log("You should get an umbrella");
    }
} else if (weather === "sunny") {
    console.log("Perfect weather for a walk!");
} else {
    console.log("Check the weather forecast");
}

// 8. PRACTICAL EXAMPLES
console.log('\n=== Practical Examples ===');

// Login validation
function validateLogin(username, password) {
    if (!username || !password) {
        return "Username and password are required";
    } else if (username.length < 3) {
        return "Username must be at least 3 characters";
    } else if (password.length < 6) {
        return "Password must be at least 6 characters";
    } else {
        return "Login successful";
    }
}

console.log(validateLogin("", "123456"));        // Username and password are required
console.log(validateLogin("jo", "123456"));      // Username must be at least 3 characters
console.log(validateLogin("john", "123"));       // Password must be at least 6 characters
console.log(validateLogin("john", "123456"));    // Login successful

// Grade calculator
function calculateLetterGrade(score) {
    if (score >= 97) return 'A+';
    else if (score >= 93) return 'A';
    else if (score >= 90) return 'A-';
    else if (score >= 87) return 'B+';
    else if (score >= 83) return 'B';
    else if (score >= 80) return 'B-';
    else if (score >= 77) return 'C+';
    else if (score >= 73) return 'C';
    else if (score >= 70) return 'C-';
    else if (score >= 60) return 'D';
    else return 'F';
}

console.log(`Score 95: ${calculateLetterGrade(95)}`);  // A
console.log(`Score 82: ${calculateLetterGrade(82)}`);  // B
console.log(`Score 55: ${calculateLetterGrade(55)}`);  // F