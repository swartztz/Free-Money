document.addEventListener("DOMContentLoaded", function() {
    let name = localStorage.getItem("name");
    let email = localStorage.getItem("email");
    let address = localStorage.getItem("address");

    if (name && email && address) {
        document.getElementById("output").innerText = 
            `Hello, ${name}! Your email is ${email}, and you live at ${address}.`;
    } else {
        document.getElementById("output").innerText = "No user data found.";
    }
});
