# 🍽️ Recipe Manager in JavaScript

This is a simple JavaScript-based project that manages and analyzes recipe data including ingredients, cooking time, ratings, and difficulty levels. It demonstrates fundamental JavaScript concepts such as arrays, objects, functions, and conditionals.

---

## 📁 Project Structure

```javascript
recipes = [
  {
    name: "Spaghetti Carbonara",
    ingredients: [...],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: '',
    ratings: [...],
    averageRating: null
  },
  ...
]

```

## ✅ Features
```
Add multiple recipes to a list.

Automatically calculate:

⭐ Average rating of each recipe

🥕 Total number of ingredients

🧑‍🍳 Difficulty level based on cooking time

Display the updated recipes with all data populated.
```

## 🧠 Logic Details
# 1. getAverageRating(ratings)
# Returns the average of the 4 rating values provided.
```
function getAverageRating(ratings) {
  const total = ratings[0] + ratings[1] + ratings[2] + ratings[3];
  return total / ratings.length;
}
```

# 2. getTotalIngredients(ingredients)
# Counts the number of ingredients in the recipe.
```
function getTotalIngredients(ingredients) {
  return ingredients.length;
}
```

# 3. getDifficultyLevel(cookingTime)
 Determines difficulty level based on cooking time:Determines difficulty level based on cooking time:
```
<= 30 min → Easy

31–60 min → Medium

> 60 min → Hard

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) return 'easy';
  else if (cookingTime <= 60) return 'medium';
  else return 'hard';
}

```

## 🖥️ Sample Output
# console.log(recipes);

```
Will output the full array of recipes, each enriched with:

averageRating

totalIngredients

difficultyLevel

```

## 📚 Concepts Used
```
JavaScript Objects and Arrays

Function creation and calling

Conditional logic

Data manipulation
```