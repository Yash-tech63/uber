import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

function CaptainsignUp() {
    const [firstname, setfirstName] = useState('')
    const [lastname, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    const [userData, setuserData] = useState({})
    const navigate = useNavigate()
    const { captain, setCaptain } = React.useContext(CaptainDataContext)
    const submitHandler = async (e) => {

        e.preventDefault();
        const newCaptain = {
            fullname: {
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }
        console.log(newCaptain)
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, newCaptain)
        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem("captainToken", data.token)
            navigate('/captain-home')
        }
        setfirstName('')
        setlastName('')
        setEmail('')
        setPassword('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    }
    return (
        <div className='p-7 flex flex-col justify-between h-screen '>
            <div>
                <img className='  w-28 mb-4 ' src="https://staging.svgrepo.com/show/505031/uber-driver.svg" alt="" />

                <form onSubmit={submitHandler}>
                    <h3 className='text-xl mt-2 mb-2 font-medium text-base'>
                        What is our Captain  name
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
                        What is our Captain email
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

                    <fieldset className='mb-7 rounded  border-[#ddd] '>
                        <h3 className='text-xl font-medium mb-3'>Vehicle Information</h3>
                        <div className='grid gap-4 md:grid-cols-2'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-medium' htmlFor='vehicleColor'>Vehicle color</label>
                                <input
                                    id='vehicleColor'
                                    type='text'
                                    value={vehicleColor}
                                    onChange={(e) => setVehicleColor(e.target.value)}
                                    required
                                    className='bg-[#eeee] rounded px-4 py-2 border text-lg placeholder:text-base'
                                    placeholder='Color'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-medium' htmlFor='vehiclePlate'>Vehicle plate</label>
                                <input
                                    id='vehiclePlate'
                                    type='text'
                                    value={vehiclePlate}
                                    onChange={(e) => setVehiclePlate(e.target.value)}
                                    required
                                    className='bg-[#eeee] rounded px-4 py-2 border text-lg placeholder:text-base'
                                    placeholder='Plate number'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-medium' htmlFor='vehicleCapacity'>Vehicle capacity</label>
                                <input
                                    id='vehicleCapacity'
                                    type='number'
                                    min='1'
                                    value={vehicleCapacity}
                                    onChange={(e) => setVehicleCapacity(e.target.value)}
                                    required
                                    className='bg-[#eeee] rounded px-4 py-2 border text-lg placeholder:text-base'
                                    placeholder='Capacity'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-medium' htmlFor='vehicleType'>Vehicle type</label>
                                <select
                                    id='vehicleType'
                                    value={vehicleType}
                                    onChange={(e) => setVehicleType(e.target.value)}
                                    required
                                    className='bg-[#eeee] rounded px-4 py-2 border text-lg'
                                >
                                    <option value='' disabled>Select type</option>
                                    <option value='car'>car</option>
                                    <option value='auto'>auto</option>
                                    <option value='moto'>moto</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <button className='bg-[#111]  text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '>Create captain</button>
                </form>
            </div>
            <p className='text-center mb-3'>Already have a account ? < Link to="/captain-login" className='text-blue-600 '>Login here</Link>
            </p>

            <div>
                <p className='text-xs'> This site is protected by reCATCHA and the <span className='underline'> Google policy</span> and terms of Service apply .    </p>
            </div>

        </div>
    )
}

export default CaptainsignUp
