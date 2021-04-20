let map = L.map('map', { minZoom: 10 }).setView([42.492985475830444, 27.465648651123047], 13);
    
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);