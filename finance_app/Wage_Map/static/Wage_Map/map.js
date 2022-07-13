




var map = L.map('wage_map').setView([37.80, -96], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var geojsonLayer = L.geoJSON(statesData);
geojsonLayer.addTo(map);

console.log(statesData)


