// API Configuration
export const API_BASE_URL = 'https://6839d2caeb60.ngrok-free.app/';

// Gemini API Configuration
export const GEMINI_API_KEY = 'AIzaSyC94uxPEVP-YTthUIafedlZ6uqUZ_NhUOY';
export const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent';

// API Endpoints
export const API_ENDPOINTS = {
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login/`,
  TOKEN_REFRESH: `${API_BASE_URL}/api/token/refresh/`,
  CHATBOT: `${API_BASE_URL}/api/chatbot/`,
  REPORTS_ALL: `${API_BASE_URL}/api/accounts/reports/all/`,
  REPORTS_USER: `${API_BASE_URL}/api/accounts/reports/user`,
};
