// Function to clear form inputs
function clearForm(formId) {
    const form = document.getElementById(formId);
    form.reset(); // Reset all form fields
}

// Function to show a success message
function showSuccessMessage(message) {
    const successContainer = document.createElement('div');
    successContainer.className = 'success-message';
    successContainer.textContent = message;
    document.body.appendChild(successContainer);

    setTimeout(() => {
        successContainer.remove();
    }, 3000); // Remove the message after 3 seconds
}

// Toggle between Sign Up and Sign In forms
document.getElementById('switchToSignin').addEventListener('click', function() {
    document.querySelector('.sign-up').classList.remove('active');
    document.querySelector('.sign-in').classList.add('active');
    clearForm('signupForm'); // Clear Sign Up form fields
});

document.getElementById('switchToSignup').addEventListener('click', function() {
    document.querySelector('.sign-in').classList.remove('active');
    document.querySelector('.sign-up').classList.add('active');
    clearForm('signinForm'); // Clear Sign In form fields
});

// Show Sign Up or Sign In form
document.getElementById('showSignUp').addEventListener('click', function() {
    document.querySelector('.sign-up').classList.add('active');
    document.querySelector('.sign-in').classList.remove('active');
    clearForm('signinForm'); // Clear Sign In form fields
});

document.getElementById('showSignIn').addEventListener('click', function() {
    document.querySelector('.sign-in').classList.add('active');
    document.querySelector('.sign-up').classList.remove('active');
    clearForm('signupForm'); // Clear Sign Up form fields
});

// Handle Sign Up form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    console.log('Sign Up:', email, password);
    
    // Simulate successful Sign Up
    showSuccessMessage('Sign Up successful! Welcome, ' + email);
    clearForm('signupForm');
});

// Handle Sign In form submission
document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
    console.log('Sign In:', email, password);
    
    // Simulate successful Sign In
    showSuccessMessage('Sign In successful! Welcome back, ' + email);
    clearForm('signinForm');
});