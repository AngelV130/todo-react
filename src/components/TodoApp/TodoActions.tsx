function TodoActions({setTipOfFilter,filter}:TodoProps) {
  const all = () => setTipOfFilter != undefined && setTipOfFilter("All")
  const completed = () => setTipOfFilter != undefined && setTipOfFilter("Completed")
  const inCompleted = () => setTipOfFilter != undefined && setTipOfFilter("Incompleted")
    return(
        <section className="container mx-auto px-4 py-4">
          <div className="bg-white flex justify-center gap-x-9 px-4 py-4 rounded-md">
            <button className={ `text-gray-600 font-bold cursor-pointer hover:opacity-70
              ${filter === "All" && "text-blue-600"}` } onClick={all}>Todos</button>
            <button className={ `text-gray-600 font-bold cursor-pointer hover:opacity-70
              ${filter === "Incompleted" && "text-blue-600"}` } onClick={inCompleted}>No Completos</button>
            <button className={ `text-gray-600 font-bold cursor-pointer hover:opacity-70
              ${filter === "Completed" && "text-blue-600"}` } onClick={completed}>Completos</button>
          </div>
        </section>
    )
}
export default TodoActions