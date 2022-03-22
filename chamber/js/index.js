const date = new Date();
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

if (date.getDay() == 1 || date.getDate() ==5){
    banner = document.createElement("banner");
    banner.textContent = "🤝 Come Join us for the chamber meet and greet Wednesday at 7:00p.m";
    document.querySelector("header").appendChild(banner);
}
