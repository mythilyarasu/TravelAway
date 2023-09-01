import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] '>
        <img  className='w-full h-full object-cover'
        src="https://images.pexels.com/photos/4321802/pexels-photo-4321802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='max-w-[1140px] m-auto'>
            <div className=' absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find your Dream Trip</h1>
                <p className='text-4xl py-4 italic'>With TravelAway</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, hic consectetur aliquid, eius nemo deserunt, in eveniet iste eum qui praesentium laboriosam maiores quasi molestiae tenetur magnam. Ratione, totam quaerat?</p>
                
            </div>

        </div>
    </div>
  )
}

export default Hero