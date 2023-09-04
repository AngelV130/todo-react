import { Navigate, Outlet } from "react-router-dom"
import { useUserContext } from "../../context/UserContext"

function LayoutPage() {
    const context = useUserContext()
    if(context == undefined) return
    const {user} = context
    return !user ? (<Navigate to='/'/>):(
        <>
            <div className="container mx-auto px-4 mt-6">
                <Outlet/>
                <div>
                    <p className="text-gray-500 text-center px-8 py-8 uppercase mb-4">
                        Esta es una pagina hija =)
                    </p>
                </div>
            </div>
        </>
    )
}

export default LayoutPage