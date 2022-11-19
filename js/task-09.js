function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const changeColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onBtnChangeColor);

function onBtnChangeColor() {
  let color = getRandomHexColor();
  changeColor.textContent = color;
  body.style.backgroundColor = color;
}
