const fireEventsManager = new FireEventsManager(localStorage);
const eventsContainer = document.querySelector(".events");

let currentEventId;

function getEvents(events) {
  eventsContainer.innerHTML = "";

  for (const event of events) {
    let eventContainer = document.createElement("div");

    let eventList = document.createElement("li");
    let textNode = document.createTextNode(
      `${event.reporterName} ${event.telephoneNumber} ${event.startDate} ${event.description} ${event.fireSize}  ${event.state}`
    );
    eventList.innerHTML =`<p class="event-field">${event.reporterName}</p> <p class="event-field">${event.telephoneNumber}</p> <p class="event-field">${event.startDate}</p> <p class="event-field">${event.description}</p> <p class="event-field">${event.fireSize}</p>  <p class="event-field">${event.state}</p>`;
    
    let interactButtonsContainer = document.createElement("div");
    interactButtonsContainer.classList.add('interact-buttons-container');
    interactButtonsContainer.classList.add(event.ID.toString());

    eventList.appendChild(interactButtonsContainer);
    eventContainer.appendChild(eventList);
    eventList.classList.add("event");
    eventList.classList.add(event.ID.toString());


    let startButton = document.createElement("button");
    let startButtonNode = document.createTextNode("Start Event");

    startButton.appendChild(startButtonNode);
    interactButtonsContainer.appendChild(startButton);
    startButton.classList.add("start-event-button");
    startButton.classList.add(event.ID.toString());

    eventsContainer.appendChild(eventContainer);
    eventContainer.classList.add("eventContainer");
  }

  let pWidth = Math.round(window.innerWidth / 6) + 'px';

  let eventFields = [...document.querySelectorAll('.event-field')];

  for(const field of eventFields) {
    field.style.width = pWidth;
    field.style.overflow = 'auto';
  }

  let startButtons = [...document.querySelectorAll(".start-event-button")];
  for (const button of startButtons) {
    button.addEventListener("click", () => {
      getEvents(
        fireEventsManager.getFireEventsByState(
          FireEventsManager.fireStates.pending
        )
      );
      fillStartEventForm(drivers, fireFighters, trucks);

      startEventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let messageElement = document.querySelector('#message');
        currentEventId = +button.className.split(" ")[1];
          startEvent(button, workerManager.getWorkerByID(+driversDropDown.value), workerManager.getWorkerByID(+fireFightersDropDown1.value), workerManager.getWorkerByID(+fireFightersDropDown2.value), truckManager.getFireTruckByLicencePlate(trucksDropDown.value));
          placeMarker(button);
      });
    });
  }
}

window.onload = getEvents(fireEventsManager.getFireEventsByState(FireEventsManager.fireStates.pending));