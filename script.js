function validateForm() {
    var fullname = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;

    var fullnameError = document.getElementById("fullnameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    var isValid = true;

    // Validate Full Name
    if (fullname === "") {
        fullnameError.textContent = "Please enter your full name";
        isValid = false;
    } else {
        fullnameError.textContent = "";
    }

    // Validate Email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Password
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    return isValid;
}
