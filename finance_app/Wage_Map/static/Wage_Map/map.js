// Target the div element with id 'wage_map' and center on the U.S
var map = L.map('wage_map').setView([37.80, -96], 4);

// Retrieve the map from openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Load the geoJson data from us-state.js
var geojsonLayer = L.geoJson(statesData);
geojsonLayer.addTo(map);

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

// Style the map (including the color based off density)
function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    
    };
}

L.geoJSON(statesData, {style: style}).addTo(map);

// Making the state react when a user hovers over it
var geojson;

// function defining layer activiyt on mouseOn
function hihglightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight:5,
        color: '#666',
        dashArray: '',
        fillOpacity: .7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

// Defining activity on MouseOut
function resetHighLight(e) {
    geojson.resetStyle(e.target)
}

// Click listener to zoom on target state
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Add listeners to state layers
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: hihglightFeature,
        mouseout: resetHighLight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map)