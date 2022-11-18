function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const changeColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onBtnChangeColor);

function onBtnChangeColor(event) {
  changeColor.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}
