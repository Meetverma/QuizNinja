import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Loading from './Loading';
import Answers from './Answers';

const QuizPage = () => {
  const { quizId } = useParams();
  const URL = `http://localhost:3000/quiz/${quizId}`;

  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showAns, setShowAns] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    setTotalQuestions(totalQuestions => totalQuestions + 1);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);

      if (selectedOption === currentQuestion.options[currentQuestion.correctOptionIndex]) {
        setCorrectAns(prevCorrectAns => prevCorrectAns + 1);
      }

      setIsAnswered(false);
      setSelectedOption(null);
      setAnswers(prevAnswers => [
        ...prevAnswers,
        quizData[currentQuestionIndex].options[quizData[currentQuestionIndex].correctOptionIndex]
      ]);
    }
    if (currentQuestionIndex === quizData.length - 1) {
      setShowAns(true);
      if (selectedOption === currentQuestion.options[currentQuestion.correctOptionIndex]) {
        setCorrectAns(prevCorrectAns => prevCorrectAns + 1);
      }
    }
  };

  if (!quizData || !quizData.length) {
    return (
      <>
        <Navbar />
        <div className='mt-40 flex flex-col items-center'>
          <h1 className='text-5xl'>Hold tight while we load the quiz for you!</h1>
          <span className='m-20'>
            <Loading />
          </span>
        </div>
      </>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Question not found</div>;
  }

  if (!showAns) {
    return (
      <div>
        <Navbar />
        <div className='mt-10 flex flex-col items-center bg-slate-200 m-40 rounded-lg'>
          <h1 className='text-2xl p-10'>{currentQuestion.question}</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-slate-400 rounded-lg'>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className='p-5 flex items-center rounded-lg'>
                <input
                  type="radio"
                  value={option}
                  id={`ch${index}`}
                  name={currentQuestionIndex}
                  className='hidden peer'
                  onChange={() => setSelectedOption(option)}
                  disabled={isAnswered}
                />
                <label
                  htmlFor={`ch${index}`}
                  className='cursor-pointer bg-sky-400 px-4 py-2 rounded-md text-white transition-colors duration-300 ease-in-out peer-checked:bg-blue-700 block w-full text-center md:text-left'
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className='m-5 grid grid-cols-1 gap-4'>
            <button className='p-5 rounded-full bg-sky-400 text-white text-xl' onClick={handleNextQuestion}>Next Question</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Answers answers={answers} score={correctAns} total={totalQuestions} />;
  }
};

export default QuizPage;
