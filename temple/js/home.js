

//the current weather section code

const current_url = 'https://api.openweathermap.org/data/2.5/weather?id=5577147&appid=e0e262f4f6566266c6126bc71bf7edd9&units=imperial'
fetch(current_url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const city = jsObject
        current_Info(city);
    })
function current_Info(city){
    document.querySelector("#weather_loc").innerHTML = city.name
    const temp = city.main.temp;
    document.querySelector('#current_temp').textContent = temp;
    const iconsrc= `https://openweathermap.org/img/w/${city.weather[0].icon}.png`;
    const desc = city.weather[0].description;
    document.querySelector('#current_icon').setAttribute('src', iconsrc);
    document.querySelector('#current_icon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
}

// 3 day weather section
const three_day_url = 'https://api.openweathermap.org/data/2.5/forecast/daily?id=5577147&cnt=7&appid=0dff12e14bb72959316a31f24b9310e2&units=imperial';
fetch(three_day_url)
    .then((response)=> response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const city = jsObject
        three_day_info(city);
    });

function three_day_info(city){
    const day0 = 0;
    const day1 = 0;
    const day2 = 0;
}

// 7 day weather section
const seven_day_url="";
fetch(seven_day_url)
    .then((response)=> response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const city = jsObject
        seven_day_info(city);
    });

function seven_day_info(city){
    const day_zero = 0;
    const day_one = 0;
    const day_tw0 = 0;
    const day_three = 0;
    const day_four = 0;
    const day_five = 0;
    const day_six = 0;


}



