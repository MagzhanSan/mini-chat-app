export interface Chat {
  id: number;
  title: string;
}

export interface Message {
  id: number;
  chatId: number;
  author: string;
  text: string;
  timestamp: string;
}
