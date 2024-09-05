// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Register from './components/Register/register.jsx'
import Login from './components/Login/login.jsx'
import Homepage from './components/HomePageUser/HomePage.jsx'
// import Profileuser from './components/HomePageUser/ProfileUser.jsx'
import { createBrowserRouter , RouterProvider , } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/" ,
    element: <App/>, 
  },
  {
    path: "/register" ,
    element: <Register/>, 
  },
  {
    path: "/login" ,
    element: <Login/>
  },
  {
    path: "/homepage",
    element: <Homepage/>
  },
  // {
  //   path: "/profileuser",
  //   element: <Profileuser/>
  // },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
