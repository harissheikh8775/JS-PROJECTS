# 🧮 JavaScript Math Operations

This simple JavaScript project demonstrates basic arithmetic operations using functions. It's ideal for beginners who want to understand how to define and use functions in JavaScript to perform calculations.

## 📂 Project Structure

math-operations/
├── index.js # JavaScript file with all function definitions and console logs
└── README.md # This file


## 🛠️ Features

The project includes the following operations:

- ✅ **Addition** (`calculateSum`)
- ✅ **Subtraction** (`calculateDifference`)
- ✅ **Multiplication** (`calculateProduct`)
- ✅ **Division** with zero-check (`calculateQuotient`)
- ✅ **Square** of a number (`calculateSquare`)
- ✅ **Square Root** of a number (`calculateSquareRoot`)

## 🧑‍💻 Functions Overview

### `calculateSum(num1, num2)`
Returns the sum of two numbers.

### `calculateDifference(num1, num2)`
Returns the difference between two numbers.

### `calculateProduct(num1, num2)`
Returns the product of two numbers.

### `calculateQuotient(num1, num2)`
Returns the quotient of `num1 / num2`. If `num2` is 0, returns an error message to prevent division by zero.

### `calculateSquare(num)`
Returns the square of a number using exponentiation (`**`).

### `calculateSquareRoot(num)`
Returns the square root using the built-in `Math.sqrt()` function.

## 📦 Example Output

calculateSum(2, 5) => 7
calculateDifference(22, 5) => 17
calculateProduct(13, 5) => 65
calculateQuotient(3, 0) => "Error: Division by zero"
calculateSquare(9) => 81
calculateSquareRoot(100) => 10


## 🚀 How to Run

1. Make sure you have Node.js installed.
2. Save the JavaScript code in a file named `index.js`.
3. Open a terminal and navigate to the project directory.
4. Run the file using:

```bash
node index.js


📚 Learning Objectives
Understand JavaScript function definitions

Perform arithmetic operations

Use conditionals and error handling

Work with Math functions