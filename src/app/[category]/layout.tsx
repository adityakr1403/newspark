import type {Metadata} from "next";
import {FaFacebookF, FaHome, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import PostHorizontal from "@/components/postCards/postHorizontal";
import {IoSearch} from "react-icons/io5";
import Post from "@/components/tabbedViewSidebar/post";
import SocialMedia from "@/components/followUs/socialMedia";
import {FaXTwitter} from "react-icons/fa6";
import {IoIosGlobe} from "react-icons/io";
import {CiSquareChevLeft, CiSquareChevRight} from "react-icons/ci";
import SliderPost from "@/components/postCards/sliderPost";
import React from "react";

export const metadata: Metadata = {
    title: "Newspark",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children, params
                                   }: Readonly<{
    children: React.ReactNode,
    params: { category: string }
}>) {
    return (
        <main className="flex flex-col items-center justify-center w-full lg:max-w-[1164px]">
            <section className="flex justify-center w-full sm:overflow-hidden">
                <div className="flex sm:w-full overflow-hidden flex-grow lg:justify-between flex-col lg:flex-row">
                    {/*left*/}
                    {children}
                    {/*right*/}
                    <div className="p-4 lg:min-w-[350px]">
                        <div className="lg:py-7"></div>
                        <div className="flex justify-between items-center pb-4">
                            <div className="text-xl font-semibold text-[#17222B]">Search</div>
                        </div>
                        <div className="flex items-center relative">
                            <input type="text" placeholder="Search here"
                                   className="p-2 md:p-4 outline-none border border-dashed w-full"/>
                            <button className="absolute right-0 text-2xl bg-blue-500 text-white p-2 md:p-4"><IoSearch/>
                            </button>
                        </div>
                        {/*Recent posts*/}
                        <div className="p-3 lg:py-7"></div>
                        <div className="flex justify-between items-center pb-4">
                            <div className="text-xl font-semibold text-[#17222B]">Recent Posts</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Post/>
                            <hr className="my-1 border border-dashed"/>
                            <Post/>
                            <hr className="my-1 border border-dashed"/>
                            <Post/>
                            <hr className="my-1 border border-dashed"/>
                            <Post/>
                            <hr className="my-1 border border-dashed"/>
                            <Post/>
                        </div>
                        {/*contact us*/}
                        <div className="p-4"></div>
                        <div className="w-full">
                            <div className="text-xl font-semibold text-[#17222B] pb-4">Contact Us</div>
                            <div className="flex justify-between flex-wrap lg:max-w-[350px]">
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
                        {/*most Share*/}
                        <div className="p-4"></div>
                        <div className="flex justify-between pb-4">
                            <div className="text-xl font-semibold text-[#17222B] text-nowrap">Most Share</div>
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
        </main>
    );
}