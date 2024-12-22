console.log("Script added successfully");

const upper_element = document.getElementById("include-uppercase");
const lower_element = document.getElementById("include-lowercase");
const number_element = document.getElementById("include-numbers");
const symbol_element = document.getElementById("include-symbols");

function generatePassword(length) {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let symbol = "@#$%^&*()-_";
    let passwordGeneratingString = "";
    let password = "";

    if (upper_element.checked) {
        passwordGeneratingString += upperCase;
    }
    if (lower_element.checked) {
        passwordGeneratingString += lowerCase;
    }
    if (number_element.checked) {
        passwordGeneratingString += numbers;
    }
    if (symbol_element.checked) {
        passwordGeneratingString += symbol;
    }

    for (let i = 0; i < length; i++) {
        const char = Math.floor(Math.random() * passwordGeneratingString.length);
        password += passwordGeneratingString.charAt(char);
    }

    let display_element = document.getElementById('password');
    display_element.value = password;

    let copy = document.getElementById("copy");
    copy.addEventListener("click", () => {
        let password = display_element.value;
        if (password.length === length) {
            // Copy the password to clipboard
            navigator.clipboard.writeText(password)
                .then(() => {
                    alert("Password copied to clipboard!");
                })
                .catch((err) => {
                    alert("Failed to copy password.");
                    console.error(err);
                });
        }
    });
}

const generate_password = document.getElementById("generate");
const lengthElement = document.getElementById("password-length");

generate_password.addEventListener("click", function exec() {
    let length = parseInt(lengthElement.value);
    if (length > 0 && (upper_element.checked || lower_element.checked || number_element.checked || symbol_element.checked)) {
        console.log(length);
        generatePassword(length);
    } else {
        alert("Please choose a specific length for the password and select at least one character type.");
    }
});
