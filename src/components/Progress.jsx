import { Card, Button, Badge } from './UI';
import { formatDate, getStreakEmoji } from '../utils/helpers';

export function ProgressCard({ profile, progress }) {
  if (!progress) return null;

  return (
    <div className="space-y-4">
      {/* Streak */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Current Streak</p>
            <p className="text-4xl font-bold text-orange-600">
              {getStreakEmoji(progress.streak?.current_streak)} {progress.streak?.current_streak || 0} days
            </p>
          </div>
          <div className="text-6xl">{getStreakEmoji(progress.streak?.current_streak)}</div>
        </div>
        <p className="text-lg text-gray-700">
          🏆 Longest: <strong>{progress.streak?.longest_streak || 0} days</strong>
        </p>
      </Card>

      {/* Lessons Completed */}
      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Lessons Completed</p>
            <p className="text-3xl font-bold text-blue-600">{progress.total_completed}</p>
          </div>
          <div className="text-6xl">📚</div>
        </div>
      </Card>

      {/* Average Score */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Average Score</p>
            <p className="text-3xl font-bold text-purple-600">{progress.average_score}%</p>
          </div>
          <div className="text-6xl">⭐</div>
        </div>
      </Card>

      {/* Badges */}
      {profile?.badges && profile.badges.length > 0 && (
        <Card>
          <p className="text-lg font-bold text-gray-800 mb-4">🎖️ Your Badges</p>
          <div className="flex flex-wrap gap-3">
            {profile.badges.map((badge, idx) => (
              <Badge key={idx} text={badge.name} emoji={badge.icon} />
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

export function LessonProgressList({ lessons = [], progress = null }) {
  return (
    <div className="space-y-3">
      {lessons.map((lesson, idx) => {
        const lessonProgress = progress?.lessons?.find(p => p.lesson_id === lesson.id);
        const isCompleted = lessonProgress?.completed;

        return (
          <Card
            key={idx}
            className={`border-l-4 ${isCompleted ? 'border-green-500 bg-green-50' : 'border-blue-500'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{isCompleted ? '✅' : '📖'}</span>
                  <h3 className="text-xl font-bold text-gray-800">{lesson.title}</h3>
                </div>
                <p className="text-lg text-gray-600 ml-12">{lesson.description}</p>
                {isCompleted && (
                  <p className="text-lg text-green-600 ml-12 mt-2">
                    Score: <strong>{lessonProgress.score}%</strong>
                  </p>
                )}
              </div>
              <div className="text-4xl">⏱️ {lesson.duration_minutes}m</div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export function StatsSummary({ progress }) {
  if (!progress) return null;

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      <Card className="text-center p-4">
        <p className="text-4xl mb-2">📚</p>
        <p className="text-sm text-gray-600">Lessons</p>
        <p className="text-2xl font-bold text-blue-600">{progress.total_completed}</p>
      </Card>
      <Card className="text-center p-4">
        <p className="text-4xl mb-2">⭐</p>
        <p className="text-sm text-gray-600">Score</p>
        <p className="text-2xl font-bold text-purple-600">{progress.average_score}%</p>
      </Card>
      <Card className="text-center p-4">
        <p className="text-4xl mb-2">🔥</p>
        <p className="text-sm text-gray-600">Streak</p>
        <p className="text-2xl font-bold text-orange-600">{progress.streak?.current_streak || 0}</p>
      </Card>
    </div>
  );
}
