# 🔮 Fortune Teller - JavaScript Random Message Generator

Welcome to the **Fortune Teller**!  
This simple JavaScript program selects a random fortune from a list of five and displays it to the user. It's a great beginner exercise to practice generating random numbers and using conditional logic.

---

## 📌 Features

- Generates a random number between 1 and 5 (inclusive)
- Maps each number to a specific fortune
- Uses `Math.random()` and `Math.floor()` to ensure fair randomization
- Uses basic `if-else` logic to display a message

---

## 💻 Code Overview

```js
let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow."; 
let fortune3 = "Be cautious of your new neighbors."; 
let fortune4 = "You will find a new hobby soon."; 
let fortune5 = "It would be wise to avoid the color red today.";

// Generate a random number between 1 and 5 (inclusive)
const randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

// Select the fortune based on the random number
if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

// Display the selected fortune
console.log(selectedFortune);

📊 How It Works
Math.random() generates a decimal between 0 and 1.

Math.floor(Math.random() * 5) + 1 converts it into an integer between 1 and 5 inclusive.

An if-else chain maps the number to one of the predefined fortune messages.

The selected fortune is printed to the console.


🧪 Sample Output
You will find a new hobby soon.

Each time you run the program, you'll get a random fortune like:

"Your cat will look very cuddly today."

"The weather will be nice tomorrow."

"Be cautious of your new neighbors."

"You will find a new hobby soon."

"It would be wise to avoid the color red today."

✅ Learning Outcomes
By writing this script, you will:

Understand how to use Math.random() and Math.floor() to generate random integers

Learn how to use conditional (if-else) statements

Practice variable declaration and output in JavaScript