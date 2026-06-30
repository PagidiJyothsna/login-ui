const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const toggle = document.getElementById("toggle");
const error = document.getElementById("error");

toggle.onclick = () => {
  password.type = password.type === "password" ? "text" : "password";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!email.value.includes("@")) {
    error.textContent = "Enter valid email";
    return;
  }

  if (password.value.length < 6) {
    error.textContent = "Password must be 6+ chars";
    return;
  }

  if (document.getElementById("remember").checked) {
    localStorage.setItem("userEmail", email.value);
  }

  error.textContent = "Login Successful ✅";
});