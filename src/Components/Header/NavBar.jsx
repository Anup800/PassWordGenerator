import React, { useState } from 'react'
import "tailwindcss";
import {Link,NavLink} from 'react-router-dom'
const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false)
  return (
    <div className= "flex justify-between items-center h-16 ">
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">
            MyApp
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded hover:text-blue-600 ${
            isActive ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 rounded hover:text-blue-600 ${
            isActive ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
          }`
        }
      >
        About Us
      </NavLink>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link to= '/login' className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</Link>
            <Link to= '/Signup'className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
          <hr />
          <button className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-gray-100">
            Login
          </button>
          <button className="block w-full text-left px-4 py-2 text-white bg-blue-600 hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      )}
    </nav>
    </div>
  )
}

export default  Navbar