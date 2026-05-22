import React from "react";
import textimg from "./img/textimg.png";
import CollaborateCard from "./CollaborateCard";
function Collaborate() {
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <img
            src={textimg}
            alt="textimg"
            className="w-[173px] h-[100px] object-contain ml-108 hidden sm:block"
          />
          <p className="text-center heading-1 mb-3 sm:w-120">
            Collaborate without constraints
          </p>
        </div>
        {/* card contanear  */}
        <div className="sm:flex sm:justify-between sm:px-[150px]">
          {/* 1 */}
          <CollaborateCard
            name="Free forever"
            discaription={
              <>
                Our free plan gives you unlimited team members, 3 boards, and
                300+ expert-made templates. Signing up with your work email lets
                you bring in your team faster. See ours<br></br>
                <span className="text-4262FF">pricing plans</span> for more
                features.
              </>
            }
          />
          {/* 2 */}
          <CollaborateCard
            name="Easy integrations"
            discaription={
              <>
                Miro has 100+ powerful integrations with tools you already use
                like G Suite, Slack, and Jira, so your workflow is seamless.
                View the full list in our <span className="text-4262FF"> Marketplace . </span>
              </>
            }
          />
          {/* 3 */}
          <CollaborateCard
            name="Security first"
            discaription={
              <>
                We treat your data like you would — with the utmost care. We
                follow industry-leading security standards and give you tools to
                protect intellectual property. Learn more at our 
                <span className="text-4262FF">Trust Center .</span>
              </>
            }
          />
        </div>
      </div>
    </>
  );
}

export default Collaborate;
