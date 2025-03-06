function storeData() {
    let name = document.getElementById("nameInput").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let address = document.getElementById("addressInput").value.trim();
    let zc = document.getElementById("zcInput").value.trim();

    if (name === "" || email === "" || address === "") {
        alert("Please fill in all fields!");
    } else {
        // Store data in localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("address", address);
        localStorage.setItem("zc", zc);
        
        // Redirect to output.html
        window.location.href = "output.html";
    }
}
