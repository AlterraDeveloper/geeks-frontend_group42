console.log("Hello DOM");

// DOM - Document Object Model

// Search elements
// Edit HTML
// Edit CSS
// Remove elements
// Events

let appTitle = document.querySelector("h1");
appTitle.innerText = "la-la-la-la";

let counterValue = document.getElementById("counter");
// let counterValue = document.querySelector("#counter");
counterValue.style.color = "gold";

let buttonsContainer = document.getElementsByClassName("buttons")[0];
// let buttonsContainer =
//     document.querySelector(".buttons");
// buttonsContainer.remove();
// console.log(buttonsContainer);

let buttons = buttonsContainer.querySelectorAll("button");

for (let button of buttons) {
  button.innerText = "";
//   button.style.padding = "55px";
//   button.style.border = "10px solid";

  Object.assign(button.style, {
    padding: '60px',
    border: '10px dotted'
  });
}

// Publisher-subscriber pattern
// Шаблон Издатель-подписчик
