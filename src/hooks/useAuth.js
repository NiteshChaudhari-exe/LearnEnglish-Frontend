import { useEffect, useState } from 'react';
import { useStore } from '../store';

/**
 * Custom hook for authentication logic
 * Handles user login/signup, loading, and error states
 */
export function useAuth() {
  const { user, loading, error, createUser, loadUser, logout, clearError } = useStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    setIsAuthenticated(!!user?.id);
  }, [user?.id]);

  return {
    user,
    isAuthenticated,
    loading,
    error,
    createUser,
    logout,
    clearError,
    loadUser
  };
}
