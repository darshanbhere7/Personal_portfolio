document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');
        
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            alert('Please enter a valid email address.');
            emailInput.focus(); // Set focus back to the email input
            return; // Exit if the email is invalid
        }

        // Check if fields are empty
        if (nameValue === "" || messageValue === "") {
            alert('Please fill in all fields.');
            return; // Exit if any field is empty
        }

        // Confirmation popup
        alert(`Thank you, ${nameValue}! Your message has been sent. We will get back to you soon.`);

        // Optionally, reset the form after submission
        contactForm.reset();
    });
});
