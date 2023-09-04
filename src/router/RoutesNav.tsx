import { Route, Routes } from "react-router-dom"
import LayoutPage from "../components/layouts/LayoutPage"
import Inicio from "../pages/Inicio"
import Blog from "../pages/Blog"
import Contacts from "../pages/Contacts"
import NotFound from "../components/http-responses/NotFound"
import BlogDetails from "../pages/BlogDetails"

function RoutesNav() {
    return(
        <>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    <Route path="/" element={<Inicio />}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/blog/:id" element={<BlogDetails />}/>
                    <Route path="/contact" element={<Contacts />}/>
                    <Route path="*" element={<NotFound />}/>
                </Route>
            </Routes>
        </>
    )
}

export default RoutesNav