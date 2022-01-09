const date = new Date();
let currentYear = date.getFullYear();

const paragraph= document.createElement("p");
const node1= document.createTextNode(`\u00a9 ${currentYear} Samantha Jenkins Washington`);
paragraph.appendChild(node1);

const para = document.createElement('p');
const node = document.createTextNode(`Last updated: ${document.lastModified}`)
para.appendChild(node);

const element = document.getElementById("home-page-footer");
element.appendChild(paragraph);
element.appendChild(para);