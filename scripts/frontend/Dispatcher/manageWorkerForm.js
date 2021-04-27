const formOverlay = document.querySelector('.form-overlay');
const workerFormContainer = document.querySelector('.add-worker-form-container');
const formExitButton = document.querySelector('.form-exit-button');
const truckFormExitButton = document.querySelector('.add-truck-form-exit-button')
const truckFormContainer = document.querySelector('.add-truck-form-container');
const mapControls = document.querySelector('.leaflet-control-container');

addWorkerButton.addEventListener('click', ()=>{
    formOverlay.style.display = 'flex';
    formOverlay.style.opacity = '1';
    formOverlay.style.zIndex = '1000';
    workerFormContainer.style.display = 'flex';
    truckFormContainer.style.display = 'none';
    formOverlay.classList.add('form-bg-blur-animation');
    workerFormContainer.classList.add('form-enter-animation');
    document.body.style.overflowY = 'hidden';
    mapControls.style.display = 'none';
})

formExitButton.addEventListener('click', ()=>{
    mapControls.style.display = 'block';
    formOverlay.style.display = '0';
    formOverlay.style.opacity = '0';
    formOverlay.style.zIndex = '-1';
    formOverlay.classList.remove('form-bg-blur-animation');
    workerFormContainer.classList.remove('form-enter-animation');
    document.body.style.overflowY = 'scroll';
});