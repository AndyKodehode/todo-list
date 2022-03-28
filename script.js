let button = document.querySelector("#input-btn")
let input = document.querySelector("#input")
let inputDiv = document.querySelector(".input-div")
let toDoList = document.querySelector(".todo-list")
let listDiv = []
let deleteBtn= ""
let listElement = ""



//list function
function list(){

   //create element for the input value
   listElement = document.createElement("li")
   listElement.classList.add("list")
   //convert inputvalue to text
   let list = input.value
   listElement.textContent = list

   //make div for li and button so it can have flex
   listDiv = document.createElement("div")
   //append the child element
   toDoList.appendChild(listDiv)
   // add the css-class for flex
   listDiv.classList.add("list-div")

   listDiv.appendChild(listElement)

   }

//delete function

function deleteButton(){
   //create button for list
   deleteBtn = document.createElement("button")
   listDiv.appendChild(deleteBtn)
   
   deleteBtn.classList.add("listButton")
   deleteBtn.textContent = "remove"


   deleteBtn.addEventListener("click", function (e) {
     
         e.target.parentNode.remove()
         
         
   });
  
  


}






 
 //remove on click
 


//make eventlistener for input
button.addEventListener("click", function(){

 list()
 deleteButton()
 input.value = ""
 
})







       
    


