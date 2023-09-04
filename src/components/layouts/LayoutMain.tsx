import { Outlet, useNavigation } from "react-router-dom"
import NavBar from "./NavBars/NavBar"

function LayoutMain() {
    const navigation = useNavigation()
    return(
        <>
            <NavBar />
            <div className="container mx-auto px-4 mt-6">
                <Outlet/>
                {
                    navigation.state == "loading" && (<h1 className="text-5xl">Cargando...</h1>)
                }
                <footer>
                    <p className="text-gray-500 text-center px-8 py-8 uppercase">
                        Este es el Pie de Pagina =)
                    </p>
                </footer>
            </div>
        </>
    )
}

export default LayoutMain