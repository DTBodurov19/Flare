addFireTruckButton.addEventListener('click', ()=>{
    formOverlay.style.display = 'flex';
    formOverlay.style.opacity = '1';
    formOverlay.style.zIndex = '1000';
    truckFormContainer.style.display = 'flex';
    workerFormContainer.style.display = 'none';
    formOverlay.classList.add('form-bg-blur-animation');
    truckFormContainer.classList.add('form-enter-animation');
    document.body.style.overflowY = 'hidden';
    mapControls.style.display = 'none';
})

truckFormExitButton.addEventListener('click', ()=>{
    mapControls.style.display = 'block';
    formOverlay.style.display = '0';
    formOverlay.style.opacity = '0';
    formOverlay.style.zIndex = '-1';
    formOverlay.classList.remove('form-bg-blur-animation');
    truckFormContainer.classList.remove('form-enter-animation');
    document.body.style.overflowY = 'scroll';
})