const input = document.getElementById("input")
let btn = document.getElementById("btn")
const tasks = document.querySelector(".tasks")

btn.addEventListener("click", function(e){
    e.preventDefault()
    let task = document.createElement("div")
    let inp = document.createElement("input")
    inp.value = input.value
    let del = document.createElement("button")
    let delContent = document.createTextNode("DELETE")
    let edit = document.createElement("button")
    let editContent = document.createTextNode("EDIT")
    let complete = document.createElement("button")
    let completeContent = document.createTextNode("COMPLETE")
    complete.appendChild(completeContent)
    del.appendChild(delContent)
    edit.appendChild(editContent)
    if(input.value === ''){
        alert("enter somthing")
    }else{
        task.appendChild(inp)
        task.appendChild(del)
        task.appendChild(edit)
        task.appendChild(complete)
        task.classList.add("task")
        tasks.appendChild(task)
        inp.setAttribute("readonly", true)
        input.value = ''
    }

})

tasks.addEventListener("click", function(e){
    if(e.target.innerHTML === "DELETE"){
        let removeElem  = e.target.parentNode
        removeElem .remove()
    }

    if(e.target.innerHTML === "EDIT"){
        let trg = e.target.parentNode.firstChild
        if(trg.classList.contains("complete")){
           trg.classList.remove("complete")
        }
        trg.removeAttribute("readonly")
        e.target.innerHTML = "save"
    } else if(e.target.innerHTML === "save"){
        let trg = e.target.parentNode.firstChild
        trg.setAttribute("readonly", true)
        e.target.innerHTML = "EDIT"
    }

    if(e.target.innerHTML === "COMPLETE"){
        (e.target.parentNode.firstChild).classList.add("complete")
        e.target.innerHTML = "COMPLETED"
        let trg = e.target.parentNode.firstChild
        e.target.parentNode.childNodes[2].innerHTML = "EDIT"
        trg.setAttribute("readonly", true)
    } else if(e.target.innerHTML === "COMPLETED"){
        (e.target.parentNode.firstChild).classList.remove("complete")
        e.target.innerHTML = "COMPLETE"
        let trg = e.target.parentNode.firstChild
        e.target.parentNode.childNodes[2].innerHTML = "save"
        trg.removeAttribute("readonly")
    }

})

