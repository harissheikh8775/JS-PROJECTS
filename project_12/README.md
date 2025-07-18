# Email Masking Utility

This is a simple JavaScript utility that takes an email address and masks all characters in the local part (before the '@' symbol) except the first and last character. The domain part remains unchanged. This is often used to protect privacy when displaying email addresses.

## 📌 Example

```javascript
Input:  "apple.pie@example.com"
Output: "a********e@example.com"


💡 Features
Masks email address for privacy

Keeps the first and last characters of the local part visible

Simple and easy-to-read implementation

No external dependencies

🚀 Getting Started
Clone or download this repository.

Run the JavaScript file using Node.js or include it in your HTML.

🧩 Code Explanation
```
function maskEmail(email) {
  const firstName = email.slice(0, email.indexOf("@"));
  const domainName = email.slice(email.indexOf("@"));

  let maskedFirstName = "";
  for (let i = 0; i < firstName.length; i++) {
    if (i === 0 || i === firstName.length - 1) {
      maskedFirstName += firstName[i]; // Keep first and last characters
    } else {
      maskedFirstName += "*"; // Replace middle characters with '*'
    }
  }

  return maskedFirstName + domainName;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email)); // Output: a********e@example.com
```

🛠️ Requirements
JavaScript (Node.js or browser environment)
