const learningMode = document.getElementById("learningMode");

const timerContainer = document.getElementById("timerContainer");
const startTimer = document.getElementById("");
const retryTimer = document.getElementById("");
const language = document.getElementById("languages");
const toGuessCountryName = document.getElementById("to-guess-name");
const populationText = document.getElementById("populationText");
const weatherText = document.getElementById("weatherText");
const restart = document.getElementById("restart");

const dashBoardTitle = document.getElementById("dashboardTitle");
const dashboardEmpty = document.getElementById("dashboardEmpty");
const dashboardScoreTitle = document.getElementById("dashboardScoreTitle");
const dashboardName = document.getElementById("dashboardName");

//Learning mode on by default
learningMode.checked = true;


//Learning mode switch button
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
        learning = true;
    }
    else {
        timerContainer.classList.add("d-flex");
        timerContainer.classList.remove("d-none");
        lightBulb.innerHTML = "light_off";
        learning =false;
    }



})

//All the traducctions logic
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

        dashBoardTitle.innerHTML= "Puntuaciones";
        dashboardEmpty.innerHTML = "Vacio";

        dashboardName.innerHTML = "Nombre";
        dashboardScoreTitle.innerHTML="Tiempo"

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

        dashBoardTitle.innerHTML= "Dashboard";
        dashboardEmpty.innerHTML = "Empty";

        
        dashboardName.innerHTML = "Name";
        dashboardScoreTitle.innerHTML="Time"


        gameLanguage = "en"
    }

    toGuessCountryName.innerHTML =  all_countries[game.getToGuess()][gameLanguage]
    countryName.innerHTML = all_countries[currentMarkerCountryCode][gameLanguage];


})

//If the country mode (select <html>) has changed
countriesMode.addEventListener("change",(e)=>{

    //Creates a new Game with the new country mode value
    game = new Game(e.target.value);

    //Restarts the timer
    restartTimer();
})


restart.addEventListener("click",(e)=>{
    restartTimer();
})

//Whent the timer is restarded
function restartTimer(){

    //Stops the interval
    clearInterval(chronoCall);

    //00 everything
    hours="00",minutes="00",seconds="00";
    time.innerHTML = hours+":"+minutes+":"+seconds;

    //Asgins a new game
    game = new Game(countriesMode.value);
}


