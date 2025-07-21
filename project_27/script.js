function getAverage(arrOfTestScores) {
  let avg = 0;
  for (let i = 0; i < arrOfTestScores.length; i++) {
    avg += arrOfTestScores[i];
  }
  return avg / arrOfTestScores.length;
}

function getGrade(studScore) {
  //will return string
  if (studScore === 100) {
    return "A+";
  } else if (studScore >= 90 && studScore <= 99) {
    return "A";
  } else if (studScore >= 80 && studScore <= 89) {
    return "B";
  } else if (studScore >= 70 && studScore <= 79) {
    return "C";
  } else if (studScore >= 60 && studScore <= 69) {
    return "D";
  } else if (studScore >= 0 && studScore <= 59) {
    return "F";
  }
}

function hasPassingGrade(score) {
  const result = getGrade(score);
  if (result === "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg(scoresArr, studScore) {
  const avg = getAverage(scoresArr);
  const grade = getGrade(studScore);

  if (grade === "F") {
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  } else {
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  }
}


console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// ➤ "Class average: 71.7. Your grade: F. You failed the course."

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
// ➤ "Class average: 50.8. Your grade: A+. You passed the course."

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
// ➤ "Class average: 48.25. Your grade: B. You passed the course."

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));
// ➤ "Class average: 45.625. Your grade: C. You passed the course."
