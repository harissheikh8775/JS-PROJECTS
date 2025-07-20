function mutation(strArr) {
  const firstStr = strArr[0].toLowerCase();
  const secondStr = strArr[1].toLowerCase();

  for (let i = 0; i < secondStr.length; i++) {
    if (!firstStr.includes(secondStr[i])) {
      return false;
    }
  }
  return true;
}

// Sample Test Cases
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["Mary", "Army"])); // true
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["Alien", "line"])); // true
console.log(mutation(["floor", "for"])); // true
console.log(mutation(["Noel", "Ole"])); // true
console.log(mutation(["hello", "hey"])); // false
