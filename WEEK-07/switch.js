// ========================================
// JAVASCRIPT SWITCH STATEMENTS
// ========================================

// 1. BASIC SWITCH STATEMENT
console.log('=== Basic Switch Example ===');

let day = 3;

switch (day) {
    case 1:
        console.log("Monday - Start of the work week");
        break;
    case 2:
        console.log("Tuesday - Getting into the groove");
        break;
    case 3:
        console.log("Wednesday - Hump day!");
        break;
    case 4:
        console.log("Thursday - Almost there");
        break;
    case 5:
        console.log("Friday - TGIF!");
        break;
    case 6:
        console.log("Saturday - Weekend vibes");
        break;
    case 7:
        console.log("Sunday - Rest day");
        break;
    default:
        console.log("Invalid day number");
}

// 2. SWITCH WITH STRINGS
console.log('\n=== String Switch Example ===');

let superhero = "Spider-Man";

switch (superhero) {
    case "Batman":
        console.log("The Dark Knight - Gadgets and detective skills!");
        break;
    case "Superman":
        console.log("Man of Steel - Flying and super strength!");
        break;
    case "Wonder Woman":
        console.log("Amazon Princess - Lasso of truth and warrior skills!");
        break;
    case "Spider-Man":
        console.log("Your friendly neighborhood hero - Web-slinging and spider sense!");
        break;
    case "Iron Man":
        console.log("Genius billionaire - High-tech armor and AI!");
        break;
    default:
        console.log("Unknown hero - Every hero is special!");
}

// 3. SWITCH WITHOUT BREAK (FALL-THROUGH)
console.log('\n=== Fall-through Example ===');

let grade = 'B';

switch (grade) {
    case 'A':
    case 'A+':
        console.log("Excellent work!");
        console.log("You're in the top tier!");
        break;
    case 'B':
    case 'B+':
        console.log("Good job!");
        console.log("Above average performance!");
        break;
    case 'C':
        console.log("Average work");
        console.log("Room for improvement!");
        break;
    case 'D':
        console.log("Below average");
        console.log("Need to study more!");
        break;
    case 'F':
        console.log("Failed");
        console.log("Time to retake the course!");
        break;
    default:
        console.log("Invalid grade entered");
}

// 4. SWITCH WITH MULTIPLE CONDITIONS
console.log('\n=== Multiple Conditions Example ===');

let month = "December";

switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("Winter season - Time for hot cocoa!");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring season - Flowers are blooming!");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer season - Beach time!");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall season - Leaves are changing!");
        break;
    default:
        console.log("Invalid month");
}

// 5. SWITCH IN FUNCTIONS
console.log('\n=== Switch in Functions ===');

function getAnimalSound(animal) {
    switch (animal.toLowerCase()) {
        case "dog":
            return "Woof!";
        case "cat":
            return "Meow!";
        case "cow":
            return "Moo!";
        case "pig":
            return "Oink!";
        case "duck":
            return "Quack!";
        case "lion":
            return "Roar!";
        case "elephant":
            return "Trumpet!";
        default:
            return "Unknown animal sound";
    }
}

// Test the function
const animals = ["dog", "cat", "elephant", "unicorn"];
animals.forEach(animal => {
    console.log(`${animal}: ${getAnimalSound(animal)}`);
});

// 6. CALCULATOR USING SWITCH
console.log('\n=== Calculator Example ===');

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        case '%':
            return num1 % num2;
        case '**':
            return num1 ** num2;
        default:
            return "Error: Invalid operator";
    }
}

// Test calculator
console.log(`10 + 5 = ${calculator(10, '+', 5)}`);
console.log(`10 - 3 = ${calculator(10, '-', 3)}`);
console.log(`4 * 7 = ${calculator(4, '*', 7)}`);
console.log(`15 / 3 = ${calculator(15, '/', 3)}`);
console.log(`10 % 3 = ${calculator(10, '%', 3)}`);
console.log(`2 ** 3 = ${calculator(2, '**', 3)}`);
console.log(`5 & 2 = ${calculator(5, '&', 2)}`); // Invalid operator

// 7. TRAFFIC LIGHT SYSTEM
console.log('\n=== Traffic Light System ===');

function trafficLight(color) {
    switch (color.toLowerCase()) {
        case "red":
            return "STOP! Do not proceed.";
        case "yellow":
        case "amber":
            return "CAUTION! Prepare to stop.";
        case "green":
            return "GO! Proceed safely.";
        default:
            return "Invalid traffic light color";
    }
}

const lightColors = ["red", "yellow", "green", "blue"];
lightColors.forEach(color => {
    console.log(`${color}: ${trafficLight(color)}`);
});

// 8. SWITCH VS IF-ELSE COMPARISON
console.log('\n=== Switch vs If-Else Performance ===');

// When to use Switch:
// - Multiple specific values to check
// - Cleaner code for many conditions
// - Better performance for many cases

// When to use If-Else:
// - Range comparisons (>, <, >=, <=)
// - Complex boolean expressions
// - Different types of conditions

function gradeEvaluator(score) {
    // This is better with if-else due to ranges
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function dayTypeChecker(day) {
    // This is better with switch due to specific values
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "Weekday";
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
}

console.log(`Score 85: ${gradeEvaluator(85)}`);
console.log(`Monday is: ${dayTypeChecker("Monday")}`);
console.log(`Saturday is: ${dayTypeChecker("Saturday")}`);