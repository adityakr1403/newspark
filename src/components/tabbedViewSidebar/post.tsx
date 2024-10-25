import React from 'react';
import {RxSlash} from "react-icons/rx";
import {blogger_v3} from "googleapis";
import Image from "next/image";


const Post = ({post}: { post?: blogger_v3.Schema$Post }) => {

    const getFormattedDate = (post?: blogger_v3.Schema$Post) => {
        if (!post || !post.published) {
            return '';
        }
        const date = new Date(post.published ?? '');
        const options = {year: 'numeric', month: 'long', day: '2-digit'} as Intl.DateTimeFormatOptions;
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    const imageURLs = [];
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = imgRegex.exec(post?.content ?? "")) !== null) {
        imageURLs.push(match[1]);
    }

    return (
        <div className="max-w-[350px] flex mb-0.5 ">
            <div className="w-24 h-20 overflow-hidden bg-gray-700 mr-4 shrink-0">
                <Image src={imageURLs[0]} alt={post?.title ?? ""} width={1280} height={1280}/>
            </div>
            <div className="">
                <div className="flex font-sans items-center text-sm mb-1"><span
                    className="text-[#46A9FE] font-semibold">{post?.labels?.at(0)?.toUpperCase()}</span> &nbsp; <span
                    className="transform rotate-[20deg]"> <RxSlash/> </span>&nbsp; <span
                    className="text-[#515A60]"> {getFormattedDate(post)}</span>
                </div>
                <div className="text-sm text-[#17222B] text-ellipsis line-clamp-2">
                    {post?.title}
                </div>
            </div>
        </div>
    );
};

export default Post;