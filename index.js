/*const form = document.querySelector("#create-task-form")
const lastElement=form.lastElementChild
lastElement.textContent="Bonjour"

lastElement.addEventListener("click",()=>{
    console.log(lastElement.textContent)
})*/


const taskEntry=document.querySelector("#new-task-description")
const form = document.querySelector("#create-task-form")
const lastElement=form.lastElementChild

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    //console.log(lastElement)
    const tasks=document.querySelector("#tasks")
    
    let li = document.createElement("li")
    tasks.appendChild(li)

    //let button = document.createElement("button")
    //li.appendChild(button)
    //button.textContent="X"

    li.textContent=taskEntry.value

    console.log(tasks)
    taskEntry.value=""
})
