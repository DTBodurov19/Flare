const workerManager = new WorkerManager(localStorage);
const truckManager = new FireTruckManager(localStorage);
const fireFighters = workerManager.getAllWorkersByRole(FireWorker.fireWorkerRoles.fireFighter).filter((worker) => worker._isAvailable === true); //returns all avalable firefFighters
const drivers = workerManager.getAllWorkersByRole(FireWorker.fireWorkerRoles.driver).filter((worker) => worker._isAvailable === true); //returns all avalable drivers
const trucks = truckManager.fireTrucks;
const mapContainer = document.querySelector('.map-container');
const eventsConatainer = document.querySelector('.events-container');
const startEventForm = document.querySelector('#start-event-form');
const driversDropDown = document.querySelector('#drivers-dropdown');
const fireFightersDropDown1 = document.querySelector('#workers-dropdown1');
const fireFightersDropDown2 = document.querySelector('#workers-dropdown2');
const trucksDropDown = document.querySelector('#trucks-dropdown');


function fillStartEventForm(drivers, fireFighters, trucks){
    for(const driver of drivers) {
        let driverOption = document.createElement('option');
        let driverTextNode = document.createTextNode(`${driver.name}`);
        
        driverOption.appendChild(driverTextNode);
        driversDropDown.appendChild(driverOption);
        driverOption.value = `${driver.id}`;
    }

    for(const fireFighter of fireFighters) {
        let fireFighterOption = document.createElement('option');
        let fireFighterTextNode = document.createTextNode(`${fireFighter.name}`);
        
        fireFighterOption.appendChild(fireFighterTextNode);
        fireFightersDropDown1.appendChild(fireFighterOption);
        fireFighterOption.value = `${fireFighter.id}`;
    }

    for(const fireFighter of fireFighters) {
        let fireFighterOption = document.createElement('option');
        let fireFighterTextNode = document.createTextNode(`${fireFighter.name}`);
        
        fireFighterOption.appendChild(fireFighterTextNode);
        fireFightersDropDown2.appendChild(fireFighterOption);
        fireFighterOption.value = `${fireFighter.id}`;
    }

    for(const truck of trucks) {
        let truckOption = document.createElement('option');
        let truckTextNode = document.createTextNode(`${truck.licencePlate}`);
        
        truckOption.appendChild(truckTextNode);
        trucksDropDown.appendChild(truckOption);
        truckOption.value = `${truck.licencePlate}`;
    }
}


function finishEvent(id){
    fireEventsManager.finishOperationOnFireEvent(id, new Date(), 300000);
    location.reload();
  }

function startEvent(button, driver, fireFighter1, fireFighter2, fireTruck) {
  let id = +button.className.split(" ")[1];
  fireEventsManager.startOperationOnFireEvent(id, new Date(), driver, fireFighter1, fireFighter2, fireTruck);
  eventsConatainer.style.display = 'none';
  mapContainer.style.height = '200%';
  map.invalidateSize();
  showFinishButton();
}
