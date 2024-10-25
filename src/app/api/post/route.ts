import {authenticate} from "@/app/api/post/authenticate";
import {getBlogsByLabel} from "@/utils/blogUtils/blogUtils";
import {NextResponse} from "next/server";
import {blogger_v3} from "googleapis";

export async function GET(request: Request) {
    const auth = await authenticate();
    const blogId = process.env.BLOG_ID || ""; // Replace with your actual blog ID

    const categories = ['topCarousel', 'heroSection', 'latestPost', 'popularPost', 'trendingPost', 'featured', 'technology', 'mostView', 'entertainment', 'sliderPost', 'sports', 'international'];
    const postsForEachCategory: Map<string, blogger_v3.Schema$PostList> = new Map();

    for (const category of categories) {
        const posts = await getBlogsByLabel(auth, blogId, category);
        postsForEachCategory.set(category, posts);
    }

    return NextResponse.json(Object.fromEntries(postsForEachCategory));
}