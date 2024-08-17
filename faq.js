// Select all questions
const faqItems = document.querySelectorAll('.faq-item');

// Loop through each question and add click event listener
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Close other open items
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('open');
            }
        });

        // Toggle the clicked item
        item.classList.toggle('open');
    });
});