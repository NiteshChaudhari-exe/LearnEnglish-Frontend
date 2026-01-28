import { useState } from 'react';
import { useStore } from '../store';

/**
 * Modern Navigation Component with Dark Mode Support
 */
export function ModernNavigation() {
  const { user, logout, showNepali, toggleLanguage } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  if (!user?.id) return null;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 shadow-medium">
              <span className="text-xl font-bold text-white">📚</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                English Learn
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">A1 Beginner</p>
            </div>
          </div>

          {/* Center Navigation Menu */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/" label="Home" icon="🏠" />
            <NavLink href="/lessons" label="Lessons" icon="📖" />
            <NavLink href="/vocabulary" label="Vocabulary" icon="📝" />
            <NavLink href="/progress" label="Progress" icon="📊" />
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors font-medium"
            >
              {showNepali ? '🇬🇧 EN' : '🇳🇵 नेपाली'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Logout Button */}
            <button
              onClick={logout}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors font-semibold shadow-soft"
            >
              🚪 Logout
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 space-y-2 animate-slide-up">
            <MobileNavLink href="/" label="🏠 Home" />
            <MobileNavLink href="/lessons" label="📖 Lessons" />
            <MobileNavLink href="/vocabulary" label="📝 Vocabulary" />
            <MobileNavLink href="/progress" label="📊 Progress" />
            <hr className="my-2" />
            <button
              onClick={toggleLanguage}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {showNepali ? '🇬🇧 English' : '🇳🇵 नेपाली'}
            </button>
            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors font-semibold"
            >
              🚪 Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, label, icon }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
    >
      <span>{icon}</span>
      <span className="hidden lg:inline">{label}</span>
    </a>
  );
}

function MobileNavLink({ href, label }) {
  return (
    <a
      href={href}
      className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
    >
      {label}
    </a>
  );
}
