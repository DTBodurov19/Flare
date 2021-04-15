const cursor = document.querySelector('.cursor');
const hoverables = document.querySelectorAll('.hoverable');
const arr = [...hoverables];
const loginButton = document.querySelector('.login-button');
const loginFormOverlay = document.querySelector('.form-overlay');
const loginFormContainer = document.querySelector('.log-in-form-container');
const reportFormContainer = document.querySelector('.report-form-container')
const formExitButton = document.querySelector('.form-exit-button');
const reportFormExitButton = document.querySelector('.report-form-exit-button');
const reportButton = document.querySelector('.report-button');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

arr.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        cursor.classList.add('hovering');
    })

    item.addEventListener('mouseout', ()=>{
        cursor.classList.remove('hovering');
    })
})

loginButton.addEventListener("click", ()=>{
    loginFormOverlay.style.display = 'flex';
    loginFormOverlay.style.opacity = '1';
    loginFormOverlay.style.zIndex = '10';
    loginFormContainer.style.display = 'flex';
    reportFormContainer.style.display = 'none';
    loginFormOverlay.classList.add('form-bg-blur-animation');
    loginFormContainer.classList.add('form-enter-animation');
    document.body.style.overflowY = 'hidden';
})

formExitButton.addEventListener("click", ()=>{
    loginFormOverlay.style.display = '0';
    loginFormOverlay.style.opacity = '0';
    loginFormOverlay.style.zIndex = '-1';
    loginFormOverlay.classList.remove('form-bg-blur-animation');
    loginFormContainer.classList.remove('form-enter-animation');
    document.body.style.overflowY = 'scroll';
})

reportButton.addEventListener("click", ()=>{
    loginFormOverlay.style.display = 'flex';
    loginFormOverlay.style.opacity = '1';
    loginFormOverlay.style.zIndex = '10';
    loginFormOverlay.classList.add('form-bg-blur-animation');
    reportFormContainer.classList.add('form-enter-animation');
    reportFormContainer.style.display = 'flex';
    loginFormContainer.style.display = 'none';
    document.body.style.overflowY = 'hidden';
})

reportFormExitButton.addEventListener("click", ()=>{
    loginFormOverlay.style.display = '0';
    loginFormOverlay.style.opacity = '0';
    loginFormOverlay.style.zIndex = '-1';
    loginFormOverlay.classList.remove('form-bg-blur-animation');
    reportFormContainer.classList.remove('form-enter-animation');
    document.body.style.overflowY = 'scroll';
})