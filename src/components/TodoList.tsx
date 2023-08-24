import TodoItem from "./TodoItem"
function TodoList({todos}:TodoProps) {
    return(
        <div className="bg-white p-1 mt-6 rounded-t-md">
            {
                todos?.map((todo)=> <TodoItem todo={todo} />)
            }
          </div>
    )
}

export default TodoList