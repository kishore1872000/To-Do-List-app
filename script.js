const inputBOX = document.getElementById("input-box");
const ListContainer = document.getElementById("list-cotainer");
const li = document.createElement("li")

let Addtask = () => {
    if (inputBOX.value === '') {
        alert(" You must write something")
    }
    else {
        li.innerHTML = inputBOX.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBOX.value = "";
    saveDate();
}; 
ListContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if (e.target.tagName === "span") {
        e.target.parentElement.remove();
        saveDate();
    } 
},false); 

function saveDate(){
    localStorage.setItem("data",ListContainer.innerHTML);
}
function showTask() {
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();