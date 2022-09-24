const makeBlueBg = document.getElementById("make-blue");

makeBlueBg.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

document.getElementById("make-pink").addEventListener("click", function () {
  document.body.style.backgroundColor = "pink";
});

function makeGreen() {
  document.body.style.backgroundColor = "green";
}

document.getElementById("update-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-text");
  const inputText = inputField.value;
  const updateText = document.getElementById("update-text");
  updateText.innerText = inputText;
  inputField.value = "";
});
