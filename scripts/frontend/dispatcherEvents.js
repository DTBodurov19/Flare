const FireEventsManager1 = new FireEventsManager(localStorage);
const eventsContainer = document.querySelector('.events');



function validateEvent(button) {
  let id = button.className.split(' ')[1];
  FireEventsManager1.validateFireEvent(+id);  
  location.reload();
}

function getEvents(events) {
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
    

    eventsContainer.appendChild(eventContainer);
    eventContainer.classList.add('eventContainer');

    let validateButtons = [...document.querySelectorAll('.validate-button')];
    for(button of validateButtons) {
      button.addEventListener('click', () => {
        validateEvent(button);
      });
    }
  }
}

getEvents(FireEventsManager1.fireEvents);