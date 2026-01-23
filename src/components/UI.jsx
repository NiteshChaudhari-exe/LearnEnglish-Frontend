export function Button({ children, variant = 'primary', size = 'lg', disabled = false, ...props }) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 min-h-[50px] text-lg px-6 py-3 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white active:bg-blue-600 disabled:bg-gray-300',
    secondary: 'bg-gray-200 text-gray-800 active:bg-gray-300',
    success: 'bg-green-500 text-white active:bg-green-600',
    danger: 'bg-red-500 text-white active:bg-red-600',
    outline: 'border-2 border-blue-500 text-blue-500 active:bg-blue-50'
  };

  const sizeClasses = {
    sm: 'min-h-[40px] text-base px-4 py-2',
    md: 'min-h-[45px] text-base px-5 py-2',
    lg: 'min-h-[50px] text-lg px-6 py-3'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function Progress({ value, max = 100, showLabel = true }) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-blue-500 h-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-sm text-gray-600 mt-2 text-center">
          {value} / {max}
        </div>
      )}
    </div>
  );
}

export function Badge({ text, emoji = '✨' }) {
  return (
    <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
      <span>{emoji}</span>
      <span>{text}</span>
    </div>
  );
}

export function Alert({ type = 'success', message, onClose = null }) {
  const colors = {
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    info: 'bg-blue-100 text-blue-800 border-blue-300'
  };

  return (
    <div className={`${colors[type]} border-l-4 p-4 rounded mb-4 flex justify-between items-center text-lg`}>
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="text-xl font-bold">
          ✕
        </button>
      )}
    </div>
  );
}

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
      <p className="text-xl text-gray-600">Loading...</p>
    </div>
  );
}

export function EmptyState({ title, description, icon = '📭' }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
}
