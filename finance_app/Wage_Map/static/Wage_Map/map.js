// Target the div element with id 'wage_map' and center on the U.S
var map = L.map('wage_map').setView([37.80, -96], 4);

// Retrieve the map from openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Load the geoJson data from us-state.js
//var geojsonLayer = L.geoJSON(statesData);
//geojsonLayer.addTo(map);

//display the geojson object in the console to confirm that it was loaded
console.log(statesData)

// define a color range for the various bins of population density
function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
    return {
        fillcolor: getColor(feature.properties.density),
    {    weight: 2,
        opactiy: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: .7
        };
    }

L.geoJSON(states, {style: style}).addTo(map)