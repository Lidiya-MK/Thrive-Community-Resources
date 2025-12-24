/**
 * Intro JS exercise bundle (from your PDF):
**/


function toNumberOrNull(value) {
  if (value === null) return null; 
  const n = Number(value.trim());
  return Number.isFinite(n) ? n : null;
}

function askNumber(message) {
  while (true) {
    const input = prompt(message);
    const n = toNumberOrNull(input);

    if (n !== null) return n;

   
    if (input === null) {
      alert("Cancelled. Bye!");
      throw new Error("User cancelled input.");
    }

    alert("Please enter a valid number.");
  }
}

// ---------- 1) Two numbers: print the larger ----------
const a = askNumber("Enter the first number:");
const b = askNumber("Enter the second number:");

let larger;
if (a > b) {
  larger = a;
} else if (b > a) {
  larger = b;
} else {
  larger = a; // equal
}

console.log(`1) Numbers: a=${a}, b=${b}`);
if (a === b) {
  console.log("   They are equal.");
} else {
  console.log(`   Larger number is: ${larger}`);
}

// ---------- 2) Age: Adult or Minor ----------
const age = askNumber("Enter your age:");

if (age >= 18) {
  alert("Adult");
  console.log(`2) Age ${age} => Adult`);
} else {
  alert("Minor");
  console.log(`2) Age ${age} => Minor`);
}

// ---------- 3) Number sign: Positive / Negative / Zero ----------
const x = askNumber("Enter a number (positive/negative/zero):");

let sign;
if (x > 0) {
  sign = "Positive";
} else if (x < 0) {
  sign = "Negative";
} else {
  sign = "Zero";
}

console.log(`3) Number ${x} => ${sign}`);
alert(sign);

console.log("Done ");

function changeText(){
    document.getElementById("title").textContent = "This is Thrive"
    alert("You Clicked!")
}
