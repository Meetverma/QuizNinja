import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter';
import Quiz from '../Quiz'; // Import the Quiz component

const Home = () => {
  const allQuizes=['sportsquiz','businessquiz','algebraquiz','triviaquiz']
  return (
    <div>
      <Navbar />

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
        <div className='flex justify-center gap-10 mt-10'>
          <h2 className='text-3xl place-self-center'>Explore top Quizzes</h2>
        {allQuizes.map((quiz)=>(
          <Link to={`/quiz/${quiz}`} className='p-5 bg-sky-500 hover:bg-sky-600 text-white rounded-full'>
            Quiz: {quiz}
          </Link>
        ))}
        </div>

    </div>
  );
};

export default Home;
