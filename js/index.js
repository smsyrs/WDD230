const date = new Date();
let currentYear = date.getFullYear();

//const footer = document.querySelector("footer");
//footer.textContent = `\u00a9 ${currentYear} Samantha Jenkins Washington`;

document.getElementById("copyright-year").innerHTML = `\u00a9 ${currentYear}`;
