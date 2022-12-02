const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm-password');

// On Submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkInput([username, email, password, password2]);
    checkPassLength(password);
    matchPass(password, password2);
})

// Check Input

function checkInput(inputArr) {
    inputArr.forEach(input => {
        if (input.value == "") {
            showError(input, `${getCapitalize(input.id)} is Required`);
        } else {
            showSuccess(input);
        }
    });
}

function showSuccess(input) {
    const small = input.nextSibling.nextSibling;
    small.style.visibility = 'hidden';
    input.classList = "success"

}

function showError(input, Errormessage) {
    const small = input.nextSibling.nextSibling;
    small.innerText = Errormessage;
    input.classList = "error"
    small.style.visibility = 'visible';

}

function getCapitalize(inputEle) {
    return inputEle.charAt(0).toUpperCase() + inputEle.slice(1);
}

function checkPassLength(password) {
    if (password.value.length > 6) {
        showError(password, "Password should be less than 6 characters");
    }
}

function matchPass(password, password2) {
    if (password.value != password2.value) {
        showError(password, "Passwords do not match")
        showError(password2, "Passwords do not match");
    }
}

