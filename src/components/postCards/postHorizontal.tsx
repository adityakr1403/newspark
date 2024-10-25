import React from 'react';
import {blogger_v3} from "googleapis";
import Schema$Post = blogger_v3.Schema$Post;
import Link from "next/link";
import Image from "next/image";

const PostHorizontal = ({post, path}: {
    post: Schema$Post,
    path: string | undefined | null,
}) => {
    const url = new URL(post.url ?? '');
    const baseUrl = `${url.protocol}//${url.hostname}`;
    const uri = url.pathname + url.search + url.hash;
    const postLink = `/${path}${uri}`;

    const imageURLs = [];
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = imgRegex.exec(post.content ?? "")) !== null) {
        imageURLs.push(match[1]);
    }

    const description = post.content?.substring(0, 500).replace(/<[^>]+>/g, '');

    const date = new Date(post.published ?? '');
    const options = {year: 'numeric', month: 'long', day: '2-digit'} as Intl.DateTimeFormatOptions;
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return (
        <div className="flex flex-col md:flex-row  justify-start gap-5 md:gap-10 ">
            <div
                className="md:flex-1 lg:max-w-[350px] h-[230px] bg-[#17222B] shrink-0 overflow-hidden flex items-center justify-center">
                <Image src={imageURLs[0]} alt={post.title ?? ""} width={1280} height={1280}/>
            </div>
            <div className="py-2 h-[230px] md:flex-1 lg:max-w-[350px] relative overflow-hidden">
                <div className="flex font-sans items-center text-sm mb-3"><span
                    className="text-[#46A9FE] font-semibold">{path?.toUpperCase() || post.labels?.at(0)?.toUpperCase()}</span> &nbsp; &nbsp;
                    <span
                        className="text-[#515A60] font-semibold">{formattedDate}</span>
                </div>
                <div className="text-xl text-[#17222B] font-semibold mb-2 line-clamp-2">{post.title}
                </div>
                <div className="text-sm mb-2 text-[#515A60] text-ellipsis line-clamp-3">
                    {
                        description
                    }
                </div>

                <Link href={postLink ?? "#"}>
                    <button
                        className="py-2 px-4 border md:absolute left-0 border-gray-700 text-gray-600 bottom-2 text-sm">Read
                        more
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default PostHorizontal;