import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * ProtectedRoute Component
 * Melindungi route yang memerlukan autentikasi
 * Jika user belum login, redirect ke halaman login
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    // User belum login, redirect ke halaman login
    return <Navigate to="/login" replace />;
  }

  // User sudah login, tampilkan halaman yang diminta
  return <>{children}</>;
};

export default ProtectedRoute;
