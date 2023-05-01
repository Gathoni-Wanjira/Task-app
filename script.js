const inputBox = document.getElementById("input-box");
console.log(inputBox); 
const listContainer = document.getElementById("list-container");


// Add the addTask button function

function addTask(){
    if (inputBox.value===""){
        alert("Write your task!");
    }
    
     else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}

