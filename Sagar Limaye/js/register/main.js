var users = {
    sagar: "TCS12345",
    admin: "admin12345"
};
var form = document.getElementById("login-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var fd = new FormData(form);
    var emailField = document.getElementById("email");
    if(users[fd.get("user")] != null)
        alert("Username already exists");
    if(fd.get("pass") == fd.get("confirm_pass"))
        alert("Passwords do not match");
});