const dashboard = document.getElementById("dashboard");


let allUsers =   JSON.parse(localStorage.users);


allUsers.for




function createRow(data) {
    // Crear un nuevo elemento <tr>
    let tr = document.createElement('tr');
  
    // Crear la primera celda con la imagen
    let tdImage = document.createElement('td');
    let img = document.createElement('img');
    img.src = "https://static.nationalgeographic.es/files/styles/image_3200/public/2773.600x450.jpg?w=400&h=400&q=75";  // URL de la imagen
    tdImage.appendChild(img);
  
    // Crear la segunda celda con el nombre
    let tdName = document.createElement('td');
    tdName.textContent = data.name;
  
    // Crear la tercera celda con el valor de tiempo, formateado
    let tdTime = document.createElement('td');
    // Extraemos el tiempo de 'oceania', y lo formateamos si es necesario
    let time = data[countriesMode.value];  // Si no tiene tiempo en 'oceania', usamos "00:00:00" por defecto
    tdTime.textContent = time;
  
    // Añadir las celdas al <tr>
    tr.appendChild(tdImage);
    tr.appendChild(tdName);
    tr.appendChild(tdTime);
  
    // Devolver el <tr>
    return tr;
  }