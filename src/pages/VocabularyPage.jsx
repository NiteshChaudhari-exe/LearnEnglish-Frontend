import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { Card, Button, Loading, EmptyState, Alert } from '../components/UI';
import { VocabularyCard, VocabularyGrid } from '../components/Lessons';

export function VocabularyPage() {
  const navigate = useNavigate();
  const { user, vocabulary, fetchVocabulary, searchVocabulary, loading } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    if (!user?.id) {
      navigate('/login');
      return;
    }

    fetchVocabulary();
  }, [user?.id, navigate]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setSearchResults(null);
      return;
    }

    try {
      const results = await searchVocabulary(searchTerm);
      setSearchResults(results);
    } catch (err) {
      console.error('Search failed:', err);
    }
  };

  const displayVocab = searchResults || vocabulary;

  if (!user?.id) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-3xl font-bold">📚 Vocabulary</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-3xl hover:scale-110 transition-transform"
        >
          ← Back
        </button>
      </div>

      <div className="p-6">
        {/* Search */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search words..."
              className="flex-1 p-4 text-lg border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <Button type="submit" size="md">
              🔍 Search
            </Button>
            {searchResults && (
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  setSearchTerm('');
                  setSearchResults(null);
                }}
              >
                Clear
              </Button>
            )}
          </div>
        </form>

        {searchResults && (
          <Alert
            type="info"
            message={`Found ${searchResults.length} word(s)`}
            onClose={() => setSearchResults(null)}
          />
        )}

        {/* Selected word detail */}
        {selectedWord ? (
          <>
            <button
              onClick={() => setSelectedWord(null)}
              className="text-2xl hover:scale-110 transition-transform mb-4 flex items-center gap-2"
            >
              ← Back
            </button>
            <VocabularyCard
              word={selectedWord.word}
              translation={selectedWord.translation}
              phonetic={selectedWord.phonetic}
              example={selectedWord.example_sentence}
              audioUrl={selectedWord.audio_url}
              imageUrl={selectedWord.image_url}
            />
          </>
        ) : loading ? (
          <Loading />
        ) : displayVocab && displayVocab.length > 0 ? (
          <>
            {/* Grid view */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {searchResults ? 'Search Results' : 'Learn New Words'}
            </h2>
            <VocabularyGrid items={displayVocab.slice(0, 12)} />

            {/* List view of all vocabulary */}
            <div className="space-y-3 mt-8">
              <h3 className="text-xl font-bold text-gray-800">All Vocabulary</h3>
              {displayVocab.map((word, idx) => (
                <Card
                  key={idx}
                  className="cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                  onClick={() => setSelectedWord(word)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{word.word}</p>
                      <p className="text-lg text-gray-600">{word.translation}</p>
                    </div>
                    <span className="text-3xl">📖</span>
                  </div>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <EmptyState
            title="No vocabulary found"
            description={searchTerm ? 'Try a different search term' : 'Start with a lesson!'}
            icon="📚"
          />
        )}
      </div>
    </div>
  );
}

export default VocabularyPage;
