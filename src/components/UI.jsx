import { useEffect, useState } from 'react';

/**
 * Modern Button Component
 * Variants: primary, secondary, success, danger, outline, ghost
 * Sizes: sm, md, lg
 */
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'lg', 
  disabled = false,
  isLoading = false,
  className = '',
  ...props 
}) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 min-h-[50px] px-6 py-3 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-soft hover:shadow-medium',
    secondary: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 shadow-soft hover:shadow-medium',
    danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 shadow-soft hover:shadow-medium',
    outline: 'border-2 border-primary-500 text-primary-500 dark:border-primary-400 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
  };

  const sizeClasses = {
    sm: 'min-h-[40px] text-sm px-4 py-2',
    md: 'min-h-[45px] text-base px-5 py-2',
    lg: 'min-h-[50px] text-lg px-6 py-3'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className="animate-spin">⟳</span>}
      {children}
    </button>
  );
}

/**
 * Modern Card Component
 * Premium shadows and styling
 */
export function Card({ children, className = '', hoverable = false, onClick = null }) {
  return (
    <div 
      className={`card-base p-6 ${hoverable ? 'card-hover cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * Progress Bar with Animation
 */
export function Progress({ value, max = 100, showLabel = true, size = 'md', color = 'primary' }) {
  const percentage = (value / max) * 100;
  
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const colorClasses = {
    primary: 'bg-primary-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-red-500'
  };
  
  return (
    <div className="w-full">
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`${colorClasses[color]} h-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center font-medium">
          {Math.round(percentage)}% • {value} / {max}
        </div>
      )}
    </div>
  );
}

/**
 * Modern Badge Component
 */
export function Badge({ text, emoji = '✨', variant = 'primary', size = 'md' }) {
  const variantClasses = {
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800',
    success: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
    warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
  };

  const sizeClasses = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-3'
  };

  return (
    <div className={`inline-flex items-center gap-2 rounded-full font-semibold transition-all ${variantClasses[variant]} ${sizeClasses[size]}`}>
      <span className="text-lg">{emoji}</span>
      <span>{text}</span>
    </div>
  );
}

/**
 * Modern Alert Component with Animation
 */
export function Alert({ type = 'success', message, onClose = null, title = null }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [onClose]);

  if (!isVisible) return null;

  const colors = {
    success: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 border-l-4 border-emerald-500',
    error: 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-l-4 border-red-500',
    warning: 'bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 border-l-4 border-amber-500',
    info: 'bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 border-l-4 border-primary-500'
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <div className={`${colors[type]} p-4 rounded-lg flex gap-3 items-start animate-slide-in-down`}>
      <span className="text-xl font-bold mt-0.5 flex-shrink-0">{icons[type]}</span>
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
          className="text-xl font-bold opacity-50 hover:opacity-100 transition-opacity flex-shrink-0"
        >
          ✕
        </button>
      )}
    </div>
  );
}

/**
 * Modern Loading Spinner
 */
export function Loading({ message = 'Loading...', fullScreen = true }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${fullScreen ? 'min-h-screen' : 'py-12'}`}>
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-primary-200 dark:border-gray-700"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 animate-spin"></div>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">{message}</p>
    </div>
  );
}

/**
 * Empty State Component
 */
export function EmptyState({ title, description, icon = '📭', action = null }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-6xl mb-6 animate-bounce-soft">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">{title}</h3>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-md">{description}</p>
      {action && action}
    </div>
  );
}

/**
 * Tooltip Component
 */
export function Tooltip({ children, text, position = 'top' }) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2'
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className={`absolute ${positionClasses[position]} left-1/2 -translate-x-1/2 z-50 whitespace-nowrap bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium shadow-elevation animate-fade-in`}>
          {text}
        </div>
      )}
    </div>
  );
}

/**
 * Modal Component
 */
export function Modal({ isOpen, onClose, title, children, footer = null }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50 dark:bg-black/70"
        onClick={onClose}
      ></div>
      <div className="relative card-base w-full max-w-md mx-4 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="py-6">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex gap-3 justify-end pt-4 border-t border-gray-200 dark:border-gray-800">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
    </div>
  );
}
