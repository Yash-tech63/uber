import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'


const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const nav = useNavigate()
    console.log(token)
    useEffect(() => {
        if (!token) {
            nav("/login");
        }
    }, [token, nav]);

    return (
        <div>
            {children}
        </div>
    )
}

export default UserProtectWrapper
