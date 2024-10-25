import React from 'react';
import {CiSquareChevLeft, CiSquareChevRight} from "react-icons/ci";
import FeaturedNewsCard from "@/components/postCards/featuredNewsCard";
import {blogger_v3} from "googleapis";

const FeaturedSection = ({postItemList}: { postItemList: blogger_v3.Schema$PostList }) => {
    let posts = postItemList.items;
    return (
        <section className="flex justify-center w-full">
            <div className="flex flex-col p-4 w-full">
                <div className="flex justify-between pb-4">
                    <div className="text-2xl font-bold text-[#17222B]">Feature News</div>
                    <div className="flex text-[#515A60]">
                        {/*left button*/}
                        <div className="text-4xl"><CiSquareChevLeft/></div>
                        {/*right button*/}
                        <div className="text-4xl"><CiSquareChevRight/></div>
                    </div>
                </div>
                <div className="relative h-80 overflow-hidden">
                    <div className="absolute left-0 flex justify-start gap-9">
                        {
                            posts?.map((post) => {
                                return <FeaturedNewsCard key={post.id} post={post}/>
                            })
                        }
                        <FeaturedNewsCard />
                        <FeaturedNewsCard/>
                        <FeaturedNewsCard/>
                        <FeaturedNewsCard/>
                        <FeaturedNewsCard/>
                        <FeaturedNewsCard/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;