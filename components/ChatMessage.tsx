import { Message } from '@/types';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-white text-[#2d5a27]'
            : 'bg-white/20 text-white'
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}
