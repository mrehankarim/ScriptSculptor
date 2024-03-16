// document.addEventListener("DOMContentLoaded", function () {
const form = document.querySelector("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
//changes border color if input is valid"
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
  const small = formControl.querySelector("small");
  small.innerText = "";
};
//Dispaly error message just below the input field containing error
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
  small.classList = "error";
};
//this function checks whether the user has enter all the required fields or not
const checkInput = (inputArray) => {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, "Field is required");
    } else {
      showSuccess(input);
    }
  });
};
//checks whether passwords match eachother or not
const checkMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
};
//validates email
const checkEmail = (input) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Enter a valid email address");
  }
};
//checks the length of input field 
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `Must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `Must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};
//on submit submit runs all the required functions
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput([username, email, password1, password2]);
  checkLength(username, 3, 10);
  checkLength(password1, 6, 20);
  checkEmail(email);
  checkMatch(password1, password2);
});
// });
