let balance = 0;

window.addEventListener("load", async function () {
  update();
});

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();
  console.log("Submitted.");

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length !== 0) {
    topUp(inputAmount);
  }

  if (document.getElementById("withdrawal-amount").value.length !== 0) {
    withdraw(outputAmount);
  }

  update();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled");
});

document.getElementById("apply-interest").addEventListener("click", function () {
  applyInterest();
});

function topUp(amount) {
  balance += amount;
}

function withdraw(amount) {
  if (balance >= amount) {
    balance -= amount;
  } else {
    alert("Insufficient balance");
  }
}

function applyInterest() {
  balance += balance * 0.03;
  update();
}

function update() {
  document.getElementById("value").innerText = Math.round(balance * 100) / 100;
}
