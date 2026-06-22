import React, { useEffect } from 'react'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                const token = localStorage.getItem("captainToken");

                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captain/logout`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status === 200) {
                    localStorage.removeItem("captainToken");
                    navigate("/captain-login");
                }
            } catch (err) {
                console.log(err);
            }
        };

        logout();
    }, []); // important

    return <div>Logging out...</div>;
};

export default CaptainLogout
