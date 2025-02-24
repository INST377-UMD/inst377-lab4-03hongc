// Function to show an alert with the entered name
function showAlert() {
    var nameInput = document.getElementById("name-input").value;
    if (nameInput) {
        alert("Hi " + nameInput + "!");
    } else {
        alert("Please enter your name.");
    }
}

// Function to toggle the background color of the page
function changeColor() {
    var body = document.body;
    if (body.style.backgroundColor === "" || body.style.backgroundColor === "lightblue") {
        body.style.backgroundColor = "lightgreen";
    } else {
        body.style.backgroundColor = "lightblue";
    }
}

// Function to validate text for special characters
function validateText() {
    var textInput = document.getElementById("text-input").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(textInput)) {
        alert("Text is NOT valid!");
    } else {
        alert("Text is valid!");
    }
}

// Function to add text to the heading
function addText() {
    var heading = document.getElementById("main-heading");
    heading.textContent += " Add Text";
}