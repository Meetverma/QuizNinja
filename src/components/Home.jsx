import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import { Typewriter } from 'react-simple-typewriter';
import Quiz from '../Quiz'; // Import the Quiz component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { userid } = useParams();
  const [isLoggedIn, setLoginStatus] = useState(false);

  useEffect(() => {
    if (userid != null) {
      setLoginStatus(true);
    }
  }, [userid]);

  useEffect(() => {
    if (isLoggedIn) {
      toast.success('Login Successful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }
  }, [isLoggedIn]);

  const allQuizes = ['sportsquiz', 'businessquiz', 'algebraquiz', 'triviaquiz'];

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div>
        {isLoggedIn ? <Navbar2 /> : <Navbar />}
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
          {allQuizes.map((quiz) => (
            <Link key={quiz} to={`/quiz/${quiz}`} className='p-5 bg-sky-500 hover:bg-sky-600 text-white rounded-full'>
              Quiz: {quiz}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
