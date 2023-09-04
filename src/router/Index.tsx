import { createBrowserRouter } from "react-router-dom";

import Inicio from '../pages/Inicio';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';

import NotFound from "../components/http-responses/NotFound";
import LayoutPage from "../components/layouts/LayoutPage";

import { loaderBlog } from "../services/Loader";
import LayoutMain from "../components/layouts/LayoutMain";

export const router = createBrowserRouter([
   {
    path: '/',
    element: <LayoutMain/>,
    errorElement: <NotFound />,
    children: [
        {
            errorElement: <NotFound />,
            children: [
                {
                    index: true,
                    element: <Inicio />,
                },
                {
                    path: '/contact',
                    element: <Contacts />,
                },
                {
                    path: '/blog',
                    element: <LayoutPage />,
                    children:[
                        {
                            index: true,
                            element: <Blog />,
                            loader: loaderBlog,
                        },
                        {
                            path: '/blog/:id',
                            element: <BlogDetails />,
                            loader: loaderBlog,
                        },
                    ]
                },
            ]
        }
    ]
   }
])