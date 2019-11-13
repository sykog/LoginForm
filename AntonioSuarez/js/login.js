window.addEventListener('load', () => {

  const loginButton = document.getElementById('submit-login');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const correctUser = "user";
  const correctPassword = "password1234";

  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    let errorMessage = document.querySelector('p.error');

    if (username.value == correctUser && password.value == correctPassword) {
      errorMessage.style.display = "none";
      console.log(document.getElementById("login-form"));
      document.getElementById("login-form").submit();
    } else {
      errorMessage.style.display = "block";
    }
  });
});