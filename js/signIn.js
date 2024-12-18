//

const alertSaveButon = document.getElementById("alertSaveButton")

const saveScoreContainer = document.getElementById("save-score");
const saveScoreInput = document.getElementById("saveScoreInput");

const coincidenceParent = document.getElementById("usersCoincidense");

const saveScoreButton = document.getElementById("saveScoreButton");

let userSelected;



if(!localStorage.users){
    localStorage.users = "[]";
}





//Close the save scroe 
document.addEventListener("click",(e)=>{
    if(e.target.id=="save-score"){
        clearCoincidence()
        saveScoreContainer.style.display="none"
    }
})

let allUsers =   JSON.parse(localStorage.users);

//
saveScoreInput.addEventListener("input",()=>{
    clearCoincidence();
    if(saveScoreInput.value==""){
        return
    }
    clearCoincidence();
    const result = allUsers.filter(item => item.name.toLowerCase().startsWith(saveScoreInput.value.toLowerCase()));
    result.forEach(element => {
        coincidenceParent.appendChild(createCoincidenceComponent(element));

    });
})

alertSaveButon.addEventListener("click",()=>{
    saveScoreContainer.style.display="flex"
})

saveScoreButton.addEventListener("click",()=>{

    let userName = saveScoreInput.value.trim().toUpperCase();

    if(exist(userName)){
        console.log("Select the existing user and save");
        return
    }

    if(userSelected){
        let lastScore = userSelected[countriesMode.value];
        if(lastScore==null){
            userSelected[countriesMode.value]=time.innerHTML;
        }
        else{
            userSelected[countriesMode.value] =parseTimeFormat(lastScore)<parseTimeFormat(time.innerHTML)?lastScore:time.innerHTML;
        }
        updateUser(userSelected);
        localStorage.users=JSON.stringify(allUsers);
        userSelected=null;
    }
    else{

        if(userName.length === 0){
            return;
        }
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
        allUsers.push(user);
        localStorage.users= JSON.stringify(allUsers);
    }


    alertSave.style.display="none";
    saveScoreContainer.style.display="none"
    user[countriesMode.value]=time.innerHTML
    clearCoincidence()
    renderDashboard()
})


function createCoincidenceComponent(data) {
  // Crear el contenedor principal <div class="coincidence">
  const coincidenceDiv = document.createElement('button');
  coincidenceDiv.classList.add('coincidence');
  
  // Crear el contenedor para el color <div class="coincidence-color">
  const colorDiv = document.createElement('div');
  colorDiv.classList.add('coincidence-color');
  colorDiv.style.backgroundColor=data.color;
  
  // (Opcional) Aquí puedes añadir un color específico o cualquier estilo
  // colorDiv.style.backgroundColor = '#FF0000'; // Ejemplo de color
  
  // Crear el párrafo con el nombre <p class="coincidence-name">Nombre</p>
  const nameP = document.createElement('p');
  nameP.classList.add('coincidence-name');
  nameP.textContent = data.name; // Asignar el nombre del objeto
  

  coincidenceDiv.addEventListener("click",()=>{
    userSelected = data;
    saveScoreInput.value=""
    console.log(userFound);
  })


  // Agregar el colorDiv y nameP a coincidenceDiv
  coincidenceDiv.appendChild(colorDiv);
  coincidenceDiv.appendChild(nameP);



  
  // Devolver el componente completo
  return coincidenceDiv;
}
function clearCoincidence(){
    saveScoreInput="";
    let coincidences = document.getElementsByClassName("coincidence");
    userFound = null;
    for(let i=0;i<coincidences.length;i++){
        coincidences[i].remove();
    }
}
function updateUser(user){
    for(let i=0 ; i<allUsers.length;i++){
        if(user.name == allUsers[i]){
            allUsers[i] = user;
        }
    }
}
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
function randomColor(){
    let hex = "0123456789ABCDEF";
    let color="#";
    for(let i=0; i<6; i++){
        color+=hex[getRandomInt(hex.length)];
    }
    return color;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

