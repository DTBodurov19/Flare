

let map = L.map('mapid', { minZoom: 10 }).setView([42.492985475830444, 27.465648651123047], 13);
    
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    let leafletIcon = L.icon ({
        iconUrl: 'https://cdn1.iconfinder.com/data/icons/firefighters-filled-color/300/73621732Untitled-3-512.png',
        iconSize: [38,38],
        iconAnchor: [19,38],
        popupAnchor: [2, -30]
    });

    let marker = L.marker([-84.78652542298238, -18.45703125], {icon:leafletIcon}).addTo(map);
    let lat;
    let lng;

    map.on('click', function(e){
    let coord = e.latlng;
    lat = coord.lat;
    lng = coord.lng;
    marker.setLatLng(new L.LatLng(lat, lng)).bindPopup('You will report a fire HERE').openPopup();
    mapExitButton.style.display = 'block';
    });