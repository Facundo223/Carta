const envelope = document.getElementById("envelope");
const sorpresa = document.getElementById("sorpresa");
const tapSorpresa = document.querySelector(".tap-sorpresa");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});

tapSorpresa.addEventListener("click", (e) => {
  e.stopPropagation();
  sorpresa.classList.remove("hidden");
  tapSorpresa.style.display = "none";
  envelope.classList.add("show-sorpresa");
});
