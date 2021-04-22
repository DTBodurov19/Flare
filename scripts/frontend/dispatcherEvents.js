const fireEventsManager = new FireEventsManager(localStorage);
const eventsContainer = document.querySelector('.events');

function validateEvent(button) {
  let id = button.className.split(' ')[1];
  fireEventsManager.validateFireEvent(+id);  
  console.log(`Validated ${id}`);
}

function getEvents(events) {

  eventsContainer.innerHTML = '';

  for (const event of events) {

    let eventContainer = document.createElement('div');

    let eventList = document.createElement('li');
    let textNode = document.createTextNode(`${event.description} ${event.fireSize} ${event.lat} ${event.long} ${event.reporterName} ${event.startDate} ${event.state} ${event.telephoneNumber}`);
    
    eventList.appendChild(textNode);
    eventContainer.appendChild(eventList);
    eventList.classList.add('event');
    eventList.classList.add(event.ID.toString());

    let verifyButton = document.createElement('button');
    let verifyButtonNode = document.createTextNode('Validate');

    verifyButton.appendChild(verifyButtonNode);
    eventContainer.appendChild(verifyButton);
    verifyButton.classList.add('validate-button');
    verifyButton.classList.add(event.ID.toString());

    let eventMarkerButton = document.createElement('button');
    let eventMarkerButtonNode = document.createTextNode('Mark event');

    eventMarkerButton.appendChild(eventMarkerButtonNode);
    eventContainer.appendChild(eventMarkerButton);
    eventMarkerButton.classList.add('mark-event-button');
    eventMarkerButton.classList.add(event.ID.toString());
    

    eventsContainer.appendChild(eventContainer);
    eventContainer.classList.add('eventContainer');
  }

  let validateButtons = [...document.querySelectorAll('.validate-button')];
  for(const button of validateButtons) {
    button.addEventListener('click', () => {
    validateEvent(button);
    getEvents(fireEventsManager.getFireEventsByState(FireEventsManager.fireStates.unverified));
  });
  }

  let eventMarkerButtons = [...document.querySelectorAll('.mark-event-button')];
  for(const button of eventMarkerButtons) {
    button.addEventListener('click', () => {
    placeMarker(button);
  });
  }
}

window.onload = getEvents(fireEventsManager.getFireEventsByState(FireEventsManager.fireStates.unverified));

console.log(fireEventsManager.getFireEventsByState(FireEventsManager.fireStates.unverified));