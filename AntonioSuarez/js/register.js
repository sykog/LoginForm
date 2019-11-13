window.addEventListener('load', () => {

  const registerButton = document.getElementById('register');
  const password = document.getElementById('password');
  const confirm = document.getElementById('confirm');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const first = document.getElementById('first');
  const last = document.getElementById('last');
  const showPassword = document.getElementById("showPassword");

  showPassword.addEventListener('click', () => {
    if (showPassword.checked) password.setAttribute("type", "text");
    else password.setAttribute("type", "password");
  });

  registerButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (password.value.match(/[0-9]/g) && password.value.length > 7) {
      document.querySelector("span.password").style.display = "none";
      if (password.value === confirm.value) {
        if (username.value.length > 0 && email.value.length > 0 && first.value.length > 0 &&
          last.value.length > 0) document.getElementById("register-form").submit();
      } else {
        document.querySelector("span.confirm").style.display = "inline";
      }
    } else {
      document.querySelector("span.password").style.display = "inline";
    }
  });
});