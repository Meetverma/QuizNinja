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
  const [answers,setAnswers] = useState([]);
  const [showAns,setShowAns] = useState(false);
  const [totalQuestions,setTotalQuestions] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setQuizData(data);

        // console.log("the data length is "+quizData.length)
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    setTotalQuestions(totalQuestions=>totalQuestions+1);
    
    if( currentQuestionIndex === 0){

    }
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

      if (selectedOption === currentQuestion.options[currentQuestion.correctOptionIndex]) {
        setCorrectAns((prevCorrectAns) => prevCorrectAns + 1);
      }

    setIsAnswered(false); // Reset isAnswered state when moving to the next question
    setSelectedOption(null); // Reset selectedOption state when moving to the next question
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      quizData[currentQuestionIndex].options[quizData[currentQuestionIndex].correctOptionIndex]
    ]);
    console.log("The answers are :"+answers);
    } if(currentQuestionIndex === quizData.length-1) {
      // Reset to the first question if currentQuestionIndex exceeds the length of quizData
      setShowAns(true);
      if (selectedOption === currentQuestion.options[currentQuestion.correctOptionIndex]) {
        setCorrectAns((prevCorrectAns) => prevCorrectAns + 1);
      } 
    };
  }

  // const handlePrevQuestion = () => {
  //   setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  //   setIsAnswered(false); // Reset isAnswered state when moving to the previous question
  //   setSelectedOption(null); // Reset selectedOption state when moving to the previous question
  // };

  // const handleCheckAnswer = () => {
  //   if (selectedOption === null) {
  //     alert('Please select an answer');
  //     return;
  //   }
  //   if (selectedOption === currentQuestion.options[currentQuestion.correctOptionIndex]) {
  //     alert('Correct!');
  //     setCorrectAns((prevCorrectAns) => prevCorrectAns + 1);
  //   } else {
  //     alert('Incorrect!');
  //   }
  //   setIsAnswered(true); // Mark question as answered
  // };

  if (!quizData || !quizData.length) {
    return( 
      <>
        <Navbar/>
      <div className='mt-40 flex flex-col items-center'>
              <h1 className='text-5xl'>Hold tight while we load the quiz for you!</h1>
              <span className='m-20'>
              <Loading/>
              </span>
            </div>
            </>);
  }

  const currentQuestion = quizData[currentQuestionIndex];

  // console.log("the next Question is: ",quizData[currentQuestionIndex+1]);

  if (!currentQuestion) {
    return <div>Question not found</div>;
  }
  if(!showAns){
  return (
    <div>
      <Navbar />
      <div className='mt-10 flex flex-col items-center'>
        <h1 className=' text-2xl'>{currentQuestion.question}</h1>
        <div className='grid grid-cols-2 gap-8 p-8'>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className='p-5 flex items-center'> 
              <input
                type="radio"
                value={option}
                id={`ch${index}`}
                name={currentQuestionIndex}
                className='hidden peer' // Hide the default radio button
                onChange={() => setSelectedOption(option)}
                disabled={isAnswered} // Disable radio button after answering the question
              />
              <label
                htmlFor={`ch${index}`}
                className='cursor-pointer bg-sky-400 px-4 py-2 rounded-md text-white transition-colors duration-300 ease-in-out peer-checked:bg-blue-700'
              >
                {option}
              </label>
            </div>
          ))}
        </div>
          {/* <button className='p-2 rounded-full bg-sky-400' onClick={handleCheckAnswer}>Check Answer</button> */}
        <div className='m-5 grid grid-cols-1 gap-4'>
          {/* <button className='p-2 rounded-full bg-sky-400' onClick={handlePrevQuestion}>Previous Question</button> */}
          <button className='p-2 rounded-full bg-sky-400' onClick={handleNextQuestion}>Next Question</button>
        </div>
      </div>
    </div>
  )}
  else{
   return <Answers answers={answers} score={correctAns} total={totalQuestions}/>
  }
};

export default QuizPage;
