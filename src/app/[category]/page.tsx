import React from 'react';
import PostHorizontal from "@/components/postCards/postHorizontal";
import {FaHome} from "react-icons/fa";
import {blogger_v3} from "googleapis";


const Page = async ({params}: { params: { category: string } }) => {

    const res = await fetch(`http://localhost:3000/api/post/${params.category}`);
    if (!res.ok) {
        console.error(`Failed to fetch posts: ${res.statusText} ${params.category}`);
        return <div>Error fetching posts</div>;
    }
    const posts: blogger_v3.Schema$PostList = await res.json();
    // console.log(posts);

    return (
        <div className="flex lg:justify-start flex-col flex-grow">
            <div className="px-4 pt-4 w-full flex gap-2 text-[#515A60]">
                <div className="text-xl text-sky-500"><FaHome/></div>
                <div className="">
                    Home &nbsp; / &nbsp; {params.category[0].toUpperCase() + params.category.substring(1)}
                </div>
            </div>
            <div className="w-full">
                <div className="p-4 flex-grow">
                    <div className="flex justify-between items-center pb-8">
                        <div
                            className="text-3xl font-semibold text-[#17222B] underline underline-offset-[20px] decoration-sky-500 decoration-4">
                            {params.category[0].toUpperCase() + params.category.substring(1)}
                        </div>
                    </div>
                    <div className=" py-4 "></div>
                    <div className="flex flex-col gap-6">
                        {
                            posts.items?.map((post: blogger_v3.Schema$Post) => {
                                return <>
                                    <PostHorizontal key={post.id}
                                                    path={params.category}
                                                    post={post}/>
                                    <hr/>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;