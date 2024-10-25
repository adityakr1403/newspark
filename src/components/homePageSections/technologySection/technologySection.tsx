import React from 'react';
import {CiSquareChevLeft, CiSquareChevRight} from "react-icons/ci";
import TechnologyPost from "@/components/postCards/technologyPost";
import Post from "@/components/tabbedViewSidebar/post";
import SocialMedia from "@/components/followUs/socialMedia";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {IoIosGlobe} from "react-icons/io";
import {blogger_v3} from "googleapis";

const TechnologySection = ({postItemList}: { postItemList: blogger_v3.Schema$PostList }) => {
    let posts = postItemList.items;
    return (
        <section>
            <div className="flex flex-col lg:flex-row ">
                {/*left*/}
                <div className="p-4 overflow-hidden w-full">
                    <div className="flex justify-between pb-4">
                        <div className="text-2xl font-semibold text-[#17222B] ">Technology</div>
                        <div className="flex text-[#515A60]">
                            {/*left button*/}
                            <div className="text-4xl"><CiSquareChevLeft/></div>
                            {/*right button*/}
                            <div className="text-4xl"><CiSquareChevRight/></div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start gap-10">
                        {/*posts*/}
                        <div className="">
                            <TechnologyPost post={posts?.at(0)} />
                        </div>
                        <div className="hidden md:block">
                            <TechnologyPost post={posts?.at(1)}/>
                        </div>
                    </div>
                    <hr className="my-1 mb-7 border border-dashed"/>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col">
                            <Post post={posts?.at(2)}/>
                            <hr className="my-4 border border-dashed"/>
                            <Post post={posts?.at(3)}/>
                        </div>
                        <hr className="my-4 border border-dashed lg:hidden"/>
                        <div className="flex flex-col">
                            <Post post={posts?.at(4)}/>
                            <hr className="my-4 border border-dashed"/>
                            <Post post={posts?.at(5)}/>
                        </div>
                    </div>
                </div>
                {/*right sidebar*/}
                <div className="p-4 ">
                    {/*follow us*/}
                    <div className="">
                        <div className="text-2xl font-semibold text-[#17222B] pb-4">Follow Us</div>
                        <div className="flex flex-col pb-2">
                            <div className="flex flex-wrap">
                                <SocialMedia color={"#3B5998"} typeOfFollowers={"Fans"}><FaFacebookF/>
                                </SocialMedia>
                                <SocialMedia color={"#1DA1F2"} typeOfFollowers={"Followers"}><FaXTwitter/>
                                </SocialMedia>
                                <SocialMedia color={"#FF5050"} typeOfFollowers={"Subscribers"}><FaYoutube/>
                                </SocialMedia>
                                <SocialMedia color={"#00AB6C"}
                                             typeOfFollowers={"Followers"}><IoIosGlobe/></SocialMedia>
                                <SocialMedia color={"#9B45D5"}
                                             typeOfFollowers={"Followers"}><FaInstagram/></SocialMedia>
                                <SocialMedia color={"#1AB7EA"}
                                             typeOfFollowers={"Followers"}><FaLinkedinIn/></SocialMedia>
                            </div>

                        </div>
                    </div>
                    {/*Most View*/}
                    <div className="mt-5">
                        <div className="flex justify-between pb-4">
                            <div className="text-2xl font-semibold text-[#17222B] text-nowrap">Most View</div>
                            <div className="flex text-[#515A60]">
                                {/*left button*/}
                                <div className="text-4xl"><CiSquareChevLeft/></div>
                                {/*right button*/}
                                <div className="text-4xl"><CiSquareChevRight/></div>
                            </div>
                        </div>
                        <div className="">
                            <Post post={posts?.at(0)}/>
                            <hr className="my-4 border border-dashed"/>
                            <Post post={posts?.at(2)}/>
                            <hr className="my-4 border border-dashed"/>
                            <Post post={posts?.at(3)}/>
                            <hr className="my-4 border border-dashed"/>
                            <Post post={posts?.at(4)}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;