import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { Card, Button, Loading, EmptyState } from '../components/UI';
import { ProgressCard, LessonProgressList } from '../components/Progress';

export function ProgressPage() {
  const navigate = useNavigate();
  const { user, lessons, profile, progress, fetchLessons, fetchProfile, fetchProgress, loading } = useStore();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!user?.id) {
      navigate('/login');
      return;
    }

    fetchLessons('A1');
    fetchProfile(user.id);
    fetchProgress(user.id);
  }, [user?.id, navigate]);

  if (!user?.id || loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between sticky top-0 z-20">
        <h1 className="text-3xl font-bold">📊 My Progress</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-3xl hover:scale-110 transition-transform"
        >
          ← Back
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b-2 border-gray-200 p-4 sticky top-16 z-10 flex gap-2 overflow-x-auto">
        {[
          { id: 'overview', label: '📊 Overview', icon: '📊' },
          { id: 'lessons', label: '📚 Lessons', icon: '📚' },
          { id: 'badges', label: '🎖️ Badges', icon: '🎖️' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-4 py-3 text-lg font-semibold rounded-lg transition-all ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && profile && progress && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📈 Learning Statistics</h2>
            <ProgressCard profile={profile} progress={progress} />

            {/* Quick stats */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Words Learned</p>
                      <p className="text-3xl font-bold text-blue-600">
                        {progress.lessons?.length * 4 || 0}
                      </p>
                    </div>
                    <div className="text-5xl">📖</div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Learning Time</p>
                      <p className="text-3xl font-bold text-purple-600">
                        {(progress.total_completed * 7).toFixed(0)} min
                      </p>
                    </div>
                    <div className="text-5xl">⏱️</div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Completion Rate</p>
                      <p className="text-3xl font-bold text-green-600">
                        {lessons?.length ? Math.round((progress.total_completed / lessons.length) * 100) : 0}%
                      </p>
                    </div>
                    <div className="text-5xl">📈</div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Encouragement */}
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 mt-8 text-center border-none">
              <p className="text-2xl font-bold mb-3">💪 Amazing Progress!</p>
              <p className="text-lg text-gray-700 mb-4">
                You've learned {progress.total_completed} lessons so far. Keep it up!
              </p>
              <Button
                onClick={() => navigate('/lessons')}
                className="w-full"
              >
                🚀 Continue Learning
              </Button>
            </Card>
          </>
        )}

        {/* Lessons Tab */}
        {activeTab === 'lessons' && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Lesson Progress</h2>
            {lessons && lessons.length > 0 ? (
              <LessonProgressList lessons={lessons} progress={progress} />
            ) : (
              <EmptyState
                title="No lessons yet"
                description="Start with a lesson to track your progress"
                icon="📚"
              />
            )}
          </>
        )}

        {/* Badges Tab */}
        {activeTab === 'badges' && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🎖️ Your Badges</h2>

            {profile?.badges && profile.badges.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {profile.badges.map((badge, idx) => (
                  <Card key={idx} className="text-center bg-gradient-to-br from-yellow-50 to-amber-50">
                    <p className="text-5xl mb-3">{badge.icon}</p>
                    <p className="text-lg font-bold text-gray-800 mb-2">{badge.name}</p>
                    <p className="text-sm text-gray-600">{badge.description}</p>
                  </Card>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No badges yet"
                description="Complete lessons and quizzes to earn badges!"
                icon="🎖️"
              />
            )}

            {/* Badge milestones */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🏆 Unlock Badges</h3>
              <div className="space-y-3">
                <Card className="opacity-60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-gray-800">First Steps</p>
                      <p className="text-gray-600">Complete 1 lesson</p>
                    </div>
                    <p className="text-4xl">👣</p>
                  </div>
                </Card>

                <Card className="opacity-60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-gray-800">Streak Master</p>
                      <p className="text-gray-600">7 day learning streak</p>
                    </div>
                    <p className="text-4xl">🔥</p>
                  </div>
                </Card>

                <Card className="opacity-60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-gray-800">Perfect Score</p>
                      <p className="text-gray-600">100% on a quiz</p>
                    </div>
                    <p className="text-4xl">⭐</p>
                  </div>
                </Card>

                <Card className="opacity-60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-gray-800">Vocabulary Champion</p>
                      <p className="text-gray-600">Learn 50 words</p>
                    </div>
                    <p className="text-4xl">📚</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProgressPage;
