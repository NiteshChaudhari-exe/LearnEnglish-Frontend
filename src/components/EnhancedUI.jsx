// Enhanced Navigation with Language Toggle
import { useStore } from '../store';
import { getText } from '../i18n/translations';

export const Navigation = () => {
  const { user, logout, showNepali, toggleLanguage } = useStore();

  if (!user?.id) return null;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
              <span className="text-xl font-bold">📚</span>
            </div>
            <h1 className="text-xl font-bold">English Learn</h1>
          </div>

          {/* Menu and Controls */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="rounded-lg bg-white/20 px-4 py-2 font-semibold hover:bg-white/30 transition"
            >
              {showNepali ? '🇬🇧 EN' : '🇳🇵 नेपाली'}
            </button>

            {/* Logout */}
            <button
              onClick={logout}
              className="rounded-lg bg-red-500/80 px-4 py-2 font-semibold hover:bg-red-600 transition"
            >
              {showNepali ? 'लगआउट' : 'Logout'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Language Toggle Button (Small Version)
export const LanguageToggleButton = ({ className = '' }) => {
  const { showNepali, toggleLanguage } = useStore();

  return (
    <button
      onClick={toggleLanguage}
      className={`rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-2 text-sm font-semibold text-white hover:shadow-lg transition ${className}`}
      title={showNepali ? 'Switch to English' : 'नेपालीमा स्विच गर्नुहोस्'}
    >
      {showNepali ? '🇬🇧 EN' : '🇳🇵 नेपाली'}
    </button>
  );
};

// Enhanced Header with Greeting
export const PageHeader = ({ title, subtitle = '' }) => {
  const { showNepali } = useStore();

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-lg opacity-90">{subtitle}</p>}
      </div>
    </div>
  );
};

// Encouraging Message Component
export const EncouragingMessage = ({ score = 0, showNepali = false }) => {
  let message = '';
  let emoji = '';
  let color = '';

  if (score >= 90) {
    emoji = '🌟';
    message = showNepali ? 'असाधारण! तपाई एक चैम्पियन हुनुहुन्छ!' : 'Outstanding! You are a champion!';
    color = 'text-yellow-600';
  } else if (score >= 80) {
    emoji = '🎉';
    message = showNepali ? 'उत्कृष्ट काम! तपाई राम्रो सिक्दै हुनुहुन्छ!' : 'Excellent! You are learning well!';
    color = 'text-green-600';
  } else if (score >= 70) {
    emoji = '👏';
    message = showNepali ? 'राम्रो प्रयास! अभ्यास जारी राख्नुहोस्!' : 'Good effort! Keep practicing!';
    color = 'text-blue-600';
  } else if (score >= 60) {
    emoji = '💪';
    message = showNepali ? 'अच्छा! अभ्यास जारी रखें!' : 'Good! Keep practicing!';
    color = 'text-indigo-600';
  } else {
    emoji = '🚀';
    message = showNepali ? 'कोशिश जारी राख्नुहोस्! तपाई उन्नति गरीदै हुनुहुन्छ!' : 'Keep trying! You are improving!';
    color = 'text-purple-600';
  }

  return (
    <div className={`rounded-lg border-l-4 border-current bg-opacity-10 p-4 text-center ${color}`}>
      <div className="text-4xl mb-2">{emoji}</div>
      <p className="font-semibold">{message}</p>
    </div>
  );
};

// Streak Indicator Component
export const StreakIndicator = ({ streakDays = 0, showNepali = false }) => {
  const getStreakEmoji = (days) => {
    if (days === 0) return '🌱';
    if (days < 3) return '🔥';
    if (days < 7) return '🔥🔥';
    if (days < 14) return '⚡';
    if (days < 30) return '💥';
    return '👑';
  };

  const getStreakColor = (days) => {
    if (days === 0) return 'text-gray-600';
    if (days < 3) return 'text-orange-600';
    if (days < 7) return 'text-red-600';
    if (days < 14) return 'text-yellow-600';
    if (days < 30) return 'text-blue-600';
    return 'text-purple-600';
  };

  return (
    <div className={`text-center font-bold ${getStreakColor(streakDays)}`}>
      <div className="text-3xl mb-1">{getStreakEmoji(streakDays)}</div>
      <div className="text-2xl">{streakDays}</div>
      <div className="text-sm">{showNepali ? 'दिनको स्ट्रीक' : 'day streak'}</div>
    </div>
  );
};

// Progress Circle Component
export const ProgressCircle = ({ completed = 0, total = 5, size = 'md' }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  const sizeClass = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className={`relative ${sizeClass[size]}`}>
      <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold">{Math.round(percentage)}%</div>
          <div className="text-xs text-gray-600">{completed}/{total}</div>
        </div>
      </div>
    </div>
  );
};
