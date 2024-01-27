const INCREMENT_LIMIT = 10;
const DECREMENT_LIMIT = 0;
const COUNTER_KEY = "counter";
const INITIAL_COUNTER_VALUE = 0;
const plusButton = document.querySelector("#plus-btn");
const minusButton = document.querySelector("#minus-btn");
const counterDisplay = document.querySelector("#display-btn");

let counter;
initializeCounter();

plusButton.addEventListener("click", () => {
  if (counter === INCREMENT_LIMIT) {
    return;
  }
  counter++;
  storeCounter(COUNTER_KEY, counter);
  updateDisplay();
});

minusButton.addEventListener("click", () => {
  if (counter === DECREMENT_LIMIT) {
    return;
  }
  counter--;
  storeCounter(COUNTER_KEY, counter);
  updateDisplay();
});

function updateDisplay() {
  counterDisplay.innerHTML = getStoredCounter(COUNTER_KEY);
}

function storeCounter(key, value) {
  localStorage.setItem(key, value);
}

function getStoredCounter(key) {
  return localStorage.getItem(key);
}

function initializeCounter() {
  //Set counter variable to the value from the localstorage or if not present set to 0
  counter = parseInt(getStoredCounter(COUNTER_KEY)) || INITIAL_COUNTER_VALUE;
  //Update the display when the page reloads or loads.
  updateDisplay();
}
