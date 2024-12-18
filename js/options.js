const learningMode = document.getElementById("learningMode");


const timerContainer = document.getElementById("timerContainer");
const startTimer = document.getElementById("");
const retryTimer = document.getElementById("");
const language = document.getElementById("languages");

const toGuessCountryName = document.getElementById("to-guess-name");

const populationText = document.getElementById("populationText");
const weatherText = document.getElementById("weatherText");

const restart = document.getElementById("restart");



learningMode.checked = true;


learningMode.addEventListener("click", (e) => {

    //Creating a new game
    game = new Game(countriesMode.value);
    restartTimer();

    //Reseting the left selections in the map
    let checked = e.target.checked;
    if (checked) {
        lightBulb.innerHTML = "lightbulb"
        timerContainer.classList.remove("d-flex");
        timerContainer.classList.add("d-none");
    }
    else {
        timerContainer.classList.add("d-flex");
        timerContainer.classList.remove("d-none");
       // lightBulb.innerHTML = "light_off";
    }
})

language.addEventListener("change", (e) => {

    let lang = e.target.value;

    countriesModeOptions = countriesMode.options;

    if (lang == "spanish") {
        e.target.options[1].innerHTML = "Inglés 🇺🇸 "
        e.target.options[0].innerHTML = "Español 🇪🇸 "
        weatherText.innerHTML="Clima";
        populationText.innerHTML="Población";

        countriesModeOptions[0].innerHTML = "Europa 🇪🇺 "
        countriesModeOptions[2].innerHTML = "África 🇿🇦 "
        countriesModeOptions[4].innerHTML = "Oceanía  🇳🇿 "
        countriesModeOptions[5].innerHTML = "Todos los paises 🌎 "    
        gameLanguage = "es";
    
    }
    else {
        e.target.options[1].innerHTML = "English 🇺🇸 "
        e.target.options[0].innerHTML = "Spanish 🇪🇸 "

        weatherText.innerHTML="Weather";
        populationText.innerHTML="Population";

        countriesModeOptions[0].innerHTML = "Europe 🇪🇺 "
        countriesModeOptions[2].innerHTML = "Africa 🇿🇦 "
        countriesModeOptions[4].innerHTML = "Oceania  🇳🇿 "
        countriesModeOptions[5].innerHTML = "All countries 🌎 "  
        gameLanguage = "en"
    }

    toGuessCountryName.innerHTML =  all_countries[game.getToGuess()][gameLanguage]
    countryName.innerHTML = all_countries[currentMarkerCountryCode][gameLanguage];


})

countriesMode.addEventListener("change",(e)=>{
    game = new Game(e.target.value);
    restartTimer();
})

restart.addEventListener("click",(e)=>{
    restartTimer();
})

function restartTimer(){
    clearInterval(chronoCall);
    hours="00",minutes="00",seconds="00";
    time.innerHTML = hours+":"+minutes+":"+seconds;
    game = new Game(countriesMode.value);
}


