import { main, prisma } from "@/prisma/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // Authorization check
  const authHeader = req.headers.get("Authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    await main();
    return NextResponse.json({ message: "Cron job executed successfully" });
  } catch (error) {
    console.error("Error executing cron job:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
