import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { Card, Button, EmptyState, Loading, Alert } from '../components/UI';
import { StatsSummary, LessonProgressList } from '../components/Progress';

export function HomePage() {
  const navigate = useNavigate();
  const { user, lessons, progress, profile, fetchLessons, fetchProgress, fetchProfile, error } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!user?.id) {
        navigate('/login');
        return;
      }

      try {
        await fetchLessons();
        await fetchProgress(user.id);
        await fetchProfile(user.id);
      } catch (err) {
        console.error('Failed to load home data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user?.id, navigate]);

  if (!user) {
    return <Loading />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 sticky top-0 z-10">
        <h1 className="text-4xl font-bold mb-2">👋 Welcome back!</h1>
        <p className="text-xl">Keep learning, you're doing great!</p>
      </div>

      {error && (
        <div className="p-6">
          <Alert type="error" message={error} />
        </div>
      )}

      {/* Main content */}
      <div className="p-6">
        {/* Stats */}
        {progress && <StatsSummary progress={progress} />}

        {/* Daily lesson recommendation */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🎯</span>
            <div>
              <p className="text-sm text-gray-600">Today's Lesson</p>
              <p className="text-2xl font-bold text-green-600">Start Learning Now</p>
            </div>
          </div>
          <Button onClick={() => navigate('/lessons')} size="lg" className="w-full">
            🚀 Begin Lesson
          </Button>
        </Card>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            variant="secondary"
            onClick={() => navigate('/vocabulary')}
            className="h-24 flex flex-col items-center justify-center gap-2 text-lg"
          >
            <span className="text-4xl">📚</span>
            <span>Vocabulary</span>
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate('/progress')}
            className="h-24 flex flex-col items-center justify-center gap-2 text-lg"
          >
            <span className="text-4xl">📊</span>
            <span>My Progress</span>
          </Button>
        </div>

        {/* Available lessons */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Available Lessons</h2>
          {lessons && lessons.length > 0 ? (
            <LessonProgressList lessons={lessons} progress={progress} />
          ) : (
            <EmptyState
              title="No lessons available"
              description="Check back soon for more content!"
              icon="🎓"
            />
          )}
        </div>

        {/* Encouragement */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 text-center border-none">
          <p className="text-2xl mb-3">💪 Keep up the great work!</p>
          <p className="text-lg text-gray-700">
            Learning a language takes time. Every lesson brings you closer to your goal!
          </p>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
