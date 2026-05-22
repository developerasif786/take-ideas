import React from 'react'
import trusticon from './img/trusticon.png'
function TrustedBy() {
  return (
    <>
      <div className="flex justify-center items-center flex-col py-15">
        <p className="heading-4 mb-12">Trusted by 45M+ users</p>
        <div className="sm:w-[1120px] w-90">
          <img src={trusticon} alt="icon" className="w-full h-full object-fill" />
        </div>
      </div>
    </>
  )
}

export default TrustedBy
