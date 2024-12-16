const apiKey = "278e107c7b7be0a3e2bb291233e4bcfd";
const askingFor = getRandomElement(europe_codes);
const flag = document.getElementById("flag");


let gameLanguage = "es"
let currentMarkerCountryCode;


let playingMode = "learning"

var geojson;


const lightBulb = document.getElementById("lightBulb");

const countriesMode = document.getElementById("countriesMode");


//Learning mode
const countryName = document.getElementById("country_name");
const population = document.getElementById("population");
const capital = document.getElementById("capital");
const weatherImg = document.getElementById("weatherImg");
const degrees= document.getElementById("degrees");


//Playing mode
const toGuessImg = document.getElementById("to-guess-img");
const toGuessName = document.getElementById("to-guess-name");

const progressNumber = document.getElementById("progress");
const progressRemainingNumber = document.getElementById("progress-remaining")


let gameOver;


let lastMarker;


let selectedCountries = [];

let game;





let hours = "00",minutes = "00", seconds = "00";
let chronoCall;

let time = document.getElementById("timer");



function chrono(){
    seconds++;
    if(seconds<10) seconds = "0"+seconds;
    if(seconds>59){
        seconds = "00";
        minutes ++;
        if(minutes<10) minutes = "0"+minutes;

    }
    if(minutes>59){
        minutes="00";
        hours++;
        if(hours<10) hours = "0"+hours;
    }
    time.innerHTML = hours+":"+minutes+":"+seconds;
}


function playTimer(){
  chronoCall = setInterval(chrono,1000); 

};






class Game{

  #toGuess;
  #countries;
  #countriesAppeared;
  #started;

  constructor(countriesMode){
    switch(countriesMode){
      case "europe":
        this.#countries = europe_codes;
        break;
      case "america":
        this.#countries = america_codes;
        break;
      case "africa":
        this.#countries = africa_codes;
        break;
      case "asia":
        this.#countries = asia_codes;
        break;
        case "oceania":
          this.#countries = oceania_codes;
          break;
        case "all":{
          this.#countries = all_country_codes;
          break;
        }
    }
    this.#started=false;
    geojson.resetStyle()
    this.#countriesAppeared = [];
    progressNumber.innerHTML = 0;
    progressRemainingNumber.innerHTML = this.#countries.length
    this.nextGuess();
    this.displayGuessing()
  }

  nextGuess(){

    gameOver = this.#countriesAppeared.length == this.#countries.length;

    if(gameOver){
      alert("All countries guessed")
      return
    }

    let appeared;
    do{
      this.#toGuess = getRandomElement(this.#countries);
      appeared= this.#countriesAppeared.includes(this.#toGuess);
    }while(appeared);


    this.#countriesAppeared.push(this.#toGuess);
    this.displayGuessing()
  }

  displayGuessing(){

    restcountriesInfo(this.#toGuess)
    .then((res)=>{
      toGuessImg.src=res[0].flags.png
      toGuessName.innerHTML = all_countries[this.#toGuess][gameLanguage]
    })

  }

  start(){
    this.#started = true;
  }



  isStarted(){
    return this.#started;
  }

  getToGuess(){
    return this.#toGuess;
  }

}
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
  ).setView([initCoord.lat, initCoord.lng],3); 

  displayCoordInfo(initCoord,"ES");
 

  // Inicializa el mapa y centra la vista

  fetch('https://r2.datahub.io/clvyjaryy0000la0cxieg4o8o/main/raw/data/countries.geojson')
  .then(response => response.json())
  .then( (data)=>{
    
      playing(map,data)  
      game = new Game(countriesMode.value);
    });







  lightBulb.addEventListener("click",()=>{
    if(lightBulb.innerHTML=="light_off"){
      return;
    }
    let coords = all_countries[game.getToGuess()].coordinates;

    map.setView([coords.lat,coords.lng],6);
    createOneMarker(coords,map)

  })

});


function playing(map,data){
    // Mapa base
    // Capa base de OpenStreetMap
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
      detectRetina: true
    }).addTo(map);

    // Función para resaltar el país específico
    function highlightFeature(e) {

      console.log("!!!!->",e.target)
      let guessed = all_countries[game.getToGuess()].en==e.target.feature.properties.ADMIN;


      if(lightBulb.innerHTML=="light_off" && !game.isStarted()){
        playTimer()
        game.start()
      }


      if(guessed){
        e.target.setStyle({
          weight: 3,
          fillColor:"green",
          color: 'green',  // Color de la frontera
          dashArray: '',
          fillOpacity: 0.3  // Opacidad del relleno
        });

        if(!gameOver){
          progressNumber.innerHTML = parseInt(progressNumber.innerHTML)+1;
          game.nextGuess()
        }
      }
      else if(!guessed && e.target.options.color!="green"){
        e.target.setStyle({
          weight: 3,
          fillColor:"red",
          color: 'red',  // Color de la frontera
          dashArray: '',
          fillOpacity: 0.3  // Opacidad del relleno
        });
      }

      let coord = e.latlng;
      displayCoordInfo(coord,e.target.feature.properties["ISO_A2"])
      .then(()=>{
        map.setView([coord.lat,coord.lng],3)
        createOneMarker(coord,map);
      });

      // Cambiar estilo del país resaltado
      
    }


    function showBorder(e) {

      //console.log(e.target.options)
      if(e.target.options.color=="red" || e.target.options.color=="green" ){
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
      if(e.target.options.color=="red" || e.target.options.color=="green" ){
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
    geojson = L.geoJSON(data, {
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

//
async function displayCoordInfo(coord,countryCode){

  let countryInfo = await restcountriesInfo(countryCode);
  let currentWeather = await openWeatherCurrentWeather(coord);

  if(countryInfo){

    console.log("Esto no encuentra",countryInfo)
    flag.src= countryInfo[0].flags.png;
    population.innerHTML = countryInfo[0].population.toLocaleString();



    capital.innerHTML = countryInfo[0].capital?countryInfo[0].capital[0]:"No capital";

   
    weatherImg.src = "https://openweathermap.org/img/wn/"+currentWeather.weather[0].icon+"@2x.png"
    degrees.innerHTML =  kelvinToCelcius(currentWeather.main.temp)+"º" 
    
    console.log(countryCode)

    currentMarkerCountryCode = countryCode;
    countryName.innerHTML = all_countries[countryCode][gameLanguage] ;
  }

}
//This function creates a marker and deletes the last marker
function createOneMarker(coord,map){
  deletCurrentMarker(map)
  lastMarker = L.marker([coord.lat, coord.lng]);
  lastMarker.addTo(map);
}
function deletCurrentMarker(map){
  if(lastMarker){
    map.removeLayer(lastMarker)
  }
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
//
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}




