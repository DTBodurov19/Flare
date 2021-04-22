const cardsWrapper = document.querySelector('.cards-parent-element');
const cards = [...document.querySelectorAll('.team-card')];
const designerCard = document.querySelector('.designer-card');
const backendCard = document.querySelector('.backend-card');
const scrumCard = document.querySelector('.scrum-card');


cardsWrapper.addEventListener('mouseenter', () => {
    for(const card of cards) {
        card.classList.add('card-wrapper-hover');
        backendCard.style.left = '400px';
        scrumCard.style.left = '600px';

        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
        })
    }
});

cardsWrapper.addEventListener('mouseleave', () => {
    for(const card of cards) {
        card.classList.remove('card-wrapper-hover');
        backendCard.style.left = '280px';
        scrumCard.style.left = '310px';
    }
});

