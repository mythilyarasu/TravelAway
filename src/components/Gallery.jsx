import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4 '>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover'
                 src="https://images.unsplash.com/photo-1502208327471-d5dde4d78995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0cyUyMGJlYWNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover'
                src="https://images.unsplash.com/photo-1618245318763-a15156d6b23c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhvbGlkYXklMjBhY3Rpdml0aWVzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover'
                src="https://images.unsplash.com/photo-1580223530509-849e0ad583ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover'
                src="https://images.unsplash.com/photo-1596936380229-a48c53a716db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJlc29ydHN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover'
                src="https://images.unsplash.com/photo-1548107121-ba49955415b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHJlc29ydHN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery