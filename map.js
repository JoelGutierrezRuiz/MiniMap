


      
  // Espera a que la página cargue antes de ejecutar el script
  document.addEventListener("DOMContentLoaded", function () {
    // Inicializa el mapa y centra la vista
    const map = L.map('map').setView([51.505, -0.09], 13); // Latitud, longitud y zoom inicial


    // Agrega un mapa base desde OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);




    const apiKey = "278e107c7b7be0a3e2bb291233e4bcfd";
    
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");










    searchButton.addEventListener("click", async ()=>{

        let cityName = searchInput.value;

        let url = " http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&appid="+apiKey;

        let result = await fetch(url);
        let coord = await result.json();
        coord = coord[0];

        map.setView( [coord.lat,coord.lon],13 );

        console.log(coord);

    })

  


    

    map.on("click", async (e)=>{

        let coord = e.latlng;

        console.log(coord)

        let link = "http://api.openweathermap.org/geo/1.0/reverse?lat="+coord.lat+"&lon="+coord.lng+"&appid="+apiKey;

        let result = await fetch(link);
        let city = await result.json();
        alert(city[0].name);
    } );







  });
