function TodoCreate() {
    return(
        <form className="bg-white rounded-md overflow-hidden items-center flex mt-8 py-4 px-4 gap-4">
            <span className="rounded-full border-2 inline-block w-5 h-5"></span>
            <input className="w-full outline-none" type="text" placeholder="New Todo"/>
        </form>
    )
}

export default TodoCreate