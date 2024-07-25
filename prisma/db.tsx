import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// const linkedIn_Key =
//   (process.env.NEXT_PUBLIC_RAPIDAPI_KEY_LINKEDIN as string) ||
//   (process.env.RAPIDAPI_KEY_LINKEDIN as string);

// Instagram and linkedin API key from RapidAPI
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
        "X-RapidAPI-Key": Insta_Key,
        "X-RapidAPI-Host": "linkedin-api8.p.rapidapi.com",
      },
    };

    const linkedInResponse = await fetch(linkedInUrl, linkedInOptions);
    const linkedInResult = await linkedInResponse.json();
    const linkedInCount = await prisma.linkedIn.count();
    // console.log(linkedInCount);

    const linkedInPosts = linkedInResult?.data
      ?.slice(0, 8)
      .map((item: any) => ({
        // idx: item?.urn,
        text: item?.text,
        postUrl: item?.postUrl,
        imageSrc: item?.image ? item.image[0].url : "",
        videoSrc: item?.video ? item.video[0].url : "",
        article:
          item?.article && JSON.stringify(item.article) !== "{}"
            ? item.article.title
            : "",
      }));
    // console.log(linkedInPosts);

    if (linkedInCount === 0) {
      // If no new posts, create all new data
      await prisma.linkedIn.createMany({ data: linkedInPosts });
    } else {
      // Delete previous old data and create or update new posts
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

    const instaPosts = instaResult?.data?.items
      .slice(1, 9)
      .map((item: any) => ({
        text: item?.caption?.text,
        postUrl: `https://www.instagram.com/p/${item.code}`,
        imageSrc: item?.thumbnail_url,
        videoSrc: item.is_video ? item?.video_versions[0].url : "",
        isVideo: item?.is_video,
      }));

    // console.log(instaPosts);

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

// main();
// .catch(async (e) => {
//   console.error(e);
//   process.exit(1);
// })
// .finally(async () => {
//   await prisma.$disconnect();
// });
