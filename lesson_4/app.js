console.log("Functions");

// let scores = [45, 14 , 78, 25, 89];

// for(let score of scores){
//     let grade = Math.ceil(score / 20);
//     console.log(score + " -> " + grade);
// }

// DRY - Don't repeat yourself

function getDayIndexInYear() {
  let currentDate = new Date();
  let startYearDate = new Date(currentDate.getFullYear(), 0, 0);
  let diff = currentDate - startYearDate;
  let dayInMilliseconds = 1000 * 60 * 60 * 24;
  let dayIndexInYear = Math.floor(diff / dayInMilliseconds);
  return dayIndexInYear;
}

let dayIndexInYear = getDayIndexInYear();
console.log(dayIndexInYear);

if (dayIndexInYear === 256) {
  console.log("Happy Programmer's day!!!");
}

function getPercentsOf(value, percent) {
  return Math.round((value * percent) / 100);
}

function getCashback(amount, level) {
  switch (level) {
    case "silver":
      return getPercentsOf(amount, 1);
    case "gold":
      return getPercentsOf(amount, 3);
    case "platinum":
      return getPercentsOf(amount, 5);
    // default:
    //   return 0;
  }
  return 0;
}

console.log("CASHBACK SILVER:", getCashback(890, "silver"));
console.log("CASHBACK GOLD:", getCashback(890, "gold"));
console.log("CASHBACK PLATINUM:", getCashback(890, "platinum"));



// function expression
let getDigitsSum = function (value) {
  let sum = 0;
  for (let digit of String(value)) {
    sum += Number(digit);
  }
  return sum;
};

// function declaration
// Luhn's algorithm 
function checkBankCard(cardNumber) {
  let sum = 0;
  let isFirst = true;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = Number(cardNumber[i]);
    // console.log(digit, isFirst ? "first" : "second");
    if (isFirst) {
      sum += digit;
    } else {
      let doubleDigit = digit * 2;
      sum += getDigitsSum(doubleDigit);
    }
    isFirst = !isFirst;
  }
  console.log("CHECKSUM:", sum);
  return sum % 10 === 0;
}

let cardNumber = "417749017684301";
if (checkBankCard(cardNumber)) {
  console.log("CARD EXISTS");
} else {
  console.error("FAKE CARD!!!");
}
