import React from 'react'

const LocationPanel = (props) => {
    console.log(props)

    // sample array for location
    const locations = ["24B, Near kapoor's cafe Sheryians coding school , bhopal,", " 22B, Near Malohtra's cafe Sheryians coding school , bhopal", " 20B, Near thakur's cafe Sheryians coding school , bhopal", "                    24B, Near kapoor's cafe Sheryians coding school , bhopal"]
    return (
        <div className=' w-full'>
            {/* this is sample data */}
            {
                locations.map(function (elem, idx) {
                    return <div key={idx} onClick={() => (props.setVehiclepanel(true), props.setPanelopen(false))} className='flex items-center justify-start gap-4 my-4 h-full w-full border-2  border-gray-100 active:border-black rounded-lg p-3'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12  rounded-full'><i className="ri-map-pin-2-fill  "></i></h2>
                        <h4 className='font-medium'> {elem}

                        </h4>
                    </div>

                })
            }



        </div >
    )
}

export default LocationPanel
