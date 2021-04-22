const FireEventsManager1 = new FireEventsManager(localStorage);
const eventsContainer = document.querySelector('.events');

function getEvents(events) {
  for (const event of events) {
    let eventList = document.createElement('li');
    let textNode = document.createTextNode(`${event.description} ${event.fireSize} ${event.lat} ${event.long} ${event.reporterName} ${event.startDate} ${event.state} ${event.telephoneNumber}`);
    eventList.appendChild(textNode);
    eventsContainer.appendChild(eventList);
    eventList.classList.add('event');
    eventList.classList.add(event.ID.toString());
  }
}

getEvents(FireEventsManager1.fireEvents);