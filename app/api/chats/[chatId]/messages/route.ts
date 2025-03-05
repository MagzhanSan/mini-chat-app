import { messages } from "@/app/consts/consts";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: { params: any }
) {
  const { chatId } = await context.params;
  const parsedChatId = parseInt(chatId, 10);
  const chatMessages = messages.filter((msg) => msg.chatId === parsedChatId);

  return NextResponse.json(chatMessages);
}
