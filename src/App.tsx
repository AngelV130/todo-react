import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
function App() {

  return (
    <>
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain 
      bg-no-repeat min-h-screen bg-gray-200">
        <div className="container mx-auto px-4 pt-8">
          <div className="flex justify-between">
            <h1 className="uppercase text-white text-4xl tracking-[0.4em] font-semibold">Todo</h1>
            <button className=""><MoonIcon fill="#fff"/></button>
          </div>
          <form className="bg-white rounded overflow-hidden items-center flex mt-8 py-4 px-4 gap-4">
            <span className="rounded-full border-2 inline-block w-5 h-5"></span>
            <input className="w-full outline-none" type="text" placeholder="New Todo"/>
          </form>
        </div>
        <div className="container mx-auto px-4 mt-6">
          <div className="bg-white p-1">
            <article className="flex gap-4 py-4 items-center px-4">
              <button className="rounded-full border-2 inline-block w-5 h-5"></button>
              <p className="text-gray-500 mr-auto">Completado</p>
              <button><CrossIcon /></button>
            </article>
            <hr className="w-full"/>
            <article className="flex gap-4 py-4 items-center px-4">
              <button className="rounded-full border-2 inline-block w-5 h-5"></button>
              <p className="text-gray-500 mr-auto">Completado</p>
              <button><CrossIcon /></button>
            </article>
            <hr className="w-full"/>
            <article className="flex gap-4 py-4 items-center px-4">
              <button className="rounded-full border-2 inline-block w-5 h-5"></button>
              <p className="text-gray-500 mr-auto">Completado</p>
              <button><CrossIcon /></button>
            </article>
            <hr className="w-full"/>

            <section className="flex justify-between px-4 py-4">
              <small className="text-gray-400">5 complete</small>
              <button className="text-gray-400">limpiar complete</button>
            </section>
          </div>
        </div>
        <section className="container mx-auto px-4 py-4">
          <div className="bg-white flex justify-center gap-x-9 px-4 py-4">
            <button className="text-gray-600 font-bold cursor-pointer">Todos</button>
            <button className="text-gray-600 font-bold cursor-pointer">Activo</button>
            <button className="text-gray-600 font-bold cursor-pointer">Completo</button>
          </div>
        </section>
        <p className="text-gray-500 text-center px-8 py-8 uppercase">Lista de tareas =)</p>
      </div>
    </>
  )
}

export default App