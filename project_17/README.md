# 🍱 Lunch Menu Manager

This is a simple JavaScript project that simulates managing a lunch menu using array operations. The program allows adding and removing items from the lunch list, viewing the current menu, and randomly selecting a lunch item.

---

## 📋 Features

- ✅ Add lunch items to the **start** or **end** of the list
- ✅ Remove lunch items from the **start** or **end** of the list
- ✅ Display the current lunch menu
- ✅ Get a **randomly selected lunch item**
- ✅ Handles empty menu cases with user-friendly messages

---

## 📁 Project Structure

lunch-menu-manager/
├── script.js
└── README.md


> `lunchMenu.js` contains the main logic of the application

---

## 🚀 How to Run

1. Copy the code into a file named `lunchMenu.js`
2. Use Node.js to run the file:
   ```bash
   node lunchMenu.js

## 📌 Functions Overview
# addLunchToEnd(arr, str)
# Adds a lunch item to the end of the array
```
addLunchToEnd(lunches, "Pizza");
```

# addLunchToStart(arr, str)
# Adds a lunch item to the beginning of the array.
```addLunchToStart(lunches, "Salad");
```

# removeLastLunch(arr)
# Removes and logs the last lunch item
```
removeLastLunch(lunches);
```

# removeFirstLunch(arr)
# Removes and logs the first lunch item.
```
removeFirstLunch(lunches);
```

# getRandomLunch(arr)
# Selects and logs a random lunch item.
```
getRandomLunch(lunches);
```

# showLunchMenu(arr)
# Displays the current items in the lunch menu
``` 
showLunchMenu(lunches);
```

## 🧪 Sample Output
```
Salad added to the start of the lunch menu.
Pizza added to the end of the lunch menu.
Menu items: Salad, Pizza
Randomly selected lunch: Pizza
Pizza removed from the end of the lunch menu.
Salad removed from the start of the lunch menu.
The menu is empty.
```

# ❗ Edge Case Handling
Functions gracefully handle cases where the menu is empty

Clear console messages help track each operation

# 📚 Learning Concepts
This project demonstrates:

Array operations (push, pop, shift, unshift)

Conditional logic

Random selection from arrays

Input validation and safety checks

Console logging for feedback

# 🛠️ Technologies Used
JavaScript (Vanilla)

Node.js (for running the script locally)

