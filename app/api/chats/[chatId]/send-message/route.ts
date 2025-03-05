import { messages } from "@/app/consts/consts";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { chatId: string } }
) {
  const { chatId } = await params;

  try {
    const { author, text } = await request.json();

    if (!author || !text) {
      return NextResponse.json(
        { error: "Author and text are required" },
        { status: 400 }
      );
    }

    const newMessage = {
      id: messages.length + 1,
      chatId: parseInt(chatId),
      author,
      text,
      timestamp: new Date().toISOString(),
    };

    messages.push(newMessage);
    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/chats/[chatId]/messages:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
