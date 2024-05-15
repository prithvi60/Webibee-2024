import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { resolversPage } from "@/graphql/resolversPage";
import { typeDefsPage } from "@/graphql/typeDefsPage";
import { prisma } from "../../../prisma/db";
import { PrismaClient } from "@prisma/client";

export type ServerType = {
  prisma: PrismaClient;
};

const apolloServer = new ApolloServer<ServerType>({
  resolvers: resolversPage,
  typeDefs: typeDefsPage,
  // cors: false, // Disable CORS
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
