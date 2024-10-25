import React from 'react';
import {FaHome, FaRegClock, FaRegComment, FaRegEye, FaTag} from "react-icons/fa";
import {CiSquareChevLeft, CiSquareChevRight} from "react-icons/ci";
import TechnologyPost from "@/components/postCards/technologyPost";
import Post from "@/components/tabbedViewSidebar/post";
import {blogger_v3} from "googleapis";
import Link from "next/link";

const Page = async ({params}: { params: { category: string, path: string[] } }) => {
    const blogPath = `${params.path.join("/")}`;
    const res = await fetch(`${process.env.NEXTJS_API_URL}/${params.category}/${blogPath}`);
    if (!res.ok) {
        console.error(`Failed to fetch posts: ${res.statusText} ${params.category}`);
        return <div>Error fetching posts</div>;
    }
    const post: blogger_v3.Schema$Post = await res.json();

    const date = new Date(post.published ?? '');
    const options = {year: 'numeric', month: 'long', day: '2-digit'} as Intl.DateTimeFormatOptions;
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    // @ts-ignore
    return (
        <div className="p-4 flex lg:justify-start flex-col flex-grow shrink">
            <div className=" py-4 w-full flex gap-2 text-[#515A60]">
                <div className="text-xl text-sky-500"><FaHome/></div>

                <div className="text-wrap flex flex-wrap">
                    Home &nbsp; / &nbsp; {params.category[0].toUpperCase() + params.category.substring(1)} &nbsp; / &nbsp;
                    {params.path.join(' ')}
                </div>
            </div>
            <div className="py-4">
                <div className="flex gap-4 flex-wrap items-center justify-between text-sky-500">
                    <div className="text-base ">{params.category.toUpperCase()}</div>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex flex-nowrap gap-1 items-center">
                            <div className=""><FaRegClock/></div>
                            <div className="text-[#515A60]">{formattedDate}</div>
                        </div>
                        <div className="flex flex-nowrap gap-1 items-center">
                            <div className=""><FaRegComment/></div>
                            <div className="text-[#515A60]">{post.replies?.totalItems} Comments</div>
                        </div>
                        {/*<div className="flex flex-nowrap gap-1 items-center">*/}
                        {/*    <div className=""><FaRegEye/></div>*/}
                        {/*    <div className="text-[#515A60]">{post.status}</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            {/*heading*/}
            <div className="text-2xl lg:text-4xl mt-5 mb-6 font-semibold pr-4">
                {post.title}
            </div>
            {/*paragraph*/}
            <div className=" lg:leading-loose grow-0 lg:pr-4" dangerouslySetInnerHTML={{__html: post.content ?? ""}}>
            </div>
            {/*tags*/}
            <div className="flex flex-wrap items-center gap-2 py-10 text-[#17222B] text-base">
                <div className="flex border border-[#E7E8E9] bg-[#E7E8E9] gap-1 p-2 items-center">
                    <div className=""><FaTag/></div>
                    <div className="">Tags</div>
                </div>
                {
                    post.labels?.map((label, index) => {
                        return <Link href={`/${label}`} key={index}
                                     className="border border-[#E7E8E9] p-2">{label}</Link>;
                    })
                }
            </div>
            {/*next and prev*/}
            <hr className="md:mt-8 mb-3"/>
            <div className="flex justify-between">
                <div className="flex flex-col justify-between">
                    <div className="font-semibold text-[#8A8F94]">PREV NEWS</div>
                    <div className="">Keep Your Vacuum Cleaner On Track With Expert</div>
                </div>
                <div className="w-0.5 h-20 bg-[#E7E8E9] mx-1 md:mx-5 "></div>
                <div className="flex flex-col justify-between items-end">
                    <div className="font-semibold text-[#8A8F94]">NEXT NEWS</div>
                    <div className="text-end">Keep Your Vacuum Cleaner On Track With Expert</div>
                </div>
            </div>
            {/*comments*/}
            <hr className="mb-8 mt-3"/>
            <div className="">
                {/*leave a reply*/}
                <div className="text-xl font-semibold text-[#17222B]">Leave a Reply</div>
                <div className="text-[#515A60] text-sm">Your email address will not be published. Required fields are
                    marked *
                </div>
                <div className="flex flex-col md:flex-row gap-4 my-2">
                    <div className="flex flex-col gap-1 md:w-1/2">
                        <input type="text" placeholder="Name" className="p-2 border border-dashed w-full"/>
                        <input type="text" placeholder="Email" className="p-2 border border-dashed w-full"/>
                        <input type="text" placeholder="Website" className="p-2 border border-dashed w-full"/>
                        {/*save my details check*/}
                        <div className="flex items-start gap-2">
                            <input type="checkbox" className="w-5 h-5 "/>
                            <div className="text-sm">Save my name, email, and website in this browser for the next time
                                I
                                comment.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-1/2">
                        <textarea placeholder="Comment" className="p-2 border border-dashed w-full h-32"/>
                        <button className="bg-[#17222B] text-white p-2">Post Comment</button>
                    </div>
                </div>
                {/*comments*/}
                <div className="my-4 lg:my-10">
                    <div className="text-xl font-semibold text-[#17222B]">Comments</div>
                    <div className="flex gap-2 items-center text-[#515A60]">
                        <div className="flex gap-1 items-center">
                            <div className=""><FaRegClock/></div>
                            <div className="">March 31, 2024</div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className=""><FaRegComment/></div>
                            <div className="">0 Comments</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-1 mb-7"/>
            {/*recommended posts*/}
            <div className="overflow-hidden w-full">
                <div className="flex justify-between pb-4">
                    <div className="text-2xl font-semibold text-[#17222B] ">Recommended</div>
                    <div className="flex text-[#515A60]">
                        {/*left button*/}
                        <div className="text-4xl"><CiSquareChevLeft/></div>
                        {/*right button*/}
                        <div className="text-4xl"><CiSquareChevRight/></div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/*posts*/}
                    <div className="">
                        <TechnologyPost/>
                    </div>
                    <div className="hidden md:block">
                        <TechnologyPost/>
                    </div>
                </div>
                <hr className="my-1 mb-7 border border-dashed"/>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col">
                        <Post/>
                        <hr className="my-4 border border-dashed"/>
                        <Post/>
                    </div>
                    <hr className="my-4 border border-dashed lg:hidden"/>
                    <div className="flex flex-col">
                        <Post/>
                        <hr className="my-4 border border-dashed"/>
                        <Post/>
                    </div>
                </div>
                <hr className="my-4 border border-dashed"/>
            </div>
        </div>
    );
};

export default Page;