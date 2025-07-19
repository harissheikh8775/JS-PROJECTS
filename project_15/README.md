# ✂️ String Truncation Utility

This project provides a simple JavaScript function that **truncates a string** to a specified length and appends `"..."` (an ellipsis) if the original string exceeds that length.

---

## 📌 Purpose

To help shorten long strings — especially useful in UI components like:
- Article previews
- Blog summaries
- Card titles
- Notification messages

---

## 🧠 Logic Explained

The function `truncateString(str, num)` performs the following steps:

1. Calculates the original string length.
2. If the length is **greater than `num`**:
   - It loops through the first `num` characters of the string.
   - It appends an ellipsis `"..."` to the result.
3. If the length is **less than or equal to `num`**, it returns the string as is.

---

## 🧾 Code

```javascript
function truncateString(str, num) {
  const strLen = str.length;
  const dots = "...";
  let newStr = "";

  if (strLen > num) {
    for (let i = 0; i < num; i++) {
      newStr += str[i];
    }
    newStr += dots; // Properly append the ellipsis
  } else {
    return str; // No truncation needed
  }

  return newStr;
}

const string = "A-tisket a-tasket A green and yellow basket";
const result = truncateString(string, 8);
console.log(result); // Output: "A-tisket..."


| Input String                                    | Max Length | Output          |
| ----------------------------------------------- | ---------- | --------------- |
| `"A-tisket a-tasket A green and yellow basket"` | `8`        | `"A-tisket..."` |
| `"Hello"`                                       | `10`       | `"Hello"`       |
| `"Truncate me now!"`                            | `9`        | `"Truncate..."` |


🚀 How to Use
You can run this code in any JavaScript environment:

Browser (DevTools → Console)

Node.js

Online JS playgrounds like JSFiddle, Replit, or CodePen

##🛠️ Suggestions for Improvement
Use str.slice(0, num) instead of a loop for better performance:
```
return str.length > num ? str.slice(0, num) + "..." : str;
```
Allow custom ellipsis (e.g., "---" or " [more]")

Support truncation from the middle or end (for advanced use cases)Allow custom ellipsis (e.g., "---" or " [more]")

Support truncation from the middle or end (for advanced use cases)