import { messages } from "@/app/consts/consts";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { chatId: string } }
) {
  const { chatId } = await context.params;
  const parsedChatId = parseInt(chatId, 10);
  const chatMessages = messages.filter((msg) => msg.chatId === parsedChatId);

  return NextResponse.json(chatMessages);
}
