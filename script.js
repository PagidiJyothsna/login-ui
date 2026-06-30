function togglePassword(){
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if(email === "admin@gmail.com" && password === "1234"){
    message.style.color = "lightgreen";
    message.innerText = "Login Successful!";
  } else {
    message.style.color = "red";
    message.innerText = "Invalid Credentials!";
  }

  return false;
}
