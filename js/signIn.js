//

saveScoreContainer = document.getElementById("save-score");
saveScoreInput = document.getElementById("saveScoreInput");

coincidenceParent = document.getElementById("usersCoincidense");

saveScoreButton = document.getElementById("saveScoreButton");

userFound = null;



console.log(document)


if(!localStorage.users){
    localStorage.users = "[]";
}



//Close the save scroe 
document.addEventListener("click",(e)=>{



    if(e.target.id=="save-score"){
        document.getElementById("save-score").remove()
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
    console.log(result) 
})





function createCoincidenceComponent(data) {
  // Crear el contenedor principal <div class="coincidence">
  const coincidenceDiv = document.createElement('button');
  coincidenceDiv.classList.add('coincidence');
  
  // Crear el contenedor para el color <div class="coincidence-color">
  const colorDiv = document.createElement('div');
  colorDiv.classList.add('coincidence-color');
  
  // (Opcional) Aquí puedes añadir un color específico o cualquier estilo
  // colorDiv.style.backgroundColor = '#FF0000'; // Ejemplo de color
  
  // Crear el párrafo con el nombre <p class="coincidence-name">Nombre</p>
  const nameP = document.createElement('p');
  nameP.classList.add('coincidence-name');
  nameP.textContent = data.name; // Asignar el nombre del objeto
  

  coincidenceDiv.addEventListener("click",()=>{
    userFound = data;
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

    let coincidences = document.getElementsByClassName("coincidence");
    userFound = null;

    for(let i=0;i<coincidences.length;i++){
        coincidences[i].remove();
    }

}








saveScoreButton.addEventListener("click",()=>{

    let userName = saveScoreInput.value.trim().toUpperCase();

    if(userName.length === 0){
        return;
    }

    if(exist(userName)){
        alert("Select the existing user and save");
        return
    }

    let user = {
        "name":userName,
        "color":"blue",
        "europeBest":0,
        "americaBest":0,
        "asiaBest":0,
        "africaBest":0,
        "allBest":0
    }
    allUsers.push(user);
    localStorage.users= JSON.stringify(allUsers);
})




function exist(userName){
    
    if(allUsers.length==0)return;

    let found = false;
    allUsers.forEach(user => {
        if(userName==user.name){
            found=true;
        }
    });
    return found;
}
