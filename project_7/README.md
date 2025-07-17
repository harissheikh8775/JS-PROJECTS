# 📝 JavaScript Story Generator

This is a fun JavaScript program that dynamically generates short fantasy stories using template literals and user-defined variables.

## 📜 Description

The program defines a set of variables such as `adjective`, `noun`, `verb`, etc., and uses them to generate two unique stories based on a predefined story format. It demonstrates basic use of:

- Variable declaration
- Template literals for string interpolation
- Console output

## 🧠 How It Works

1. Set the initial values for `adjective`, `noun`, `verb`, `place`, `adjective2`, and `noun2`.
2. Use a story template with placeholders.
3. Replace the placeholders using template literals (`${variable}`).
4. Log each story to the console.

## 💻 Code Example

```javascript
let adjective = "Smart", noun = "dog", verb = "jumping", place = "ground", adjective2 = "quick", noun2 = "parrot";
let firstStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;
console.log(`First story: ${firstStory}`);

adjective = "Ugly", noun = "pen", verb = "laying", place = "table", adjective2 = "heavy", noun2 = "child";
let secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;
console.log(`Second story: ${secondStory}`);
