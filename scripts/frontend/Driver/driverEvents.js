const fireEventsManager = new FireEventsManager(localStorage);
const eventsContainer = document.querySelector(".events");

function getEvents(events) {
  eventsContainer.innerHTML = "";

  for (const event of events) {
    let eventContainer = document.createElement("div");

    let eventList = document.createElement("li");
    let textNode = document.createTextNode(
      `${event.reporterName} ${event.telephoneNumber} ${event.startDate} ${event.description} ${event.fireSize}  ${event.state}`
    );

    eventList.appendChild(textNode);
    eventContainer.appendChild(eventList);
    eventList.classList.add("event");
    eventList.classList.add(event.ID.toString());

    let startButton = document.createElement("button");
    let startButtonNode = document.createTextNode("Start Event");

    startButton.appendChild(startButtonNode);
    eventContainer.appendChild(startButton);
    startButton.classList.add("start-event-button");
    startButton.classList.add(event.ID.toString());

    eventsContainer.appendChild(eventContainer);
    eventContainer.classList.add("eventContainer");
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
      //display the form
      startEventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        placeMarker(button);
        try {
          startEvent(button, workerManager.getWorkerByID(+driversDropDown.value), workerManager.getWorkerByID(+fireFightersDropDown1.value), workerManager.getWorkerByID(+fireFightersDropDown2.value), truckManager.getFireTruckByLicencePlate(trucksDropDown.value));
        }
        catch(error) {
          console.log(error);
        } 
      });
    });
  }
}

window.onload = getEvents(fireEventsManager.getFireEventsByState(FireEventsManager.fireStates.pending));