const cardsWrapper = document.querySelector('.cards-parent-element');
const cards = [...document.querySelectorAll('.team-card')];
const card = document.querySelector('.frontend-card');

console.log(cardsWrapper);

cardsWrapper.addEventListener('mouseenter', () => {
    for(const card of cards) {
        card.classList.add('card-hover');
    }
});

cardsWrapper.addEventListener('mouseleave', () => {
    for(const card of cards) {
        card.classList.remove('card-hover');
    }
});