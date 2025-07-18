# Loan Qualification Checker

This JavaScript project determines the type of loan(s) a person qualifies for based on their **annual income** and **credit score**. The loans considered include:

- Duplex Loan
- Condo Loan
- Car Loan

---

## 📌 Objective

To simulate a basic **loan eligibility system** where users can input their income and credit score, and the program tells them which type(s) of loan they qualify for.

---

## 🧮 Eligibility Criteria

The loan qualification rules are defined as follows:

| Loan Type   | Minimum Annual Income | Minimum Credit Score |
| ----------- | --------------------- | -------------------- |
| Duplex Loan | $60,000               | 700                  |
| Condo Loan  | $45,000               | 680                  |
| Car Loan    | $30,000               | 650                  |

---

## 💡 How It Works

The function `getLoanMessage(annualIncome, creditScore)` takes two arguments:
- `annualIncome` → The user's income per year.
- `creditScore` → The user's credit score.

It then evaluates which loan(s) the user qualifies for based on the thresholds and returns a relevant message:

```javascript
function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

✅ Example Outputs
console.log(getLoanMessage(85000, 850));  // You qualify for a duplex, condo, and car loan.
console.log(getLoanMessage(65000, 690));  // You qualify for a condo and car loan.
console.log(getLoanMessage(45000, 660));  // You qualify for a car loan.
console.log(getLoanMessage(25000, 550));  // You don't qualify for any loans.
