mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYmVscnViaW9hIiwiYSI6ImNtanNzZ2h2OTJmMWszZHNkYWN6dzczMmUifQ.b5XfE8S-qEIoFG6FNPifvQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-98, 39],
  zoom: 3
});

map.on('load', () => {
  console.log('Mapa cargado OK');
});
