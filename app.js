const questions = document.querySelectorAll(".question-box");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (present) {
      if (present !== question) {
        present.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
