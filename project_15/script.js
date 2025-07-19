function truncateString(str, num) {
  const strLen = str.length;
  const dots = "...";
  let newStr = "";
  if (strLen > num) {
    for (let i = 0; i < num; i++) {
      newStr += str[i];
    }
    newStr += dots;
  } else {
    return str;
  }

  return newStr;
}
const string = "A-tisket a-tasket A green and yellow basket";
const result = truncateString(string, 8);
console.log(result);
