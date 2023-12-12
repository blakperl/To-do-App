const inputTodo = document.getElementById("todoinput");

const listTodo = document.getElementById("todolist")

const todoBtn = document.getElementById("todobtn")
// const inputTodo = document.querySelector("#todoinput");
// const listTodo = document.querySelector("#todolist");

// $(function(){
//     $("#button").click(function(){
//         var input = $("#txt").val();
       
//         if(input !== ""){
//             var elem = $("<li></li>").text(input);
//             //  $(elem).append();

//            var added =  $("#list").append(elem)
//             $("#txt").val("");
//         }
         

//     })
// })

// document.getElementById("todobtn").addEventListener("click", function () {
//     if (inputTodo === '') {
//         alert('Oops! you must add a todo')
//     } else {
//         let li = document.createElement('li')
//         li.innerHTML = inputTodo.value;
//         listTodo.appendChild(li)
//     }
//     inputTodo.value = '';
// })

// $("#todoform").submit(function(e){
//     e.preventDefault(); //prevents the form from submitting

//     addBtn();
    

// })

function addBtn() {
    if (inputTodo.value === '') {
        alert('Oops! you must add a todo');   
        
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputTodo.value;
        listTodo.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputTodo.value = '';
    saveData()
}

listTodo.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listTodo.innerHTML);
}
function showTask() {
    listTodo.innerHTML = localStorage.getItem("data")
}

showTask()