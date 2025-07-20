function chunkArrayInGroups(chunkArr, num) {
  let outputArr = [];
  for (let i = 0; i < chunkArr.length; i += num) {
    outputArr.push(chunkArr.slice(i, i + num));
  }
  return outputArr;
}

// Sample usage
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
