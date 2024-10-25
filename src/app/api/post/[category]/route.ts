import {getBlogsByLabel} from "@/utils/blogUtils/blogUtils";
import {NextResponse} from "next/server";
import {authenticate} from "@/app/api/post/authenticate";


export async function GET(request: Request, {params}: { params: { category: string } }) {
    const auth = await authenticate();
    const blogId = '7145774002601485283'; // Replace with your actual blog ID
    // const title = 'Sample Blog Post';
    // const content = 'This is a sample blog post content.';
    // const post = await postBlog(auth, blogId, title, content);

    // get all blogs
    const categoryPosts = await getBlogsByLabel(auth, blogId, params.category);
    return NextResponse.json(categoryPosts);
}