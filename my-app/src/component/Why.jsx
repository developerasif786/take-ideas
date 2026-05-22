import React from "react";
import Whycard from "../../Whycard";

function Why() {
  return (
    <>
      <div className="sm:py-30 sm:px-40 py-10 px-4 bg-FFD02F">
        <div className="flex flex-col justify-between items-center">
          <p className="heading-1 sm:w-130">
            Why companies large and small trust Miro
          </p>
          <p className="heading-5 mt-4">Contact Sales to request a demo</p>
        </div>
        {/* card container  */}
        <div className="flex flex-wrap justify-between gap-y-15 mt-10">
          {/* 1  */}
          <Whycard
            p1="iso"
            p2="ISO-27001 enterprise-grade security"
          />
          {/* 2 */}
          <Whycard p1="#1" p2="Visual Collaboration Platform on G2" />
          {/* 3  */}
          <Whycard p1="99%" p2="of the Fortune 100 are customers" />
          {/* 4  */}
          <Whycard p1="1,000+" p2="community- and expert-built templates" />
          {/* 5  */}
          <Whycard p1="45m+" p2="users around the world" />
          {/* 6  */}
          <Whycard p1="100+" p2="integrations with technology partners" />
        </div>
      </div>
    </>
  );
}

export default Why;
