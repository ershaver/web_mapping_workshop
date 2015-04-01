///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'ershaver.d98b40d0'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiZXJzaGF2ZXIiLCJhIjoiejlGRGhSQSJ9.zh1_V1SIW2JmjQTMouLs_Q'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var dataFiletoAdd = 'data/parks.geojson';

var featureLayer = L.mapbox.featureLayer().loadURL(dataFiletoAdd).addTo(map);

featureLayer.on('ready',function(){
  this.setStyle({
    'color':'#ec008c',
    'fillColor': '#ec008c',
    'weight':4,
    'opacity':.7
  });
  map.fitBounds(featureLayer.getBounds());
});
