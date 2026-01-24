import { useEffect, useState } from 'react';
import { useStore } from '../store';

/**
 * Custom hook for vocabulary management
 * Handles fetching, searching, and filtering vocabulary
 */
export function useVocabulary(lessonId = null) {
  const { vocabulary, fetchVocabulary, searchVocabulary, loading, error } = useStore();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadVocabulary();
  }, [lessonId]);

  const loadVocabulary = async () => {
    try {
      await fetchVocabulary(lessonId);
    } catch (err) {
      console.error('Failed to load vocabulary:', err);
    }
  };

  const search = async (term) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      const results = await searchVocabulary(term);
      setSearchResults(results);
    } catch (err) {
      console.error('Failed to search vocabulary:', err);
      setSearchResults([]);
    }
  };

  const getDisplayVocabulary = () => {
    return searchTerm.trim() ? searchResults : vocabulary;
  };

  return {
    vocabulary,
    searchResults,
    searchTerm,
    loading,
    error,
    search,
    getDisplayVocabulary,
    loadVocabulary
  };
}
