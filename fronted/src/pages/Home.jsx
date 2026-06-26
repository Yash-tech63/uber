import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitforDriver from '../components/WaitforDriver'

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelopen, setPanelopen] = useState(false)
    const Panelref = useRef(null)
    const panelCloseref = useRef(null)
    const [vehiclePanelOpen, setVehiclepanelOpen] = useState(false)
    const vehiclePanelRef = useRef(null)
    const [confirmRidepanel, setConfirmRidepanel] = useState(false)
    const confirmRidePanelref = useRef(null)
    const [vehicleFound, setVehicleFound] = useState(false)
    const vehicleFoundref = useRef(null)
    const [WaitingForDriverPanel, setWaitingForDriverPanel] = useState(false)
    const WaitingForDriver = useRef(null)
    const submitHandler = (e) => {
        e.preventDefault()

    }
    useGSAP(function () {
        if (panelopen) {
            gsap.to(Panelref.current, {
                height: '70%',
                display: "block",
                opacity: 1,
            })
            gsap.to(panelCloseref.current, {
                opacity: 1,

            })
        }
        else {
            gsap.to(Panelref.current, {
                display: 'none',

            })
            gsap.to(panelCloseref.current, {
                opacity: 0,
                duration: 1

            })
        }
    }, [panelopen])
    useGSAP(function () {
        if (vehiclePanelOpen) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanelOpen])
    useGSAP(function () {
        if (confirmRidepanel) {
            gsap.to(confirmRidePanelref.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(confirmRidePanelref.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidepanel])
    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundref.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(vehicleFoundref.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehicleFound])
    useGSAP(function () {
        if (WaitingForDriverPanel) {
            gsap.to(WaitingForDriver.current, {
                transform: 'translateY(0)'
            })
        }
        else {
            gsap.to(WaitingForDriver.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [WaitingForDriverPanel])
    return (
        <div className='h-screen relative overflow-hidden'>
            <img className='w-16 absolute left-5 top-5  ' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
            <div className='w-screen h-screen'>
                {/* img for temporary use  */}
                <img className=' h-full w-full object-cover' src="https://i.sstatic.net/gtiI7.gif" alt="" />
            </div>
            <div className=' h-screen absolute top-0 w-full flex flex-col justify-end  '>
                <div className=' p-5 relative bg-white'>
                    <h5 ref={panelCloseref} className='absolute opacity-0 top-6 right-6 text-2xl' onClick={() => {
                        setPanelopen(false)
                    }}>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>

                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className='line absolute h-16 w-1  top-[40%] left-10 bg-gray-900 rounded-full'></div>
                        <input value={pickup} onClick={() => {
                            setPanelopen(true)
                        }} onChange={(e) => {
                            setPickup(e.target.value)
                        }} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Add a pick up location ' />
                        <input value={destination}
                            onClick={() => {
                                setPanelopen(true)
                            }}
                            onChange={(e) => {
                                setDestination(e.target.value)
                            }} className='bg-[#eee] px-12 py-2 text-base rounded-lg  w-full mt-3' type="text" placeholder='enter your destination' />
                    </form>
                </div>
                <div ref={Panelref} className='  p-5  bg-white'>
                    <LocationPanel panelopen={panelopen} setPanelopen={setPanelopen} vehiclePanel={vehiclePanelOpen} setVehiclepanel={setVehiclepanelOpen} />
                </div>
            </div>
            <div className='fixed w-full z-10 bottom-0 bg-white p-3 py-8 px-3 translate-y-full pt-12  ' ref={vehiclePanelRef}>
                <VehiclePanel setConfirmRidepanel={setConfirmRidepanel} setVehiclepanelOpen={setVehiclepanelOpen} />
            </div>
            <div className='fixed w-full z-10 bottom-0 bg-white p-3 py-6 px-3 translate-y-full pt-12  ' ref={confirmRidePanelref}>
                <ConfirmedRide setVehicleFound={setVehicleFound} setConfirmRidepanel={setConfirmRidepanel} setVehiclepanelOpen={setVehiclepanelOpen} />
            </div>
            <div ref={vehicleFoundref} className='fixed w-full z-10 bottom-0 bg-white p-3 py-6 px-3 translate-y-full pt-12  ' >
                <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>
            <div ref={WaitingForDriver} className='fixed w-full z-10 bottom-0 bg-white p-3 py-6 px-3 translate-y-full pt-12  ' >
                <WaitforDriver WaitingForDriverPanel={WaitingForDriverPanel} />
            </div>
        </div>
    )
}

export default Home
