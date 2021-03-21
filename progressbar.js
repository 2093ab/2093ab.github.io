const progessbar = document.querySelector(".js-progress"),
    todo = 0,
    finished = 0;

function init(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            todo++;
        });
    }
    console.log(todo);
}

init();