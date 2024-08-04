$(document).ready(function() {
    $('#register-form').submit(function(event) {
        event.preventDefault();

        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();

        var errors = [];

        if (username === '') {
            errors.push('Username is required');
            $('#username-error').text('Username is required');
        } else {
            $('#username-error').text('');
        }

        if (email === '') {
            errors.push('Email is required');
            $('#email-error').text('Email is required');
        } else if (!validateEmail(email)) {
            errors.push('Invalid email format');
            $('#email-error').text('Invalid email format');
        } else {
            $('#email-error').text('');
        }

        if (password === '') {
            errors.push('Password is required');
            $('#password-error').text('Password is required');
        } else if (password.length < 8) {
            errors.push('Password must be at least 8 characters long');
            $('#password-error').text('Password must be at least 8 characters long');
        } else {
            $('#password-error').text('');
        }

        if (confirmPassword === '') {
            errors.push('Confirm password is required');
            $('#confirm-password-error').text('Confirm password is required');
        } else if (confirmPassword !== password) {
            errors.push('Passwords do not match');
            $('#confirm-password-error').text('Passwords do not match');
        } else {
            $('#confirm-password-error').text('');
        }

        if (errors.length > 0) {
            console.log(errors);
        } else {
            console.log('Form is valid');
            // Submit the form
            // $('#register-form').submit();
        }
    });

    function validateEmail(email) {
        var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});