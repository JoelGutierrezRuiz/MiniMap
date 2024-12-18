const dashboard = document.getElementById("dashboard");
const dashboardTitle=document.getElementById("dashboardTitle");


function renderDashboard(){
  allUsers= JSON.parse(localStorage.users);
  resetDashboard();
  const withScore = allUsers.filter(obj => obj[countriesMode.value] != null);

  if(withScore.length==0){
    dashboard.style.display="none"
    dashboardTitle.innerHTML = "Dashboard <br><br> <h4>Empty<h4>"
    return
  }
  dashboardTitle.innerHTML = "Dashboard"

  dashboard.style.display="block"


  const ascScores = withScore.sort((a, b) =>  parseTimeFormat(a[countriesMode.value]) - parseTimeFormat(b[countriesMode.value]));
  console.log(ascScores);

  ascScores.forEach(user => {  
  dashboard.appendChild(createRow(user));

});


}




function createRow(data) {
    // Crear un nuevo elemento <tr>
    let tr = document.createElement('tr');
    tr.classList.add("score");
  
    // Crear la primera celda con la imagen
    let tdColor = document.createElement('td');
    let color = document.createElement('div');
    color.classList.add("dashboard-color")
    color.style.backgroundColor=data.color;
    tdColor.appendChild(color);
  
    // Crear la segunda celda con el nombre
    let tdName = document.createElement('td');
    tdName.textContent = data.name;
  
    // Crear la tercera celda con el valor de tiempo, formateado
    let tdTime = document.createElement('td');
    // Extraemos el tiempo de 'oceania', y lo formateamos si es necesario
    let time = data[countriesMode.value];  // Si no tiene tiempo en 'oceania', usamos "00:00:00" por defecto
    tdTime.textContent = time;
  
    // Añadir las celdas al <tr>
    tr.appendChild(tdColor);
    tr.appendChild(tdName);
    tr.appendChild(tdTime);
  
    // Devolver el <tr>
    return tr;
}


function resetDashboard(){
  let scores =  Array.from(document.getElementsByClassName("score"));
  for(let i=0; i<scores.length;i++){
    scores[i].remove();
  }
}