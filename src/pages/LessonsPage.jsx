import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { Card, Button, Loading, EmptyState, Alert } from '../components/UI';
import { LessonContent } from '../components/Lessons';

export function LessonsPage() {
  const navigate = useNavigate();
  const { user, lessons, fetchLessons, fetchLesson, currentLesson, completeLesson, loading } = useStore();
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [loadingLesson, setLoadingLesson] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      navigate('/login');
      return;
    }

    fetchLessons('A1');
  }, [user?.id, navigate]);

  const handleSelectLesson = async (lessonId) => {
    setLoadingLesson(true);
    try {
      await fetchLesson(lessonId);
      setSelectedLesson(lessonId);
      window.scrollTo(0, 0);
    } catch (err) {
      console.error('Failed to load lesson:', err);
    } finally {
      setLoadingLesson(false);
    }
  };

  const handleCompleteLesson = async () => {
    if (!selectedLesson) return;

    try {
      await completeLesson(selectedLesson, 85); // Default score
      alert('🎉 Lesson completed! Great job!');
      setSelectedLesson(null);
      await fetchLessons('A1');
    } catch (err) {
      console.error('Failed to complete lesson:', err);
    }
  };

  if (!user?.id) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-3xl font-bold">📚 Lessons</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-3xl hover:scale-110 transition-transform"
        >
          ← Back
        </button>
      </div>

      <div className="p-6">
        {!selectedLesson ? (
          <>
            {/* Lessons List */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">A1 Beginner Level</h2>

            {loading ? (
              <Loading />
            ) : lessons && lessons.length > 0 ? (
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <Card
                    key={lesson.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                    onClick={() => handleSelectLesson(lesson.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-3xl">📖</span>
                          <h3 className="text-2xl font-bold text-blue-600">{lesson.title}</h3>
                        </div>
                        <p className="text-lg text-gray-700 ml-12">{lesson.description}</p>
                        <p className="text-base text-gray-600 ml-12 mt-2">
                          ⏱️ {lesson.duration_minutes} minutes
                        </p>
                      </div>
                      <span className="text-4xl">→</span>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No lessons found"
                description="Check back soon!"
                icon="🎓"
              />
            )}
          </>
        ) : currentLesson ? (
          <>
            {/* Lesson Content */}
            <button
              onClick={() => setSelectedLesson(null)}
              className="text-2xl hover:scale-110 transition-transform mb-4 flex items-center gap-2"
            >
              ← Back to lessons
            </button>

            <LessonContent lesson={currentLesson} />

            {/* Vocabulary section */}
            {currentLesson.vocabulary && currentLesson.vocabulary.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Vocabulary</h2>
                <div className="grid grid-cols-2 gap-4">
                  {currentLesson.vocabulary.slice(0, 8).map((vocab, idx) => (
                    <Card
                      key={idx}
                      className="bg-gradient-to-br from-blue-50 to-purple-50 cursor-pointer hover:shadow-lg transition-shadow text-center p-4"
                    >
                      <p className="text-3xl font-bold text-blue-600 mb-2">{vocab.word}</p>
                      <p className="text-sm text-gray-600">{vocab.translation}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Complete button */}
            <div className="mt-8 sticky bottom-0 bg-white p-6 rounded-t-lg shadow-lg">
              <Button
                onClick={handleCompleteLesson}
                variant="success"
                size="lg"
                className="w-full mb-3"
              >
                ✅ Mark as Complete
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={() => setSelectedLesson(null)}
              >
                Continue Later
              </Button>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default LessonsPage;
