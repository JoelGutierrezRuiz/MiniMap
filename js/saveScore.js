//Saving components
const alertSaveButon = document.getElementById("alertSaveButton")
const saveScoreContainer = document.getElementById("save-score");
const saveScoreInput = document.getElementById("saveScoreInput");

const coincidenceParent = document.getElementById("usersCoincidense");
const saveScoreButton = document.getElementById("saveScoreButton");


//When you select a user to save its score
let userSelected;

//Init the users storage
if(!localStorage.users){
    localStorage.users = "[]";
}

//Aux variable of the local storage
let allUsers =   JSON.parse(localStorage.users);

//After the game has ended and the alert to save is displayed you can click the save button and display the user browser
alertSaveButon.addEventListener("click",()=>{
    saveScoreContainer.style.display="flex"
})

//When you click the gray background (coincidence parent) aborts the saving score process 
document.addEventListener("click",(e)=>{
    if(e.target.id=="save-score"){
        clearCoincidence()
        saveScoreContainer.style.display="none"
    }
})

//When the user is typing, the browser reveals the coincidence
saveScoreInput.addEventListener("input",()=>{

    //Clearing last coincidences if the browser was closed
    clearCoincidence();

    //if there is nothing to show
    if(saveScoreInput.value==""){
        return;
    }

    //Lambda to filter the coincidence (  jo*  ) => (joel,joe,jose,joan)
    const result = allUsers.filter(item => item.name.toLowerCase().startsWith(saveScoreInput.value.toLowerCase()));
    
    //Printing the filtered results
    result.forEach(element => {
        coincidenceParent.appendChild(createCoincidenceComponent(element));

    });
})


//This button is to save the score with a new user or a existing one
saveScoreButton.addEventListener("click",()=>{

    //Getting the username from the input in the browser
    let userName = saveScoreInput.value.trim().toUpperCase();

    //You must select the coincidence in the browser if the user exists
    if(exist(userName) && !userSelected){
        console.log("Select the existing user and save");
        return;
    }

    //If you selected a user (event listener in the createCoincidenceComponent)
    if(userSelected){
        
        //Saving the last score depending on the mode (america,europe...etc)
        let lastScore = userSelected[countriesMode.value];

        //If there is no score it saves the current score
        if(lastScore==null){
            userSelected[countriesMode.value]=time.innerHTML;
        }
        //Otherwise
        else{
            //formats the current and the las into this format => (00:00:34 -> 34) to compare both and take the lesser value
            userSelected[countriesMode.value] =parseTimeFormat(lastScore)<parseTimeFormat(time.innerHTML)?lastScore:time.innerHTML;
        }

        //Updating the new value of the score
        updateUser(userSelected);

        //now there is no selection
        userSelected=null;
    }
    //No coincidence means new User
    else{

        //No name for the new user, nothing to do =>
        if(userName.length === 0){
            return;
        }

        //Creating the new user assigning the name and the random color
        let user = {
            "name":userName,
            "color":randomColor(),
            "europe":null,
            "america":null,
            "asia":null,
            "africa":null,
            "oceania":null,
            "all":null
        }

        //Current score assigment 
        user[countriesMode.value]=time.innerHTML

        //Pushing the new user into the array
        allUsers.push(user);
    }

    //Hide the options to save again the score
    alertSave.style.display="none";
    saveScoreContainer.style.display="none"

    //Reseting the browser input and the coincidences
    saveScoreInput.value="";
    clearCoincidence()

    //Saving the array updated with new score or a new user
    localStorage.users=JSON.stringify(allUsers);

    //Updating the dashboard
    renderDashboard()


})

//Creates a coincidence in the user browser
function createCoincidenceComponent(data) {


  const coincidenceDiv = document.createElement('button');
  coincidenceDiv.classList.add('coincidence');
  
  const colorDiv = document.createElement('div');
  colorDiv.classList.add('coincidence-color');
  colorDiv.style.backgroundColor=data.color;
  
  const nameP = document.createElement('p');
  nameP.classList.add('coincidence-name');
  nameP.textContent = data.name; 
  

  coincidenceDiv.addEventListener("click",()=>{
    userSelected = data;
    saveScoreInput.value=""
    console.log(userFound);
  })

  coincidenceDiv.appendChild(colorDiv);
  coincidenceDiv.appendChild(nameP);


  // Returning the component
  return coincidenceDiv;
}

//Clears all the coincidens in the users browser
function clearCoincidence(){
    let coincidences = document.getElementsByClassName("coincidence");
    userFound = null;
    for(let i=0;i<coincidences.length;i++){
        coincidences[i].remove();
    }
}

//Updates an existing user in the users array
function updateUser(user){
    for(let i=0 ; i<allUsers.length;i++){
        if(user.name == allUsers[i]){
            allUsers[i] = user;
        }
    }
}

//If the user exist returns true
function exist(userName){
    if(allUsers.length==0)return;
    let found = false;
    allUsers.forEach(user => {
        if(userName==user.name){
            found=user;
        }
    });
    return found;
}

//It returns a random Hexadecimal color
function randomColor(){
    let hex = "0123456789ABCDEF";
    let color="#";
    for(let i=0; i<6; i++){
        color+=hex[getRandomInt(hex.length)];
    }
    return color;
}

//Function to return a random number between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

