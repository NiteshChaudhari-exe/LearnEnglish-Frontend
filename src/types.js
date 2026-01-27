/**
 * JSDoc Type Definitions for Better IDE Support and Type Safety
 * Provides type hints without requiring TypeScript compilation
 */

/**
 * @typedef {Object} User
 * @property {string} id - Unique user identifier
 * @property {string} username - User's username
 * @property {string} email - User's email address
 * @property {string} [native_language] - User's native language code
 * @property {Date} [created_at] - Account creation timestamp
 */

/**
 * @typedef {Object} Lesson
 * @property {string} id - Unique lesson identifier
 * @property {string} title - Lesson title
 * @property {string} description - Lesson description
 * @property {string} level - Difficulty level (A1, A2, B1, B2)
 * @property {string} type - Lesson type (vocabulary, grammar, reading, etc.)
 * @property {string} content - Lesson content/body
 * @property {Quiz[]} [quizzes] - Associated quizzes
 * @property {Vocabulary[]} [vocabulary] - Associated vocabulary items
 */

/**
 * @typedef {Object} Quiz
 * @property {string} id - Unique quiz identifier
 * @property {string} lessonId - Associated lesson ID
 * @property {string} question - Question text
 * @property {string} type - Quiz type (multiple_choice, true_false, fill_in_blank, match)
 * @property {string[]} options - Answer options
 * @property {string} correct_answer - Correct answer
 * @property {number} [points] - Points awarded for correct answer
 */

/**
 * @typedef {Object} Vocabulary
 * @property {string} id - Unique vocabulary identifier
 * @property {string} lessonId - Associated lesson ID
 * @property {string} word - English word
 * @property {string} pronunciation - Word pronunciation
 * @property {string} definition - Word definition
 * @property {string} [example] - Example usage
 * @property {string} [translation] - Translation to native language
 */

/**
 * @typedef {Object} Progress
 * @property {string} userId - User ID
 * @property {number} total_lessons - Total lessons completed
 * @property {number} current_level - Current proficiency level
 * @property {number} total_points - Total points earned
 * @property {Object} lesson_progress - Progress per lesson
 * @property {Date} [last_active] - Last activity timestamp
 */

/**
 * @typedef {Object} UserProfile
 * @property {string} userId - User identifier
 * @property {string} username - Username
 * @property {string} email - Email address
 * @property {string} native_language - Native language code
 * @property {string} current_level - Current learning level
 * @property {number} total_lessons_completed - Count of completed lessons
 * @property {number} total_points - Total points earned
 * @property {Date} member_since - Account creation date
 */

/**
 * @typedef {Object} StoreState
 * @property {User|null} user - Current authenticated user
 * @property {UserProfile|null} profile - User profile details
 * @property {boolean} loading - Loading state
 * @property {string|null} error - Error message if any
 * @property {boolean} showNepali - Language preference (true = Nepali, false = English)
 * @property {boolean} toastNotifications - Notification preference
 * @property {Lesson[]} lessons - List of lessons
 * @property {Lesson|null} currentLesson - Currently selected lesson
 * @property {Lesson|null} dailyLesson - Daily lesson assignment
 * @property {Progress|null} progress - User progress data
 * @property {Vocabulary[]} vocabulary - Vocabulary list
 */

/**
 * @typedef {Object} ApiResponse
 * @property {string} status - Response status (success, error, pending)
 * @property {*} data - Response data
 * @property {string} [message] - Response message
 * @property {Object} [meta] - Additional metadata
 */

/**
 * @typedef {Object} ApiError
 * @property {number} status - HTTP status code
 * @property {string} message - Error message
 * @property {string} [code] - Error code
 * @property {Object} [details] - Additional error details
 */

// Export types for use in JSDoc comments throughout the app
export {};
