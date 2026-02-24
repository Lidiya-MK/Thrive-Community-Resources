// ============================================
// Week 12: Asynchronous JavaScript Demo File
// Use comment/uncomment to demo each concept
// ============================================

/*
const greet = (name) => {
  console.log("Hello, " + name + "!");
};

greet("Yordanos");
*/

// -----------------------------
// 1. Synchronous Example
// -----------------------------
/*  
console.log("Start");
console.log("Cook food");
console.log("Eat food");
console.log("End");
*/

// -----------------------------
// 2. Problem with Synchronous "Blocking"
// -----------------------------

/*
function cookFood() {
  // Simulate long cooking
  const start = Date.now();
  while (Date.now() - start < 3000) {} // blocks JS for 3 seconds
  console.log("Food is ready!");
}

console.log("Start");
cookFood(); // blocks everything
console.log("Eat food");
*/

// -----------------------------
// 3. Asynchronous Example (setTimeout)
// -----------------------------
/*
console.log("Order food");

setTimeout(() => {
  console.log("Food is ready!");
}, 2000);

console.log("Talk to friend");
*/

// -----------------------------
// 4. Callback Example
// -----------------------------

// no call back function example

/*
function orderFood() {
  console.log("Ordering food...");

  setTimeout(() => {
    console.log("Food ready!");
  }, 2000);
}

orderFood();
console.log("Start eating!");
*/

/*
function orderFood(callback) {
  console.log("Ordering food...");

  setTimeout(() => {
    console.log("Food ready!");
    callback();
  }, 2000);
}

function startEating(){
  console.log("Start eating!");
}

orderFood(startEating);
*/

// -----------------------------
// 5. Callback Hell Example
// -----------------------------

/*
function orderFood(cb) {
  setTimeout(() => {
    console.log("Food is ready!");
    cb();
  }, 1000);
}

function prepareTable(cb) {
  setTimeout(() => {
    console.log("Table is ready!");
    cb();
  }, 1000);
}

function getDrinks(cb) {
  setTimeout(() => {
    console.log("Drinks served!");
    cb();
  }, 1000);
}

orderFood(() => {
  prepareTable(() => {
    getDrinks(() => {
      console.log("Eat food!");
    });
  });
});

*/

// Better version is promise
/*
orderFood()
  .then(prepareTable)
  .then(getDrinks)
  .then(() => {
    console.log("Eat food!");
  })
  .catch(error => {
    console.log(error);
  });
*/

// -----------------------------
// 6. Promise Example
// -----------------------------
/*
const cookFoodPromise = new Promise((resolve, reject) => {
  console.log("Ordering food with Promise...");
  setTimeout(() => {
    const success = true; // try changing to false to see reject
    if (success) resolve("Food ready!");
    else reject("Kitchen burned down!");
  }, 2000);
});

cookFoodPromise
  .then((message) => {
    console.log(message);
    console.log("Start eating!");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
*/

// -----------------------------
// 7. Fetch API Example with Promises
// -----------------------------
/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // parse JSON
  .then((data) => {
    console.log("Fetched data with .then():", data);
  })
  .catch((error) => console.log("Error fetching:", error));
*/

// -----------------------------
// 8. Async/Await Example
// -----------------------------
/*
async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    console.log("Fetched data with async/await:", data);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

getPost();
*/

// -----------------------------
// 9. Error Handling Demo
// -----------------------------
/*
async function getWrongPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/wrong");
    if (!response.ok) throw new Error("API error");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Caught error:", err);
  }
}

getWrongPost();
*/

// -----------------------------
// 10. Mini Exercise Template
// -----------------------------
/*
async function fetchAllPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("API failed");
    const data = await response.json();
    data.forEach((post) => console.log(post.title));
  } catch (err) {
    console.log("Error:", err);
  }
}

// Call the function to try
// fetchAllPosts();
*/





// 1️⃣ Basic Version – Fetch All Posts
/*
async function fetchAllPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();


  posts.forEach((post) => {
    console.log(post.id);
  });
}

fetchAllPosts();
*/



/*2️⃣ Add Proper Error Handling (Better Version)*/
/*
async function fetchAllPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    posts.forEach((post) => {
      console.log(post.title);
    });

  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

fetchAllPosts();
*/

/*3️⃣ 🎁 Bonus – Fetch Single Post by ID*/

/*
async function fetchPostById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
      throw new Error("Post not found");
    }

    const post = await response.json();
    console.log(post);

    console.log("Title:", post.title);
    console.log("Body:", post.body);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Example usage
fetchPostById(5);

*/


console.log("first");

setTimeout(() => {
    console.log("working");
    
},0);

console.log("last");


