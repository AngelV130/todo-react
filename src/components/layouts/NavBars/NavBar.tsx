import { NavLink, useNavigate } from "react-router-dom"
import '../../../styles/Active.css'
import { useUserContext } from "../../../context/UserContext"
function NavBar() {
    
    const context = useUserContext()
    if(context == undefined) return
    const {user,setUser} = context
    const text = user ? 'LogOut':'LogIn'
    return(
        <nav className="flex p-3">
            <div className="mr-6">
                <NavLink className="text-center block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4" to="/">Inicio</NavLink>
            </div>
            <div className="mr-6">
                <NavLink className="text-center block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4" to="/blog">Blog</NavLink>
            </div>
            <div className="mr-6">
                <NavLink className="text-center block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4" to="/contact">Contact</NavLink>
            </div>
            <div className="mr-6">
                <button className="border-2 rounded-xl border-black bg-gray-200 p-1" 
                onClick={user? ()=>{
                    setUser(false)
                    console.log('click1')
                }:()=>{
                    setUser(true)
                    console.log('click2')
                }}>
                    {text}
                </button>
            </div>
        </nav>
        
    )
}

export default NavBar