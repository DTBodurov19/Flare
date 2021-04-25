let map = L.map('map', { minZoom: 10 }).setView([42.492985475830444, 27.465648651123047], 12);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function placeMarker(button) {
  let id = button.className.split(' ')[1];
  let eventObj = fireEventsManager.getFireEventByID(+id);
  let long = eventObj.long;
  let lat = eventObj.lat;
  let control = L.Routing.control({
    draggableWaypoints: false,
    addWaypoints: false,
    waypoints: [
      L.latLng(42.49473180801061, 27.4663021042943),
      L.latLng([lat, long])
    ],
    lineOptions: {
      styles: [{ className: 'animate' }]
    },
    createMarker: function (i, waypoint, n) {
      const marker = L.marker(waypoint.latLng, {
        icon: L.icon({
          iconUrl: 'https://svgshare.com/i/AaW.svg',
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        })
      });
      return marker;
    },
    routeWhileDragging: true
  }).addTo(map);
}