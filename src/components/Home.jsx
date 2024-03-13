import React from 'react'
import Navbar from './Navbar'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div>
        <Navbar/>
    <div className='bg-gray-700 h-96'>
      <h1 className='bold p-10 text-7xl bg-gradient-to-r from-indigo-400'>
        Welcome to QuizNinja
        </h1>

        <span className='text-white flex justify-center items-center text-4xl py-20'>
          <Typewriter
            words={['Create Quizes...', 'Challenge yourself with trivia questions...', 'Explore large range of Categories...', 'Join the quiz community today!!!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </span>
    </div>

    <h2 className='m-10 text-3xl'>Explore Categories...</h2>    
    <div className='flex justify-around m-15 '>
        <button className='bg-slate-200 rounded-full black p-10 hover:bg-slate-400'>Sports Quiz</button>
        <button className='bg-slate-200 rounded-full black p-10 hover:bg-slate-400'>Music Quiz</button>
        <button className='bg-slate-200 rounded-full black p-10 hover:bg-slate-400'>Geopolitics Quiz</button>
    </div>

    </div>
  )
}

export default Home
