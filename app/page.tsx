import ChatList from "@/app/components/chat-list";
import ChatWindow from "@/app/components/chat-window";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ chatId?: string }>;
}) {
  const params = await searchParams;
  const parsedChatId = params.chatId ? Number(params.chatId) : null;

  return (
    <div className="flex h-screen">
      <ChatList />

      <div className="flex-1">
        {parsedChatId ? (
          <ChatWindow chatId={parsedChatId} />
        ) : (
          <div className="p-4">Select a chat to view messages</div>
        )}
      </div>
    </div>
  );
}
