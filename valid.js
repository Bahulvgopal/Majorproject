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

function valid() {
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var cpassword = document.getElementById("cpassword");

  if (username.value.trim() === "") {
    alert("Please enter a username.");
    return false;
  }
  if (email.value.trim() === "") {
    alert("Please enter an email address.");
    return false;
  }
  if (password.value === "") {
    alert("Please enter a password.");
    return false;
  }
  if (cpassword.value !== password.value) {
    alert("Passwords do not match.");
    return false;
  }

  return true;
}