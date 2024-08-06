document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const showButton = document.getElementById("show");
  const hideButton = document.getElementById("hide");
  const warningMessage = document.getElementById("warning");

  showButton.addEventListener("click", showPassword);
  hideButton.addEventListener("click", hidePassword);

  function showPassword() {
    passwordInput.type = "text";
    showButton.style.display = "none";
    hideButton.style.display = "inline";
  }

  function hidePassword() {
    passwordInput.type = "password";
    hideButton.style.display = "none";
    showButton.style.display = "inline";
  }

  function logIn() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (email === "" || password === "") {
      warningMessage.textContent = "Email and Password are required.";
      return;
    }

    // Simulação de autenticação
    if (email === "test@example.com" && password === "password") {
      alert("Login successful!");
      warningMessage.textContent = "";
    } else {
      warningMessage.textContent = "Invalid Email or Password.";
    }
  }
});
