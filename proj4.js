const appkey="7ebb8012186438d7ee4d4879ff6f1a2a"
const city=document.getElementById("city");
const search=document.getElementById("search");
search.addEventListener("click", function( ){
    console.log(city.value);
const cityname = city.value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${appkey}&units=metric`;
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
document.getElementById("city name").innerHTML= data.name;
document.getElementById("temperature").innerHTML="Temperature:"+data.main.temp+ "C°";
document.getElementById("condition").innerHTML="Condition:"+ data.weather[0].description;
document.getElementById("wind").innerHTML="Wind Speed:"+data.wind.speed+"km/hr";
document.getElementById("humidity").innerHTML="Humidity:"+data.main.humidity+"%";
document.getElementById("weather-image").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

});

});



