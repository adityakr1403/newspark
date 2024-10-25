import React from 'react';
import {blogger_v3} from "googleapis";
import PostHorizontal from "@/components/postCards/postHorizontal";
import Category from "@/components/categories/category";
import {IoNewspaperOutline} from "react-icons/io5";
import Link from "next/link";
import {number} from "prop-types";

const InternationalSection = ({postItemList}: { postItemList: blogger_v3.Schema$PostList }) => {
    let posts = postItemList.items;
    return (
        <section className="w-full">
            <div className="flex lg:justify-between flex-col lg:flex-row">
                {/*left*/}
                <div className="p-4 flex-grow">
                    <div className="flex justify-between items-center pb-4">
                        <div className="text-2xl font-semibold text-[#17222B]">International</div>
                        <div className="flex text-[#515A60]">
                            SEE ALL
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        {
                            posts?.map((post: blogger_v3.Schema$Post, index) => {
                                if (index >= 4) {
                                    return null;
                                }
                                return <>
                                    <PostHorizontal key={post.id}
                                                    path={'international'}
                                                    post={post}/>
                                    <hr/>
                                </>
                            })
                        }
                    </div>
                </div>
                {/*right*/}
                <div className="p-4">
                    {/*Categories*/}
                    <div className="flex justify-between items-center pb-4">
                        <div className="text-2xl font-semibold text-[#17222B]">Categories</div>
                        <div className="flex text-[#515A60]">
                            SEE ALL
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Link href={'/business'}><Category name={"Business"}/></Link>
                        <Link href={'/entertainment'}> <Category name={"Entertainment"}/></Link>
                        <Link href={'finance'}> <Category name={"Finance"}/></Link>
                        <Link href={'/sports'}> <Category name={"Sports"}/></Link>
                        <Link href={'/technology'}> <Category name={"Technology"}/></Link>
                        <Link href={'/travel'}> <Category name={"Travel"}/></Link>
                        <Link href={'/international'}> <Category name={"International"}/></Link>
                    </div>
                    {/*advertisement*/}
                    <div
                        className="lg:max-w-[350px] h-[300px] flex flex-col justify-between bg-gray-700 rounded my-10 p-7 text-white">
                        <div className="">
                            <div className={`flex items-center mb-4`}>
                                <IoNewspaperOutline className="text-3xl md:text-5xl"/>
                                <div className="text-2xl md:text-4xl"> Newspark</div>
                            </div>
                            <div className="">
                                Newspark responsive newspaper and magazine theme
                            </div>
                        </div>
                        <div className="flex justify-between gap-5 ">
                            <button className="px-3 py-2 bg-blue-500 text-sm">PURCHASE NOW</button>
                            <div className="flex flex-col items-end text-sm">
                                <div className="">ADS</div>
                                <div className="hidden sm:block">350x295px</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternationalSection;