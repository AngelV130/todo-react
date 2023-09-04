import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './router/Index.tsx'
import UserProvider from './context/UserContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
    //<BrowserRouter>
    //  <App />
    //</BrowserRouter>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  //</React.StrictMode>
)
