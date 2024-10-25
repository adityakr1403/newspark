import React from 'react';
import Post from "@/components/tabbedViewSidebar/post";
import {blogger_v3} from "googleapis";
import Gallery from "@/components/homePageSections/heroSection/gallery";

const HeroSection = ({postItemList}: { postItemList: blogger_v3.Schema$PostList }) => {
    let posts = postItemList.items;
    return (
        <section className="flex justify-center w-full">
            {/*posts gallery*/}
            <Gallery posts={posts}/>
            {/*latest / popular / trending*/}
            <div className="p-4 hidden lg:block ">
                <div className="flex gap-3 justify-start text-xs pb-4">
                    <div className="py-3 px-4 bg-blue-500 text-white">LATEST POST</div>
                    <div className="py-3 px-4 ">POPULAR</div>
                    <div className="py-3 px-4 ">TRENDING</div>
                </div>
                <div className="flex flex-col gap-1">
                    {
                        posts?.map((post, index) => {
                            if (index >= 5) {
                                return null;
                            }
                            return <>
                                <Post post={post}/>
                                <hr className="my-1 border border-dashed"/>
                            </>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default HeroSection;