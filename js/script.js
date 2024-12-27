function initializeToggleButton() {
    var menu = document.getElementById("menu");
    var nav = document.querySelector(".navlinks");

    menu.onclick = function() {
        menu.classList.toggle('bx-x');
        nav.classList.toggle('active');
    };
}

function initializeFormValidation(event) {
    event.preventDefault(); // Prevent form submission

    const nameValid = validateName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();

    if (nameValid && emailValid && messageValid) {
        window.alert("Form submitted successfully!");
    }
    else{
        windowalert("Please fill the form propperly.");
    }
}

function validateName() {
    const name = document.getElementById("name").value;
    if (name.trim() == "") {
        window.alert("Full Name is required.");
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() == "") {
        window.alert("Email is required.");
        return false;
    } else if (!emailPattern.test(email)) {
        window.alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

function validateMessage() {
    const message = document.getElementById("message").value;
    if (message.trim() == "") {
        window.alert("Message is required.");
        return false;
    }
    return true;
}