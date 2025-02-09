/* blur event for all input fields in form */
document.querySelectorAll("#form > div > div > input").forEach(function(element) {
    element.addEventListener('blur', function() {
        // if input field passes validation remove the error class, else add it
        if(this.checkValidity()){
            this.classList.remove('error-input');
            this.classList.add('valid-input');
        } else {
            this.classList.remove('valid-input');
            this.classList.add('error-input');
        }

        if (this.id === 'password' || this.id === 'confirm-password') {
            validatePasswordsMatch();
        }
    });
});

/* submit event on form */
document.querySelector("#form").addEventListener('submit', function(e) {
    // if form has not passed validation 
    if(!this.checkValidity()) {
        // check validation for each input field inside the form
        // if input field is valid then remove the error class, else add it
        this.querySelectorAll("input").forEach(function(element) {
            if(element.checkValidity()){
                element.classList.remove('error-input');
                element.classList.add('valid-input');
             } 
             else if (this.id === 'password' || this.id === 'confirm-password') {
                validatePasswordsMatch();
            } 
            else {
                element.classList.add('error-input');
                element.classList.remove('valid-input');
            } 
        });
        e.preventDefault();
    }
});


function validatePasswordsMatch() {
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const passwordValiditySpan = document.querySelector('.password-validity');

    if (password.value !== confirmPassword.value) {
        passwordValiditySpan.textContent = "Passwords do not match";
        confirmPassword.classList.remove('valid-input');
        password.classList.remove('valid-input');

        confirmPassword.classList.add('error-input');
        password.classList.add('error-input');

    } else {
        passwordValiditySpan.textContent = "";

        confirmPassword.classList.remove('error-input');
        password.classList.remove('error-input');

        confirmPassword.classList.add('valid-input');
        password.classList.add('valid-input');
    }
}


// function validatePasswordsMatch() {
//     const password = document.querySelector('#password').value;
//     const confirmPassword = document.querySelector('#confirm-password').value;
//     const passwordValiditySpan = document.querySelector('.password-validity');

//     if (password !== confirmPassword) {
//         passwordValiditySpan.textContent = "Passwords do not match";
//         document.querySelector('#confirm-password').classList.add('error-input');
//     } else {
//         passwordValiditySpan.textContent = "";
//         document.querySelector('#confirm-password').classList.remove('error-input');
//     }

   

// }


