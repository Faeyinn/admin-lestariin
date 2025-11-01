# TODO: Integrasi API untuk Login Admin dan Chatbot

## Tasks
- [x] Update src/components/login/LoginCard.tsx: Ganti handleLogin untuk fetch POST ke https://06084014a5bc.ngrok-free.app/api/admin/login/, simpan access_token di localStorage jika sukses, handle error dengan Swal.
- [x] Update src/components/chatbot/ChatInterface.tsx: Ganti handleSend untuk fetch POST ke https://06084014a5bc.ngrok-free.app/api/chatbot/ dengan Authorization: Bearer <token>, tampilkan response sebagai pesan bot, handle error.
- [x] Tambahkan loading states dan error handling.
- [x] Test integrasi dengan menjalankan dev server dan mencoba login serta chatbot.
- [x] Pastikan API backend berjalan di https://06084014a5bc.ngrok-free.app.
- [x] Buat file konfigurasi API di src/utils/apiConfig.ts untuk memudahkan penggantian endpoint.
- [x] Tambahkan auth guard di ChatbotPage untuk redirect ke login jika tidak authenticated.
- [x] Perbaiki error handling chatbot dengan lebih baik (403 forbidden, dll).
- [x] Tambahkan logging untuk debug token dan response.
