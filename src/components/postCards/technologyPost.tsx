import React from 'react';
import {RxSlash} from "react-icons/rx";
import {blogger_v3} from "googleapis";
import Image from "next/image";

interface TechnologyPostProps {
    post?: blogger_v3.Schema$Post
}

const TechnologyPost = ({post}: TechnologyPostProps) => {
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
        <div className="flex-grow lg:max-w-[350px] ">
            <div className="h-80 lg:max-w-[350px] lg:h-[230px] bg-[#17222B] overflow-hidden">
                <Image src={imageURLs[0]} alt={post?.title ?? ""} width={1280} height={1280}/>
            </div>
            <div className="py-5">
                <div className="flex font-sans items-center text-sm mb-1"><span
                    className="text-[#46A9FE] font-semibold">{post?.labels?.at(0)?.toUpperCase()}</span> &nbsp; &nbsp;
                    <span
                        className="text-[#515A60] font-semibold"> {getFormattedDate(post)}</span>
                </div>
                <div className="text-xl text-[#17222B] font-semibold mb-2 text-ellipsis line-clamp-2"> {post?.title}
                </div>
                <div className="text-sm text-[#515A60] text-ellipsis line-clamp-3">
                    {
                        post?.content?.replace(/<[^>]*>?/gm, '').slice(0, 100)
                    }
                </div>
            </div>
        </div>
    );
};

export default TechnologyPost;