import React from 'react';
import {CiSquareChevLeft, CiSquareChevRight} from "react-icons/ci";
import TechnologyPost from "@/components/postCards/technologyPost";
import SliderPost from "@/components/postCards/sliderPost";
import {blogger_v3} from "googleapis";

const EntertainmentSection = ({postItemList}: { postItemList: blogger_v3.Schema$PostList }) => {
    let posts = postItemList.items;
    return (
        <section className="">
            <div className="flex flex-col lg:flex-row">
                {/*left*/}
                <div className="p-4 overflow-hidden">
                    <div className="flex justify-between pb-4">
                        <div className="text-2xl font-semibold text-[#17222B]">Entertainment</div>
                        <div className="flex text-[#515A60]">
                            {/*left button*/}
                            <div className="text-4xl"><CiSquareChevLeft/></div>
                            {/*right button*/}
                            <div className="text-4xl"><CiSquareChevRight/></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 justify-start ">
                        {/*posts*/}
                        <div className="flex flex-col md:flex-row gap-10">
                            <TechnologyPost post={posts?.at(0)}/>
                            <TechnologyPost post={posts?.at(1)}/>
                        </div>
                        <div className="flex flex-col md:flex-row gap-10">
                            <TechnologyPost post={posts?.at(2)}/>
                            <TechnologyPost post={posts?.at(3)}/>
                        </div>
                    </div>
                </div>
                {/*right*/}
                <div className="p-4 ">
                    <div className="flex justify-between pb-4">
                        <div className="text-2xl font-semibold text-[#17222B] text-nowrap">Slider Post</div>
                        <div className="flex text-[#515A60]">
                            {/*left button*/}
                            <div className="text-4xl"><CiSquareChevLeft/></div>
                            {/*right button*/}
                            <div className="text-4xl"><CiSquareChevRight/></div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <SliderPost postNumber={1}/>
                        <hr className="my-3 border border-dashed"/>
                        <SliderPost postNumber={2}/>
                        <hr className="my-2 border border-dashed"/>
                        <SliderPost postNumber={3}/>
                        <hr className="my-2 border border-dashed"/>
                        <SliderPost postNumber={4}/>
                        <hr className="my-2 border border-dashed"/>
                        <SliderPost postNumber={5}/>
                        <hr className="my-2 border border-dashed"/>
                        <SliderPost postNumber={6}/>
                        <hr className="my-2 border border-dashed"/>
                        <SliderPost postNumber={7}/>
                        <hr className="my-2 border border-dashed"/>
                        <SliderPost postNumber={8}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EntertainmentSection;