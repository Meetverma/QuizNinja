import React, { useState } from 'react';
import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter';
import Quiz from '../Quiz'; // Import the Quiz component

const Home = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleShowQuiz = () => {
    setShowQuiz(true); // Set state to true when button is clicked
  };

  return (
    <div>
      <Navbar />
      {!showQuiz && ( // Conditionally render Home component if showQuiz is false
        <div className='bg-gray-700 h-96'>
          <h1 className='bold p-10 text-7xl bg-gradient-to-r from-indigo-400'>
            Welcome to QuizNinja
          </h1>

          <span className='text-white flex justify-center items-center text-4xl py-20'>
            <Typewriter
              words={[
                'Create Quizzes...',
                'Challenge yourself with trivia questions...',
                'Explore a large range of Categories...',
                'Join the quiz community today!!!'
              ]}
              loop={5}
              cursor
              cursorStyle='|'
              typeSpeed={40}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </div>
      )}

      {!showQuiz && ( // Conditionally render Home component if showQuiz is false
        <div>
          <h2 className='m-10 text-3xl'>Explore Categories...</h2>
          <div className='flex justify-around m-15'>
            <button
              className='bg-slate-200 rounded-full black p-10 hover:bg-slate-400'
              onClick={handleShowQuiz}
            >
              Sports Quiz
            </button>

            <button
              className='bg-slate-200 rounded-full black p-10 hover:bg-slate-400'
              onClick={handleShowQuiz}
            >
              Music Quiz
            </button>
            <button
              className='bg-slate-200 rounded-full black p-10 hover:bg-slate-400'
              onClick={handleShowQuiz}
            >
              Geographic Quiz
            </button>
            
          </div>
        </div>
      )}

      {showQuiz && <Quiz />} {/* Render Quiz component if showQuiz is true */}
    </div>
  );
};

export default Home;
