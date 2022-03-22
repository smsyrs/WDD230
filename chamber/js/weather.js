const api_url = 'https://api.openweathermap.org/data/2.5/weather?id=5800420&appid=e0e262f4f6566266c6126bc71bf7edd9&units=imperial'

fetch(api_url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const city = jsObject
        displayInfo(city);
    })
function displayInfo(city){
    const temp = city.main.temp;
    document.querySelector('#current-temp').textContent = temp;
    const iconsrc= `https://openweathermap.org/img/w/${city.weather[0].icon}.png`;
    const desc = city.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    let windchillInfo = document.createElement("p");
    let wind = city.wind.speed;
    if ((temp <=50) && (wind < 3)){
        windchillInfo.textContent = "Wind Chill: N/A";
    }
    else{
        let windChillForm = 35.74+(0.6215*(wind)) - 35.75*(wind)**(0.16) + (0.4275*(temp)*((wind)**(0.16)));
        windchillInfo.textContent = `Wind Chill: ${windChillForm.toFixed(2)} \u00B0F`;
    }
    document.querySelector("#weather").appendChild(windchillInfo);
}