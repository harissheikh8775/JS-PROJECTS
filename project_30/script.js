function sumAll(numArr) {
  const mini = Math.min(...numArr);
  const maxi = Math.max(...numArr);
  let sum = 0;

  for (let i = mini; i <= maxi; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([10, 5])); // 45
