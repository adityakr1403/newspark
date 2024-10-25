import React from 'react';
import Post from "@/components/latestPostsTopCrousel/post";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import {blogger_v3} from "googleapis";

const TopCarousel = ({postItemList}: { postItemList: blogger_v3.Schema$PostList }) => {
    let posts = postItemList.items;
    return (
        // Latest posts carousel
        <div className="hidden md:flex w-full justify-center items-center p-3 h-32">
            {/*previous button*/}
            <div className="h-20 px-2 flex justify-center items-center shadow-2xl shadow-black">
                <div className="text-xl text-gray-500">
                    <MdChevronLeft/>
                </div>
            </div>
            <div className="flex overflow-hidden">
                {
                    posts?.map((post: blogger_v3.Schema$Post) => {
                        return <Post key={post.id} post={post}/>
                    })
                }
            </div>
            {/*next button*/}
            <div className="h-20 px-2 flex justify-center items-center shadow-2xl shadow-black">
                <div className="text-xl text-gray-500">
                    <MdChevronRight/>
                </div>
            </div>
        </div>
    );
};

export default TopCarousel;