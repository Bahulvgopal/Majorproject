
function togglePassword() {
  var passwordField = document.getElementById("password");
  var showPasswordButton = document.querySelector(".show-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPasswordButton.textContent = "Hide";
  } else {
    passwordField.type = "password";
    showPasswordButton.textContent = "Show";
  }
}

//form validation

function validation() {
  var 
}