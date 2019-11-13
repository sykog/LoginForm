var users = {
    sagar: "TCS12345",
    admin: "admin12345"
};
var form = document.getElementById("login-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var fd = new FormData(form);
    if(users[fd.get("user")] != null && users[fd.get("user")] == fd.get("password"))
        window.location = "https://www.google.com"
    else alert("Incorrect!")
});