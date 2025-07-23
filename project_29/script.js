function generatePassword(passLen) {
  const randomCharString =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let password = "";
  for (let i = 0; i < passLen; i++) {
    let randomIndex = Math.floor(Math.random() * randomCharString.length);
    password += randomCharString[randomIndex];
  }
  return password;
}

const password = generatePassword(5);
console.log(`Generated password: ${password}`);
