
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener('click', function(){
    let li = document.createElement("li");
    const del = document.createElement("button");
    li.textContent= input.value;
    del.textContent = "❌";
    li.appendChild(del);
    list.appendChild(li);
    del.addEventListener('click', function(){
        list.removeChild(li);
    })
    
})

document.querySelector('#favchap').focus();






    