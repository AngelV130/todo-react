import CrossIcon from "./icons/CrossIcon"
function TodoItem({todo}:TodoProps) {
    return(
        <article className="flex gap-4 py-4 items-center px-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 inline-block w-5 h-5"></button>
            <p className="text-gray-500 mr-auto">{todo?.title}</p>
            <button><CrossIcon /></button>
        </article>
    )
}

export default TodoItem