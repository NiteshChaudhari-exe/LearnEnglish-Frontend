import { useEffect, useState, useRef } from 'react';
import { DESIGN_SYSTEM_2030 } from '@config/designSystem2030';

/**
 * ===== MODERN 2030 BUTTON COMPONENT =====
 * Features: Glassmorphism, Neumorphism, Gradient, Glow effect, Micro-interactions
 */
export function ModernButton2030({
  children,
  variant = 'primary', // primary, secondary, glass, outline, ghost, gradient
  size = 'md', // sm, md, lg, xl
  icon = null,
  iconPosition = 'left',
  isLoading = false,
  disabled = false,
  className = '',
  glow = false,
  animated = true,
  onClick = null,
  ...props
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-xl',
    secondary: 'bg-neutral-100 dark:bg-dark-surface text-neutral-900 dark:text-white border border-neutral-300 dark:border-dark-border hover:bg-neutral-200 dark:hover:bg-dark-surface2',
    glass: 'backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 text-white hover:bg-white/30 dark:hover:bg-white/20',
    outline: 'border-2 border-primary-500 text-primary-500 dark:text-accent-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
    ghost: 'text-primary-600 dark:text-accent-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
    gradient: 'bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 text-white hover:shadow-xl bg-size-200 hover:bg-pos-0',
  };

  const baseClasses = `
    font-semibold rounded-xl transition-all duration-300 min-h-[50px] 
    flex items-center justify-center active:scale-95 
    disabled:opacity-50 disabled:cursor-not-allowed
    ${animated ? 'hover:scale-105' : ''}
    ${glow && variant === 'primary' ? 'hover:shadow-glowPrimary' : ''}
    ${glow && variant === 'glass' ? 'hover:shadow-glowPrimary' : ''}
  `;

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && (
        <span className="animate-spin mr-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity="0.3" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
          </svg>
        </span>
      )}
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
}

/**
 * ===== MODERN 2030 CARD COMPONENT =====
 * Features: Glassmorphism, Multiple variants, Hover animations, Gradient borders
 */
export function ModernCard2030({
  children,
  variant = 'default', // default, glass, neumorphic, gradient, neon
  hoverable = true,
  className = '',
  onClick = null,
  bgGradient = null,
  borderGradient = false,
}) {
  const variants = {
    default: 'bg-white dark:bg-dark-surface border border-neutral-200 dark:border-dark-border shadow-base dark:shadow-glassDark hover:shadow-lg',
    glass: 'backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-glass',
    neumorphic: 'shadow-neumorphic dark:shadow-neumorphicDark bg-white dark:bg-dark-surface',
    gradient: 'bg-gradient-to-br from-primary-500/10 to-accent-500/10 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-300 dark:border-primary-800',
    neon: 'bg-white dark:bg-dark-surface border-2 border-primary-500 shadow-glowPrimary',
  };

  const baseClasses = `
    rounded-2xl transition-all duration-300 overflow-hidden
    ${hoverable ? 'hover:shadow-xl cursor-pointer hover:scale-105' : ''}
    ${borderGradient ? 'border-gradient-border' : ''}
  `;

  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${bgGradient || ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * ===== MODERN 2030 INPUT COMPONENT =====
 * Features: Glassmorphism, Icons, Error states, AI features, Voice input
 */
export function ModernInput2030({
  label,
  placeholder,
  type = 'text',
  icon = null,
  value,
  onChange,
  error = null,
  required = false,
  disabled = false,
  aiSuggestion = null,
  voiceInput = false,
  className = '',
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showAI, setShowAI] = useState(false);

  const baseClasses = `
    w-full px-4 py-3 rounded-xl font-medium transition-all duration-200
    bg-neutral-50 dark:bg-dark-surface
    border border-neutral-300 dark:border-dark-border
    text-neutral-900 dark:text-neutral-50
    placeholder-neutral-500 dark:placeholder-neutral-400
    focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:focus:ring-accent-500/30
    focus:border-primary-500 dark:focus:border-accent-500
    disabled:opacity-50 disabled:cursor-not-allowed
    ${error ? 'border-danger-500 focus:ring-danger-500/30' : ''}
  `;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
          {label}
          {required && <span className="text-danger-500">*</span>}
          {aiSuggestion && (
            <button
              type="button"
              onClick={() => setShowAI(!showAI)}
              className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-all"
              title="AI Suggestion"
            >
              ✨ AI
            </button>
          )}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-lg">
            {icon}
          </span>
        )}

        <input
          type={type}
          className={`${baseClasses} ${icon ? 'pl-12' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          {...props}
        />

        {voiceInput && (
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors text-lg"
            title="Voice input"
          >
            🎤
          </button>
        )}
      </div>

      {showAI && aiSuggestion && (
        <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 text-sm text-primary-700 dark:text-primary-300 animate-slide-up">
          <span className="font-semibold">✨ AI Suggestion: </span>
          {aiSuggestion}
        </div>
      )}

      {error && (
        <p className="text-sm text-danger-600 dark:text-danger-400 font-medium flex items-center gap-1">
          <span>⚠️</span> {error}
        </p>
      )}
    </div>
  );
}

/**
 * ===== MODERN 2030 PROGRESS COMPONENT =====
 * Features: Gradient fills, Animated labels, Multiple variants
 */
export function ModernProgress2030({
  value = 0,
  max = 100,
  showLabel = true,
  variant = 'default', // default, gradient, glow
  color = 'primary',
  size = 'md',
  animated = true,
  label = null,
}) {
  const percentage = (value / max) * 100;

  const sizes = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
    xl: 'h-5',
  };

  const variants_styles = {
    default: 'bg-primary-500',
    gradient: 'bg-gradient-to-r from-primary-500 to-accent-500',
    glow: 'bg-primary-500 shadow-glowPrimary',
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {(label || showLabel) && (
        <div className="flex justify-between items-center">
          {label && <span className="font-semibold text-sm text-neutral-700 dark:text-neutral-300">{label}</span>}
          {showLabel && (
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div className={`w-full bg-neutral-200 dark:bg-dark-border rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`${variants_styles[variant]} h-full transition-all duration-700 ease-out rounded-full ${
            animated ? 'animate-pulse-soft' : ''
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

/**
 * ===== MODERN 2030 BADGE COMPONENT =====
 * Features: Multiple variants, Emoji, Gradient, Glow
 */
export function ModernBadge2030({
  text,
  emoji = null,
  variant = 'primary', // primary, secondary, success, warning, danger, glass
  size = 'md',
  glow = false,
}) {
  const variants = {
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800',
    secondary: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-800',
    success: 'bg-success-50 dark:bg-success-900/30 text-success-700 dark:text-success-300 border border-success-200 dark:border-success-800',
    warning: 'bg-warning-50 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300 border border-warning-200 dark:border-warning-800',
    danger: 'bg-danger-50 dark:bg-danger-900/30 text-danger-700 dark:text-danger-300 border border-danger-200 dark:border-danger-800',
    glass: 'backdrop-blur-md bg-white/20 dark:bg-white/10 text-white border border-white/30 dark:border-white/20',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-3',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full font-semibold transition-all ${
        variants[variant]
      } ${sizes[size]} ${glow && variant !== 'glass' ? 'shadow-glowPrimary' : ''}`}
    >
      {emoji && <span className="text-lg">{emoji}</span>}
      <span>{text}</span>
    </div>
  );
}

/**
 * ===== MODERN 2030 ALERT COMPONENT =====
 * Features: Animations, Auto-dismiss, Icons, Dark mode
 */
export function ModernAlert2030({
  type = 'success',
  message,
  title = null,
  icon = null,
  onClose = null,
  autoDismiss = 5000,
  variant = 'default', // default, glass, gradient
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, autoDismiss);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, onClose]);

  if (!isVisible) return null;

  const colors = {
    success: { bg: 'bg-success-50 dark:bg-success-900/20', text: 'text-success-800 dark:text-success-300', border: 'border-success-500', icon: '✓' },
    error: { bg: 'bg-danger-50 dark:bg-danger-900/20', text: 'text-danger-800 dark:text-danger-300', border: 'border-danger-500', icon: '✕' },
    warning: { bg: 'bg-warning-50 dark:bg-warning-900/20', text: 'text-warning-800 dark:text-warning-300', border: 'border-warning-500', icon: '⚠' },
    info: { bg: 'bg-primary-50 dark:bg-primary-900/20', text: 'text-primary-800 dark:text-primary-300', border: 'border-primary-500', icon: 'ℹ' },
  };

  const color = colors[type];
  const variants_styles = {
    default: `${color.bg} ${color.text} border-l-4 ${color.border} shadow-base`,
    glass: `backdrop-blur-md bg-white/20 dark:bg-white/10 text-white border border-white/30 dark:border-white/20 shadow-glass`,
    gradient: `bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 ${color.text}`,
  };

  return (
    <div
      className={`${variants_styles[variant]} p-4 rounded-xl flex gap-4 items-start animate-slide-up`}
    >
      <span className="text-xl font-bold flex-shrink-0 mt-0.5">{icon || color.icon}</span>
      <div className="flex-1">
        {title && <p className="font-semibold mb-1">{title}</p>}
        <p>{message}</p>
      </div>
      {onClose && (
        <button
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
          className="text-lg font-bold opacity-50 hover:opacity-100 transition-opacity flex-shrink-0"
        >
          ✕
        </button>
      )}
    </div>
  );
}

/**
 * ===== MODERN 2030 LOADING COMPONENT =====
 * Features: Multiple spinners, Glassmorphism, Animations
 */
export function ModernLoading2030({
  message = 'Loading...',
  fullScreen = true,
  variant = 'spinner', // spinner, dots, pulse
}) {
  const spinnerVariants = {
    spinner: (
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-primary-200 dark:border-gray-700"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 border-r-accent-500 animate-spin"></div>
      </div>
    ),
    dots: (
      <div className="flex gap-2 items-end h-8">
        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-2 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    ),
    pulse: (
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
        <div className="absolute w-12 h-12 bg-white dark:bg-dark-surface rounded-full"></div>
      </div>
    ),
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${fullScreen ? 'min-h-screen' : 'py-12'}`}>
      {spinnerVariants[variant]}
      <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">{message}</p>
    </div>
  );
}

/**
 * ===== MODERN 2030 MODAL COMPONENT =====
 * Features: Backdrop blur, Smooth animations, Multiple sizes
 */
export function ModernModal2030({
  isOpen,
  onClose,
  title,
  children,
  footer = null,
  size = 'md', // sm, md, lg
  variant = 'default', // default, glass
  closeButton = true,
}) {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
  };

  const variants_styles = {
    default: 'bg-white dark:bg-dark-surface border border-neutral-200 dark:border-dark-border shadow-xl',
    glass: 'backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-glass',
  };

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className={`relative ${sizes[size]} w-full ${variants_styles[variant]} rounded-2xl animate-scale-in`}>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-dark-border p-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          {closeButton && (
            <button
              onClick={onClose}
              className="text-2xl font-bold text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            >
              ✕
            </button>
          )}
        </div>

        {/* Content */}
        <div className="py-6 px-6">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex gap-3 justify-end pt-4 border-t border-neutral-200 dark:border-dark-border p-6">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * ===== MODERN 2030 TOOLTIP COMPONENT =====
 * Features: Smooth positioning, Animations, Dark mode
 */
export function ModernTooltip2030({
  children,
  text,
  position = 'top',
  variant = 'default', // default, glass, gradient
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const positionClasses = {
    top: 'bottom-full mb-3',
    bottom: 'top-full mt-3',
    left: 'right-full mr-3',
    right: 'left-full ml-3',
  };

  const variants_styles = {
    default: 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xl',
    glass: 'backdrop-blur-md bg-white/20 dark:bg-white/10 text-white border border-white/30 dark:border-white/20',
    gradient: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glowPrimary',
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        ref={ref}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={`absolute ${positionClasses[position]} left-1/2 -translate-x-1/2 z-tooltip whitespace-nowrap ${variants_styles[variant]} px-4 py-2 rounded-lg text-sm font-medium animate-fade-in`}
        >
          {text}
          <div className={`absolute w-2 h-2 bg-inherit ${position === 'top' ? 'top-full -mt-1 left-1/2 -translate-x-1/2' : ''}`} />
        </div>
      )}
    </div>
  );
}
