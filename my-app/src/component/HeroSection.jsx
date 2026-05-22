import React from 'react'
import herostar from './img/herostar.png'
import heroimg from './img/heroimg.png'
function HeroSection() {
  return (
    <>
      <div className="sm:flex sm:justify-between sm:py-[60px] sm:px-[120px] py-10 px-4">
        {/* left  */}
        <div className="bg-red-5 flex flex-col justify-center">
          <p className="heading-1 sm:w-100 w-70">Take ideas from better to best</p>
          <p className="heading-4 sm:w-100">Miro is your team's visual platform to connect, collaborate, and create — together.</p>
          <div className="flex flex-col gap-2.5 mt-8">
            <input type="text" name="email" placeholder='Enter your email' className=' border border-050038
        sm:w-110 w-90 h-12 pl-6 rounded-full' />
            <button className='sm:w-110 w-90 h-12 pl-6 rounded-full bg-4262FF heading-3'>Sign up free →</button>
          </div>
          <p className="sm:mt-2 heading-6 my-4 sm:my-0">Collaborate with your team within minutes</p>
          <img src={herostar} alt="" className="w-[350px] h-15 object-contain sm:mt-10" />
        </div>
        {/* right  */}
        <div className="w-[360px] h-50 sm:w-160 sm:h-115 mt-10 sm:mt-0">
          <img src={heroimg} alt="img" className="w-full h-full object-fill" />
        </div>
      </div>
    </>
  )
}

export default HeroSection
