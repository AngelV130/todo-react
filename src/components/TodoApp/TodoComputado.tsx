function TodoComputado({removeTodos,textCountTodos}:TodoProps) {
    const deleteallTodos = () => removeTodos != undefined && removeTodos()
    return(
        <section className="bg-white flex justify-between px-4 py-4 rounded-b-md">
            <small className="text-gray-400">{textCountTodos != undefined ? textCountTodos : "0"} TAREAS INCOMPLETAS</small>
            <button className="text-gray-400" onClick={deleteallTodos}>limpiar complete</button>
          </section>
    )
}

export default TodoComputado