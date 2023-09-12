import { router } from './Pages/Routes/Routes';
import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import {
  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)
