import { chats } from "@/app/consts/consts";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(chats);
}
