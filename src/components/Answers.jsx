import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';
import Rating from  'react-rating';

const Answers = (props) => {
  const accuracy = (props.score / props.total) * 100;

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl md:text-5xl font-bold mb-4 pt-8'>Your Score</h1>
      <div className='p-4'>
        <p className='text-center text-2xl'>{props.score} Correct Out Of {props.total}</p>
        <PieChart
          data={[
            { title: 'Correct', value: props.score, color: '#C6EBC5' },
            { title: 'Incorrect', value: props.total - props.score, color: '#FA7070' },
          ]}
          radius={40}
        />
      </div>
      <div className='p-4'>
        <h2 className='text-2xl text-center'>Accuracy: {accuracy}%</h2>
        <PieChart
          data={[
            { title: 'Accuracy', value: accuracy, color: '#FFBB64' },
            { title: '', value: 100 - accuracy, color: '#E5E7EB' },
          ]}
          radius={40}

        />
      </div>
      <div className='p-4'>
        <span className='text-lg'>Rate the Quiz </span>
      <Rating/>
      </div>
      <Link to="/" className={"rounded-full p-4 mb-8 text-xl text-white bg-gray-900 hover:bg-gray-950"}>Back to Home</Link>
    </div>
  );
};

export default Answers;
