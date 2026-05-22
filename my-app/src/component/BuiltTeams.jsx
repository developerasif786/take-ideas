import React from "react";
import bilt2img from "./img/bilt2img.png";
import good from "./img/good.png";
import iconimg from "./img/iconimg.png";
function BuiltTeams() {
  return (
    <>
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
            {/* p con 1  */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <img
                  src={good}
                  alt="dimg"
                  className="sm:size-6 size-4 object-fill"
                />
                <p className="heading-4">Build low-fi wireframes</p>
              </div>
              {/* p con 2  */}

              <div className="flex gap-4">
                <img
                  src={good}
                  alt="dimg"
                  className="sm:size-6 size-4 object-fill"
                />
                <p className="heading-4  w-55">
                  Involve stakeholders in the design process
                </p>
              </div>

              {/* p con 3  */}

              <div className="flex gap-4">
                <img
                  src={good}
                  alt="dimg"
                  className="sm:size-6 size-4 object-fill"
                />
                <p className="heading-4 w-[196px]">
                  Run engaging design workshops
                </p>
              </div>

              {/* p con end  */}
            </div>
            <button className="heading-4 w-fit !text-4262FF mt-[34px] mb-[70px]">
              Sign up free →
            </button>
            <div className="sm:w-[403px] sm:h-[82px]">
              <img src={iconimg} alt="img" className="w-full h-full" />
            </div>
          </div>
          <div className="sm:w-[700px] sm:h-[517px]">
            <img
              src={bilt2img}
              alt="img"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BuiltTeams;
