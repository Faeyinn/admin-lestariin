/**
 * Authentication utility functions
 * Mengelola status autentikasi user menggunakan localStorage
 */

const AUTH_KEY = 'isAuthenticated';
const AUTH_TIMESTAMP_KEY = 'authTimestamp';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 jam dalam milliseconds

/**
 * Cek apakah user sudah login
 */
export const isAuthenticated = (): boolean => {
  const authStatus = localStorage.getItem(AUTH_KEY);
  const timestamp = localStorage.getItem(AUTH_TIMESTAMP_KEY);
  
  if (!authStatus || authStatus !== 'true') {
    return false;
  }
  
  // Cek apakah session masih valid (belum expired)
  if (timestamp) {
    const loginTime = parseInt(timestamp, 10);
    const currentTime = Date.now();
    const timeDiff = currentTime - loginTime;
    
    if (timeDiff > SESSION_DURATION) {
      // Session expired, hapus data autentikasi
      logout();
      return false;
    }
  }
  
  return true;
};

/**
 * Set status login user
 */
export const login = (): void => {
  localStorage.setItem(AUTH_KEY, 'true');
  localStorage.setItem(AUTH_TIMESTAMP_KEY, Date.now().toString());
};

/**
 * Hapus status login user
 */
export const logout = (): void => {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(AUTH_TIMESTAMP_KEY);
};

/**
 * Refresh session timestamp (perpanjang session)
 */
export const refreshSession = (): void => {
  if (isAuthenticated()) {
    localStorage.setItem(AUTH_TIMESTAMP_KEY, Date.now().toString());
  }
};
