import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { getErrorMessage, handleApiError } from './utils/errorHandler';
import { STORAGE_KEYS, API_CONFIG } from './config';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Zustand store with persistence middleware
 * Automatically persists user preferences and auth state
 */
export const useStore = create(
  persist(
    (set, get) => ({
      // User state
      user: null,
      loading: false,
      error: null,
      showNepali: true,
      toastNotifications: true,

      // Toggle language preference
      toggleLanguage: () => {
        const newValue = !get().showNepali;
        set({ showNepali: newValue });
      },

      // Set language preference
      setLanguage: (showNepali) => {
        set({ showNepali });
      },

      // Get current language code
      getCurrentLanguage: () => (get().showNepali ? 'ne' : 'en'),

      // Create user
      createUser: async (username, email, password, native_language = 'en') => {
        set({ loading: true, error: null });
        try {
          const response = await axios.post(`${API_URL}/users`, {
            username,
            email,
            password,
            native_language,
          });
          set({ user: response.data, loading: false });
          localStorage.setItem(STORAGE_KEYS.USER_ID, response.data.id);
          return response.data;
        } catch (error) {
          const errorMessage = getErrorMessage(error);
          set({ error: errorMessage, loading: false });
          handleApiError(error, 'CREATE_USER');
          throw error;
        }
      },

      // Load user from localStorage
      loadUser: () => {
        const userId = localStorage.getItem(STORAGE_KEYS.USER_ID);
        if (userId) {
          set({ user: { id: userId } });
        }
      },

      // Logout
      logout: () => {
        set({ user: null, profile: null, progress: null });
        localStorage.removeItem(STORAGE_KEYS.USER_ID);
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      },

      // Fetch lessons
      lessons: [],
      fetchLessons: async (level = 'A1') => {
        set({ loading: true, error: null });
        try {
          const response = await axios.get(`${API_URL}/lessons`, { params: { level } });
          set({ lessons: response.data, loading: false });
          return response.data;
        } catch (error) {
          const errorMessage = getErrorMessage(error);
          set({ error: errorMessage, loading: false });
          handleApiError(error, 'FETCH_LESSONS');
          throw error;
        }
      },

      // Fetch single lesson
      currentLesson: null,
      fetchLesson: async (lessonId) => {
        set({ loading: true, error: null });
        try {
          const response = await axios.get(`${API_URL}/lessons/${lessonId}`);
          set({ currentLesson: response.data, loading: false });
          return response.data;
        } catch (error) {
          const errorMessage = getErrorMessage(error);
          set({ error: errorMessage, loading: false });
          handleApiError(error, 'FETCH_LESSON');
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
        if (!userId) {
          const error = new Error('User not authenticated');
          set({ error: error.message });
          throw error;
        }

        try {
          const response = await axios.post(`${API_URL}/progress/lesson/${lessonId}/complete`, {
            userId,
            score,
          });
          return response.data;
        } catch (error) {
          const errorMessage = getErrorMessage(error);
          set({ error: errorMessage });
          handleApiError(error, 'COMPLETE_LESSON');
          throw error;
        }
      },

      // Submit quiz answer
      submitAnswer: async (quizId, userAnswer) => {
        try {
          const response = await axios.post(`${API_URL}/quizzes/${quizId}/answer`, {
            userAnswer,
          });
          return response.data;
        } catch (error) {
          const errorMessage = getErrorMessage(error);
          set({ error: errorMessage });
          handleApiError(error, 'SUBMIT_ANSWER');
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
      clearError: () => set({ error: null }),
    }),
    {
      name: 'english-learn-store',
      partialize: (state) => ({
        showNepali: state.showNepali,
        user: state.user,
        toastNotifications: state.toastNotifications,
      }),
    }
  )
);

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
    if (!userId) {
      const error = new Error('User not authenticated');
      set({ error: error.message });
      throw error;
    }

    try {
      const response = await axios.post(`${API_URL}/progress/lesson/${lessonId}/complete`, {
        userId,
        score
      });
      return response.data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      set({ error: errorMessage });
      handleApiError(error, 'COMPLETE_LESSON');
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
      const errorMessage = getErrorMessage(error);
      set({ error: errorMessage });
      handleApiError(error, 'SUBMIT_ANSWER');
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
