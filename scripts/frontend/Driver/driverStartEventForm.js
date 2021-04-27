const formOverlay = document.querySelector('.form-overlay');
const startFormContainer = document.querySelector('.start-event-form-container');
const formExitButton = document.querySelector('.form-exit-button');
const startEventFormButton = [...document.querySelectorAll('.start-event-button')];

for(button of startEventFormButton) {
    button.addEventListener('click', ()=>{
        formOverlay.style.display = 'flex';
        formOverlay.style.opacity = '1';
        formOverlay.style.zIndex = '1000';
        startFormContainer.style.display = 'flex'; 
        formOverlay.classList.add('form-bg-blur-animation');
        startFormContainer.classList.add('form-enter-animation');
        document.body.style.overflowY = 'hidden';
    });
}


formExitButton.addEventListener('click', ()=>{
    formOverlay.style.display = '0';
    formOverlay.style.opacity = '0';
    formOverlay.style.zIndex = '-1';
    formOverlay.classList.remove('form-bg-blur-animation');
    startFormContainer.classList.remove('form-enter-animation');
    document.body.style.overflowY = 'scroll';
});