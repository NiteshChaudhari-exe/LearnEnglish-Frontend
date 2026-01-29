module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ===== 2030 MODERN COLORS =====
      colors: {
        // Primary - Vibrant Blue with Glow
        primary: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c1d3ff',
          300: '#a2beff',
          400: '#7399ff',
          500: '#5975ff', // Main
          600: '#4052e6',
          700: '#2d36b3',
          800: '#1a1f80',
          900: '#0d0f4d',
        },
        // Accent - Electric Cyan
        accent: {
          50: '#f0faff',
          100: '#e0f7ff',
          200: '#b8ecff',
          300: '#7dd9ff',
          400: '#35c5ff',
          500: '#00b4ff', // Main
          600: '#0099dd',
          700: '#0073b3',
          800: '#004d80',
          900: '#002a4d',
        },
        // Dark mode
        dark: {
          bg: '#0a0e27',
          surface: '#141829',
          surface2: '#1f2647',
          border: '#2a3555',
        },
      },

      // ===== GRADIENTS =====
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #5975ff 0%, #00b4ff 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #a855f7 0%, #00b4ff 100%)',
        'gradient-success': 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      },

      // ===== TYPOGRAPHY =====
      fontFamily: {
        display: ['"Inter Display"', '"Inter"', '-apple-system', 'sans-serif'],
        body: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"Fira Code"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },

      spacing: {
        'safe-b': 'env(safe-area-inset-bottom)',
      },

      // ===== ANIMATIONS - MODERN 2030 STYLE =====
      animation: {
        // Entrance
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-left': 'slideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-right': 'slideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        
        // Continuous
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        
        // Interactive
        'wiggle': 'wiggle 0.6s ease-in-out',
        'flip': 'flip 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'bounce-soft': 'bounceSoft 2s infinite',
      },

      // ===== KEYFRAMES - 2030 MODERN ANIMATIONS =====
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
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
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

      // ===== ADVANCED SHADOWS =====
      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        base: '0 4px 12px rgba(0, 0, 0, 0.08)',
        md: '0 8px 20px rgba(0, 0, 0, 0.12)',
        lg: '0 12px 32px rgba(0, 0, 0, 0.15)',
        xl: '0 20px 48px rgba(0, 0, 0, 0.18)',
        '2xl': '0 28px 64px rgba(0, 0, 0, 0.2)',
        // Glow shadows
        'glow-primary': '0 0 20px rgba(89, 117, 255, 0.3)',
        'glow-accent': '0 0 20px rgba(0, 180, 255, 0.3)',
        'glow-success': '0 0 20px rgba(16, 185, 129, 0.3)',
        // Glassmorphism
        glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
        // Neumorphic
        neumorphic: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)',
        'neumorphic-dark': '6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.1)',
        soft: '0 2px 8px rgba(0, 0, 0, 0.08)',
        medium: '0 4px 16px rgba(0, 0, 0, 0.1)',
        card: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        elevation: '0 10px 40px rgba(0, 0, 0, 0.12)',
      },

      // ===== BORDER RADIUS =====
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      // ===== BACKDROP BLUR =====
      backdropBlur: {
        xs: '2px',
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
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Glassmorphism utilities
        '.glass': {
          'backdrop-filter': 'blur(8px)',
          'background-color': 'rgba(255, 255, 255, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
        '.glass-dark': {
          'backdrop-filter': 'blur(8px)',
          'background-color': 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },

        // Button styles
        '.btn-primary': {
          '@apply bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold px-6 py-3 transition-all duration-300 hover:shadow-lg active:scale-95 disabled:opacity-50': '',
        },
        '.btn-secondary': {
          '@apply bg-neutral-100 dark:bg-dark-surface text-neutral-900 dark:text-white border border-neutral-300 dark:border-dark-border rounded-xl font-semibold px-6 py-3': '',
        },
      });
    },
  ]
}
