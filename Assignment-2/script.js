document.getElementById("greetButton").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  const greetingMessage = document.getElementById("greetingMessage");
  const errorMessage = document.getElementById("errorMessage");

  greetingMessage.style.opacity = 0; // Reset animation
  errorMessage.textContent = "";

  if (name === "") {
    errorMessage.textContent = "Please enter your name.";
    greetingMessage.textContent = "";
    return;
  }

  greetingMessage.textContent = `Hello, ${name}! Welcome!`;
  setTimeout(() => {
    greetingMessage.style.opacity = 1;
  }, 100); // Delay to trigger CSS transition
});
