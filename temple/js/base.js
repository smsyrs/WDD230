const date = new Date();

// set footer current year for copy right
year = document.querySelector("#year");
year.textContent = date.getFullYear();

// allows the hamburger to open and close when the appropiate size
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('responsive')}, false);

window.onresize = () =>{if(window.innerWidth >760)
mainnav.classList.remove('responsive')};