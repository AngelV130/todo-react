import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function Blog() {
    //const {error} = useFetch("https://jsonplaceholder.typicode.com/users");
    
    const {data} = useLoaderData() as {data:User | User[]}

    const [searchParams,setSearchParams] = useSearchParams()
    
    //if(error) return <h1 className="text-4xl">{error.message}</h1>
    console.log(data)
    return(
        <>
            <h1 className="text-3xl">Blog</h1>
            <div className="container mx-auto px-4 mt-6">
            <input className="w-full outline-none border-4 rounded-md p-2 border-black mb-2" 
            type="text" 
            placeholder="Word Filter"
            value={searchParams.get("filter") || ''}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{!e.target.value ? setSearchParams({}):setSearchParams({filter: e.target.value})}}
            />
            <ul>
                {
                    Array.isArray(data) && data.filter((user) => {
                        const filter = searchParams.get("filter");
                        if (!filter) return true;
                        return user.name.toLowerCase().includes(filter.toLocaleLowerCase());
                      }).map((user)=>(
                        <Link key={user.id} to={String(user.id)}>
                            <li>{user.name}</li>
                        </Link>
                    ))
                }
            </ul>
            </div>
        </>
    )
}

export default Blog
