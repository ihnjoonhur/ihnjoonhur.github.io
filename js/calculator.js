var display = document.getElementById("display");

function addToDisplay(character) {
  display.value += character;
  playSound();
}

function clearDisplay() {
  display.value = "";
  playSound();
}

function calculate() {
  var result = eval(display.value);
  display.value = result;
  playSound();
}

function playSound() {
  var sound = new Audio("button-click.wav");
  sound.play();
}

function handleButtonClick(button) {
  button.classList.add("active");
  setTimeout(function () {
    button.classList.remove("active");
  }, 100);
}

var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click", function () {
    addToDisplay(this.value);
    handleButtonClick(this);
  });
  button.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#4D81B3";
  });
  button.addEventListener("mouseout", function () {
    this.style.backgroundColor = "#A0B3C1";
  });
}

var clearButton = document.createElement("button");
clearButton.innerText = "C";
clearButton.className = "clear";
clearButton.addEventListener("click", function () {
  clearDisplay();
  handleButtonClick(this);
});
clearButton.addEventListener("mouseover", function () {
  this.style.backgroundColor = "#4D81B3";
});
clearButton.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#A0B3C1";
});

// Add event listener to window object to listen for key presses
window.addEventListener("keydown", function(event) {
  var key = event.key;
  switch(key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      addToDisplay(key);
      handleButtonClick(document.querySelector(`button[value='${key}']`));
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      addToDisplay(key);
      handleButtonClick(document.querySelector(`button[value='${key}']`));
      break;
    case "Enter":
      calculate();
      handleButtonClick(document.querySelector(`button[value='=']`));
      break;
    case "Escape":
      clearDisplay();
      handleButtonClick(document.querySelector(".clear"));
      break;
  }
});
