let infourl = 'https://smsyrs.github.io/wdd230/chamber/directory/data/directory.json';

let buttonSelector = document.querySelector("#buttonSelector");

let card = document.createElement("button");
card.innerHTML = "Card";

let list = document.createElement("button");
list.innerHTML = "List";

buttonSelector.appendChild(card);
buttonSelector.appendChild(list);

let buttonBool = true;

card.addEventListener('click', ()=>{
    buttonBool = true;
    readJson(buttonBool);
})

list.addEventListener('click', ()=>{
    buttonBool = false;
    readJson(buttonBool);
})

function readJson(buttonBool){
    fetch(infourl)
        .then(function(response){
            return response.json();
        })
        .then(function (jsonObject){
            console.table(jsonObject);
            const businesses = jsonObject['businesses'];
            if (buttonBool = true){
                businesses.forEach(displayCards);
            }
            else{
                businesses.forEach(displayList);
            };
        })
}

function displayCards(business){
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let number = document.createElement("p");
    let website = document.createElement('a');

    name.textContent = business.name;
    logo.setAttribute('src', business.img)
    logo.setAttribute('alt', `${name} Logo`)

    address.textContent = business.address;
    number.textContent = business.phoneNumber;

    website.setAttribute("href", business.website);
    website.textContent = business.website;

    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(website);
    let main = document.querySelector('main');
    main.appendChild(card);
}

function displayList(business){
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let number = document.createElement("p");
    let website = document.createElement('a');

    name.textContent = business.name;
    address.textContent = business.address;
    number.textContent = business.phoneNumber;

    website.setAttribute("href", business.website);
    website.textContent = business.website;
     
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(website);
    let main = document.querySelector('main');
    main.appendChild(card);
}