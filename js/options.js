const learningMode = document.getElementById("learningMode");
const countriesMode = document.getElementById("countriesMode");
const timerContainer = document.getElementById("timerContainer");
const startTimer = document.getElementById("");
const retryTimer = document.getElementById("");
const language = document.getElementById("languages");
const lightBulb = document.getElementById("lightBulb")

learningMode.checked = true;


learningMode.addEventListener("click", (e) => {


    let checked = e.target.checked;

    if (checked) {
        lightBulb.innerHTML = "lightbulb"
        timerContainer.classList.remove("d-flex");
        timerContainer.classList.add("d-none");
    }
    else {
        timerContainer.classList.add("d-flex");
        timerContainer.classList.remove("d-none");
        lightBulb.innerHTML = "light_off";
    }

    console.log(e.target.checked)


})



language.addEventListener("change", (e) => {

    let lang = e.target.value;

    countriesModeOptions = countriesMode.options;

    if (lang == "spanish") {
        e.target.options[1].innerHTML = "Inglés 🇺🇸 "
        e.target.options[0].innerHTML = "Español 🇪🇸 "

        countriesModeOptions[0].innerHTML = " Europa 🇪🇺 "
        countriesModeOptions[2].innerHTML = "Todos los paises 🌎 "



    }
    else {
        e.target.options[1].innerHTML = "English 🇺🇸 "
        e.target.options[0].innerHTML = "Spanish 🇪🇸 "

        countriesModeOptions[0].innerHTML = " Europe 🇪🇺 "
        countriesModeOptions[2].innerHTML = "All countries 🌎 "

    }

})