import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div>
            <div className=' bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-8 h-screen w-full bg-red-400 flex justify-between flex-col '>
                <img className='   w-28 ml-8 ' src="https://pngimg.com/uploads/uber/uber_PNG18.png" alt="" />
                <div className='bg-white py-4 px-4 pb-6'>
                    <h2 className='text-xl font-bold'>
                        Get start with uber
                    </h2>
                    <Link to="/login" className='flex items-center justify-center w-full bg-black  text-white py-3 rounded mt-2'>Continue</Link>
                </div>

            </div>
        </div>
    )
}

export default Start
