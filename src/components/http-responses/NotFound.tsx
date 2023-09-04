import { Link, useRouteError } from "react-router-dom"

function NotFound() {
    const error = useRouteError()
    console.log(error)
    return(
        <div className="container mx-auto px-4 mt-6">
            <h1 className="text-4xl">NotFound</h1>
            <p className="text-2xl">Pagina no encontrada</p>
            <p className="text-1xl">
                {
                    (error as { message?: string })?.message ||
                    (error as { statusText?: string })?.statusText
                }
            </p>
            <Link to="/">Regresar al Inicio</Link>
        </div>
    )
}

export default NotFound