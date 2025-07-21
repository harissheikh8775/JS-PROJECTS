# FrankenSplice

This JavaScript project implements a function called `frankenSplice()` that inserts the elements of one array into another at a given index **without modifying the original arrays**.

---

## ✅ Features

- Merges two arrays at a specified index.
- Maintains original order of inserted elements.
- Original arrays remain unmodified (pure function).
- Uses spread syntax and `.slice()` for clean implementation.

---

## 🚀 Function Definition

```javascript
function frankenSplice(arr1, arr2, index)
```

## 🧪 Test Cases
| Input                                                                            | Expected Output                                              |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `frankenSplice([1, 2, 3], [4, 5], 1)`                                            | `[4, 1, 2, 3, 5]`                                            |
| `frankenSplice([1, 2], ["a", "b"], 1)`                                           | `["a", 1, 2, "b"]`                                           |
| `frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` | `["head", "shoulders", "claw", "tentacle", "knees", "toes"]` |
| `frankenSplice([1, 2, 3, 4], [], 0)`                                             | `[1, 2, 3, 4]`                                               |
