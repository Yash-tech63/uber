import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Usersignup = () => {
    const [firstname, setfirstName] = useState('')
    const [lastname, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [userData, setuserData] = useState({})
    const submitHandler = (e) => {
        e.preventDefault();
        setuserData({
            fullName: {
                firstame: firstname,
                lastname: lastname
            },
            email: email,
            password: password
        })
        console.log(userData)
        setfirstName('')
        setlastName('')
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-7 flex flex-col justify-between h-screen '>
            <div>
                <img className='  w-28 mb-4 ' src="https://pngimg.com/uploads/uber/uber_PNG18.png" alt="" />

                <form onSubmit={submitHandler}>
                    <h3 className='text-xl mt-2 mb-2 font-medium text-base'>
                        What is your name
                    </h3>
                    <div className='flex mb-6 gap-4 '>
                        <input type="text"
                            className='bg-[#eeee] w-1/2  text-lg rounded px-4 py-2 border  text-base placeholder:text-sm '
                            value={firstname} onChange={(e) => { setfirstName(e.target.value) }}
                            required placeholder='first name' />
                        <input type="text"
                            className='bg-[#eeee] w-1/2  rounded px-4 py-2 border text-lg text-base placeholder:text-sm '
                            value={lastname} onChange={(e) => { setlastName(e.target.value) }}
                            required placeholder='last name' />

                    </div>
                    <h3 className='text-xl mt-2 mb-2 font-medium text-base '>
                        What is your email
                    </h3>
                    <input type="email"
                        className='bg-[#eeee] w-full mb-7  text-lg rounded px-4 py-2 border  text-lg placeholder:text-base '
                        value={email} onChange={(e) => { setEmail(e.target.value) }}
                        required placeholder='email@example.com' />

                    <h3 className='text-xl mt-2 mb-2 text-lg font-medium'>Enter password</h3>

                    <input value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' type="password" placeholder='password' />

                    <button className='bg-[#111]  text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '>Login</button>
                </form>
            </div>
            <p className='text-center mb-3'>Already have a account ? < Link to="/login" className='text-blue-600 '>Login here</Link>
            </p>

            <div>
                <p className='text-xs'> This site is protected by reCATCHA and the <span className='underline'> Google policy</span> and terms of Service apply .    </p>
            </div>

        </div>
    )
}

export default Usersignup
