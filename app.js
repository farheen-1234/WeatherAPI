

var getdiv = document.getElementById("getdiv");
var getSearch = document.getElementById("news");

var getNews = () => {
    var city = getSearch.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93337295bde0c144edcba1e833710822&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            getdiv.innerHTML = `
                <div class="card">
                    <h2>${data.name}</h2>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                    <h3>${data.main.temp} °C</h3>
                    <p><b>Weather:</b> ${data.weather[0].main}</p>
                    <p><b>Description:</b> ${data.weather[0].description}</p>
                    <p><b>Humidity:</b> ${data.main.humidity}%</p>
                    <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
                </div>
            `;
        })
        .catch(err => console.log(err));
};



