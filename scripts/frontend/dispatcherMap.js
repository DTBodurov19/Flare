let map = L.map('map', { minZoom: 10 }).setView([42.492985475830444, 27.465648651123047], 12);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
        iconUrl: 'https://svgshare.com/i/AaW.svg',
        iconSize: [20,20],
        iconAnchor: [10,10],
        // popupAnchor: [2, -30]
    });

let marker = L.marker([42.492985475830444, 27.465648651123047], {icon:leafletIcon}).addTo(map);