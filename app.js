let btn = document.getElementById("btn");
    myList = document.getElementById("myList");
    todoText = document.getElementById("todoText");


btn.addEventListener("click", todo);

function todo(){

    let p = document.createElement("p");
    p.innerText = todoText.value;
    p.classList.add("todo");
    myList.appendChild(p);

    todoText.value = "";

    p.addEventListener("click", () => {

        p.style.textDecoration="line-through";

    })

    p.addEventListener("dblclick", () => {

        myList.removeChild(p);

    })

}

todoText.addEventListener("keyup", (event) => {

    if(event.keyCode == 13){

        todo();
    }
})