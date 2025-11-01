import React, { useState } from 'react';
import Swal from 'sweetalert2';
import IconSrc from '@/assets/icon.png';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';
import { API_ENDPOINTS } from '@/utils/apiConfig';

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
  const [isLoading, setIsLoading] = useState(false);

  const refreshToken = async (): Promise<string | null> => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) return null;

    try {
      const response = await fetch(API_ENDPOINTS.TOKEN_REFRESH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh: refreshToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('access_token', data.access);
        return data.access;
      } else {
        console.log('Token refresh failed:', data);
        return null;
      }
    } catch (error) {
      console.error('Token refresh error:', error);
      return null;
    }
  };

  const handleSend = async (text: string) => {
    // 1. Tambahkan pesan user
    const userMessage: Message = {
      id: Date.now(),
      text: text,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    try {
      const token = localStorage.getItem('access_token');
      const isAuthenticated = localStorage.getItem('isAuthenticated');

      console.log('Token from localStorage:', token);
      console.log('Is authenticated:', isAuthenticated);

      if (!token || !isAuthenticated) {
        Swal.fire({
          icon: 'error',
          title: 'Authentication Error',
          text: 'Please login first to use the chatbot.',
          confirmButtonColor: '#0f766e'
        });
        setIsLoading(false);
        return;
      }

      console.log('Sending request to:', API_ENDPOINTS.CHATBOT);
      console.log('Request headers:', {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      });
      console.log('Request body:', { message: text });

      const response = await fetch(API_ENDPOINTS.CHATBOT, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        // Tambahkan pesan bot dari API
        const botMessage: Message = {
          id: Date.now() + 1,
          text: data.response || data.message || 'Maaf, saya tidak dapat memproses pesan Anda saat ini.',
          sender: 'bot',
        };
        setMessages((prev) => [...prev, botMessage]);
      } else if (response.status === 401) {
        // Token invalid atau expired, coba refresh
        console.log('Token expired or invalid, attempting refresh');
        const newToken = await refreshToken();
        if (newToken) {
          // Retry request dengan token baru
          const retryResponse = await fetch(API_ENDPOINTS.CHATBOT, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${newToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message: text,
            }),
          });

          const retryData = await retryResponse.json();

          if (retryResponse.ok) {
            const botMessage: Message = {
              id: Date.now() + 1,
              text: retryData.response || retryData.message || 'Maaf, saya tidak dapat memproses pesan Anda saat ini.',
              sender: 'bot',
            };
            setMessages((prev) => [...prev, botMessage]);
          } else {
            // Refresh berhasil tapi retry gagal
            console.log('Retry failed after refresh');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('isAuthenticated');
            const botMessage: Message = {
              id: Date.now() + 1,
              text: 'Sesi login Anda telah berakhir. Silakan login kembali.',
              sender: 'bot',
            };
            setMessages((prev) => [...prev, botMessage]);
          }
        } else {
          // Refresh gagal
          console.log('Token refresh failed, clearing localStorage');
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('isAuthenticated');
          const botMessage: Message = {
            id: Date.now() + 1,
            text: 'Sesi login Anda telah berakhir. Silakan login kembali.',
            sender: 'bot',
          };
          setMessages((prev) => [...prev, botMessage]);
        }
      } else if (response.status === 403) {
        // Forbidden - mungkin token tidak memiliki permission
        console.log('Forbidden access, token might not have permission');
        const botMessage: Message = {
          id: Date.now() + 1,
          text: 'Anda tidak memiliki izin untuk mengakses fitur ini.',
          sender: 'bot',
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        // Handle API error lainnya
        const errorMessage = data.detail || data.message || 'Terjadi kesalahan saat memproses pesan.';
        const botMessage: Message = {
          id: Date.now() + 1,
          text: `Maaf, ${errorMessage}`,
          sender: 'bot',
        };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: 'Maaf, terjadi kesalahan koneksi. Silakan coba lagi.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
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
      <ChatInput onSend={handleSend} disabled={isLoading} />
    </div>
  );
};

export default ChatInterface;