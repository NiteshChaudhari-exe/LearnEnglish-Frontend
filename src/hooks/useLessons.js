import { useEffect, useState } from 'react';
import { useStore } from '../store';

/**
 * Custom hook for lessons management
 * Handles fetching, filtering, and managing lessons
 */
export function useLessons(level = 'A1') {
  const { lessons, currentLesson, fetchLessons, fetchLesson, completeLesson, loading, error } = useStore();
  const [filteredLessons, setFilteredLessons] = useState([]);

  useEffect(() => {
    loadLessons();
  }, [level]);

  const loadLessons = async () => {
    try {
      await fetchLessons(level);
    } catch (err) {
      console.error('Failed to load lessons:', err);
    }
  };

  const loadLesson = async (lessonId) => {
    try {
      return await fetchLesson(lessonId);
    } catch (err) {
      console.error('Failed to load lesson:', err);
      throw err;
    }
  };

  const markComplete = async (lessonId, score = 0) => {
    try {
      return await completeLesson(lessonId, score);
    } catch (err) {
      console.error('Failed to complete lesson:', err);
      throw err;
    }
  };

  return {
    lessons,
    currentLesson,
    filteredLessons,
    loading,
    error,
    loadLessons,
    loadLesson,
    markComplete
  };
}
