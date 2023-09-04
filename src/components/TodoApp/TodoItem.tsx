import CheckedIcon from "../icons/CheckedIcon"
import CrossIcon from "../icons/CrossIcon"
function TodoItem({todo,removeTodo,updateTodo}:TodoProps) {
    const deleteTodo = () => todo !== undefined && removeTodo !== undefined && removeTodo(todo.id)
    const checkTodo = () => todo !== undefined && updateTodo !== undefined && updateTodo(todo.id)
    return(
        <><article className="flex gap-4 py-4 items-center px-4 border-b border-b-gray-400">
            <button className={ `rounded-full border-2 w-6 h-6 grid place-items-center ${todo?.completed && " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" }` } onClick={checkTodo}>
            {
                todo?.completed && <CheckedIcon />
            }
        </button>
        <p className={`text-gray-500 mr-auto ${todo?.completed && "line-through"}`}>{todo?.title}</p><button onClick={deleteTodo}><CrossIcon /></button>
        </article></>
    )
}

export default TodoItem