import React from "react";
import bilt2img from "./img/bilt2img.png";
import builtimg from "./img/builtimg.png";
function Built() {
  return (
    <>
    {/* flex-wrap sm:gap-0 gap-4 */}
      <div className="sm:py-15 sm:px-40 py-10 px-4">
        <p className="heading-1">Built for the way you work</p>
        <div className="flex justify-between my-8 gap-5 sm:gap-0 overflow-hidden">  
          <button className="bg-[#F2F2F2] border border-050038 py-3 px-5 rounded-full hover:bg-4262FF heading-6">
            Brainstorming
          </button>
          <button className="border border-050038 py-3 px-5 rounded-full hover:bg-[#F2F2F2] heading-6">
            Diagramming
          </button>
          <button className="border border-050038 py-3 px-5 rounded-full hover:bg-[#F2F2F2] heading-6">
            Meetings & Workshops
          </button>
          <button className="border border-050038 py-3 px-5 rounded-full hover:bg-[#F2F2F2] heading-6">
            Scrum Events
          </button>
          <button className="border border-050038 py-3 px-5 rounded-full hover:bg-[#F2F2F2] heading-6">
            Mapping
          </button>
          <button className="border border-050038 py-3 px-5 rounded-full hover:bg-[#F2F2F2] heading-6">
            Research & Design
          </button>
          <button className="border border-050038 py-3 px-5 rounded-full hover:bg-[#F2F2F2] heading-6">
            Strategic Planning
          </button>
        </div>

        <div className="sm:flex sm:justify-between">
          {/* left  */}
          <div className="py-8 px-4">
            <p className="heading-4 w-fit">Brainstorming</p>
            <p className="heading-4 mb-9 mt-[26px] w-[302px]">
              Unleash creative ideas and build on them with the help of sticky
              notes, images, mind maps, videos, drawing capabilities — the list
              goes on.
            </p>
            <button className="heading-4 w-fit !text-4262FF">
              Sign up free →
            </button>
          </div>
          <div className="sm:w-[700px] sm:h-[517px]">
            <img
              src={builtimg}
              alt="img"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Built;
