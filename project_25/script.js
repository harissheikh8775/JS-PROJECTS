function frankenSplice(arr1, arr2, index) {
  let newArr = arr2.slice();
  newArr.splice(index, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5], 1);
// Returns: [4, 1, 2, 3, 5]

frankenSplice([1, 2], ["a", "b"], 1);
// Returns: ["a", 1, 2, "b"]

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
// Returns: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

frankenSplice([1, 2, 3, 4], [], 0);
// Returns: [1, 2, 3, 4]
