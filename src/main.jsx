import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import SportsQuiz from './components/SportsQuiz.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import QuizPage from './components/QuizPage.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import { AuthProvider } from './components/AuthContext.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:'/quiz/:quizId',
    element: <QuizPage/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/register',
    element: <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
