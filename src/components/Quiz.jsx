import { useState } from 'react';
import { Card, Button, Alert } from './UI';

export function QuizMultipleChoice({ question, options = [], correctAnswer, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = () => {
    const correct = selected === correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);
    if (onAnswer) {
      onAnswer(correct, selected);
    }
  };

  return (
    <Card>
      <p className="text-2xl font-bold text-gray-800 mb-6">{question}</p>
      
      <div className="space-y-3 mb-6">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => !submitted && setSelected(option)}
            className={`w-full p-4 text-lg font-semibold rounded-lg transition-all min-h-[60px] ${
              selected === option
                ? 'bg-blue-500 text-white border-2 border-blue-600'
                : 'bg-gray-100 text-gray-800 border-2 border-gray-200 hover:bg-gray-200'
            } ${submitted ? 'opacity-75 cursor-not-allowed' : 'active:scale-95'}`}
            disabled={submitted}
          >
            {option}
          </button>
        ))}
      </div>

      {submitted && (
        <>
          {isCorrect ? (
            <Alert type="success" message="✅ Great job! That's correct!" />
          ) : (
            <Alert type="error" message={`❌ Not quite right. The answer is: ${correctAnswer}`} />
          )}
        </>
      )}

      {!submitted && (
        <Button
          onClick={handleSubmit}
          disabled={!selected}
          variant={selected ? 'primary' : 'secondary'}
        >
          Check Answer
        </Button>
      )}

      {submitted && (
        <Button onClick={() => { setSelected(null); setSubmitted(false); }}>
          Next Question
        </Button>
      )}
    </Card>
  );
}

export function QuizMatching({ pairs = [], onComplete }) {
  const [matches, setMatches] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleMatch = (leftId, rightId) => {
    setMatches(prev => ({
      ...prev,
      [leftId]: rightId
    }));
  };

  const checkAnswers = () => {
    let correct = 0;
    pairs.forEach(pair => {
      if (matches[pair.id] === pair.correct) {
        correct++;
      }
    });
    setSubmitted(true);
    if (onComplete) {
      onComplete(correct === pairs.length);
    }
  };

  const score = Object.keys(matches).length > 0
    ? Math.round((Object.values(matches).filter((v, idx) => v === pairs[idx]?.correct).length / pairs.length) * 100)
    : 0;

  return (
    <Card>
      <p className="text-2xl font-bold text-gray-800 mb-6">Match the pairs:</p>

      {submitted && (
        <Alert
          type={score === 100 ? 'success' : 'warning'}
          message={score === 100 ? `✅ Perfect! All matches correct!` : `⚠️ You got ${score}% correct`}
        />
      )}

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-3">
          {pairs.map((pair, idx) => (
            <button
              key={idx}
              className="w-full p-4 bg-blue-100 text-blue-800 font-semibold text-lg rounded-lg hover:bg-blue-200 transition-all"
            >
              {pair.left}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {pairs.map((pair, idx) => (
            <button
              key={idx}
              className="w-full p-4 bg-purple-100 text-purple-800 font-semibold text-lg rounded-lg hover:bg-purple-200 transition-all"
            >
              {pair.right}
            </button>
          ))}
        </div>
      </div>

      {!submitted && (
        <Button onClick={checkAnswers} variant="success">
          Check Answers
        </Button>
      )}

      {submitted && (
        <Button onClick={() => { setMatches({}); setSubmitted(false); }}>
          Try Again
        </Button>
      )}
    </Card>
  );
}

export function QuizFillInTheBlank({ sentence, correctAnswer, onAnswer }) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = () => {
    const correct = input.toLowerCase().trim() === correctAnswer.toLowerCase();
    setIsCorrect(correct);
    setSubmitted(true);
    if (onAnswer) {
      onAnswer(correct, input);
    }
  };

  return (
    <Card>
      <p className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">{sentence}</p>

      {!submitted && (
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type the missing word..."
            className="w-full p-4 text-lg border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none mb-4"
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <Button onClick={handleSubmit} disabled={!input} variant="primary">
            Check Answer
          </Button>
        </>
      )}

      {submitted && (
        <>
          {isCorrect ? (
            <Alert type="success" message="✅ Correct! Great work!" />
          ) : (
            <Alert type="error" message={`❌ The correct answer is: ${correctAnswer}`} />
          )}
          <Button onClick={() => { setInput(''); setSubmitted(false); }} variant="secondary">
            Try Another
          </Button>
        </>
      )}
    </Card>
  );
}
