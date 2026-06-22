import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('captainToken')
    const nav = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isloading, setIsloading] = useState(true)

    console.log(token)
    useEffect(() => {
        if (!token) {
            nav("/captain-login");
        }
    }, [token, nav]);




    return (
        <div>
            {children}
        </div>
    )
}

export default CaptainProtectWrapper
