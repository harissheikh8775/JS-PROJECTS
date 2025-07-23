# 🔐 Random Password Generator

A simple and efficient JavaScript-based password generator that creates a secure random password of a specified length using letters, numbers, and special characters.

---

## 🚀 Features

- Generates a random password of any given length.
- Includes:
  - Uppercase & lowercase letters
  - Numbers
  - Special characters like `!@#$%^&*()`
- Lightweight and easy to integrate into any JS project.

---

## 🧠 How It Works

```js
function generatePassword(passLen) {
  const randomCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < passLen; i++) {
    let randomIndex = Math.floor(Math.random() * randomCharString.length);
    password += randomCharString[randomIndex];
  }

  return password;
}
