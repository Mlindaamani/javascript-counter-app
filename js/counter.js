
//Grab DOM elements.
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const display = document.getElementById("display-btn");

//Store static values into constants.
const INCREMENT_LIMIT = 10;
const DECREMENT_LIMIT = 0;

//Attach click Events to the listeners.
//This means, when a plus button is clicked or minus button is clicked, the increment and decrement will be executed respectively
plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);

//Declare and initialze the counter to zero.
let counter = 0;


//This function will icrement the counter until INCREMENT_LIMIT is reached.
function increment() {
  if (counter === INCREMENT_LIMIT) {
    displayWarning();
    return;
  }
  counter++;
  updateDisplay();
}

//This function will icrement the counter until  DECREMENT_LIMIT is reached.
function decrement() {
  if (counter === DECREMENT_LIMIT) {
    displayWarning();
    return;
  }
  counter--;
  updateDisplay();
}

//This function will update the display everytime the decrement or increment button is clicked.
function updateDisplay() {
  display.innerHTML = counter;
}

//This function is responsible for displaying the STOP message on the display button with red bgc and text of white.
function displayWarning() {
  display.innerHTML = "STOP!";
  display.style.backgroundColor = "red";
  display.style.color = "white";
}
