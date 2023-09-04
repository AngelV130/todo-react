import { useState } from "react"

function TodoCreate({addTodo}:TodoProps) {
    const [title,setTitle] = useState<string>('')
    const callbackAddTodo = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const todo:TodoItem = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        }
        title.trim() !== '' && addTodo !== undefined && addTodo(todo);
        setTitle('')
    }
    return(
        <form className="bg-white rounded-md overflow-hidden items-center flex mt-8 py-4 px-4 gap-4 border border-gray-600" onSubmit={callbackAddTodo}>
            <span className="rounded-full border-2 inline-block w-5 h-5"></span>
            <input className="w-full outline-none" 
            type="text" 
            placeholder="New Todo"
            value={title}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value);}}
            />
        </form>
    )
}

export default TodoCreate