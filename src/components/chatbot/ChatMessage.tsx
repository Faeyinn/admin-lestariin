import React from 'react';
import { User } from 'lucide-react';
import IconSrc from '@/assets/icon.png';
import { type Message } from '@/components/chatbot/ChatInterface';

interface ChatMessageProps {
  message: Message;
  delay?: number;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, delay = 0 }) => {
  const isUser = message.sender === 'user';

  return (
    <div
      className={`flex items-end gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="500"
    >
      {/* Avatar Bot */}
      {!isUser && (
        <div className="shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
          <img src={IconSrc} alt="Bot" className="w-8 h-8 object-contain" />
        </div>
      )}

      {/* Gelembung Pesan */}
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${
          isUser
            ? 'bg-white border border-gray-300 rounded-br-none'
            : 'bg-green-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message.text}</p>
      </div>

      {/* Avatar User */}
      {isUser && (
        <div className="shrink-0 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border border-gray-300">
          <User size={20} className="text-gray-600" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;