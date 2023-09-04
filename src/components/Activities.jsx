import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      
      <div className='relative p-4 cursor-pointer' >
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl '>Resorts</h3>
        <img  className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt='' />
      </div>
      <div className='relative p-4 cursor-pointer'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl '>Excursion</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        src="https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt='' />
      </div>
      <div className='relative p-4 cursor-pointer'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-2xl '>Cruises</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
         src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt='' />
      </div>
      
    </div>
  )
}

export default Activities