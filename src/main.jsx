import { router } from './Pages/Routes/Routes';
import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
     </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,
)
