const workerManager = new WorkerManager(localStorage);
const addButton = document.querySelector('.addButton');
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

addButton.addEventListener('click', () =>{
    if(addMenuShown) {
        addMenu.style.display = 'none';
        addMenuShown = false;
    } else {
        addMenu.style.display = 'flex';
        addMenuShown = true;
    }
});

addWorkerButton.addEventListener('click', () =>{
    console.log("i am work yes");
});
workerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewWorker();
});