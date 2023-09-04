import { useState } from "react"
import { logging, register } from "../services/UserSesion"

const Loging = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!email && !password) return
        try {
            const loging = await logging({email,password})
            console.log(loging)
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmitR = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!email && !password) return
        try {
            const loging = await register({email,password})
            console.log(loging)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1 className="text-4xl">Formulario Logging</h1>
            <form onSubmit={handleSubmit}>
                <input className="border-2 border-black block m-2" type="email" name="email" id="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                <input className="border-2 border-black block m-2" type="password" name="pass" id="pass" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                <button className="border-2 border-black" type="submit">Iniciar</button>
            </form>
            <h1 className="text-4xl">Formulario Register</h1>
            <form onSubmit={handleSubmitR}>
                <input className="border-2 border-black block m-2" type="email" name="email2" id="email2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                <input className="border-2 border-black block m-2" type="password" name="pass2" id="pass2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                <button className="border-2 border-black" type="submit">Guardar</button>
            </form>
        </>
    )
}

export default Loging