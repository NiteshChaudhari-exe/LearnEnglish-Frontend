import { useEffect, useState } from 'react';
import { useStore } from '../store';

/**
 * Custom hook for progress tracking
 * Handles fetching and managing user progress data
 */
export function useProgress(userId) {
  const { progress, profile, fetchProgress, fetchProfile, loading, error } = useStore();
  const [progressData, setProgressData] = useState(null);

  useEffect(() => {
    if (userId) {
      loadProgress();
    }
  }, [userId]);

  const loadProgress = async () => {
    try {
      const [progressRes, profileRes] = await Promise.all([
        fetchProgress(userId),
        fetchProfile(userId)
      ]);
      
      setProgressData({
        ...progressRes,
        profile: profileRes
      });
    } catch (err) {
      console.error('Failed to load progress:', err);
    }
  };

  const getAverageScore = () => {
    if (!progress?.lessons) return 0;
    const scores = progress.lessons.map(l => l.score || 0);
    return scores.length > 0 
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : 0;
  };

  const getTotalCompleted = () => {
    return progress?.lessons?.filter(l => l.completed)?.length || 0;
  };

  const getCompletionPercentage = () => {
    if (!progress?.lessons?.length) return 0;
    return Math.round((getTotalCompleted() / progress.lessons.length) * 100);
  };

  return {
    progress,
    profile,
    progressData,
    loading,
    error,
    loadProgress,
    getAverageScore,
    getTotalCompleted,
    getCompletionPercentage
  };
}
