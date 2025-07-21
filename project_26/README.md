# Pyramid Pattern Generator in JavaScript

This is a simple JavaScript program that generates a pyramid pattern using a specified character/string, number of rows, and direction (normal or inverted).

## ✨ Features

- Generate both upright and inverted pyramid patterns.
- Customize the number of rows.
- Use any character or string to build the pyramid.

---

## 🧠 How It Works

The function `pyramid(str, rows, bool)` takes three parameters:

| Parameter | Type    | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| `str`     | String  | The character or string used in the pyramid.            |
| `rows`    | Number  | Total number of rows in the pyramid.                    |
| `bool`    | Boolean | If `false`, prints upright. If `true`, prints inverted. |

---

## 🔧 Function Code

```javascript
function pyramid(str, rows, bool) {
  let output = "\n"; // Include initial newline

  if (bool === false) {
    // Normal pyramid
    for (let i = 1; i <= rows; i++) {
      for (let space = 0; space < rows - i; space++) {
        output += " ";
      }
      for (let j = 1; j <= 2 * i - 1; j++) {
        output += str;
      }
      output += "\n"; // New line after each row
    }
  } else {
    // Inverted pyramid
    for (let i = 1; i <= rows; i++) {
      for (let space = 0; space < i - 1; space++) {
        output += " ";
      }
      for (let j = 1; j <= (2 * rows) - (2 * i - 1); j++) {
        output += str;
      }
      output += "\n"; // New line after each row
    }
  }

  return output;
}
```

