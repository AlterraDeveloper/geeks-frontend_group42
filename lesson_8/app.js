const users = [
  { login: "user1", password: "12345678", name: "HTML" },
  { login: "user2", password: "87654321", name: "CSS" },
  { login: "user3", password: "testtest", name: "JAVASCRIPT" },
  { login: "user4", password: "qwerty123", name: "REACT" },
];

const $authForm = document.querySelector("#form");

// ... spread / rest
// const $inputs = $authForm.querySelectorAll("input");
// const $loginField = $inputs[0];
// const $passwordField =  $inputs[1];

const [$loginField, $passwordField] = [...$authForm.querySelectorAll("input")];

$authForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userLogin = $loginField.value;
  const userPassword = $passwordField.value;

  // falsy: false, 0, "", undefined, null, NaN
  if (!userLogin) {
    setErrorField($loginField, "Login field is required");
  } else {
    resetField($loginField);
  }

  if (!userPassword) {
    setErrorField($passwordField, "Password field is required");
  } else if (userPassword.length < 6) {
    setErrorField($passwordField, "Password length must be 6 and more chars");
  } else {
    resetField($passwordField);
  }

  const user = users.find(
    (u) => u.login === userLogin && u.password === userPassword
  );

  if (user) {
    $authForm.parentElement.innerHTML = WelcomePage(user);
  } else {
    setErrorField($loginField, "Invalid login or password");
    setErrorField($passwordField, "Invalid login or password");
  }
});

document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  alert("DO NOT TOUCH RIGHT MOUSE BUTTON!!!");
});

function setErrorField(formField, errorText = "Sorry, try again") {
  const $formControl = formField.parentElement;
  $formControl.classList.add("error");
  const $errorMessage = $formControl.children.item(4);
  $errorMessage.textContent = errorText;
}

function resetField(formField) {
  const $formControl = formField.parentElement;
  $formControl.classList.remove("error");
  const $errorMessage = $formControl.children.item(4);
  $errorMessage.textContent = "";
}

function WelcomePage(user) {
  return `
        <h1 style="font-size:48px">🎉 Welcome, ${user.name}</h1>
        <button onclick="window.location.reload()">Try again</button>
    `;
}


