const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "YOU CLICKED ME!! ❤️";
  setTimeout(() => {
    btn.textContent = "You have clickedd";
  }, 1000);
});