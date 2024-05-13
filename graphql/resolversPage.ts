import { prisma } from "@/prisma/db";

export const resolversPage = {
  Query: {
    insta_Posts: async () => {
      const instaPosts = await prisma.instagram.findMany();
      return instaPosts;
    },
    linkedIn_Posts: async () => {
      const linkedInPosts = await prisma.linkedIn.findMany();
      return linkedInPosts;
    },
  },
};
