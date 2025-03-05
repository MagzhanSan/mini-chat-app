import Link from "next/link";
import { api } from "@/app/lib/api";

export default async function ChatList() {
  const chats = await api<{ id: number; title: string }[]>("/api/chats");

  return (
    <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link
              href={`/?chatId=${chat.id}`} // Передаем chatId через URL
              className="mb-2 p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer block"
            >
              <h3 className="font-semibold">{chat.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
