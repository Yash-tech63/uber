import React, { createContext, useState } from 'react'

export const CaptainDataContext = createContext()

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState({
        email: '',
        fullName: {
            firstname: '',
            lastname: ''
        },
        isAuthenticated: false
    })

    return (
        <CaptainDataContext.Provider value={{ captain, setCaptain }}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext
