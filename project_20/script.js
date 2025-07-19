let questions = [
  {
    category: "Math",
    question: "What is 5 + 3?",
    choices: ["6", "8", "10"],
    answer: "8",
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Indian", "Atlantic", "Pacific"],
    answer: "Pacific",
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "John Adams"],
    answer: "George Washington",
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["Shakespeare", "Charles Dickens", "Mark Twain"],
    answer: "Shakespeare",
  },
];

function getRandomQuestion(arrOfQ) {
  const randomIndex = Math.floor(Math.random() * arrOfQ.length);
  return arrOfQ[randomIndex];
}

function getRandomComputerChoice(arrOfC) {
  const randomIndex = Math.floor(Math.random() * arrOfC.length);
  return arrOfC[randomIndex];
}

function getResults(questObj, compsChoice) {
  if (questObj.answer === compsChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questObj.answer}`;
  }
}

// Example run
const question = getRandomQuestion(questions);
const computerAnswer = getRandomComputerChoice(question.choices);
const result = getResults(question, computerAnswer);

console.log(`Category: ${question.category}`);
console.log(`Question: ${question.question}`);
console.log(`Choices: ${question.choices.join(", ")}`);
console.log(`Computer's Choice: ${computerAnswer}`);
console.log(result);
