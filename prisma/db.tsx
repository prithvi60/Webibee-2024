// import { PrismaClient } from "@prisma/client";

// export const prisma = new PrismaClient();
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export default prisma;
// module.exports = prisma;

const linkedIn_Key = process.env.NEXT_PUBLIC_RapidAPI_Key_LinkedIn;
const Insta_Key = process.env.NEXT_PUBLIC_RapidAPI_Key_Insta;

export async function main() {
  // linedin posts

  const linkedInUrl =
    "https://linkedin-api8.p.rapidapi.com/get-profile-posts?username=prithvi-n";

  const linkedInOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": String(linkedIn_Key),
      "X-RapidAPI-Host": "linkedin-api8.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(linkedInUrl, linkedInOptions);
    const result = await response.json();
    let linkedInCount = await prisma.linkedIn.count();
    console.log("prisma is running!");
    const posts = await result.data.slice(0, 8).map((item: any) => {
      return {
        text: item?.text,
        postUrl: item?.postUrl,
        imageSrc: item?.image === undefined ? "" : item?.image[0].url,
        videoSrc: item?.video === undefined ? "" : item?.video[0].url,
        article:
          JSON.stringify(item?.article) === "{}" ? "" : item?.article?.title,
      };
    });

    if (linkedInCount === 0) {
      await prisma.linkedIn.createMany({
        data: posts,
      });
    } else {
      await prisma.linkedIn.deleteMany({});

      await prisma.linkedIn.createMany({
        data: posts,
      });
    }
  } catch (error) {
    console.error(error);
  }

  // instagram posts

  const url =
    "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=prithvi_bytes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": String(Insta_Key),
      "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    let instaCount = await prisma.instagram.count();

    const newPosts = await result.data.items.slice(1, 9).map((item: any) => {
      return {
        text: item?.caption?.text,
        postUrl: `https://www.instagram.com/p/${item.code}`,
        imageSrc: item?.thumbnail_url,
        videoSrc: item?.is_video === true ? item?.video_versions[0]?.url : "",
        isVideo: item?.is_video,
      };
    });
    if (instaCount === 0) {
      await prisma.instagram.createMany({
        data: newPosts,
      });
    } else {
      await prisma.instagram.deleteMany({});

      await prisma.instagram.createMany({
        data: newPosts,
      });
    }
  } catch (error) {
    console.error(error);
  }
}
// Uncomment this later

// main()
//   .catch(async (e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
