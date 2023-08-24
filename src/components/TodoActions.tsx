function TodoActions() {
    return(
        <section className="container mx-auto px-4 py-4">
          <div className="bg-white flex justify-center gap-x-9 px-4 py-4 rounded-md">
            <button className="text-gray-600 font-bold cursor-pointer">Todos</button>
            <button className="text-gray-600 font-bold cursor-pointer">Activo</button>
            <button className="text-gray-600 font-bold cursor-pointer">Completo</button>
          </div>
        </section>
    )
}

export default TodoActions