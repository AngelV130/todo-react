import TodoItem from "./TodoItem"
function TodoList({todos,removeTodo,updateTodo}:TodoProps) {
    return(
        <div className="bg-white p-1 mt-6 rounded-t-md">
            {
                todos?.map((todo)=> <TodoItem todo={todo} removeTodo={removeTodo} key={todo.id} updateTodo={updateTodo}/>)
            }
        </div>
    )
}

export default TodoList