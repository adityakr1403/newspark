import React from 'react';
import Image from "next/image";
import {blogger_v3} from "googleapis";
import Link from "next/link";

interface PostProps {
    post?: blogger_v3.Schema$Post
}

const Post = ({post}: PostProps) => {
    const description = post?.content?.substring(0, 500).replace(/<[^>]+>/g, '');
    const imageURLs = [];
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = imgRegex.exec(post?.content ?? "")) !== null) {
        imageURLs.push(match[1]);
    }

    const url = new URL(post?.url ?? '');
    const baseUrl = `${url.protocol}//${url.hostname}`;
    const uri = url.pathname + url.search + url.hash;
    const postLink = `/${post?.labels?.at(0)}${uri}`;

    return (
        <div className="w-[350px] flex justify-between items-start gap-2 mx-4 shrink-0">
            {/*Image*/}
            <div className="bg-gray-700 w-24 h-20 relative shrink-0">
                {/*<Image width={24} height={70} src={"https://wp.quomodosoft.com/newsprk/wp-content/uploads/2021/03/47-1200x780.png"} alt={""}/>*/}
                <Image src={imageURLs[0]} alt={post?.title ?? ""} width={1280} height={1280}/>
            </div>
            {/*Post content*/}
            <div className=" h-20 overflow-hidden">
                {/*heading*/}
                <Link href={postLink} className=" text-base font-bold text-gray-600 text-ellipsis line-clamp-2">
                    {post?.title}
                </Link>
                {/*meta*/}
                <div className="flex text-gray-500">
                    <div className="text-xs text-ellipsis line-clamp-2">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Post;