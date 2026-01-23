import { useState, useEffect } from 'react';
import { Card, Button, Alert } from './UI';
import { playAudio, speakText } from '../utils/helpers';

export function VocabularyCard({ word, translation, phonetic, example, audioUrl, imageUrl, onPronounce = null }) {
  const [showTranslation, setShowTranslation] = useState(false);

  const handlePronounce = () => {
    if (onPronounce) {
      onPronounce(word);
    } else {
      speakText(word, 'en');
    }
  };

  return (
    <Card className="border-l-4 border-blue-500">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-3xl font-bold text-blue-600 mb-2">{word}</h3>
          <p className="text-lg text-gray-600 font-semibold italic">{phonetic}</p>
        </div>
        {imageUrl && (
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-4xl">
            🖼️
          </div>
        )}
      </div>

      <div className="mb-4">
        <p className="text-lg text-gray-700 mb-2">
          <strong>Example:</strong> {example}
        </p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <Button
          size="md"
          onClick={handlePronounce}
          className="flex-1"
        >
          🔊 Pronounce
        </Button>
        <Button
          variant="secondary"
          size="md"
          onClick={() => setShowTranslation(!showTranslation)}
          className="flex-1"
        >
          {showTranslation ? `Hide (${translation})` : 'Show Translation'}
        </Button>
      </div>

      {showTranslation && (
        <Alert type="info" message={`Translation: ${translation}`} />
      )}
    </Card>
  );
}

export function VocabularyGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="text-4xl mb-2">🔤</div>
          <p className="text-lg font-bold text-blue-600">{item.word}</p>
          <p className="text-sm text-gray-600">{item.translation}</p>
        </div>
      ))}
    </div>
  );
}

export function LessonContent({ lesson }) {
  if (!lesson) return null;

  const content = typeof lesson.content === 'string'
    ? JSON.parse(lesson.content)
    : lesson.content;

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <h2 className="text-3xl font-bold text-blue-600 mb-3">{lesson.title}</h2>
        <p className="text-xl text-gray-700 mb-4">{lesson.description}</p>
        <p className="text-lg text-gray-600">⏱️ {lesson.duration_minutes} minutes</p>
      </Card>

      {content.introduction && (
        <Card>
          <p className="text-xl leading-relaxed text-gray-800">{content.introduction}</p>
        </Card>
      )}

      {content.letters && (
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Alphabet</h3>
          <div className="grid grid-cols-6 gap-3">
            {content.letters.map(letter => (
              <button
                key={letter}
                onClick={() => speakText(letter, 'en')}
                className="aspect-square bg-blue-500 text-white text-2xl font-bold rounded-lg hover:bg-blue-600 active:scale-95 transition-all"
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      )}

      {content.phrases && (
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Common Phrases</h3>
          <div className="space-y-3">
            {content.phrases.map((phrase, idx) => (
              <Card key={idx}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{phrase.phrase}</p>
                    <p className="text-lg text-gray-600">{phrase.context}</p>
                  </div>
                  <button
                    onClick={() => speakText(phrase.phrase, 'en')}
                    className="text-4xl hover:scale-110 transition-transform"
                  >
                    🔊
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {content.pronouns && (
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Personal Pronouns</h3>
          <div className="grid grid-cols-2 gap-3">
            {content.pronouns.map((pronoun, idx) => (
              <button
                key={idx}
                onClick={() => speakText(pronoun, 'en')}
                className="bg-purple-500 text-white text-xl font-bold py-4 rounded-lg hover:bg-purple-600 active:scale-95 transition-all"
              >
                {pronoun}
              </button>
            ))}
          </div>
        </div>
      )}

      {content.objects && (
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Common Objects</h3>
          <div className="space-y-3">
            {content.objects.map((obj, idx) => (
              <Card key={idx} className="flex items-center justify-between">
                <p className="text-2xl font-bold text-blue-600">{obj}</p>
                <button
                  onClick={() => speakText(obj, 'en')}
                  className="text-3xl hover:scale-110 transition-transform"
                >
                  🔊
                </button>
              </Card>
            ))}
          </div>
        </div>
      )}

      {content.verbs && (
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Action Verbs</h3>
          <div className="grid grid-cols-2 gap-3">
            {content.verbs.map((verb, idx) => (
              <button
                key={idx}
                onClick={() => speakText(verb, 'en')}
                className="bg-green-500 text-white text-lg font-bold py-4 rounded-lg hover:bg-green-600 active:scale-95 transition-all"
              >
                {verb}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
