import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div >
        <div className='mt-80 flex justify-center '>
      <h1 className='font-bold text-8xl'>We think You are Lost!</h1>
        </div>
      <div className='flex justify-center my-28'>
      <Link to='/' className='p-5 bg-sky-500 hover:bg-sky-600 text-white rounded-full'>Back to Home</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
