/**
 * API Configuration
 * Centralized API settings and base configuration
 */

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
};

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH_LOGIN: '/auth/login',
  AUTH_SIGNUP: '/auth/signup',
  AUTH_LOGOUT: '/auth/logout',
  AUTH_REFRESH: '/auth/refresh',

  // Users
  USERS: '/users',
  USER_PROFILE: '/users/profile',
  USER_UPDATE: '/users/update',

  // Lessons
  LESSONS: '/lessons',
  LESSON_DETAIL: '/lessons/:id',
  LESSONS_BY_LEVEL: '/lessons/level/:level',
  DAILY_LESSON: '/lessons/daily/:userId',

  // Quiz
  QUIZ: '/quiz',
  QUIZ_SUBMIT: '/quiz/submit',
  QUIZ_RESULTS: '/quiz/results/:id',

  // Progress
  PROGRESS: '/progress',
  PROGRESS_BY_USER: '/progress/:userId',
  PROGRESS_STATS: '/progress/:userId/stats',

  // Vocabulary
  VOCABULARY: '/vocabulary',
  VOCABULARY_BY_LESSON: '/vocabulary/lesson/:lessonId',
};

// Response status mapping
export const RESPONSE_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
  PENDING: 'pending',
};

// Error messages mapping
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNAUTHORIZED: 'Unauthorized. Please login again.',
  FORBIDDEN: 'You do not have permission to access this resource.',
  NOT_FOUND: 'Resource not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  TIMEOUT: 'Request timeout. Please try again.',
};
