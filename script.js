const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const btnSubmit = document.querySelector(".btn-submit");
const errorMessage = document.querySelector(".error-message");
const btnDismiss = document.querySelector(".btn-dismiss");

formEl.addEventListener("submit", checkEmail);
btnSubmit.addEventListener("click", checkEmail);
function checkEmail(event) {
  event.preventDefault();
  if (isValidEmail(inputEl.value)) {
    document.querySelector(".card-container").style.display = "none";
    document.querySelector(".success-container").classList.remove("hidden");
    document.querySelector("#given-email").textContent = inputEl.value;
  } else {
    errorMessage.classList.remove("hidden");
    inputEl.classList.add("error-state");
  }
}

function isValidEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

btnDismiss.addEventListener("click", returnToForm);
function returnToForm() {
  location.reload();
}
