export const todo = {
    state:{
        todoList : []
    },
    getters:{
        refreshTodo:(state)=>{
            return state.todoList
        },
        refreshCountTodo:(state)=>{
            return state.todoList.length
        }
    },
    actions:{
        getTodo({state},getData){
            state.todoList = getData;
        },
        addTodo({state},task){
            state.todoList.push(task);
            localStorage.setItem('tasks',JSON.stringify(state.todoList));
        },
        deleteTodo({state},index){
            state.todoList.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(state.todoList));
        },

    }
}