const api_url = 'www.api.openweathermap.org/data/2.5/weather?id=5861897&appid=e0e262f4f6566266c6126bc71bf7edd9'

fetch(api_url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const city = jsObject
    })

    document.querySelector('#current-temp').textContent = city.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;