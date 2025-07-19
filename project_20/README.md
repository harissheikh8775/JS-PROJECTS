# 🧠 Quiz Question Selector and Evaluator

This is a JavaScript-based quiz simulation app where:
- A random question is selected from a list.
- The computer randomly selects an answer.
- The app checks whether the computer's answer is correct or not and returns a result message.

---

## 📌 Project Features

- List of 5 quiz questions with:
  - `category` (string)
  - `question` (string)
  - `choices` (array of 3 strings)
  - `answer` (string from choices)

- Functions included:
  - `getRandomQuestion()` — randomly picks a question from the array.
  - `getRandomComputerChoice()` — picks a random choice from selected question’s choices.
  - `getResults()` — compares the answer and returns appropriate feedback.

---

## ✅ Requirements

- Node.js must be installed on your system.
- A code editor like VS Code (optional but recommended).
- Basic understanding of JavaScript arrays and functions.

---

## 🛠 How to Run

1. Copy the entire code below into a file named `quiz.js`.
2. Open terminal/command prompt.
3. Run the script using Node.js:

```bash
node quiz.js
