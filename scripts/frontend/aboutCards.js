const cardsWrapper = document.querySelector('.cards-parent-element');
const cards = [...document.querySelectorAll('.team-card')];
const designerCard = document.querySelector('.designer-card');
const backendCard = document.querySelector('.backend-card');
const scrumCard = document.querySelector('.scrum-card');
let cardExitButton = document.querySelector('.card-exit-button');
let currentCardSelected;
selected = false;

for(const card of cards) {
    card.addEventListener('mouseenter', ()=>{
        if(!selected) {
            card.classList.add('card-hover');
        }
    });

    card.addEventListener('mouseleave', () => {
        if(!selected) {
            card.classList.remove('card-hover');
        }
        
    });

    card.addEventListener('click', () => {
        selected = true;
        card.classList.add('card-selected');
        card.classList.remove('card-wrapper-hover');
        cardExitButton.style.display = 'block';
        card.querySelector('.card-about-text').style.display = 'block';
        card.style.left = '0';

        cardExitButton.addEventListener('click', () =>{
            selected = false;
            cardExitButton.style.display = 'none';
            designerCard.style.left = '200px';
            backendCard.style.left = '400px';
            scrumCard.style.left = '600px';
            card.querySelector('.card-about-text').style.display = 'none';
            card.classList.remove('card-selected');
            card.classList.add('card-wrapper-hover');
        })
    });
}

cardsWrapper.addEventListener('mouseenter', () =>{
    if(!selected) {;
        for(const card of cards) {
            card.classList.add('card-wrapper-hover');
            backendCard.style.left = '400px';
            scrumCard.style.left = '600px';
        }
    }
});

cardsWrapper.addEventListener('mouseleave', () =>{
    if(!selected) {
        for(const card of cards) {
            card.classList.remove('card-wrapper-hover');
            backendCard.style.left = '280px';
            scrumCard.style.left = '310px';
        }
    }
});