const date = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle:"full"}).format(date);
document.querySelector("#date").textContent=fullDate;

document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#footer3").textContent= document.lastModified;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('responsive')}, false);

window.onresize = () =>{if(window.innerWidth >760)
mainnav.classList.remove('responsive')};