import { Chat, Message } from "@/app/types/chat";

const chats: Chat[] = [
  { id: 1, title: "General Chat" },
  { id: 2, title: "Tech Talk" },
  { id: 3, title: "Random" },
];

const messages: Message[] = [
  {
    id: 1,
    chatId: 1,
    author: "Alice",
    text: "Hello!",
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    chatId: 1,
    author: "Bob",
    text: "Hi there!",
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    chatId: 2,
    author: "Charlie",
    text: "Hey, anyone here?",
    timestamp: new Date().toISOString(),
  },
];

export { chats, messages };
