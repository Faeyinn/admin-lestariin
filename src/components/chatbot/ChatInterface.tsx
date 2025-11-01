import React, { useState } from 'react';
import IconSrc from '@/assets/icon.png';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';

// Definisikan tipe untuk pesan
export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

// Data dummy awal
const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Halo Tuan, ada yang bisa Toto bantu hari ini?',
    sender: 'bot',
  },
  {
    id: 2,
    text: 'Tolong berikan ringkasan laporan sampah di Padang.',
    sender: 'user',
  },
  {
    id: 3,
    text: 'Tentu, Tuan. Terdapat 150 laporan sampah. 80 telah diverifikasi, 50 menunggu, dan 20 ditolak. Apakah Tuan ingin melihat detailnya?',
    sender: 'bot',
  },
];

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSend = (text: string) => {
    // 1. Tambahkan pesan user
    const userMessage: Message = {
      id: Date.now(),
      text: text,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);

    // 2. Simulasi jawaban bot
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: 'Ini adalah jawaban otomatis dari bot. Fitur ini sedang dalam pengembangan.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header Internal Chat (Sesuai Desain) */}
      <div className="flex items-center gap-3 p-4 bg-green-700 rounded-t-2xl">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <img src={IconSrc} alt="Lestari.in" className="w-8 h-8 object-contain" />
        </div>
        <span className="text-xl font-bold text-white">Lestar.in</span>
      </div>

      {/* Badan Chat (Bisa di-scroll) */}
      <ChatBody messages={messages} />

      {/* Input Chat */}
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatInterface;