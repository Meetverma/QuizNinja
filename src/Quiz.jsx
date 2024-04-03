import React, { useState } from 'react';

const Quiz = () => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers); // You can replace this with your logic for processing answers
    window.alert('Quiz submitted successfully');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl mb-4 font-bold text-center text-blue-600">Sports Quiz</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Question 1: What sport is Cristiano Ronaldo famous for?</h3>
            <div className="space-y-2">
              <div>
                <input type="radio" id="q1-football" name="q1" value="football" onChange={handleAnswerChange} />
                <label htmlFor="q1-football" className="ml-2 text-gray-700">Football</label>
              </div>
              <div>
                <input type="radio" id="q1-basketball" name="q1" value="basketball" onChange={handleAnswerChange} />
                <label htmlFor="q1-basketball" className="ml-2 text-gray-700">Basketball</label>
              </div>
              <div>
                <input type="radio" id="q1-tennis" name="q1" value="tennis" onChange={handleAnswerChange} />
                <label htmlFor="q1-tennis" className="ml-2 text-gray-700">Tennis</label>
              </div>
              <div>
                <input type="radio" id="q1-golf" name="q1" value="golf" onChange={handleAnswerChange} />
                <label htmlFor="q1-golf" className="ml-2 text-gray-700">Golf</label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Question 2: What is the highest governing body of football?</h3>
            <div className="space-y-2">
              <div>
                <input type="radio" id="q2-FIFA" name="q2" value="FIFA" onChange={handleAnswerChange} />
                <label htmlFor="q2-FIFA" className="ml-2 text-gray-700">FIFA</label>
              </div>
              <div>
                <input type="radio" id="q2-NBA" name="q2" value="NBA" onChange={handleAnswerChange} />
                <label htmlFor="q2-NBA" className="ml-2 text-gray-700">NBA</label>
              </div>
              <div>
                <input type="radio" id="q2-NFL" name="q2" value="NFL" onChange={handleAnswerChange} />
                <label htmlFor="q2-NFL" className="ml-2 text-gray-700">NFL</label>
              </div>
              <div>
                <input type="radio" id="q2-NHL" name="q2" value="NHL" onChange={handleAnswerChange} />
                <label htmlFor="q2-NHL" className="ml-2 text-gray-700">NHL</label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Question 3: Who won the 2020 NBA Championship?</h3>
            <div className="space-y-2">
              <div>
                <input type="radio" id="q3-Los-Angeles-Lakers" name="q3" value="Los Angeles Lakers" onChange={handleAnswerChange} />
                <label htmlFor="q3-Los-Angeles-Lakers" className="ml-2 text-gray-700">Los Angeles Lakers</label>
              </div>
              <div>
                <input type="radio" id="q3-Miami-Heat" name="q3" value="Miami Heat" onChange={handleAnswerChange} />
                <label htmlFor="q3-Miami-Heat" className="ml-2 text-gray-700">Miami Heat</label>
              </div>
              <div>
                <input type="radio" id="q3-Golden-State-Warriors" name="q3" value="Golden State Warriors" onChange={handleAnswerChange} />
                <label htmlFor="q3-Golden-State-Warriors" className="ml-2 text-gray-700">Golden State Warriors</label>
              </div>
              <div>
                <input type="radio" id="q3-Toronto-Raptors" name="q3" value="Toronto Raptors" onChange={handleAnswerChange} />
                <label htmlFor="q3-Toronto-Raptors" className="ml-2 text-gray-700">Toronto Raptors</label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Question 4: What is the our national sport?</h3>
            <div className="space-y-2">
              <div>
                <input type="radio" id="q2-FIFA" name="q2" value="FIFA" onChange={handleAnswerChange} />
                <label htmlFor="q2-FIFA" className="ml-2 text-gray-700">Football</label>
              </div>
              <div>
                <input type="radio" id="q2-NBA" name="q2" value="NBA" onChange={handleAnswerChange} />
                <label htmlFor="q2-NBA" className="ml-2 text-gray-700">Cricket</label>
              </div>
              <div>
                <input type="radio" id="q2-NFL" name="q2" value="NFL" onChange={handleAnswerChange} />
                <label htmlFor="q2-NFL" className="ml-2 text-gray-700">hockey</label>
              </div>
              <div>
                <input type="radio" id="q2-NHL" name="q2" value="NHL" onChange={handleAnswerChange} />
                <label htmlFor="q2-NHL" className="ml-2 text-gray-700">basketball</label>
              </div>
            </div>
          </div>

          {/* Add Questions 4 and 5 following similar structure */}

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Quiz;
