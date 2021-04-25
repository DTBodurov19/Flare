const fireEventsManager = new FireEventsManager(localStorage);
const eventsContainer = document.querySelector(".events");

function startEvent(button) {
  let id = button.className.split(" ")[1];
  fireEventsManager.validateFireEvent(+id);
  console.log(`Validated ${id}`);
}

function getEvents(events) {
  eventsContainer.innerHTML = "";

  for (const event of events) {
    let eventContainer = document.createElement("div");

    let eventList = document.createElement("li");
    let textNode = document.createTextNode(
      `${event.description} ${event.fireSize} ${event.lat} ${event.long} ${event.reporterName} ${event.startDate} ${event.state} ${event.telephoneNumber}`
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
      placeMarker(button);
    });
  }
}

window.onload = getEvents(fireEventsManager.getFireEventsByState(FireEventsManager.fireStates.pending));