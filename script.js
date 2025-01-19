const apikey ="4a99becc9fcc686a992d1181254a2e55";
const url = "https://api.openweathermap.org/data/2.5/weather?&unit=metric&q=";

const cityName = document.querySelector('.city input');
const btn= document.querySelector('.city button');

async function checkweather(cityName) {
    const response = await fetch(url + cityName + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector('.city-name').innerHTML= data.name;
    document.querySelector('.humidity-speed').innerHTML= `${data.main.humidity}%`;
    document.querySelector('.wind-speed').innerHTML= `${data.wind.speed}KM/H`;


};

btn.addEventListener('click',()=>{
    checkweather(cityName.value);
})
