import Header from "./components/Header";
import TodoMain from "./components/TodoMain";
function App() {

  return (
    <>
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain 
      bg-no-repeat min-h-screen bg-gray-200">

        <Header />

        <TodoMain />

        <footer>
          <p className="text-gray-500 text-center px-8 py-8 uppercase">Lista de tareas =)</p>
        </footer>
        
      </div>
    </>
  )
}

export default App