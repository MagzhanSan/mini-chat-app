import { api } from "@/app/lib/api";
import { revalidatePath } from "next/cache";

interface Message {
  id: number;
  author: string;
  text: string;
  timestamp: string;
}

export default async function ChatWindow({ chatId }: { chatId: number }) {
  const messages = await api<Message[]>(`/api/chats/${chatId}/messages`);

  async function sendMessage(formData: FormData): Promise<void> {
    "use server";

    const author = formData.get("author") as string;
    const text = formData.get("text") as string;

    if (!author || !text) {
      throw new Error("Author and text are required");
    }
    try {
      await api<Message>(`/api/chats/${chatId}/send-message`, {
        method: "POST",
        body: JSON.stringify({ author, text }),
      });

      revalidatePath(`/chat/${chatId}`);
    } catch (error) {
      console.error("Failed to send message:", error);
      throw new Error("Failed to send message");
    }
  }

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Chat Messages</h1>
      <div className="space-y-2">
        {messages.map((message) => (
          <div key={message.id} className="bg-gray-100 p-2 rounded-lg">
            <p className="font-bold">{message.author}</p>
            <p>{message.text}</p>
            <p className="text-sm text-gray-500">
              {new Date(message.timestamp).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
      <form action={sendMessage} className="mt-4">
        <div className="flex space-x-2">
          <input
            type="text"
            name="author"
            placeholder="Your name"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
