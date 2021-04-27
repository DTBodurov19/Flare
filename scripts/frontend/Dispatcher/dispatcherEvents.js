const fireEventsManager = new FireEventsManager(localStorage);
const eventsContainer = document.querySelector(".events");
const backButton = document.querySelector(".backButton");
const refreshButton = document.querySelector(".refreshButton");

function validateEvent(button) {
  let id = button.className.split(" ")[1];
  fireEventsManager.validateFireEvent(+id);
}

function rejectEvent(button) {
  let id = button.className.split(" ")[1];
  fireEventsManager.rejectFireEvent(+id);
}

function getEvents(events) {
  eventsContainer.innerHTML = "";

  for (const event of events) {
    let eventContainer = document.createElement("div");

    let eventList = document.createElement("li");
    let textNode = document.createTextNode(
      `${event.reporterName} ${event.telephoneNumber} ${event.startDate} ${event.description} ${event.fireSize} ${event.state}`
    );
    eventList.innerHTML =`<p class="event-field">${event.reporterName}</p> <p class="event-field">${event.telephoneNumber}</p> <p class="event-field">${event.startDate}</p> <p class="event-field">${event.description}</p> <p class="event-field">${event.fireSize}</p>  <p class="event-field">${event.state}</p>`;

    let interactButtonsContainer = document.createElement("div");
    interactButtonsContainer.classList.add('interact-buttons-container');
    interactButtonsContainer.classList.add(event.ID.toString());

    eventList.appendChild(interactButtonsContainer);
    eventContainer.appendChild(eventList);
    eventList.classList.add("event");
    eventList.classList.add(event.ID.toString());

    let verifyButton = document.createElement("button");
    let verifyButtonNode = document.createTextNode("Validate");

    verifyButton.appendChild(verifyButtonNode);
    interactButtonsContainer.appendChild(verifyButton);
    verifyButton.classList.add("validate-button");
    verifyButton.classList.add(event.ID.toString());
    verifyButton.classList.add('button');
    
    let rejectButton = document.createElement("button");
    let rejectButtonNode = document.createTextNode("Reject");

    rejectButton.appendChild(rejectButtonNode);
    interactButtonsContainer.appendChild(rejectButton);
    rejectButton.classList.add("reject-button");
    rejectButton.classList.add(event.ID.toString());
    rejectButton.classList.add('button');

    let eventMarkerButton = document.createElement("button");
    let eventMarkerButtonNode = document.createTextNode("Mark event");
    eventMarkerButton.appendChild(eventMarkerButtonNode);
    interactButtonsContainer.appendChild(eventMarkerButton);
    eventMarkerButton.classList.add("mark-event-button");
    eventMarkerButton.classList.add(event.ID.toString());
    eventMarkerButton.classList.add('button');

    eventsContainer.appendChild(eventContainer);
    eventContainer.classList.add("eventContainer");
  }

  let pWidth = Math.round(window.innerWidth / 6) + 'px';

  let eventFields = [...document.querySelectorAll('.event-field')];

  for(const field of eventFields) {
    field.style.width = pWidth;
    field.style.overflow = 'auto';
  }

  let validateButtons = [...document.querySelectorAll(".validate-button")];
  for (const button of validateButtons) {
    button.addEventListener('click', () => {
      validateEvent(button);
      getEvents(
        fireEventsManager.getFireEventsByState(
          FireEventsManager.fireStates.unverified
        )
      );
      removeCurrentMarker(button);
    });
  }

  let eventMarkerButtons = [...document.querySelectorAll(".mark-event-button")];
  for (const button of eventMarkerButtons) {
    button.addEventListener("click", () => {
      placeMarker(button);
    });
  }
  
  let rejectButtons = [...document.querySelectorAll(".reject-button")];
    for (const button of rejectButtons) {
      button.addEventListener('click', () => {
        rejectEvent(button);
        getEvents(
          fireEventsManager.getFireEventsByState(
          FireEventsManager.fireStates.unverified
          )
        );
        removeCurrentMarker(button);
      });
  }
}

window.onload = getEvents(
  fireEventsManager.getFireEventsByState(
    FireEventsManager.fireStates.unverified
  )
);

console.log(
  fireEventsManager.getFireEventsByState(
    FireEventsManager.fireStates.unverified
  )
);

backButton.addEventListener("click", () => {
  window.history.back();
});

refreshButton.addEventListener("click", () => {
  location.reload();
});

let toggled = false;
let markers = [];

function toggleMarkers() {
  if (!toggled) {
    const events = [
      ...fireEventsManager.getFireEventsByState(
        FireEventsManager.fireStates.pending
      ),
      ...fireEventsManager.getFireEventsByState(
        FireEventsManager.fireStates.inProgress
      ),
    ];

    for (const event of events) {
      let lng = event.long;
      let lat = event.lat;
      markers.push(L.marker([lat, lng], { icon: leafletIcon }).addTo(map));
    }

    toggled = !toggled;
  } else {
    for (const marker of markers){
      map.removeLayer(marker);
    }
    
    markers = [];
    toggled = !toggled;
  }
}
