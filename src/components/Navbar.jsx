import React from 'react';
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="bg-gray-800 flex items-center justify-between px-4 py-2">
      <div>
        {/* Logo */}
        <img className="h-8 w-8 mr-4" src="./src/assets/Gemini_Generated_Image.jpg" alt="Logo"  />
      </div>
      <div className="hidden space-x-4 sm:flex relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
      {/* Categories */}
      <span className="text-white hover:text-gray-400 cursor-pointer">
        Categories
      </span>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0  bg-white p-2 shadow-md " style={{width:"150px"}}>
          {/* Dropdown Items */}
          <a href="#" className="block text-gray-800 hover:text-gray-600 my-2">Sports Quiz</a>
          <a href="#" className="block text-gray-800 hover:text-gray-600 my-2">Music Quiz</a>
          <a href="#" className="block text-gray-800 hover:text-gray-600 my-2">Geopolitics Quiz</a>
        </div>
      )}
    </div>
      <div className="hidden space-x-4 sm:flex">
        {/* Category */}
        {/* <span href="#" className="text-white hover:text-gray-400">
          Categories
          </span> */}
        {/* Random Quiz (add appropriate link) */}
        <a href="#" className="text-white hover:text-gray-400">
          Random Quiz
        </a>
      </div>
      <div className="sm:flex items-center">

         {/* Login (add appropriate link) */}
         <a href="#" className="text-white hover:text-gray-400 mx-10">
          Login
        </a>

        {/* User Logo (replace with appropriate component) */}
        <FaRegUser className='text-white hover:text-gray-400 mr-5'/>
      </div>
    </nav>
  );
};

export default Navbar;
