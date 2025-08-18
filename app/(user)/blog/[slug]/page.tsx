import BlogDetailsPage from "@/components/blog/BlogDetailsPage";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/Queries";

export const revalidate = 10;

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const post = await client.fetch(
    POST_QUERY,
    { slug },
    {
      cache: "no-cache",
      next: {
        tags: ["post", "news", "caseStudy"],
      },
    }
  );

  return (
    <main>
      <BlogDetailsPage post={post} />
    </main>
  );
};

export default Page;