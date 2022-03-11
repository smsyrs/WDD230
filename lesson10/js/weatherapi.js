const api_url = 'api.openweathermap.org/data/2.5/weather?id=5861897&appid=e0e262f4f6566266c6126bc71bf7edd9'

fetch(api_url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
    })

    document.querySelector('#current-temp').textContent = jsObject.main.temp;