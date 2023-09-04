import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Blog() {
    const { id } = useParams()
    const { data,error,loading } = useFetch("https://jsonplaceholder.typicode.com/users/"+id);

    if(loading) return <h1 className="text-5xl">Cargando...</h1>
    if(error) return <h1 className="text-4xl">{error.message}</h1>
    return(
        <>
            <h1 className="text-3xl">Blog Details</h1>
            <div className="container mx-auto px-4 mt-6">
            <div className="max-w-sm rounded overflow-hidden shadow-lg border-2">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{!Array.isArray(data) && data.name}</div>
                    <p className="text-gray-700 text-base">
                        {!Array.isArray(data) && data.username}
                    </p>
                    <small className="text-gray-700 text-base">
                        {!Array.isArray(data) && data.phone}
                    </small>
                </div>
            </div>
            </div>
        </>
    )
}

export default Blog
