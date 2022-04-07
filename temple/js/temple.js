const requestURL = 'https://smsyrs.github.io/wdd230/temple/data/temple.json'
const cards = document.querySelector("main");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

function displayTemples(temple){
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let photo = document.createElement('img');
    let services = document.createElement('p')
    let schedule = document.createElement('p');
    let phone = document.createElement('p');
    let address = document.createElement('p');

    name.textContent = temple.name
    photo.setAttribute('src', temple.img);
    photo.setAttribute('alt', `Photo of ${temple.name}`);
    photo.setAttribute('loading', 'lazy')

    address.innerHTML = temple.address
    phone.innerHTML = temple.phone
    services.innerHTML = temple.services;
    schedule.innerHTML = temple.closures;

    card.appendChild(name);
    card.appendChild(photo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(services);
    card.appendChild(schedule);
    cards.appendChild(card);
}