// @author: Aya Shibbi
// E-mail: ayashibbi@gmail.com

// create variables for the input elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// function of button to add tasks
function addTask() {
    if (inputBox.value === "") {
        alert("You must write  something.");
    } else {
        //create html li element and store it in the 'li' variable
        let li = document.createElement("li");

        //add into this 'li' the text entered in the input field
        li.innerHTML = inputBox.value;

        //where this 'li' must be displayed
        listContainer.appendChild(li);

        // add the x icon to delete a task
        let span = document.createElement("span");

        //add one x icon in the span tag
        span.innerHTML = "\u00d7";

        //to display this x icon
        li.appendChild(span);
    }

    // to empty the input field whenever the button is pressed
    inputBox.value = "";

    //saveData must be called everytime a change occurs to save within the browser
    saveData();
}

//to check, uncheck and delete a particular task
//whenever something is clicked within the container(where all the tasks are stored)
//first it will check where it has been clicked
listContainer.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            //if the clicked target element is li
            e.target.classList.toggle("checked"); //then checked class name  is added
            //if it's already there then it will remove it --> since toggle is added

            saveData();
        } else if (e.target.tagName === "SPAN") {
            //if the clicked target element is span
            //then parent element will be removed (parent element == li element)
            e.target.parentElement.remove(); //so task will be deleted

            saveData();
        }
    },
    false
);

//to save data
function saveData() {
    //name, value that is wanted to be saved
    localStorage.setItem("data", listContainer.innerHTML);
    //so whatever content is there in the container it will be stored in the browser with the name data
}

//to display this data whenever the browser is opened again
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
