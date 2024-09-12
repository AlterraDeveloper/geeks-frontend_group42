// Variables and data types
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. object

let countryName = "Kyrgyzstan";
let countryPopulation = 6_100_125;
let countryInAsia = true;

let countryArea;

console.log(countryName); // Kyrgyzstan
console.log(countryArea); // undefined
let countryPhoneCode = null;
console.log(countryPhoneCode);

let country = {
  name: "Kyrgyzstan",
  code2: "KG",
  code3: "KGZ",
  population: 6_100_125,
  hasArmy: true,
  hasMarineBoard: false,
  cryptoCurrency: undefined,
  goldStorage: null,
  // key (field, property) : value
  president: {
    name: "Sadyr",
    surname: "Japarov",
    age: 45,
  },
};

console.log("My motherland is " + country.name); // concatenation
console.log(
  "Our president is " +
    country["president"].surname +
    " " +
    country.president["name"]
);

console.log("His age is " + country.president.age + " y.o.");

// console.log("TEST!!! Our president is " + president.surname
//     + " " + president.name);

countryArea = 25_452_124;

let populationDensity = countryPopulation / countryArea;

console.log(populationDensity + " people per km^2");

// Operators:
// 1. string +
// 2. number + - * / ** %
// 3. boolean && || !
//          > < >= <= == != === !==
// 4. undefined
// 5. null
// 6. object

// case sensitive
let apple = 5;
let Apple = 10;

apple = null;
console.log("Apple = ", Apple);

let points = 0;

let hw1Points = 10;
let hw2Points = 7;

points += hw1Points;
points += hw2Points;
// points = hw1Points + hw2Points;

let hw3Points = 8;

// points = points + hw3Points;
points += hw3Points; // -= *= /= %= **=

console.log("Total points: ", points);

countryPopulation += 1; // born
countryPopulation -= 1; // died

countryPopulation++; // born
countryPopulation--; // died

if (points >= 60) {
  console.log("NEXT MONTH");
} else {
  console.log("REPEAT MONTH");
}

let lessons = 8;
points = 100;
let hasPayNextMonth = true;

if (points >= 60 && lessons >= 6 && hasPayNextMonth) {
  console.log("NEXT MONTH");
} else {
  console.log("REPEAT MONTH");
}

let weekday = "fri";

if (weekday === "mon" || weekday === "thu") {
  console.log("GEEEEEEKS");
} else {
  console.log("regular day");
}

let useInternetBanking = true;
let useMobileBanking = true;
let isOnlineClient;

if (useInternetBanking || useMobileBanking) {
  isOnlineClient = true;
} else {
  isOnlineClient = false;
}

let experienceYears = 5;
let position;

if (experienceYears > 0 && experienceYears < 2) {
  position = "JUNIOR";
} else if (experienceYears >= 2 && experienceYears < 6) {
  position = "MIDDLE";
} else if (experienceYears >= 6) {
  position = "SENIOR";
} else {
  position = "UNDEFINED";
}

switch (position) {
  case "JUNIOR":
    console.log(position + " 100$ - 1000$");
    break;
  case "MIDDLE":
    console.log(position + " 1000$ - 3000$");
    break;
  case "SENIOR":
    console.log(position + " 3000$ - ???");
    break;
  default:
    console.log("i don't know who you are");
}
