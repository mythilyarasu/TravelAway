import React from 'react'
import {BsChatSquareDots } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='max-w-[1140px]  w-full  py-8 m-auto border-t-4 p-4 '>
        <div className='flex justify-center items-center m-auto '>
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-gray-700 text-xl font-bold'>TRAVELAWAY</h1>
        </div>   
    </div>
  )
}

export default Footer