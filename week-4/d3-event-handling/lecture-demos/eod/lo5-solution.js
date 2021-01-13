const checkPasswords = () => {
  const password = document.getElementById("password");
  const confirmation = document.getElementById("confirm-password");
  const form = document.getElementById("password-form");

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (password.value === confirmation.value) {
      alert("Form submited successfully");
      // We would nornally do something here to submit the form
      // But we haven't learned how yet.
    } else {
      alert("Passwords must match");
    }
  });
};

window.addEventListener('DOMContentLoaded', checkPasswords);