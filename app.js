const apiKey="YOUR_API_KEY";

const city="Karachi";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

.then(response=>response.json())

.then(data=>{

document.getElementById("temp").innerHTML=
Math.round(data.main.temp)+"°";

document.getElementById("max").innerHTML=
"↑ "+Math.round(data.main.temp_max)+"°";

document.getElementById("min").innerHTML=
"↓ "+Math.round(data.main.temp_min)+"°";

document.getElementById("weather").innerHTML=
data.weather[0].main;

document.getElementById("icon").src=
"https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";

});




