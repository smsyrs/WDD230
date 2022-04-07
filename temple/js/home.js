

//the current weather section code

const weather_url = "https://api.openweathermap.org/data/2.5/onecall?lat=40.5853&lon=-105.0844&exclude=minutely,hourly&appid=0dff12e14bb72959316a31f24b9310e2&units=imperial";
fetch(weather_url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const city = jsObject
        current_Info(city);
        three_day_info(city);
        seven_day_info(city);
    })
function current_Info(city){
    const temp = city.current.temp;
    document.querySelector('#current_temp').textContent = temp;
    const iconsrc= `https://openweathermap.org/img/w/${city.current.weather[0].icon}.png`;
    const desc = city.current.weather[0].description;
    document.querySelector("#current_hum").textContent = city.current.humidity;
    document.querySelector('#current_icon').setAttribute('src', iconsrc);
    document.querySelector('#current_icon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
}

// 3 day weather section
function three_day_info(city){
    document.querySelector("#day0Temp").textContent = city.daily[0].temp.day;
    document.querySelector("#day1Temp").textContent = city.daily[1].temp.day;
    document.querySelector('#day2Temp').textContent = city.daily[2].temp.day;
}

// 7 day weather section

function seven_day_info(city){
    const day_zero = 0;
    const day_one = 0;
    const day_tw0 = 0;
    const day_three = 0;
    const day_four = 0;
    const day_five = 0;
    const day_six = 0;


}



