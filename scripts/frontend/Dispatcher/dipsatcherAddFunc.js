const workerManager = new WorkerManager(localStorage);
const fireTruckManager = new FireTruckManager(localStorage);
const addButton = document.querySelector('.add-button');
const addMenu = document.querySelector('.add-menu');
const addWorkerButton = document.querySelector('.add-worker-button');
const addFireTruckButton = document.querySelector('.add-firetruck-button');
const workerForm = document.querySelector('#add-worker-form');
const fireTruckForm = document.querySelector('#add-truck-form');
let addMenuShown = false;

function addNewWorker() {
    const workerID = document.querySelector('#form-id').value;
    const workerName = document.querySelector('#form-name').value
    const workerPermissions = document.querySelector('#permissions-dropdown').value;
    const workerRoles = [
        FireWorker.fireWorkerRoles.fireFighter,
        FireWorker.fireWorkerRoles.driver,
    ];

    try{
        workerManager.addNewWorker(new FireWorker(parseInt(workerID), workerName, workerRoles[workerPermissions]));
        console.log("created worker");
    }
    catch(error) {
        console.log(error);
    }
    finally{
        workerID.value = '';
        workerName.value = '';
        workerPermissions.value = '';
    }
}

function addNewFireTruck() {
    const truckBrand = document.querySelector('#form-brand').value;
    const truckModel = document.querySelector('#form-model').value;
    const truckPlate = document.querySelector('#form-license-plate').value;
    const truckTraveled = document.querySelector('#form-km-traveled').value;
    const truckWaterStorage = document.querySelector('#form-water-storage').value;

    try{
        fireTruckManager.addNewFireTruck(new FireTruck(truckPlate, truckBrand, truckModel, parseInt(truckTraveled), parseInt(truckWaterStorage)));
        console.log("created truck");
    }
    catch(error) {
        console.log(error);
    }
    finally{
        truckBrand.value = '';
        truckModel.value = '';
        truckPlate.value = '';
        truckTraveled.value = '';
        truckWaterStorage.value = '';
    }
}

addButton.addEventListener('click', () =>{
    if(addMenuShown) {
        addMenu.style.display = 'none';
        addMenuShown = false;
    } else {
        addMenu.style.display = 'flex';
        addMenuShown = true;
    }
});

workerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewWorker();
});

fireTruckForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewFireTruck();
});