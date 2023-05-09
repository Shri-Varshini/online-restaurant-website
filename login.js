function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "varshini" && password === "2005") {
        window.location.href = "foodwebsite.html";
    } else {
        let message = document.getElementById("message");
        message.innerHTML = "Incorrect username or password.";
    }
}