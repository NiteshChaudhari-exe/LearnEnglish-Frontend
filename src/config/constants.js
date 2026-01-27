/**
 * Application Constants
 * Centralized place for all app-wide constants
 */

// API Related
export const API_TIMEOUT = 30000; // 30 seconds
export const API_RETRY_ATTEMPTS = 3;
export const API_RETRY_DELAY = 1000; // 1 second

// User Levels
export const USER_LEVELS = {
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
};

// Lesson Types
export const LESSON_TYPES = {
  VOCABULARY: 'vocabulary',
  GRAMMAR: 'grammar',
  READING: 'reading',
  LISTENING: 'listening',
  SPEAKING: 'speaking',
};

// Quiz Types
export const QUIZ_TYPES = {
  MULTIPLE_CHOICE: 'multiple_choice',
  TRUE_FALSE: 'true_false',
  FILL_IN_BLANK: 'fill_in_blank',
  MATCH: 'match',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  USER_ID: 'userId',
  AUTH_TOKEN: 'authToken',
  SHOW_NEPALI: 'showNepali',
  DARK_MODE: 'darkMode',
  LAST_LESSON: 'lastLesson',
  USER_PREFERENCES: 'userPreferences',
};

// Session Timeouts (in ms)
export const SESSION_CONFIG = {
  TIMEOUT: 3600000, // 1 hour
  WARNING: 300000, // 5 minutes before timeout
};

// UI Constants
export const UI = {
  TOAST_DURATION: 3000,
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 500,
};

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  LESSONS: '/lessons',
  VOCABULARY: '/vocabulary',
  PROGRESS: '/progress',
};
