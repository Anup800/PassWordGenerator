import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import {RouterProvider, BrowserRouter, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
//import Navbar from './Components/Header/NavBAr.jsx'
import Home from './Components/BodyLayouts/Home.jsx'
import About from './Components/BodyLayouts/About.jsx'
import Login from './Components/Header/Login.jsx'
import SignUp from './Components/Header/SignUp.jsx'
import UploadImage from './Components/Header/UploadImage.jsx'

const router = createBrowserRouter([
  {
    path :'/',
    element : <App/>,
    children: [{
      path :'',
      element : <Home/>,

    },
    {
      path :'/about',
      element: <About/>,
    },
    {
      path :'/Login',
      element: <Login/>,
    },
     {
      path :'/Signup',
      element: <SignUp/>,
    },
     {
      path :'/UploadImage',
      element: <UploadImage/>,
    }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
