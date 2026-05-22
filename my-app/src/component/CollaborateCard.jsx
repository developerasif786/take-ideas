import React from 'react'

function CollaborateCard(props) {
  return (
    <>
     <div className="w-90 h-[268px] p-6">
        <p className="heading-2 mb-7">{props.name}</p>
        <p className="heading-4">{props.discaription}</p>
        </div> 
    </>
  )
}

export default CollaborateCard
