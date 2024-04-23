import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";


function Navbar({quantity}) {
  return (
    <>
        <div className='w-full h-16 bg-blue-600 px-40 flex items-center justify-between'>
        <h1 className='text-white text-2xl font-semibold'>Shopping App</h1>
        <div className='flex'>
          <div className='text-5xl text-white'> <FaCartArrowDown className="cart_icon" /></div>
         {quantity?<>
          <span className="text-3xl">{quantity}</span>
         </>:<></>}
          
        
        </div>

        </div>
    </>
  )
}

export default Navbar