import React from 'react'

function LOvedCard(props) {
  return (
    <>
      <div className="">
        <img src={props.img1} alt="img" className="w-[287px] object-contain" />
        <p className="heading-4 w-73 mt-8 bg-green-400">{props.discaripation}</p>
        
        <div className="heading-4 flex gap-4 items-center bg-red-400 w-fit mt-12">
            <img src={props.img2} alt="img" className="sm:size-12 size-8 object-fill" />
            <div className="">
                <p className="heading-6">{props.p1}</p>
                <p className="heading-6">{props.p2}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default LOvedCard
