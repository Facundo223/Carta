const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  
  setTimeout(() => {
    envelope.classList.add("hide");
  }, 500); 
});
