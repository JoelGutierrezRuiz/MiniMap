const apiKey = "278e107c7b7be0a3e2bb291233e4bcfd";
const askingFor = getRandomElement(europe_codes);
const flag = document.getElementById("flag");

let learning = true;


let gameLanguage = "es"
let currentMarkerCountryCode;




var geojson;



const lightBulb = document.getElementById("lightBulb");

const countriesMode = document.getElementById("countriesMode");


const alertSave = document.getElementById("alertSave")

//Country info components
const countryName = document.getElementById("country_name");
const population = document.getElementById("population");
const capital = document.getElementById("capital");
const weatherImg = document.getElementById("weatherImg");
const degrees= document.getElementById("degrees");


//Banner guessing components
const toGuessImg = document.getElementById("to-guess-img");
const toGuessName = document.getElementById("to-guess-name");
const progressNumber = document.getElementById("progress");
const progressRemainingNumber = document.getElementById("progress-remaining")



const alert = document.getElementById("alert")

let lastMarker;


let selectedCountries = [];

let game;




//Variables
let hours = "00",minutes = "00", seconds = "00";

//Interval
let chronoCall;

//Time component
let time = document.getElementById("timer");

//Chrono function called each second
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

//Initialize the timer interval
function playTimer(){
  chronoCall = setInterval(chrono,1000); 

};


class Game{

  #toGuess;
  #countries;
  #countriesAppeared;
  #started;
  #gameOver;

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
    this.displayGuessing();
    renderDashboard()
  }

  nextGuess(){

    this.#gameOver = this.#countriesAppeared.length == this.#countries.length;

    console.log("gameover->",this.#gameOver)
    if(this.#gameOver){

      if(!learning){
        alertSave.style.display="flex";
      }

      console.log(learning,"queeee")

      clearInterval(chronoCall)
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


  isGameOver(){
    return this.#gameOver;
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

  //Map starting with the coordinates of Spain
  let initCoord = {
    "lat":40.4165,
    "lng":-3.70256
  }

  //Creating the map layer
  const map = L.map('map',
    {
      "maxBounds": [
        [-180, -360],
        [180, 360]  
    ],
    "minZoom":1
    }
  ).setView([initCoord.lat, initCoord.lng],3);  //Setting the view in spain with lowe zoom

  //Displaying the info of spain
  displayCoordInfo(initCoord,"ES");
 

 

  //Adding to the mao the GeoJson info of all the countries withs their borders (Api)
  fetch('https://r2.datahub.io/clvyjaryy0000la0cxieg4o8o/main/raw/data/countries.geojson')
  .then(response => response.json())
  .then( (data)=>{//Once is loaded the game is created, waiting to be started 
      //Playing has the logic whith the new layer we used to have a specific learning mode
      playing(map,data)  
      game = new Game(countriesMode.value);
    });






  
    //When the light is clicked the view of the map is setted to the clicked coordinates
  lightBulb.addEventListener("click",()=>{

    //Light off = no clue to show
    if(lightBulb.innerHTML=="light_off"){
      return;
    }

    //Getting the coordinates of the capital city of the country in (countries.js)
    let coords = all_countries[game.getToGuess()].coordinates;

    map.setView([coords.lat,coords.lng],7);
    createOneMarker(coords,map)

  })

});


function playing(map,data){

    // Inserting a new layer from OpenStreetMap, this layer has no name of any cities or countries
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
      detectRetina: true
    }).addTo(map);

    //
    function highlightFeature(e) {

      console.log("!!!!->",e.target)
      let guessed = all_countries[game.getToGuess()].en==e.target.feature.properties.ADMIN;


      if(!game.isStarted()){
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

        if(!game.isGameOver()){
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

//Deletes the last marker in the map
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
  
  return currentWeather;

}

// Returns a random element from an array in this a countryCode array in countries.js
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// parse 00:00:01 into 1
function parseTimeFormat(data){
  return parseInt(data.replace(/:/g,""));
}


