mapboxgl.accessToken = 'TU_TOKEN';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-98, 39],
  zoom: 3
});

map.on('load', () => {
  console.log('Mapa cargado OK');
});
