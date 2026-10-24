
function showMessage() {
  document.getElementById("output").innerText =
    "Welcome to my JavaScript Prototype Project!";
}

function changeColor() {
  const colors = ["#fef3c7", "#dcfce7", "#fce7f3", "#e0e7ff"];

  const randomIndex = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomIndex];

  document.getElementById("output").innerText =
    "Background color changed successfully!";
}

function showDate() {
  const currentDate = new Date();

  document.getElementById("output").innerText =
    "Current Date and Time: " + currentDate.toLocaleString();
}
