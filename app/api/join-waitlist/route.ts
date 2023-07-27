import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return new NextResponse("email not available", { status: 400 });
    }

    const join = await client.waitList.create({
      data: {
        email,
      },
    });
    return NextResponse.json({
      ...join,
      creted_at: join.creted_at.toISOString(),
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
