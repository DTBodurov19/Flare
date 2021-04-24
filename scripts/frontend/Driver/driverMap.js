let map = L.map('map', { minZoom: 10 }).setView([42.492985475830444, 27.465648651123047], 12);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let control = L.Routing.control({
  waypoints: [
      L.latLng(42.49473180801061, 27.4663021042943),
      L.latLng(42.52172156626854, 27.467746138572693)
  ],
  routeWhileDragging: true
}).addTo(map);