
import BlogGrid from "@/components/blog/BlogGrid";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/Queries";

export const revalidate = 10;

const Page = async () => {
    const posts = await client.fetch(
        POSTS_QUERY,
        {},
        {
            cache: "no-cache",
            next: {
                tags: ["post"],
            },
        }
    );
    // console.log(posts);

    return (
        <main>
            <BlogGrid posts={posts} />
        </main>
    );
};

export default Page;
