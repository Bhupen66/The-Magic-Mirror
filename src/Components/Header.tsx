import React from 'react'

function Header() {
  return (
    <div className="bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="#home">Butipalar Salon</a>
        </div>
        <ul className="flex justify-around text-white space-x-4">
          <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#package" className="hover:text-yellow-500">Package</a></li>
          <li><a href="#gallery" className="hover:text-yellow-500">Gallery</a></li>
          <li><a href="#courses" className="hover:text-yellow-500">Courses</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header