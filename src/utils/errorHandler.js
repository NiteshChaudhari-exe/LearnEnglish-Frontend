/**
 * API Error handling utilities
 * Provides consistent error handling across the application
 */

const ERROR_MESSAGES = {
  401: 'Unauthorized. Please log in again.',
  403: 'Access forbidden.',
  404: 'Resource not found.',
  500: 'Server error. Please try again later.',
  503: 'Service unavailable. Please try again later.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  TIMEOUT: 'Request timeout. Please try again.',
  DEFAULT: 'An error occurred. Please try again.'
};

/**
 * Get user-friendly error message from various error sources
 */
export function getErrorMessage(error) {
  // Axios error response
  if (error?.response?.status) {
    return ERROR_MESSAGES[error.response.status] || error.response.data?.message || ERROR_MESSAGES.DEFAULT;
  }

  // Network error
  if (error?.message === 'Network Error') {
    return ERROR_MESSAGES.NETWORK_ERROR;
  }

  // Timeout error
  if (error?.code === 'ECONNABORTED') {
    return ERROR_MESSAGES.TIMEOUT;
  }

  // Custom error message
  if (error?.message) {
    return error.message;
  }

  return ERROR_MESSAGES.DEFAULT;
}

/**
 * Retry logic with exponential backoff
 */
export async function retryWithBackoff(fn, maxRetries = 3, delay = 1000) {
  let lastError;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      
      // Don't retry on 4xx errors (client errors)
      if (error?.response?.status >= 400 && error?.response?.status < 500) {
        throw error;
      }

      // Wait before retrying with exponential backoff
      if (i < maxRetries - 1) {
        const waitTime = delay * Math.pow(2, i);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }

  throw lastError;
}

/**
 * Validate API response
 */
export function validateResponse(response) {
  if (!response) {
    throw new Error('Empty response from server');
  }

  if (typeof response !== 'object') {
    throw new Error('Invalid response format');
  }

  return response;
}

/**
 * Handle and log errors consistently
 */
export function handleApiError(error, context = '') {
  const message = getErrorMessage(error);
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context}] API Error:`, {
      message,
      status: error?.response?.status,
      data: error?.response?.data,
      originalError: error
    });
  }

  return message;
}
