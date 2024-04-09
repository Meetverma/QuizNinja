import React, { useState, useContext } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Import AuthContext

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const quizLinks = [
    '/quiz/sportsquiz',
    '/quiz/businessquiz',
    '/quiz/algebraquiz',
    '/quiz/triviaquiz'
  ];
  const giveRandom= ()=>{
    const randomIndex = Math.floor(Math.random() * quizLinks.length);
    const randomQuizLink = quizLinks[randomIndex];
    return randomQuizLink
  }

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <Link to="quiz/sportsquiz" className="block text-gray-800 hover:text-gray-600 my-2">
              Sports Quiz
            </Link>
            <Link to="quiz/algebraquiz" className="block text-gray-800 hover:text-gray-600 my-2">
              Algebra Quiz
            </Link>
            <Link to="quiz/triviaquiz" className="block text-gray-800 hover:text-gray-600 my-2">
              Trivia Quiz
            </Link>
          </div>
        )}
      </div>
      <div className="hidden space-x-4 sm:flex">
        {/* Category */}
        <Link to={giveRandom()} className="text-white hover:text-gray-400">
          Random Quiz
        </Link>
      </div>
      <div className="sm:flex items-center">
          <>
            <Link to="/login" className="text-white hover:text-gray-400 mx-10">
              Login
            </Link>
            
          </>
        
      </div>
    </nav>
  );
};

export default Navbar;
