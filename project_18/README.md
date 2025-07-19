# 🔁 Reverse String Project

A simple JavaScript project that takes a string as input and returns its reversed version. This project demonstrates basic string manipulation using JavaScript’s built-in methods.

---

## 📌 Objective

To reverse a given string using JavaScript.

---

## 💡 How It Works

The string reversal is done in three steps:
1. **Split** the string into an array of characters using `.split("")`
2. **Reverse** the array using `.reverse()`
3. **Join** the array back into a string using `.join("")`

```javascript
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
```

#🚀 How to Run
```
Save the code in a file named script.js
Run the file using Node.js:
```

```
node script.js
```

## 🧪 Example
```
console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseString("JavaScript"));  // Output: "tpircSavaJ"
```

## 🛠️ Technologies Used
```
JavaScript (ES6+)

Node.js (to run the file locally)
```

## 📚 Learning Concepts
```
This project helps you understand:

String manipulation

JavaScript arrow functions

Chaining array methods (split, reverse, join)

```

## 📁 Project Structure
```
reverse-string/
├── script.js
└── README.md
```