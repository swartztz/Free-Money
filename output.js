document.addEventListener("DOMContentLoaded", function() {
    let name = localStorage.getItem("name");
    let email = localStorage.getItem("email");
    let address = localStorage.getItem("address");
    let zc = localStorage.getItem("zc");

    if (name && email && address) {
        document.getElementById("output").innerText = 
            `Hello, ${name}! Your email is ${email}, you live at ${address}, and your zip code is ${zc}.`;
    } else {
        document.getElementById("output").innerText = "No user data found.";
    }
});
