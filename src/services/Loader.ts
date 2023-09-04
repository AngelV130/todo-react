import { ActionFunctionArgs } from "react-router-dom";

export const loaderBlog = async ({params}:ActionFunctionArgs) => {
    const {id=''} = params
    const response= await fetch("https://jsonplaceholder.typicode.com/users/"+id)
    if(!response.ok) throw {status:response.status,message:"No se encontro"}
    const data:User | User[] = await response.json()
    return {data}
}