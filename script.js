const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// Add the addTask button function

function addTask(){
    if (inputBox.value===""){
        alert("Write your task!");
    } else { 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create the close icon for checking

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // The below instruction is used to clear the input box after adding a task
    inputBox.value = "";

}

// Adding responsiveness to the check and close icons.

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    }

}, false);


