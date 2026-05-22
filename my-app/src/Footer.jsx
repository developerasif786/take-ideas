import React from 'react'
import fimg from "./component/img/fimg.png"
import fimg2 from "./component/img/fimg2.png"

function Footer() {
    return (
        <>
            <div className="bg-050038">
                {/* upar container  */}
                <div className="flex justify-between items-cente flex-wrap px-6">
                    {/* 1  */}
                    <div className="flex flex-col gap-2 w-fit ">
                        <p className="heading-4 !text-FFFFFF mb-4">Product</p>
                        <p className="heading-5 !text-FFFFFF">Meetings and Workshops</p>
                        <p className="heading-5 !text-FFFFFF">Brainstorming & Ideation</p>
                        <p className="heading-5 !text-FFFFFF">Agile Workflows</p>
                        <p className="heading-5 !text-FFFFFF">Diagramming</p>
                        <p className="heading-5 !text-FFFFFF">Research & Design</p>
                        <p className="heading-5 !text-FFFFFF">Strategy & Planning</p>
                        <p className="heading-5 !text-FFFFFF">Mind Map</p>
                        <p className="heading-5 !text-FFFFFF">Concept Map</p>
                        <p className="heading-5 !text-FFFFFF">Online Sticky Notes</p>
                        <p className="heading-5 !text-FFFFFF">view demo →</p>
                    </div>
                    {/* 2  */}
                    <div className="flex flex-col gap-2 w-fit">
                        <p className="heading-4 !text-FFFFFF mb-4">Solutions</p>
                        <p className="heading-5 !text-FFFFFF">Meetings and Workshops</p>
                        <p className="heading-5 !text-FFFFFF">Brainstorming & Ideation</p>
                        <p className="heading-5 !text-FFFFFF">Agile Workflows</p>
                        <p className="heading-5 !text-FFFFFF">Diagramming</p>
                        <p className="heading-5 !text-FFFFFF">Research & Design</p>
                        <p className="heading-5 !text-FFFFFF">Strategy & Planning</p>
                        <p className="heading-5 !text-FFFFFF">Mind Map</p>
                        <p className="heading-5 !text-FFFFFF">Concept Map</p>
                        <p className="heading-5 !text-FFFFFF">Online Sticky Notes</p>
                        <p className="heading-5 !text-FFFFFF">Flowchart</p>
                        <p className="heading-5 !text-FFFFFF">view demo</p>
                    </div>
                    {/* 3 */}
                    <div className="flex flex-col gap-2 w-fit">
                        <p className="heading-4 !text-FFFFFF mb-4">Resources</p>
                        <p className="heading-5 !text-FFFFFF">Meetings and Workshops</p>
                        <p className="heading-5 !text-FFFFFF">Brainstorming & Ideation</p>
                        <p className="heading-5 !text-FFFFFF">Agile Workflows</p>
                        <p className="heading-5 !text-FFFFFF">Diagramming</p>
                        <p className="heading-5 !text-FFFFFF">Research & Design</p>
                        <p className="heading-5 !text-FFFFFF">Strategy & Planning</p>
                        <p className="heading-5 !text-FFFFFF">Mind Map</p>
                        <p className="heading-5 !text-FFFFFF">Concept Map</p>
                    </div>
                    {/* 4 */}
                    <div className="flex flex-col gap-2 w-fit">
                        <p className="heading-4 !text-FFFFFF mb-4">Company</p>
                        <p className="heading-5 !text-FFFFFF">Careers 🚀</p>
                        <p className="heading-5 !text-FFFFFF">Brainstorming & Ideation</p>
                        <p className="heading-5 !text-FFFFFF">Agile Workflows</p>
                    </div>
                    {/* 5 */}
                    <div className="flex flex-col gap-2 w-fit mr-25">
                        <p className="heading-4 !text-FFFFFF mb-4">Plans and Pricing</p>
                        <p className="heading-5 !text-FFFFFF">Meetings and Workshops</p>
                        <p className="heading-5 !text-FFFFFF">Brainstorming & Ideation</p>
                        <p className="heading-5 !text-FFFFFF">Agile Workflows</p>
                        <p className="heading-5 !text-FFFFFF">Diagramming</p>
                        <p className="heading-5 !text-FFFFFF">Research & Design</p>
                        <p className="heading-5 !text-FFFFFF w-31 border-b border-FFFFFF">Contact sales →</p>
                    </div>
                    <img src={fimg} alt="" className="w-full h-full object-contain mt-25 hidden sm:block" />
                    <img src={fimg2} alt="" className="w-full h-full object-contain mt-25 sm:hidden" />
                </div>
            </div>
        </>
    )
}

export default Footer
