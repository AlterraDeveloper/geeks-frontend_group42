// GitHub Pages - hosting
// https://alterradeveloper.github.io/geeks-projects/array-methods
// URL(URI) - Unified Resource Locator (Identifier)
// HTTP(S) - Hyper Text Transfer Protocol (Secured)
// PARSING HTML+CSS => DOM (+ RENDERING)
// EXECUTING JS <= V8

let originalArray = [45, 13, 78, 14, 6, 27];

function buildArrayItem(value = 0) {
  let div = document.createElement("div"); // <div></div>
  div.className = "array-item"; // <div class="array-item"></div>
  div.textContent = value; // <div class="array-item">45</div>
  return div;
}

// refactoring

function renderArray(array, container) {
  container.innerHTML = "";
  // for (let item of array) {
  //   let $arrayItem = buildArrayItem(item);
  //   container.appendChild($arrayItem);
  // }
  const $arrayItems = array.map((item) => buildArrayItem(item));
  // const $arrayItems = array.map(buildArrayItem); // SENIOR LEVEL
  // container.append($arrayItems); // append([1,2,3])
  container.append(...$arrayItems); // append(1,2,3)
  // container.append.apply(container, $arrayItems); // ES5
  // spread / rest operator
}

let $originalArray = document.querySelector("#original .array");
renderArray(originalArray, $originalArray);

let $updatedArray = document.querySelector("#updated .array");
renderArray(["?", "?", "?"], $updatedArray);

document.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return;
  let action = event.target.textContent;
  if (action === "map +5") {
    // originalArray.map(function(item){
    //     return item + 5;
    // });
    // arrow functions
    let updatedArray = originalArray.map((item) => item + 5);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "map x2") {
    let updatedArray = originalArray.map((x) => x * 2);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter > 50") {
    let updatedArray = originalArray.filter((item) => item > 50);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter evens") {
    let updatedArray = originalArray.filter((item) => item % 2 === 0);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "slice top 3") {
    let updatedArray = originalArray.slice(0, 3);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "slice last 4") {
    let updatedArray = originalArray.slice(-4);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "reverse") {
    let [...originalArrayCopy] = [...originalArray]; // copy array
    // let originalArrayCopy = originalArray;
    let updatedArray = originalArrayCopy.reverse();
    renderArray(updatedArray, $updatedArray);
  } else if (action === "sort ascending") {
    let [...originalArrayCopy] = [...originalArray]; // copy array
    // let originalArrayCopy = originalArray;
    let updatedArray = originalArrayCopy.sort((a, b) => a - b);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "sort descending") {
    let [...originalArrayCopy] = [...originalArray]; // copy array
    // let originalArrayCopy = originalArray;
    let updatedArray = originalArrayCopy.sort((a, b) => b - a);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "reduce sum") {
    let updatedArray = originalArray.reduce((sum, item) => (sum += item));
    renderArray([updatedArray], $updatedArray);
  } else if (action === "reduce max") {
    let updatedArray = originalArray.reduce((max, item) => {
      if (item > max) {
        return item;
      } else {
        return max;
      }
    });
    renderArray([updatedArray], $updatedArray);
  }
});
// callback - функции обратного вызова
// map, filter, slice, reverse, sort

// const sportsmen = ["Aidar", "Beka", "Anton", "Timur", "Ilgiz"];
// let goldWinner = sportsmen[0];
// let silverWinner = sportsmen[1];
// let bronzeWinner = sportsmen[2];

// let [goldWinner, , bronzeWinner] = [...sportsmen];

// console.log(goldWinner, bronzeWinner);

// JavaScript JS
// ECMAScript ES

let a = 5;
a++;
a += 10;
a = "qwerty";
console.log("a =", a);

// const b = 5;
// b += 10;
// console.log("b =", b);

const numbers = [1, 2, 3, 4, 5];
console.log("numbers = ", numbers);
numbers.push(6);
numbers.splice(0, 2);
numbers.splice(1, 2, 9, 10);
// numbers = [];
console.log(`numbers = ${numbers}`);

let students = [];
console.log(`I teach ${students.length} students`);
