import React from 'react'
import downero from './img/down-ero.png'
import mirologo from './img/mirologo.png'
import enlogo from './img/enlogo.png'

function Navebar() {
    return (
        <>
            {/* mobil nav  */}
            <div className="sm:hidden">

                <div className="py-3 px-4 flex justify-between items-center
             bg-FFFFFF shadow-lg shadow-gray-100 ">
                    <img src={mirologo} alt="logo" className="w-[91px] h-8 object-contain" />
                    <button className='heading-5 !text-FFFFFF bg-4262FF rounded-full hover:bg-050038 px-4 py-3'>Sign up free →</button>
                </div>
            </div>
            {/* nav sm:  */}
            <div className="hidden sm:block">
                <div className="py-5 px-8 flex justify-between items-center shadow-lg shadow-gray-100">
                    <div className="flex gap-6 items-center ">
                        <img src={mirologo} alt="logo" className="w-[91px] h-8 object-contain" />
                        <ul className='flex gap-4'>
                            <li className='flex gap-3 items-center heading-5'>Product  <img src={downero} alt="ero" className="size-[15px] pt-0.5 object-contain" /> </li>
                            <li className='flex gap-3 items-center heading-5'>Solutions  <img src={downero} alt="ero" className="size-[15px] pt-0.5 object-contain" /> </li>
                            <li className='flex gap-3 items-center heading-5'>Resources  <img src={downero} alt="ero" className="size-[15px] pt-0.5 object-contain" /> </li>
                            <li className='flex gap-3 items-center heading-5'>Enterprise </li>
                            <li className='flex gap-3 items-center heading-5'>Pricing </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className='flex gap-6 items-center'>
                            <li className='flex gap-2 items-center heading-5'><img src={enlogo} alt="" className="size-6 object-contain" />EN</li>
                            <li className='heading-5'>Contact Sales</li>
                            <li className='heading-5'>Login</li>
                            <button className='heading-5 !text-FFFFFF bg-4262FF rounded-full hover:bg-050038 px-4 py-3 sm:px-[22px] sm:py-[17px]'>Sign up free →</button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navebar
