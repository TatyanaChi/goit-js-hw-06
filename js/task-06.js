const inputValid = document.querySelector("#validation-input");

const inputValidLength = Number(inputValid.dataset.length);

inputValid.addEventListener("blur", onLostFocus);

function onLostFocus(event) {
  if (event.currentTarget.value.length === inputValidLength) {
    inputValid.classList.remove("invalid");
    inputValid.classList.add("valid");
  } else {
    inputValid.classList.remove("valid");
    inputValid.classList.add("invalid");
  }
}
