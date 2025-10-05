import { useState,useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Navbar from './Components/Header/NavBAr'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'



function App() {
  
  return (
    <>
  <Header/>
   <Outlet/>
   <Footer/>

    </>
  )
}

export default App
