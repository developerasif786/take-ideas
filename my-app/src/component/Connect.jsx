import React from "react";
import conactimg from "./img/conactimg.png";
function Connect() {
  return (
    <>
      {/* left  */}
      <div className="sm:flex sm:justify-between sm:py-15 py-10 sm:px-[150px] px-4">
        <div className="sm:w-[550px] sm:h-[498px] w-[325px] h-[325px]">
          <img
            src={conactimg}
            alt="img"
            className="w-full h-full object-fill"
          />
        </div>
        {/* right  */}
        <div className="flex flex-col justify-center">
          <p className="heading-1 sm:w-95">Connect <br></br> your tools, close your tabs</p>
          <p className="heading-4 mb-10 mt-4 sm:w-105">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <button className="heading-5 w-fit !text-4262FF">
            Sign up free →
          </button>
        </div>
      </div>
    </>
  );
}

export default Connect;
