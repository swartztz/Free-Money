function storeData() {
    let name = document.getElementById("nameInput").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let address = document.getElementById("addressInput").value.trim();

    if (name === "" || email === "" || address === "") {
        alert("Please fill in all fields!");
    } else {
        // Store data in localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("address", address);
        
        // Redirect to output.html
        window.location.href = "output.html";
    }
}
