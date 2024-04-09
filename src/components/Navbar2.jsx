import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Navbar2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userid } = useParams(); // Get email from URL params

  console.log("navbar 2 email params ", userid)

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    window.location.href = '/'; // Navigate to '/'
  };

  const handleUserProfile = () => {
    window.location.href = `/user/${userid}`; // Navigate to user profile with the email from params
  };

  return (
    <nav className="bg-gray-800 flex items-center justify-between px-4 py-2">
      <div>
        {/* Logo */}
        <img className="h-8 w-8 mr-4" src="./src/assets/Gemini_Generated_Image.jpg" alt="Logo" />
      </div>
      <div className="hidden space-x-4 sm:flex relative" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
        {/* Categories */}
        <span className="text-white hover:text-gray-400 cursor-pointer">Categories</span>
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 bg-white p-2 shadow-md" style={{ width: '150px' }}>
            {/* Dropdown Items */}
            <a href="#" className="block text-gray-800 hover:text-gray-600 my-2">
              Sports Quiz
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600 my-2">
              Music Quiz
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600 my-2">
              Geopolitics Quiz
            </a>
          </div>
        )}
      </div>
      <div className="hidden space-x-4 sm:flex">
        {/* Category */}
        <a href="#" className="text-white hover:text-gray-400">
          Random Quiz
        </a>
      </div>
      <div className="sm:flex items-center">
        {/* Logout button */}
        <button onClick={handleLogout} className="text-white hover:text-gray-400 mx-10">
          Logout
        </button>
        {/* User Logo */}
        <FaRegUser onClick={handleUserProfile} className="text-white hover:text-gray-400 mr-5 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar2;
