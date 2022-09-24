document.getElementById("input-field").addEventListener("keyup", function (e) {
  const inputText = e.target.value;
  const deleteBtn = document.getElementById("delete-btn");
  if (inputText === "delete") {
    deleteBtn.removeAttribute("disabled");
  } else {
    deleteBtn.setAttribute("disabled", true);
  }
});

document.getElementById("delete-btn").addEventListener("click", function () {
  const getText = document.getElementById("text");
  getText.style.visibility = "hidden";
  const inputText = document.getElementById("input-field");
  inputText.value = "";
});
