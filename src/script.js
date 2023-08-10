'use strict'

const confirmPassInput = document.querySelector('input[name="c-password"]');
const passInput = document.querySelector('input[name="password"]');

function checkMatches() {
    const password = passInput.value;
    const confirmPassword = confirmPassInput.value;

    if (password === confirmPassword) {
        console.log("Passwords match");
    } else {
        console.log("Passwords do not match");
    }
}

confirmPassInput.addEventListener('input', checkMatches);
