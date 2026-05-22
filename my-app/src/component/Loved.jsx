import React from 'react'
import CollaborateCard from './CollaborateCard'
import LOvedCard from './LOvedCard'
import text1 from './img/text1.png'
import text2 from './img/text2.png'
import text3 from './img/text3.png'
import g1 from './img/g1.png'
import g2 from './img/g2.png'
import g3 from './img/g3.png'
function Loved() {
    return (
        <>
            <div className="sm:py-25 sm:px-40 py-10 px-4">
                <div className="flex flex-col items-center justify-center">
                    <p className="heading-1">Loved by the world's best teams</p>
                    <button className='heading-5 mt-6 !text-4262FF border border-050038 rounded-full hover:bg-050038 px-4 py-3'>See all customer stories →</button>
                </div>
                {/* ////////////////card container///////////  */}
                <div className="sm:flex justify-between items-center  mt-10">
                    <div className="h-100">
                        <img src={text1} alt="img" className="w-[287px] object-contain" />
                        <p className="heading-4 w-73 mt-8">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>

                        <div className="heading-4 flex gap-4 items-center w-fit mt-12">

                            <img src={g1} alt="img" className="sm:size-12 size-10 object-fill" />
                            <div className="">
                                <p className="heading-6 mb-3 sm:mb-0">Roxanne Mustafa</p>
                                <p className="heading-6">Design Team Lead at VMware</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:h-100 h-80">
                        <img src={text2} alt="img" className="w-[287px] object-contain" />
                        <p className="heading-4 w-73 mt-8">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>

                        <div className="heading-4 flex gap-4 items-center w-fit sm:mt-30 mt-10">
                            <img src={g2} alt="img" className="sm:size-12 size-10 object-fill" />
                            <div className="">
                                <p className="heading-6 mb-3 sm:mb-0">Jane Ashley</p>
                                <p className="heading-6">Head of Design at DocuSign</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:h-100 h-80">
                        <img src={text3} alt="img" className="w-[287px] object-contain" />
                        <p className="heading-4 w-73 mt-8">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that,s at the core of what we do and will continue to extend into the future.”</p>

                        <div className="heading-4 flex gap-4 items-center w-fit sm:mt-30 mt-10">
                            <img src={g3} alt="img" className="sm:size-12 size-10 object-fill" />
                            <div className="">
                                <p className="heading-6 mb-3 sm:mb-0">Laura Baird</p>
                                <p className="heading-6">Associate Design Director at frog</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loved
