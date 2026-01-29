/**
 * 2030 Modern Design System
 * AI-First, Glassmorphism, Neumorphism, Micro-interactions, Accessibility
 */

export const DESIGN_SYSTEM_2030 = {
  // ===== FUTURISTIC COLOR PALETTE =====
  colors: {
    // Primary - Vibrant & Dynamic
    primary: {
      50: '#f0f4ff',
      100: '#e0e8ff',
      200: '#c1d3ff',
      300: '#a2beff',
      400: '#7399ff',
      500: '#5975ff', // Main primary
      600: '#4052e6',
      700: '#2d36b3',
      800: '#1a1f80',
      900: '#0d0f4d',
      glow: 'rgba(89, 117, 255, 0.3)',
    },
    // Accent - AI/Tech Feel
    accent: {
      50: '#f0faff',
      100: '#e0f7ff',
      200: '#b8ecff',
      300: '#7dd9ff',
      400: '#35c5ff',
      500: '#00b4ff', // Cyan/Electric blue
      600: '#0099dd',
      700: '#0073b3',
      800: '#004d80',
      900: '#002a4d',
      glow: 'rgba(0, 180, 255, 0.3)',
    },
    // Gradient colors
    gradients: {
      primary: 'linear-gradient(135deg, #5975ff 0%, #00b4ff 100%)',
      secondary: 'linear-gradient(135deg, #a855f7 0%, #00b4ff 100%)',
      success: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      warning: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      danger: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
      sunset: 'linear-gradient(135deg, #ff6b6b 0%, #ffa94d 100%)',
      ocean: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    },
    // Semantic
    success: {
      50: '#f0fdf4',
      500: '#10b981',
      600: '#059669',
      900: '#064e3b',
      glow: 'rgba(16, 185, 129, 0.3)',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706',
      900: '#78350f',
      glow: 'rgba(245, 158, 11, 0.3)',
    },
    danger: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626',
      900: '#7f1d1d',
      glow: 'rgba(239, 68, 68, 0.3)',
    },
    // Neutral - Professional & Clean
    neutral: {
      0: '#ffffff',
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    // Dark mode specific
    dark: {
      bg: '#0a0e27',
      surface: '#141829',
      surface2: '#1f2647',
      border: '#2a3555',
      text: '#e5e7eb',
    },
  },

  // ===== MODERN TYPOGRAPHY =====
  typography: {
    fontFamily: {
      display: '"Inter Display", "Inter", -apple-system, sans-serif',
      body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: '"Fira Code", "Courier New", monospace',
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontSize: {
      xs: { size: '0.75rem', lineHeight: '1rem' },
      sm: { size: '0.875rem', lineHeight: '1.25rem' },
      base: { size: '1rem', lineHeight: '1.5rem' },
      lg: { size: '1.125rem', lineHeight: '1.75rem' },
      xl: { size: '1.25rem', lineHeight: '1.75rem' },
      '2xl': { size: '1.5rem', lineHeight: '2rem' },
      '3xl': { size: '1.875rem', lineHeight: '2.25rem' },
      '4xl': { size: '2.25rem', lineHeight: '2.5rem' },
      '5xl': { size: '3rem', lineHeight: '3.5rem' },
      '6xl': { size: '3.75rem', lineHeight: '4.5rem' },
    },
  },

  // ===== SPACING SYSTEM =====
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    '4xl': '4rem',
    '5xl': '6rem',
  },

  // ===== ADVANCED SHADOWS & GLASSMORPHISM =====
  shadows: {
    // Subtle shadows
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    base: '0 4px 12px rgba(0, 0, 0, 0.08)',
    md: '0 8px 20px rgba(0, 0, 0, 0.12)',
    lg: '0 12px 32px rgba(0, 0, 0, 0.15)',
    xl: '0 20px 48px rgba(0, 0, 0, 0.18)',
    '2xl': '0 28px 64px rgba(0, 0, 0, 0.2)',
    // Glowing shadows
    glowPrimary: '0 0 20px rgba(89, 117, 255, 0.3)',
    glowAccent: '0 0 20px rgba(0, 180, 255, 0.3)',
    glowSuccess: '0 0 20px rgba(16, 185, 129, 0.3)',
    // Neumorphic
    neumorphic: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)',
    neumorphicDark: '6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.1)',
    // Glassmorphism
    glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
    glassDark: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },

  // ===== BORDER RADIUS =====
  borderRadius: {
    none: '0',
    xs: '0.25rem',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },

  // ===== TRANSITIONS & ANIMATIONS =====
  transitions: {
    fast: 'all 0.15s cubic-bezier(0.4, 0, 1, 1)',
    base: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    elastic: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  animations: {
    // Entrance animations
    fadeIn: 'fadeIn 0.4s ease-in-out',
    slideUp: 'slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    slideDown: 'slideDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    slideLeft: 'slideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    slideRight: 'slideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    scaleIn: 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    // Continuous animations
    pulseSoft: 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 2s infinite',
    float: 'float 3s ease-in-out infinite',
    shimmer: 'shimmer 2s infinite',
    glow: 'glow 2s ease-in-out infinite',
    // Interactive
    wiggle: 'wiggle 0.6s ease-in-out',
    flip: 'flip 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },

  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    slideUp: {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    slideDown: {
      '0%': { transform: 'translateY(-20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    slideLeft: {
      '0%': { transform: 'translateX(20px)', opacity: '0' },
      '100%': { transform: 'translateX(0)', opacity: '1' },
    },
    slideRight: {
      '0%': { transform: 'translateX(-20px)', opacity: '0' },
      '100%': { transform: 'translateX(0)', opacity: '1' },
    },
    scaleIn: {
      '0%': { transform: 'scale(0.95)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' },
    },
    pulseSoft: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.7' },
    },
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
    bounce: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-8px)' },
    },
    shimmer: {
      '0%': { backgroundPosition: '-1000px 0' },
      '100%': { backgroundPosition: '1000px 0' },
    },
    glow: {
      '0%, 100%': { boxShadow: '0 0 20px rgba(89, 117, 255, 0.2)' },
      '50%': { boxShadow: '0 0 30px rgba(89, 117, 255, 0.4)' },
    },
    wiggle: {
      '0%, 100%': { transform: 'rotate(0deg)' },
      '25%': { transform: 'rotate(-2deg)' },
      '75%': { transform: 'rotate(2deg)' },
    },
    flip: {
      '0%': { transform: 'rotateY(0deg)' },
      '100%': { transform: 'rotateY(360deg)' },
    },
  },

  // ===== BREAKPOINTS =====
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ===== Z-INDEX SCALE =====
  zIndex: {
    hide: '-1',
    base: '0',
    docked: '10',
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    backdrop: '1040',
    popover: '1050',
    tooltip: '1060',
    modal: '1070',
    notification: '1080',
  },

  // ===== COMPONENT PRESETS =====
  components: {
    button: {
      primary: {
        base: 'px-6 py-3 rounded-xl font-semibold transition-all duration-200',
        light: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/30 active:scale-95',
        dark: 'dark:bg-gradient-to-r dark:from-primary-600 dark:to-accent-600 dark:text-white dark:shadow-glowPrimary',
      },
      secondary: {
        base: 'px-6 py-3 rounded-xl font-semibold transition-all duration-200',
        light: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-300',
        dark: 'dark:bg-dark-surface dark:text-neutral-50 dark:border dark:border-dark-border dark:hover:bg-dark-surface2',
      },
      glass: {
        base: 'px-6 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-md',
        light: 'bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-glass',
        dark: 'dark:bg-white/10 dark:text-white dark:border dark:border-white/20 dark:hover:bg-white/20 dark:shadow-glassDark',
      },
    },
    card: {
      base: 'rounded-2xl transition-all duration-300',
      light: 'bg-white border border-neutral-200 shadow-base hover:shadow-lg',
      dark: 'dark:bg-dark-surface dark:border dark:border-dark-border dark:shadow-glassDark',
      glass: 'backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-glass',
    },
    input: {
      base: 'w-full px-4 py-3 rounded-xl font-medium transition-all duration-200',
      light: 'bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
      dark: 'dark:bg-dark-surface dark:border dark:border-dark-border dark:text-neutral-50 dark:placeholder-neutral-400 dark:focus:border-accent-500 dark:focus:ring-accent-500/20',
    },
  },

  // ===== UTILITY FUNCTIONS =====
  utilities: {
    /**
     * Get gradient by name
     */
    getGradient: (name) => {
      const gradients = {
        primary: 'bg-gradient-to-r from-primary-500 to-accent-500',
        secondary: 'bg-gradient-to-r from-accent-500 to-primary-500',
        success: 'bg-gradient-to-r from-success-500 to-emerald-400',
        warning: 'bg-gradient-to-r from-warning-500 to-orange-400',
        danger: 'bg-gradient-to-r from-danger-500 to-red-400',
      };
      return gradients[name] || gradients.primary;
    },

    /**
     * Get glass morphism classes
     */
    getGlassClasses: (isDark = false) => {
      return isDark
        ? 'backdrop-blur-md bg-white/10 border border-white/20 shadow-glassDark'
        : 'backdrop-blur-md bg-white/20 border border-white/30 shadow-glass';
    },

    /**
     * Get glow effect classes
     */
    getGlowClasses: (color = 'primary') => {
      const glows = {
        primary: 'shadow-glowPrimary',
        accent: 'shadow-glowAccent',
        success: 'shadow-glowSuccess',
      };
      return glows[color] || glows.primary;
    },

    /**
     * Get neumorphic classes
     */
    getNeumorphicClasses: (isDark = false) => {
      return isDark
        ? 'shadow-neumorphicDark bg-dark-surface'
        : 'shadow-neumorphic bg-white';
    },

    /**
     * Get button classes by variant
     */
    getButtonClasses: (variant = 'primary', size = 'md') => {
      const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl',
      };

      const variants = {
        primary: `bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95`,
        secondary: `bg-neutral-100 dark:bg-dark-surface text-neutral-900 dark:text-white border border-neutral-300 dark:border-dark-border rounded-xl font-semibold transition-all`,
        glass: `backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 text-white rounded-xl font-semibold transition-all`,
        outline: `border-2 border-primary-500 text-primary-500 rounded-xl font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all`,
        ghost: `text-primary-600 dark:text-accent-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-xl font-semibold transition-all`,
      };

      return `${variants[variant]} ${sizes[size]}`;
    },

    /**
     * Get card classes by type
     */
    getCardClasses: (isGlass = false, isInteractive = true) => {
      const base = isInteractive ? 'transition-all duration-300 cursor-pointer' : 'transition-all duration-300';
      if (isGlass) {
        return `${base} backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-2xl shadow-glass`;
      }
      return `${base} bg-white dark:bg-dark-surface border border-neutral-200 dark:border-dark-border rounded-2xl shadow-base dark:shadow-glassDark hover:shadow-lg`;
    },

    /**
     * Get input classes
     */
    getInputClasses: (error = false) => {
      const base = 'w-full px-4 py-3 rounded-xl font-medium transition-all duration-200 bg-neutral-50 dark:bg-dark-surface';
      const border = error
        ? 'border-2 border-danger-500 dark:border-danger-500'
        : 'border border-neutral-300 dark:border-dark-border focus:border-primary-500 dark:focus:border-accent-500';
      const ring = error
        ? 'focus:ring-2 focus:ring-danger-500/20'
        : 'focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-accent-500/20';
      return `${base} ${border} ${ring}`;
    },

    /**
     * Get text classes by size
     */
    getTextClasses: (size = 'base') => {
      const sizes = {
        xs: 'text-xs leading-4',
        sm: 'text-sm leading-5',
        base: 'text-base leading-6',
        lg: 'text-lg leading-7',
        xl: 'text-xl leading-8',
        '2xl': 'text-2xl leading-9',
        '3xl': 'text-3xl leading-10',
      };
      return sizes[size] || sizes.base;
    },

    /**
     * Generate CSS custom properties
     */
    generateCSSVariables: () => {
      return `
        --color-primary-500: #5975ff;
        --color-accent-500: #00b4ff;
        --color-success-500: #10b981;
        --color-warning-500: #f59e0b;
        --color-danger-500: #ef4444;
        --shadow-glow-primary: 0 0 20px rgba(89, 117, 255, 0.3);
        --shadow-glow-accent: 0 0 20px rgba(0, 180, 255, 0.3);
        --transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      `;
    },
  },
};

export default DESIGN_SYSTEM_2030;
