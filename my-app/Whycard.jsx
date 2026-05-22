import React from "react";

function Whycard(props) {
  return (
    <>
      <div className="sm:w-80 sm:h-50 w-90 h-fit flex flex-col justify-end items-center">
        <p className="heading-1">{props.p1}</p>
        <p className="heading-4 mt-6 text-center">{props.p2}</p>
      </div>
    </>
  );
}

export default Whycard;
