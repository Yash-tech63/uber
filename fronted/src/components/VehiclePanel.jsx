import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>

            <h5 onClick={() => { props.setVehiclepanelOpen(false) }} className='p-1 w-[90%] absolute  items-center flex justify-center  top-0'><i className=" text-3xl text-gray-200  ri-arrow-down-wide-line"></i>
            </h5>
            <h2 className='text-2xl font-semibold mb-4'>Choose a vehicle</h2>
            <div onClick={() => {
                props.setConfirmRidepanel(true)
            }} className=' flex w-full p-3 mb-2 border-2 border-gray-100 active:border-black rounded-xl items-center justify-between '>
                <img className='h-13' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="" />

                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'>
                        UberGo <span>
                            <i className="ri-user-3-fill"> 4</i>
                        </span>
                    </h4>
                    <h5 className='font-medium text-sm'> 2 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'> Afordable , compacts rides</p>
                </div>
                <h2 className='text-xl font-semibold'> ₹103.20   </h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidepanel(true)
            }} className=' flex w-full p-3 mb-2 border-2 border-gray-100 active:border-black rounded-xl items-center justify-between '>
                <img className='h-13' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MjAwMTg5YS03MWMwLTRmNmQtYTlkZS0xYjZhODUyMzkwNzkucG5n" alt="" />

                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg'>
                        Moto <span>
                            <i className="ri-user-3-fill">1</i>
                        </span>
                    </h4>
                    <h5 className='font-medium text-sm'> 3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'> Afordable , motorcycle rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹65.17   </h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidepanel(true)
            }} className=' flex w-full p-3 mb-2 border-2  border-gray-100 active:border-black  rounded-xl items-center justify-between '>
                <img className='h-13' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=0/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80ZTcxOGQ1Yy1lNDMxLTU5YzUtYWNiNS1hYzQwYzI2YzI0ZGYud2VicA==" alt="" />

                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'>
                        Auto <span>
                            <i className="ri-user-3-fill">3</i>
                        </span>
                    </h4>
                    <h5 className='font-medium text-sm'> 3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'> Afordable , motorcycle rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹118.68   </h2>
            </div>
        </div>
    )
}

export default VehiclePanel
