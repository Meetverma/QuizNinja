import React from 'react'

const Answers = (props) => {
  return (
    <div>
      <h1>Your Score is: {props.score} Out of {props.total} </h1>
      {props.Answers}
    </div>
  )
}

export default Answers
