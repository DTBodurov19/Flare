const loginButton = document.querySelector('.login-button');
const loginFormOverlay = document.querySelector('.form-overlay');
const loginFormContainer = document.querySelector('.log-in-form-container');
const formExitButton = document.querySelector('.form-exit-button');

loginButton.addEventListener('click', ()=>{
    loginFormOverlay.style.display = 'flex';
    loginFormOverlay.style.opacity = '1';
    loginFormOverlay.style.zIndex = '10';
    loginFormContainer.style.display = 'flex';
    reportFormContainer.style.display = 'none';
    loginFormOverlay.classList.add('form-bg-blur-animation');
    loginFormContainer.classList.add('form-enter-animation');
    document.body.style.overflowY = 'hidden';
})

formExitButton.addEventListener('click', ()=>{
    loginFormOverlay.style.display = '0';
    loginFormOverlay.style.opacity = '0';
    loginFormOverlay.style.zIndex = '-1';
    loginFormOverlay.classList.remove('form-bg-blur-animation');
    loginFormContainer.classList.remove('form-enter-animation');
    document.body.style.overflowY = 'scroll';
    messageElement.innerHTML = '';
    
})