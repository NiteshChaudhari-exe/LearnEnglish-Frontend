import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { Card, Button, Loading, EmptyState, Alert } from '../components/UI';

export function LoginPage() {
  const navigate = useNavigate();
  const { createUser, loadUser, user, loading, error, clearError } = useStore();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    nativeLanguage: 'en'
  });
  const [localError, setLocalError] = useState('');

  useEffect(() => {
    loadUser();
    if (user?.id) {
      navigate('/');
    }
  }, [user?.id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setLocalError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    setLocalError('');

    if (!isSignUp && !formData.email) {
      setLocalError('Email is required');
      return;
    }

    if (!formData.username || !formData.password) {
      setLocalError('Username and password are required');
      return;
    }

    try {
      await createUser(
        formData.username,
        formData.email || 'guest@englishlearn.local',
        formData.password,
        formData.nativeLanguage
      );
      navigate('/');
    } catch (err) {
      setLocalError(err.message || 'Failed to create account');
    }
  };

  if (user?.id) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">🌍</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">English Learn</h1>
          <p className="text-lg text-gray-600">A1 Level for Beginners</p>
        </div>

        {(error || localError) && (
          <Alert type="error" message={error || localError} />
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>

            {isSignUp && (
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            )}

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>

            {isSignUp && (
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Native Language
                </label>
                <select
                  name="nativeLanguage"
                  value={formData.nativeLanguage}
                  onChange={handleChange}
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                >
                  <option value="ne">Nepali</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  <option value="de">German</option>
                  <option value="it">Italian</option>
                  <option value="pt">Portuguese</option>
                  <option value="zh">Chinese</option>
                  <option value="ja">Japanese</option>
                </select>
              </div>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full mb-4"
            disabled={loading}
          >
            {loading ? 'Loading...' : isSignUp ? 'Create Account' : 'Login'}
          </Button>
        </form>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-600">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setLocalError('');
            setFormData({ ...formData, email: '' });
          }}
        >
          {isSignUp ? 'Back to Login' : 'Create New Account'}
        </Button>

        {!isSignUp && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-lg mb-3">Want to try first?</p>
            <Button
              variant="outline"
              size="md"
              className="w-full"
              onClick={() => {
                setFormData({
                  username: 'demo_user',
                  email: 'demo@englishlearn.local',
                  password: 'demo123'
                });
              }}
            >
              Demo Account
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default LoginPage;
