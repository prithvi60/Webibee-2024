import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const linkedIn_Key =
  (process.env.NEXT_PUBLIC_RAPIDAPI_KEY_LINKEDIN as string) ||
  (process.env.RAPIDAPI_KEY_LINKEDIN as string);
const Insta_Key =
  (process.env.NEXT_PUBLIC_RAPIDAPI_KEY_INSTA as string) ||
  (process.env.RAPIDAPI_KEY_INSTA as string);

export async function main() {
  try {
    // LinkedIn posts
    const linkedInUrl =
      "https://linkedin-api8.p.rapidapi.com/get-profile-posts?username=prithvi-n";

    const linkedInOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": linkedIn_Key,
        "X-RapidAPI-Host": "linkedin-api8.p.rapidapi.com",
      },
    };

    const linkedInResponse = await fetch(linkedInUrl, linkedInOptions);
    const linkedInResult = await linkedInResponse.json();
    let linkedInCount = await prisma.linkedIn.count();
    // console.log(linkedInResult.data);
    

    const linkedInPosts = linkedInResult?.data
      ?.slice(0, 8)
      .map((item: any) => ({
        text: item?.text,
        postUrl: item?.postUrl,
        imageSrc: item?.image ? item.image[0].url : "",
        videoSrc: item?.video ? item.video[0].url : "",
        article:
          item?.article && JSON.stringify(item.article) !== "{}"
            ? item.article.title
            : "",
      }));

    if (linkedInCount === 0) {
      await prisma.linkedIn.createMany({ data: linkedInPosts });
    } else {
      await prisma.linkedIn.deleteMany({});
      await prisma.linkedIn.createMany({ data: linkedInPosts });
    }

    // Instagram posts
    const instaUrl =
      "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=prithvi_bytes";
    const instaOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": Insta_Key,
        "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
      },
    };

    const instaResponse = await fetch(instaUrl, instaOptions);
    const instaResult = await instaResponse.json();
    let instaCount = await prisma.instagram.count();
    // console.log(instaResult.data);

    const instaPosts = instaResult?.data?.items
      .slice(1, 9)
      .map((item: any) => ({
        text: item?.caption?.text,
        postUrl: `https://www.instagram.com/p/${item.code}`,
        imageSrc: item?.thumbnail_url,
        videoSrc: item.is_video ? item?.video_versions[0].url : "",
        isVideo: item?.is_video,
      }));

    if (instaCount === 0) {
      await prisma.instagram.createMany({ data: instaPosts });
    } else {
      await prisma.instagram.deleteMany({});
      await prisma.instagram.createMany({ data: instaPosts });
    }
  } catch (error) {
    console.error("Error in main function:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// main()
