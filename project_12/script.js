function maskEmail(email) {
  const firstName = email.slice(0, email.indexOf("@"));
  const domainName = email.slice(email.indexOf("@"));

  let maskedFirstName = "";
  for (let i = 0; i < firstName.length; i++) {
    if (i === 0 || i === firstName.length - 1) {
      maskedFirstName += firstName[i];
    } else {
      maskedFirstName += "*";
    }
  }

  return maskedFirstName + domainName;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email)); // Output: a********e@example.com
