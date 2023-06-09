import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({children}) => {
  return (
      <div className='font-primary'>
        {/* Navbar goes here  */}
          {children}
        {/* Footer goes here  */}
      </div>
  )
}

export default Main