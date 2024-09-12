console.log("empty string", typeof ""); // string
console.log("zero", typeof 0); // number
console.log("5 === 5", typeof (5 === 5)); // boolean
console.log("undefined", typeof undefined); // undefined
console.log("null", typeof null); // object BUG!
console.log("object", typeof {}); // object
console.log("console.log", typeof console.log); // function BUG!

// let planetIndex = prompt("Enter planet index [1-9]");

// console.log("planetIndex type is", typeof planetIndex);

// // == ===

// if (planetIndex === 1) {
//   console.log("mercury");
// } else if (planetIndex === 2) {
//   console.log("venus");
// } else if (planetIndex === 3) {
//   console.log("earth");
// } else {
//   console.error("Unknown planet with index", planetIndex);
// }

// planetIndex = Number(planetIndex);

// switch (planetIndex) {
//   case 1: // ===
//     console.log("mercury");
//     break;
//   case 2:
//     console.log("venus");
//     break;
//   case 3:
//     console.log("earth");
//     break;
//   default:
//     console.error("Unknown planet with index", planetIndex);
// }

// Arrays

let students = ["Ivan", "Beka", "Ainazik", "Anya", "Svetlona", "Asan"];
// indexes:        0       1         2        3         4         5
console.log("Before", students);
students[4] = "Svetlana";
console.log("After", students);
console.log("Group 42 consists of ", students.length + " students");

// totalPoints += studentHomeWorks[0];
// totalPoints += studentHomeWorks[1];
// totalPoints += studentHomeWorks[2];
// totalPoints += studentHomeWorks[3];
// totalPoints += studentHomeWorks[4];
// totalPoints += studentHomeWorks[5];
// totalPoints += studentHomeWorks[6];
// totalPoints += studentHomeWorks[7];

// Loops

let studentHomeWorks = [10, 8, 7, 8, 9, 4, 5, 8];
let totalPoints = 0;
// for..of
for (let currentHomework of studentHomeWorks) {
  totalPoints += currentHomework;
}
console.log("Total:", totalPoints); // 59

let myName = "Evgeniy";
let mySurname = "Kiselev";

let mbankName = myName + " " + mySurname[0] + "."; //"Evgeniy K."
console.log("Mbank:", mbankName);
i = 5;
i = i + 1; // 6
i += 1;
i++;

// document.write("<table>");

// for
for (let i = 0; i < students.length; i++) {
  console.log(i + 1 + ". " + students[i]);
  //   document.write("<tr>");
  //   document.write("<td>" + (i + 1) + "</td>");
  //   document.write("<td>" + students[i] + "</td>");
  //   document.write("</tr>");
}
// document.write("</table>");

// infinity loop
// for(;;){}

let sportsmen = ["Alex", "Aziz", "Bred", "Rahim", "Aidar"];

for (let i = 0; i < 3; i++) {
  let medal = "";
  if (i === 0) {
    medal = "GOLD";
  } else if (i === 1) {
    medal = "SILVER";
  } else if (i === 2) {
    medal = "BRONZE";
  }

  let medalIcon;
  switch (i + 1) {
    case 1:
      medalIcon = "🥇";
      break;
    case 2:
      medalIcon = "🥈";
      break;
    case 3:
      medalIcon = "🥉";
      break;
  }

  console.log(medalIcon + " " + medal + " for " + sportsmen[i]);
}


for(let year = 2024; year < 2100; year += 4){
    console.log("Olympic year ", year);
}
