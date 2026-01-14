// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import { RouterProvider } from 'react-router'
// import {router } from './Route.jsx'
 
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router ={router} />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './route/Router.jsx'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-right" autoClose={2000} />
    <RouterProvider router ={router} />
  </StrictMode>,
)

