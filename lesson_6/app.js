// GitHub Pages - hosting
// https://alterradeveloper.github.io/geeks-projects/array-methods
// URL(URI) - Unified Resource Locator (Identifier)
// HTTP(S) - Hyper Text Transfer Protocol (Secured)
// PARSING HTML+CSS => DOM (+ RENDERING)
// EXECUTING JS <= V8

let originalArray = [45, 13, 78, 14, 6, 27];

function buildArrayItem(value) {
  let div = document.createElement("div"); // <div></div>
  div.className = "array-item"; // <div class="array-item"></div>
  div.textContent = value; // <div class="array-item">45</div>
  return div;
}

function renderArray(array, container) {
  container.innerHTML = "";
  for (let item of array) {
    let $arrayItem = buildArrayItem(item);
    container.appendChild($arrayItem);
  }
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
  }
});
// callback - функции обратного вызова
// map, filter, slice, reverse, sort
