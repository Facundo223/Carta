const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  letter.classList.add("show");

  setTimeout(() => {
    envelope.classList.add("hide");
  }, 700);
});


