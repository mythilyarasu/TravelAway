import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] '>
        <img  className='w-full h-full object-cover'
        src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
        <div className='max-w-[1140px] m-auto'>
            <div className=' absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'> Travel. Experience. Live.</h1>
                <p className='text-4xl py-4 italic'>With TravelAway</p>
                <p className='text-xl py-4'>It feels good to be lost in the right Direction!
                  <br />Happiness is a way of travel, not a destination.
                   </p>
                
            </div>

        </div>
    </div>
  )
}

export default Hero