import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import SportsQuiz from './components/SportsQuiz.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import QuizPage from './components/QuizPage.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:'/quiz/:quizId',
    element: <QuizPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
