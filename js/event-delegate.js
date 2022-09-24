document
  .getElementById("list-container")
  .addEventListener("click", function (e) {
    e.target.parentNode.removeChild(e.target);
    console.log(e.target);
  });

document.getElementById("add-btn").addEventListener("click", function () {
  const getUl = document.getElementById("list-container");

  const createLi = document.createElement("li");
  createLi.innerText = "Added New Item";
  createLi.classList.add("item");
  getUl.appendChild(createLi);
});
