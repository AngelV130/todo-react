import {useState} from "react"
import { useFetch } from "../../hooks/useFetch"
function HookApp() {
    const [count, setCount] = useState<number>(0)
    const {data,error,loading} = useFetch("https://jsonplaceholder.typicode.com/users");
  

if(loading) return <h1 className="text-5xl">Cargando...</h1>
if(error) return <h1 className="text-4xl">{error.message}</h1>
console.log(data)
return (
    <>
      <h1 className="text-3xl">Practica Hooks</h1>
      <h3 className="text-2xl">useEffect: </h3>
      <div className="container m-4">
        <button className="border-2 rounded-xl border-black bg-gray-200 p-1" 
        onClick={()=>{setCount(count + 1)}}>
            Count: {count}
        </button>
        <ul>
            {
                Array.isArray(data) && data.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
      </div>
    </>
  )
}

export default HookApp
