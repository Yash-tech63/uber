import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 onClick={() => { props.setVehicleFound(false) }} className='p-1 w-[90%] absolute  items-center flex justify-center  top-0'><i className=" text-3xl text-gray-200  ri-arrow-down-wide-line"></i>
            </h5>
            <h2 className='text-2xl font-semibold mb-4'> Looking for a driver</h2>
            <div className=' flex justify-between items-center flex-col gap-2 '>
                <img className='h-20 ' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5  p-3 border-b-1  '>
                        <i className="ri-map-pin-user-fill"></i>
                        <div >
                            <h3 className='text-lg font-medium' >562/11/A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya talab ahemdabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5  p-3 border-b-1 '>
                        <i className=" text-lg ri-map-pin-2-fill"></i>
                        <div >
                            <h3 className='text-lg font-medium' >562/11/A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya talab ahemdabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-1  '>
                        <i className="ri-currency-fill"></i>                        <div >
                            <h3 className='text-lg font-medium' >₹193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LookingForDriver
