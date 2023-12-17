window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.a, .b, .c, .d');
    let scrollPosition = window.scrollY;

    cards.forEach(card => {
        card.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    });
});
