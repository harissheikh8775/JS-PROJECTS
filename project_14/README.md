# 📆 Leap Year Checker

This is a simple JavaScript program that checks whether a given year is a **leap year** or **not**, based on standard leap year rules.

---

## 📌 Objective

To determine if a year is a leap year using conditional statements. This is a great beginner-friendly example for practicing:
- `if-else` conditions
- Modulo arithmetic
- Return statements and string interpolation

---

## 🔁 Leap Year Rules

A year is a **leap year** if:

- It is **divisible by 4**  
  **AND**
- It is **not divisible by 100**  
  **UNLESS**
- It is also **divisible by 400**

### 🧠 Logical Flow:

| Condition                       | Result          |
| ------------------------------- | --------------- |
| Divisible by 4 but not by 100   | Leap Year ✅     |
| Divisible by 100 but not by 400 | Not Leap Year ❌ |
| Divisible by 400                | Leap Year ✅     |
| Not divisible by 4              | Not Leap Year ❌ |

---

## 🧮 Example Outputs

| Year | Result          |
| ---- | --------------- |
| 2016 | Leap Year ✅     |
| 1900 | Not Leap Year ❌ |
| 2000 | Leap Year ✅     |
| 2023 | Not Leap Year ❌ |

---

## 🧾 JavaScript Code

```javascript
function isLeapYear(year){
  if(year % 4 === 0){
    if(year % 100 === 0){
      if(year % 400 === 0){
        return `${year} is a leap year.` 
      } else {
        return `${year} is not a leap year.`         
      }
    }
    return `${year} is a leap year.`
  }
  return `${year} is not a leap year.`
}

const year = 2016;
const result = isLeapYear(year);
console.log(result);


🚀 How to Run
Copy the code into any JavaScript runtime environment:

Browser Developer Console (F12 → Console tab)

Online editors like JSFiddle, CodePen, or replit

Node.js terminal

Modify the year variable to test different years.

🛠️ Customization
You can wrap the function in a form-based interface using HTML + JavaScript for browser use, or integrate into larger calendar/date apps.