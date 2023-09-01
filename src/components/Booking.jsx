import React from 'react'

const Booking = () => {
  return (
    <div id="deals" className='max-w-[1140px] p-4 m-auto w-full ' >
       <form className='lg:flex lg:justify-between items-center w-full'>
        <div className='flex flex-col my-2 py-2'>
            <label>Destination</label>
            <select  className='lg:w-[300px] md:w-full border rounded-md p-2 '>
                <option>Maldives</option>
                <option>Goa</option>
                <option>Bali</option>
                <option>Paris</option>
            </select>
        </div>
        <div className='flex w-full'>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
            <label>Check-In</label>
            <input  className='border rounded-md p-2 ' type="date"/>
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
            <label>Check-Out </label>
            <input  className='border rounded-md p-2 ' type="date"/>
            </div>
        </div>
        <div className='flex flex-col my-2 p-2 w-full '>
            <label>Search </label>
            <button className='w-full'>Rates & Availabilities</button>
        </div>
       </form>
    </div>
  )
}

export default Booking