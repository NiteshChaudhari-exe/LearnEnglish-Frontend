/**
 * Environment Variables Validation
 * Ensures required environment variables are set at runtime
 */

const requiredEnvVars = ['VITE_API_URL'];
const optionalEnvVars = [
  'VITE_APP_TITLE',
  'VITE_APP_VERSION',
  'VITE_ENABLE_LOGGING',
  'VITE_SESSION_TIMEOUT',
];

/**
 * Validates that all required environment variables are set
 * @throws {Error} If required environment variables are missing
 */
export function validateEnvironment() {
  const missing = requiredEnvVars.filter((varName) => !import.meta.env[varName]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

/**
 * Get environment variable with fallback
 * @param {string} varName - Variable name
 * @param {*} defaultValue - Default value if not set
 * @returns {*} Environment variable value or default
 */
export function getEnvVar(varName, defaultValue = null) {
  return import.meta.env[varName] ?? defaultValue;
}

/**
 * Check if running in development mode
 */
export const isDevelopment = import.meta.env.DEV;

/**
 * Check if running in production mode
 */
export const isProduction = import.meta.env.PROD;

// Validate on module load
if (isProduction) {
  validateEnvironment();
}
