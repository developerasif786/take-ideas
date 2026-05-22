import React from "react";
import workimg from "./img/workimg.png";

function Work() {
    return (
        <>
            <div className="sm:flex sm:justify-between sm:py-15 py-10 sm:px-[150px] px-4">
                <div className="flex flex-col justify-center">
                    <p className="heading-1 sm:w-113">Work together, wherever you work</p>
                    <p className="heading-4 mb-10 mt-4 sm:w-105">
                        In the office, remote, or a mix of the two, with Miro, your team can
                        connect, collaborate, and co-create in one space no matter where you
                        are.
                    </p>
                    <button className="heading-5 w-fit !text-4262FF">
                        Sign up free →
                    </button>
                </div>
                <div className="sm:w-[550px] sm:h-[535px] bg-red-300">
                    <img src={workimg} alt="img" className="w-full h-full object-fill" />
                </div>
            </div>
        </>
    );
}

export default Work;
