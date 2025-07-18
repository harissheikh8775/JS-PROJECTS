# 🤖 MathBot - JavaScript Math Object Tutorial

Welcome to the **JavaScript MathBot Tutorial**!  
This beginner-friendly script demonstrates how to use the built-in `Math` object in JavaScript. From generating random numbers to rounding and finding minimum/maximum values — this guide covers it all.

---

## 📋 What This Script Covers

- `Math.random()` — Generate random numbers
- `Math.floor()` — Round down to the nearest whole number
- `Math.ceil()` — Round up to the nearest whole number
- `Math.round()` — Round to the nearest whole number
- `Math.max()` & `Math.min()` — Get the highest and lowest number from a set

---

## 💻 Code Overview

```js
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);

// Random number between 0 (inclusive) and 1 (exclusive)
console.log("The Math.random() method returns a pseudo random number between 0 and less than 1.");
const randomNum = Math.random();
console.log(randomNum);

// Random number between two values
console.log("Now, generate a random number between two values.");
const min = 1;
const max = 100;
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

// Math.floor()
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

// Math.ceil()
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

// Math.round()
console.log("The Math.round() method rounds the value to the nearest whole integer.");
const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

// Math.max() and Math.min()
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

console.log("It was fun learning about the different Math methods with you!");

🧠 Concepts in Action
Method	      ->     Description
Math.random() ->	Generates a pseudo-random number between 0 and 1 (not including 1).
Math.floor() ->	Rounds down to the nearest whole number.
Math.ceil() ->	Rounds up to the nearest whole number.
Math.round() ->	Rounds to the nearest whole number.
Math.max() ->	Returns the largest number from a list.
Math.min() ->	Returns the smallest number from a list.

##🧪 Sample Output

Hi there! My name is MathBot and I am here to teach you about the Math object!
The Math.random() method returns a pseudo random number between 0 and less than 1.
0.7418237423654
Now, generate a random number between two values.
48.2342189428
The Math.floor() method rounds the value down to the nearest whole integer.
6
The Math.ceil() method rounds the value up to the nearest whole integer.
4
The Math.round() method rounds the value to the nearest whole integer.
3
11
The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.
125
2
It was fun learning about the different Math methods with you!

🚀 Try It Yourself!
Copy the code into any JavaScript environment like:

JSFiddle

CodePen

Node.js (via terminal)