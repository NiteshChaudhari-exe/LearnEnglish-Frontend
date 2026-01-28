/**
 * Modern UI Design System Configuration
 * Centralized design tokens for consistency across the app
 */

export const DESIGN_SYSTEM = {
  // Color Palette
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c3d66',
    },
    accent: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
  },

  // Typography
  typography: {
    fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', sans-serif",
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Spacing Scale
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
  },

  // Border Radius
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.25rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    none: 'none',
    soft: '0 2px 8px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.1)',
    card: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    elevation: '0 10px 40px rgba(0, 0, 0, 0.12)',
  },

  // Transitions
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Button Styles
  buttons: {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-soft hover:shadow-medium',
    secondary: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-soft hover:shadow-medium',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-soft hover:shadow-medium',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
  },

  // Breakpoints
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index Scale
  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    backdrop: 1300,
    offcanvas: 1400,
    modal: 1500,
    popover: 1600,
    tooltip: 1700,
  },

  // Animation
  animations: {
    fadeIn: 'fadeIn 0.3s ease-in-out',
    slideUp: 'slideUp 0.4s ease-out',
    slideDown: 'slideDown 0.4s ease-out',
    slideLeft: 'slideLeft 0.4s ease-out',
    slideRight: 'slideRight 0.4s ease-out',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 2s infinite',
  },
};

// Utility function to get color by variant
export function getColorClass(variant) {
  const colors = {
    primary: 'primary-500',
    secondary: 'gray-500',
    success: 'emerald-500',
    warning: 'amber-500',
    danger: 'red-500',
    info: 'primary-500',
  };
  return colors[variant] || colors.primary;
}

// Utility function to get button classes
export function getButtonClasses(variant = 'primary', size = 'md') {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-soft hover:shadow-medium',
    secondary: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 shadow-soft',
    danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 shadow-soft',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm min-h-[36px]',
    md: 'px-4 py-2 text-base min-h-[44px]',
    lg: 'px-6 py-3 text-lg min-h-[50px]',
    xl: 'px-8 py-4 text-xl min-h-[56px]',
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
}

// Utility function for card styling
export function getCardClasses(hoverable = false) {
  const baseClasses = 'bg-white dark:bg-gray-900 rounded-2xl shadow-card border border-gray-100 dark:border-gray-800 transition-all';
  const hoverClasses = hoverable ? 'hover:shadow-elevation hover:translate-y-[-2px] cursor-pointer' : '';
  return `${baseClasses} ${hoverClasses}`;
}

// Utility function for input styling
export function getInputClasses(error = false) {
  const baseClasses = 'w-full px-4 py-3 rounded-lg border-2 transition-all outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50';
  const normalBorder = 'border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20';
  const errorBorder = 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20';

  return `${baseClasses} ${error ? errorBorder : normalBorder}`;
}
