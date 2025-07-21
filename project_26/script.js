function pyramid(str, rows, bool) {
  let output = "";
  if (bool === false) {
    output += "\n";
    for (let i = 1; i <= rows; i++) {
      for (let space = 0; space < rows - i; space++) {
        output += " ";
      }
      for (let j = 1; j <= 2 * i - 1; j++) {
        output += str;
      }
      output += "\n";
    }
  } else {
    output += "\n";
    for (let i = 1; i <= rows; i++) {
      for (let space = 0; space < i - 1; space++) {
        output += " ";
      }
      for (let j = 1; j <= 2 * rows - (2 * i - 1); j++) {
        output += str;
      }
      output += "\n";
    }
  }
  return output;
}

console.log(pyramid("o", 4, false));
/*
   o
  ooo
 ooooo
ooooooo
*/

console.log(pyramid("p", 5, true));
/*
ppppppppp
 ppppppp
  ppppp
   ppp
    p
*/
