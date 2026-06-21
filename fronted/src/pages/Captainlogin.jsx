import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Captainlogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        });
        console.log(captainData)
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-7 flex flex-col justify-between h-screen '>
            <div>
                <img className='  w-28 mb-4 ' src="https://staging.svgrepo.com/show/505031/uber-driver.svg" alt="" />

                <form onSubmit={submitHandler}>
                    <h3 className='text-xl mt-2 mb-2 font-medium'>
                        What is your email
                    </h3>
                    <input type="email"
                        className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                        value={email} onChange={(e) => { setEmail(e.target.value) }}
                        required placeholder='email@example.com' />

                    <h3 className='text-xl mt-2 mb-2 font-medium'>Enter password</h3>

                    <input value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' type="password" placeholder='password' />

                    <button className='bg-[#111]  text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '>Login</button>
                </form>
                <p className='text-center mb-3'>Join a fleet?<Link to="/captain-sign" className='text-blue-600 '>Register as a Captain</Link>
                </p>
            </div>
            <div>
                <Link to="/login" className='bg-[#f3c164] flex items-center justify-center   text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '> Sign in as User</Link>
            </div>
        </div>

    )
}

export default Captainlogin
