const apiKey = "278e107c7b7be0a3e2bb291233e4bcfd";
const askingFor = getRandomElement(europe_codes);
const flag = document.getElementById("flag")

let playingMode = "learning"

//Learning mode
const countryName = document.getElementById("country_name");
const population = document.getElementById("population");
const capital = document.getElementById("capital");
const weatherImg = document.getElementById("weatherImg");
const degrees= document.getElementById("degrees");

let lastMarker;

// Espera a que la página cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
  let initCoord = {
    "lat":40.4165,
    "lng":-3.70256
  }
  const map = L.map('map',
    {
      "maxBounds": [
        [-180, -360],
        [180, 360]  
    ],
    "minZoom":1
    }
  ).setView([initCoord.lat, initCoord.lng],5); 

  createOneMarker(initCoord,map);
  displayCoordInfo(initCoord);
 

  // Inicializa el mapa y centra la vista

  fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
  .then(response => response.json())
  .then( (data)=> playing(map,data));



  

  map.on("click",(e) => {
    let coord = e.latlng;
    displayCoordInfo(coord)
    .then(()=>{
      map.setView([coord.lat,coord.lng],3)
      createOneMarker(coord,map);
    });
  });
});






function learning(map,data){
  let lastCountry;
  
    // Mapa base
    // Capa base de OpenStreetMap
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
      detectRetina: true
    }).addTo(map);

    // Función para resaltar el país específico
    function highlightFeature(e) {
      if(lastCountry!=e.target){
        geojson.resetStyle(lastCountry);
        lastCountry=e.target;
      }
      // Cambiar estilo del país resaltado
      e.target.setStyle({
        weight: 3,
        color: 'green',  // Color de la frontera
        dashArray: '',
        fillOpacity: 0.3  // Opacidad del relleno
      });
    }


    function showBorder(e) {

      if(e.target==lastCountry){
        return;
      }

      e.target.setStyle({
        weight: 3,
        color: 'orange',  // Color de la frontera
        dashArray: '',
        fillOpacity: 0.3  // Opacidad del relleno
      });
    }

    function noBorder(e){
      if(e.target==lastCountry){
        return;
      }
      geojson.resetStyle(e.target);
    }

    // Función para aplicar eventos de interacción (hover, click, etc.)
    function onEachFeature(feature, layer) {
      layer.on({
        "click": highlightFeature,
        "mouseover":showBorder,
        "mouseout":noBorder
      });
    }
    // Cargar los países en el mapa
    var geojson = L.geoJSON(data, {
      style: function (feature) {
        return {
          fillColor:"white",
          color: 'gray',  // Color de la frontera
          weight: 1,      // Grosor de la frontera
          opacity: 0.5    // Opacidad de la frontera
        };
      },
      onEachFeature: onEachFeature
    }).addTo(map);
  
  

}



function playing(map,data){
  let lastCountry;
  
    // Mapa base
    // Capa base de OpenStreetMap
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
      detectRetina: true
    }).addTo(map);

    // Función para resaltar el país específico
    function highlightFeature(e) {

      console.log("!!!",e.target)

      if("Spain"!=e.target.feature.properties.name){
        lastCountry=e.target;
      
        e.target.setStyle({
          weight: 3,
          color: 'red',  // Color de la frontera
          dashArray: '',
          fillOpacity: 0.3  // Opacidad del relleno
        });
      
      }
      // Cambiar estilo del país resaltado
      
    }


    function showBorder(e) {


      console.log("----> estilo:",e.target.options.style.color=="red")

      if(e.target==lastCountry){
        return;
      }

      e.target.setStyle({
        weight: 3,
        color: 'orange',  // Color de la frontera
        dashArray: '',
        fillOpacity: 0.3  // Opacidad del relleno
      });
    }

    function noBorder(e){
      if(e.target==lastCountry){
        return;
      }
      geojson.resetStyle(e.target);
    }

    // Función para aplicar eventos de interacción (hover, click, etc.)
    function onEachFeature(feature, layer) {
      layer.on({
        "click": highlightFeature,
        "mouseover":showBorder,
        "mouseout":noBorder
      });
    }
    // Cargar los países en el mapa
    var geojson = L.geoJSON(data, {
      style: function (feature) {
        return {
          fillColor:"white",
          color: 'gray',  // Color de la frontera
          weight: 1,      // Grosor de la frontera
          opacity: 0.5    // Opacidad de la frontera
        };
      },
      onEachFeature: onEachFeature
    }).addTo(map);
  
  

}












async function displayCoordInfo(coord){
  let countryCode = await openweathermapCountryCode(coord);
  let countryInfo = await restcountriesInfo(countryCode);
  let currentWeather = await openWeatherCurrentWeather(coord);

  if(countryInfo){

    flag.src= countryInfo[0].flags.png;
    population.innerHTML = countryInfo[0].population.toLocaleString();
    capital.innerHTML = countryInfo[0].capital[0]
  
    weatherImg.src = "https://openweathermap.org/img/wn/"+currentWeather.weather[0].icon+"@2x.png"
    degrees.innerHTML =  kelvinToCelcius(currentWeather.main.temp)+"º" 
    
    countryName.innerHTML = all_countries[countryCode].es ;
  }

}

//This function creates a marker and deletes the last marker
function createOneMarker(coord,map){
  if(lastMarker){
    map.removeLayer(lastMarker)
  }
  lastMarker = L.marker([coord.lat, coord.lng]);
  lastMarker.addTo(map);
}

//This function calls the the openweatherMap api with one coordinate, returning the country code
async function openweathermapCountryCode(coord){
  let link = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + coord.lat + "&lon=" + coord.lng + "&appid=" + apiKey;
  let result = await fetch(link);
  let city = await result.json();
  
  console.log("OpenWeather coord result:",city);

  return city[0].country;
}

//This function calls restCountries API with a country code returning more info about the country like its flag
async function restcountriesInfo(countryCode){
  let link = "https://restcountries.com/v3.1/alpha/"+countryCode;
  let countryInfo = await fetch(link);
  let country = await countryInfo.json();
  return country;
}

//Kelvin to Celcius
function kelvinToCelcius(kelvin){
  let celsius = kelvin - 273.15
  return Math.round(celsius);
}

//This function calls openweather returning the current weather

async function openWeatherCurrentWeather(coord){

  let link = "https://api.openweathermap.org/data/2.5/weather?lat="+coord.lat+"&lon="+coord.lng+"&appid="+apiKey;

  let result =  await fetch(link);

  let currentWeather = await result.json();
  
  console.log("Current weather call result: ",currentWeather);

  return currentWeather;

}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}