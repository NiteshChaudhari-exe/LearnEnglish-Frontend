import { create } from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const useStore = create((set, get) => ({
  // User state
  user: null,
  loading: false,
  error: null,
  showNepali: localStorage.getItem('showNepali') === 'true' || true, // Default to Nepali (primary)
  toastNotifications: true,

  // Toggle language preference
  toggleLanguage: () => {
    const newValue = !get().showNepali;
    localStorage.setItem('showNepali', newValue);
    set({ showNepali: newValue });
  },

  // Set language preference
  setLanguage: (showNepali) => {
    localStorage.setItem('showNepali', showNepali);
    set({ showNepali });
  },

  // Get current language code
  getCurrentLanguage: () => get().showNepali ? 'ne' : 'en',
  createUser: async (username, email, password, native_language = 'en') => {
    set({ loading: true });
    try {
      const response = await axios.post(`${API_URL}/users`, {
        username,
        email,
        password,
        native_language
      });
      set({ user: response.data, loading: false });
      localStorage.setItem('userId', response.data.id);
      return response.data;
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to create user', loading: false });
      throw error;
    }
  },

  // Load user from localStorage
  loadUser: () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      set({ user: { id: userId } });
    }
  },

  // Logout
  logout: () => {
    set({ user: null });
    localStorage.removeItem('userId');
  },

  // Fetch lessons
  lessons: [],
  fetchLessons: async (level = 'A1') => {
    set({ loading: true });
    try {
      const response = await axios.get(`${API_URL}/lessons`, { params: { level } });
      set({ lessons: response.data, loading: false });
      return response.data;
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to fetch lessons', loading: false });
      throw error;
    }
  },

  // Fetch single lesson
  currentLesson: null,
  fetchLesson: async (lessonId) => {
    set({ loading: true });
    try {
      const response = await axios.get(`${API_URL}/lessons/${lessonId}`);
      set({ currentLesson: response.data, loading: false });
      return response.data;
    } catch (error) {
      set({ error: error.response?.data?.error || 'Failed to fetch lesson', loading: false });
      throw error;
    }
  },

  // Get daily lesson
  dailyLesson: null,
  fetchDailyLesson: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/lessons/daily/${userId}`);
      set({ dailyLesson: response.data });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch daily lesson:', error);
      throw error;
    }
  },

  // Mark lesson complete
  completeLesson: async (lessonId, score = 0) => {
    const userId = get().user?.id;
    if (!userId) throw new Error('User not authenticated');

    try {
      const response = await axios.post(`${API_URL}/progress/lesson/${lessonId}/complete`, {
        userId,
        score
      });
      return response.data;
    } catch (error) {
      set({ error: 'Failed to complete lesson' });
      throw error;
    }
  },

  // Submit quiz answer
  submitAnswer: async (quizId, userAnswer) => {
    try {
      const response = await axios.post(`${API_URL}/quizzes/${quizId}/answer`, {
        userAnswer
      });
      return response.data;
    } catch (error) {
      set({ error: 'Failed to submit answer' });
      throw error;
    }
  },

  // Get user profile
  profile: null,
  fetchProfile: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/users/${userId}/profile`);
      set({ profile: response.data });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      throw error;
    }
  },

  // Get user progress
  progress: null,
  fetchProgress: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/progress/${userId}`);
      set({ progress: response.data });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch progress:', error);
      throw error;
    }
  },

  // Fetch vocabulary
  vocabulary: [],
  fetchVocabulary: async (lessonId = null) => {
    try {
      const params = lessonId ? { lessonId } : {};
      const response = await axios.get(`${API_URL}/vocabulary`, { params });
      set({ vocabulary: response.data });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch vocabulary:', error);
      throw error;
    }
  },

  // Search vocabulary
  searchVocabulary: async (term) => {
    try {
      const response = await axios.get(`${API_URL}/vocabulary/search/${term}`);
      return response.data;
    } catch (error) {
      console.error('Failed to search vocabulary:', error);
      throw error;
    }
  },

  // Clear error
  clearError: () => set({ error: null })
}));
