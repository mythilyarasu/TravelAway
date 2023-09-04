import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center italic text-gray-700'>Send us a message</h2>
        <p className='text-center italic text-gray-700 py-2'>We're standing by!</p>
        <div className='grid md:grid-cols-2'>
            <img className='w-full md:h-full object-cover  p-2 max-h-[500px] h-[200px]'
            src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
       
          <form>
            <div className='grid grid-cols-2'>
                <input className='border m-2 p-2'  type="text" placeholder="First Name"/>
                <input   className='border m-2 p-2' type="text" placeholder="Last Name"/>
                <input  className='border m-2 p-2' type="email" placeholder="Email"/>
                <input  className='border m-2 p-2' type="tel" placeholder="Enter your Phone Number"/>
                <input  className='border col-span-2 m-2 p-2' type="text" placeholder="Enter your Address"/>
                <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
                <button className='col-span-2  m-2'>Submit</button>
            </div>
          </form>
        </div>
    </div>
   
  )
}

export default Contact