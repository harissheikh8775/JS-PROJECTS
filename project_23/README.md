# 🔤 Mutation Checker

This project provides a simple JavaScript function to check if **all the letters** of the second string are present in the first string. It's **case-insensitive** and does **not consider order**.

---

## ✅ Functionality

The `mutation` function takes an array of two strings and returns:

- `true` → if every character in the second string exists in the first string
- `false` → otherwise

---

## 🔍 Examples

```js
mutation(["hello", "Hello"]); // true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // true
mutation(["Mary", "Army"]); // true
mutation(["Mary", "Aarmy"]); // true
mutation(["Alien", "line"]); // true
mutation(["floor", "for"]); // true
mutation(["Noel", "Ole"]); // true
mutation(["hello", "hey"]); // false
