let counterValue = 0;

const actions = document.querySelector("#counter");

const actionsValue = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn.dataset.action);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn.dataset.action);

function onTargetButtonDecrement() {
  counterValue -= 1;
  actionsValue.textContent = counterValue;
}

function onTargetButtonIncrement() {
  counterValue += 1;
  actionsValue.textContent = counterValue;
}

decrementBtn.addEventListener("click", onTargetButtonDecrement);
incrementBtn.addEventListener("click", onTargetButtonIncrement);
