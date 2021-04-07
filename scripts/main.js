// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoicHVja2IiLCJhIjoiY2ttbHR0MmNnMDE3eTJucGdzemRmdmV1NiJ9.AXo5MlyGCM9BEfuXWdJajQ';

// Initialate map
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [4.322840, 52.067101],
zoom: 11.15
});

var geocoder = new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
})

map.on('load', function () {
// Listen for the `geocoder.input` event that is triggered when a user
// makes a selection
geocoder.on('result', function (ev) {
console.log(ev.result.center);

 });
});

document.getElementById('citybutton').onclick = function(){
            	getAPIdata();
            }

            // init data stream
            var geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
            });

            // Voeg de zoekbalk toe
            map.addControl( geocoder, 'top-left');

            map.on('load', function () {
            	// Listen for the `geocoder.input` event that is triggered when a user
            	// makes a selection
            	geocoder.on('result', function (ev) {
            	  console.log(ev.result.center);
                //document.getElementById('coordinaten').innerHTML = ev.result.center[0] + '-' + ev.result.center[1];
                getAPIdata(ev.result.center[0], ev.result.center[1]);
            	});
            });

            function getAPIdata(ingevoerdeLon, ingevoerdeLat) {

            	// construct request
            	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=639b70cdea4ec366f54e164e3bc7269c&lon=' +ingevoerdeLon+ '&lat=' +ingevoerdeLat;
            	// get current weather
            	fetch(request)

            	// parse response to JSON format . daarna gebeurt dit,
            	.then(function(response) {
            		return response.json();
            	})

            	.then(function(response) {
            		// show full JSON object
            		console.log(response);//response.main.temp --komt het in de console.
            		var weatherBox = document.getElementById('weer');
            		//weatherBox.innerHTML = response;
            		//weatherBox.innerHTML = response.weather[0].description;
            		weatherBox.innerHTML = (response.main.temp - 273.15).toFixed(1) + ' &#176;C </br>';

                var weatherBox2 = document.getElementById('weersverwachting');
                weatherBox2.innerHTML = (response.weather[0].description) + '<br>' + '' + 'Windspeed: ' + response.wind.speed + ' ms ' + '<br>' + '' + ' Windrichting: ' + response.wind.deg + '<br>' + '' + 'Atmosfeer druk: ' + response.main.pressure;
                 // + '' + (response.weather[0].description);
            		// weatherBox.innerHTML = degC + '&#176;C <br>';
            	});
            }



//             506f6c3f3c
//
//             function getData() {
//
// 	             var city = document.getElementById('city').value;
// 	              var request = 'https://weerlive.nl/api/json-data-10min.php?key=506f6c3f3c&locatie=' + city;
//
// 	               fetch(request)
//
// 	                .then(function(response) {
// 		                  return response.json();
// 	                   })
//
// 	.then(function(response) {
// 		console.log(response);
//
// 		var degree = document.getElementById('degree');
// 		degree.innerHTML = response.liveweer[0].temp + ' &#730;C ';
//
// 		var weather = document.getElementById('weather');
// 		weather.innerHTML = response.liveweer[0].verw;
//
// 		loadMap(response);
// 	});
// }

pkp2GEFRGqwFKJ7vsS8B2mwc6sJKNhyW1xJwCxcB Nasa api key
