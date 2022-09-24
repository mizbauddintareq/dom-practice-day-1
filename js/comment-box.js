document.getElementById("comment-btn").addEventListener("click", function () {
  const commentArea = document.getElementById("comment-area");
  const getComment = commentArea.value;

  const commentContainer = document.getElementById("comment-box");
  const createNewComment = document.createElement("p");
  createNewComment.innerText = getComment;
  commentContainer.appendChild(createNewComment);

  commentArea.value = "";
});
