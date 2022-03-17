const date = new Date();

if (date.getDay() == 1 || date.getDay() ==3 || date.getDay() == 5){
    if (date.getHours >= 8 && date.getHours <14){
        document.querySelector("#hour").innerHTML = "Open";
    }
    else{
        document.querySelector("#hour").innerHTML = "Closed";
    }
}
else if (date.getDay() == 2 || date.getDay() == 4){
    if (date.getHours >= 14 && date.getHours <20){
        document.querySelector("#hour").innerHTML = "Open";
    }
    else{
        document.querySelector("#hour").innerHTML = "Closed";
    }
}
else{
    document.querySelector("#hour").innerHTML = "Closed";
}

const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle:"full"}).format(date);
document.querySelector("#date").textContent=fullDate;

document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#footer3").innerHTML= document.lastModified;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('responsive')}, false);

window.onresize = () =>{if(window.innerWidth >760)
mainnav.classList.remove('responsive')};