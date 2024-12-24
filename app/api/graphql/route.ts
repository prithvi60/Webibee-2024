import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { resolversPage } from "@/graphql/resolversPage";
import { typeDefsPage } from "@/graphql/typeDefsPage";
import { prisma } from "../../../prisma/db";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export type ServerContext = {
  prisma: PrismaClient;
  req: NextRequest;
};

const apolloServer = new ApolloServer<ServerContext>({
  resolvers: resolversPage,
  typeDefs: typeDefsPage,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req: NextRequest): Promise<ServerContext> => ({
    req,
    prisma,
  }),
});

export const GET = handler;
export const POST = handler;
