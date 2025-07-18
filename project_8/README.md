# 📘 JavaScript Strings Tutorial

Welcome to the **JavaScript Strings Tutorial**. This script is a beginner-friendly introduction to handling strings in JavaScript. It walks through examples of how to access characters, find the length of a string, and search for substrings using `.indexOf()`.

---

## 🧠 What You'll Learn

- Using **template literals** for dynamic strings.
- Accessing **characters** in a string using index notation.
- Using the `.length` property to find the length of a string.
- Finding **positions of substrings** using `.indexOf()`.

---

## 📜 Code Summary

```js
console.log("Hi there!");

const botName = "teacherBot";
const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);
console.log(subject.length); // Length of "JavaScript"

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length); // Length of "strings"

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
console.log(subject[0]); // 'J'

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]); // 'a'

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter); // 't'

const learningIsFunSentence = "Learning is fun.";
console.log("Here are examples of finding the positions of substrings in the sentence.");
console.log(learningIsFunSentence.indexOf("Learning")); // 0
console.log(learningIsFunSentence.indexOf("fun")); // 13
console.log(learningIsFunSentence.indexOf("learning")); // -1 (case-sensitive)

console.log("I hope you enjoyed learning today.");

```

🧪 Output Preview
```
Hi there!
My name is teacherBot.
Today, you will learn about strings in JavaScript.
Here is an example of using the length property on the word JavaScript.
10
Here is an example of using the length property on the word strings.
7
Here is an example of accessing the first letter in the word JavaScript.
J
Here is an example of accessing the second letter in the word JavaScript.
a
Here is an example of accessing the last letter in the word JavaScript.
t
Here are examples of finding the positions of substrings in the sentence.
0
13
-1
I hope you enjoyed learning today.

✅ Concepts Used
template literals — ${variable} syntax inside backticks `

.length — counts the number of characters

[] — accesses individual characters using index

.indexOf() — returns index of first occurrence or -1 if not found
