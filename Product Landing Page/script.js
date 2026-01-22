document.addEventListener('DOMContentLoaded', () => {
    const selectButtons = document.querySelectorAll('.btn');

    selectButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert("Added to cart!");
        });
    });
});