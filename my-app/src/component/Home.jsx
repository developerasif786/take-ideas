import React from "react";
import HeroSection from "./HeroSection";
import TrustedBy from "./TrustedBy";
import Collaborate from "./Collaborate";
import Work from "./Work";
import Connect from "./Connect";
import imgbilding from "./img/imgbilding.png";
import Built from "./Built";
import BuiltTeams from "./BuiltTeams";
import Why from "./Why";
import Loved from "./Loved";
import Join from "./Join";

function Home() {
  return (
    <>
      <div className="">
        <HeroSection />
        <TrustedBy />
        <Collaborate />
        <div className="text-center py-10">
          <button className="heading-5 !text-FFFFFF bg-4262FF rounded-full hover:bg-050038 px-4 py-3">
            Sign up free →
          </button>
        </div>
        {/* //////////////////// work section ////////////////////   */}
        <Work />
        {/* ////////////////////// Contact section ///////////////////  */}
        <Connect />
        {/* ////////////////////// img section ///////////////////  */}

        <div className="sm:w-full sm:h-[500px] w-full h-[200px] mb-10 sm:mb-0">
          <img
            src={imgbilding}
            alt="img"
            className="w-full h-full object-fill"
          />
        </div>
        {/* ////////////////////// Built for the way you work section ///////////////////  */}
        <Built />
        {/* ////////////////////// Built for all kinds of teams section ///////////////////  */}
        <BuiltTeams />
        {/* ////////////////////// why section ///////////////////  */}
        <Why />
        {/* ////////////////////// Loved by the world's best teams section ///////////////////  */}
        <Loved />
        {/* ////////////////////// Loved by the world's best teams section ///////////////////  */}
        <Join />
      </div>
    </>
  );
}

export default Home;
