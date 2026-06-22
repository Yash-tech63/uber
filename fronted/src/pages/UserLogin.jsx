import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setuserData] = useState({})
    const { user, setUser } = React.useContext(UserDataContext)
    const Navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
        if (response.status === 200) {
            const data = response.data

            setUser(data.user)
            localStorage.setItem("token", data.token)
            Navigate('/home')
        }
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-7 flex flex-col justify-between h-screen '>
            <div>
                <img className='  w-28 mb-4 ' src="https://pngimg.com/uploads/uber/uber_PNG18.png" alt="" />

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
                <p className='text-center mb-3'>New here?<Link to="/sign" className='text-blue-600 '>Create new Account</Link>
                </p>
            </div>
            <div>
                <Link to="/captain-login" className='bg-[#10b461] flex items-center justify-center   text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '> Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin
