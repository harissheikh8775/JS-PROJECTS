function factorialCalculator(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    return "Invalid input. Please enter a non-negative integer.";
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const num = 5;
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
