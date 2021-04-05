mapboxgl.accessToken = 'pk.eyJ1IjoicHVja2IiLCJhIjoiY2ttbHR0MmNnMDE3eTJucGdzemRmdmV1NiJ9.AXo5MlyGCM9BEfuXWdJajQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [4.30965  , 52.080329],
  zoom: 12
});

// Voeg de zoekbalk toe
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  }),
  'top-right'
);
