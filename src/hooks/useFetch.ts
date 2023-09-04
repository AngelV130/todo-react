import { useCallback, useEffect, useState } from "react"
export const useFetch = (url:string,) => {
    //console.log("Se ejecuta??")
    const [data,setData] = useState<User[] | User>([])
    const [loading,setLoading] = useState<boolean>(true)
    const [error,setError] = useState<Error>()
    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const result = await fetch(url)
            if(!result.ok) throw new Error("Error al consumir la url");
            const data = await result.json()
            setData(data)
        } catch (error) {
            if(error instanceof Error )
                setError(error)
            else
                setError(Error("Error no Indentificado"))
        } finally {
            setLoading(false)
        }
    },[])

    useEffect(()=>{
        fetchData()
    },[])

    return {data,error,loading}
}