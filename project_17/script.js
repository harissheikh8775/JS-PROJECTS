let lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  const lastRemoved = arr.pop();
  console.log(`${lastRemoved} removed from the end of the lunch menu.`);
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  const firstRemoved = arr.shift();
  console.log(`${firstRemoved} removed from the start of the lunch menu.`);
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const randomEle = Math.floor(Math.random() * arr.length);
  console.log(`Randomly selected lunch: ${arr[randomEle]}`);
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}

// Example usage
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);
