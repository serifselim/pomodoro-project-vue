export const todo = {
    state:{
        todoList : []
    },
    actions:{
        
        // Local Data Fetch Function
        getTodo({state},getData){
            if(getData != null){
                state.todoList = getData;
            }
        },
        // Local Data Write Function
        addTodo({state},task){
            state.todoList.push(task);
            localStorage.setItem('tasks',JSON.stringify(state.todoList));
        },
        // Local Data Delete Function
        deleteTodo({state},index){
            state.todoList.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(state.todoList));
        },

    }
}