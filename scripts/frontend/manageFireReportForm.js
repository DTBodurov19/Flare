const reportFormContainer = document.querySelector('.report-form-container');
const reportForm = document.querySelector('#report-form');
const reportButton = document.querySelector('.report-button');
const reportFormExitButton = document.querySelector('.report-form-exit-button');
const mapButton = document.querySelector('.location-button');
const reportFormMap = document.querySelector('#mapid');
const mapExitButton = document.querySelector('.map-exit-button');
const reportFormLocationInput = document.querySelector('.location-input');

reportButton.addEventListener('click', (e)=>{
    e.preventDefault();
    loginFormOverlay.style.display = 'flex';
    loginFormOverlay.style.opacity = '1';
    loginFormOverlay.style.zIndex = '10';
    loginFormOverlay.classList.add('form-bg-blur-animation');
    reportFormContainer.classList.add('form-enter-animation');
    reportFormContainer.style.display = 'flex';
    loginFormContainer.style.display = 'none';
    reportForm.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
})

reportFormExitButton.addEventListener('click', ()=>{
    loginFormOverlay.style.display = '0';
    loginFormOverlay.style.opacity = '0';
    loginFormOverlay.style.zIndex = '-1';
    loginFormOverlay.classList.remove('form-bg-blur-animation');
    reportFormContainer.classList.remove('form-enter-animation');
    reportFormMap.style.display = 'none';
    document.body.style.overflowY = 'scroll';
})

mapButton.addEventListener('click', (e) =>{
    e.preventDefault();
    reportForm.style.display = 'none';
    reportFormMap.style.display = 'block';
    map.invalidateSize();
})

mapExitButton.addEventListener('click', () =>{
    mapExitButton.style.display = 'none';
    reportFormMap.style.display = 'none';
    reportForm.style.display = 'flex';
    reportFormLocationInput.value = `${lat} ${lng}`;
})