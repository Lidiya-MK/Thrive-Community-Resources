// var name = "abe";
// function greet() {
//   console.log("Hello " + name);
// }







// scopelessness of var

// if (true) {
//   var x = 5;
// }
// console.log(x); // Still exists





// var vs let

function example() {
  if (true) {
    // let x = 10;
    // x = 4
    
    // const y = 10;
    // y = 6
    
  }

  // console.log(x); // 10
}







example();

// another example with let and const and reassigning

if (true) {
  let x = 10;
  const y = 20;
  //y = 30; // This will throw an error because y is a constant
  x = 15; // This is fine because x is declared with let
  //   console.log(x)
  //   console.log(y)
}
// console.log(x); // ReferenceError
// console.log(x); // ReferenceError
// console.log(y);

// Old way of declaring functions
var add = function (a, b) {
  return a + b;
};
// console.log(add(2, 3)); // 5

// New way of declaring functions using arrow functions
const addarrow = (a, b) => a + b;
// console.log(addarrow(2, 3)); // 5






// how they are simpler
const numbers = [1, 8, 3];

const doubles = numbers.map(function(n) {
  return n * 2
})
// console.log(doubles)

const dobules_arr = numbers.map((n) => n * 2)
//console.log(dobules_arr)







// String concatenation

// without template literals

const introduce= (name,age) => "hi " + name + "you are " + age

// console.log(introduce('meku', 20))

const introducelit= (name,age) => `i ${name} you are ${age}`
// console.log(introduce('meku', 20))

// with template literals





// Multiline strings

// without template literals
var id = 20;
var message = "Hello\n" + "Welcome to the system\n" + "Your ID is " + id;
// console.log(message);

// with template literals
var messageT = `Hello
welcome to the system
Your ID is ${id}`;
// console.log(messageT);

//Embedding expressions

//without template literals
let price = 10;
let quantity = 5;
var total = "Total: " + price * quantity;
// console.log(total);

//with template literals
var total = `Total: ${price * quantity}`;
// console.log(total);

// HTML building

let title = "Title";
let description = "This is a description";
// without template literals
var HTML =
  "<div>" + "<h1>" + title + "</h1>" + "<p>" + description + "</p>" + "</div>";

// with template literals

var HTML = `<div>
              <h1>${title}</h1>
              <p>${description}</p>
            </div>`;

// Destructuring object


const user = ["liya", 22];
const [name,age]= user
console.log(name,age)






// Destructuring arrays






const nums = [10, 20];
const [first, second] = nums;

// Spread operator with arrays

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1,2,3,4]
// console.log(arr2);

// Spread operator with objects


const user2 = { name: "abe", address: "kazanchis" };
const updateUser = {...user2, number: 9872376938, profile: "pic"}

console.log(updateUser)

// Expanding arrays in a function call

const numbs = [5, 6, 8];

