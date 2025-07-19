# 🛒 Grocery Shopping List Project

This is a beginner-friendly JavaScript project that simulates a **dynamic grocery shopping list**. It demonstrates how to manage a list of items using core **array methods** and **functions** in JavaScript.

---

## 📌 Objective

The main goal of this project is to simulate a real-life scenario of creating and updating a shopping list. It helps learners understand how to:

- Use JavaScript arrays
- Apply array methods (`push`, `pop`, `unshift`, `shift`)
- Write and call functions
- Track state changes using console logs

---

## 🧾 Project Workflow

The script logs each step of the shopping experience to the console, updating the list in real-time using array operations.

### ✅ Step-by-step Summary

1. **Start with an empty list**  
   ```js
   const shoppingList = [];

## Add first item using push()
```
shoppingList.push("Apples");
```

## Print list using a helper function
```
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}
```

## Add more fruits
```
shoppingList.push("Grapes");
```

## Add cooking oil at the beginning using unshift()
```
shoppingList.unshift("Vegetable Oil");
```

## Add multiple snack items at the end
```
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");

```

## Remove the last item (too much junk food) using pop()
```
shoppingList.pop();
```

## Add dessert at the beginning
```
shoppingList.unshift("Chocolate Cake");
```

## Change mind: remove dessert and replace oil type
```
shoppingList.shift();         // removes "Chocolate Cake"
shoppingList[0] = "Canola Oil"; // replaces "Vegetable Oil"
```

## 🧠 Concepts Covered
```
✅ Arrays – for list management

✅ Array Methods:

push() – add items to end

unshift() – add items to beginning

pop() – remove last item

shift() – remove first item

✅ Functions – reusable logic for generating the shopping list message

✅ Console Logging – track changes after every action

```

## 📤 Sample Output
```
Grocery shopping list
It will be nice to have some fruit to eat.
Current Shopping List: Apples
Current Shopping List: Apples,Grapes
It looks like we need to get some cooking oil.
Current Shopping List: Vegetable Oil,Apples,Grapes
Current Shopping List: Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky,Potato Chips
This looks like too much junk food.
Current Shopping List: Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky
It might be nice to get a dessert.
Current Shopping List: Chocolate Cake,Vegetable Oil,Apples,Grapes,Popcorn,Beef Jerky
On second thought, maybe we should be more health conscious.
Current Shopping List: Canola Oil,Apples,Grapes,Popcorn,Beef Jerky
```


