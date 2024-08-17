document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Debugging: Check if the function is called
    console.log("Form submitted!");

    // Display the confirmation message
    const formMessage = document.getElementById('formMessage');
    formMessage.style.display = 'block';

    // Debugging: Check if the message is displayed
    console.log("Message displayed!");

    // Optionally, clear the form fields
    document.getElementById('contactForm').reset();
});