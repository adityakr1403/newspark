import {authenticate} from "@/app/api/post/authenticate";
import {NextResponse} from "next/server";
import {getBlogByPath} from "@/utils/blogUtils/blogUtils";

export const revalidate = 0;

export async function GET(request: Request, {params}: { params: { category: string, path: string[] } }) {
    const auth = await authenticate();
    const blogId = '7145774002601485283'; // Replace with your actual blog ID
    // const title = 'Sample Blog Post';
    // const content = 'This is a sample blog post content.';
    // const post = await postBlog(auth, blogId, title, content);

    // get blog by pathname
    const postByPathName = await getBlogByPath(auth, blogId, `/${params.path.join("/")}`);

    return NextResponse.json(postByPathName);
}