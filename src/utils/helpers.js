export const playAudio = (audioUrl) => {
  if (!audioUrl) return;
  const audio = new Audio(audioUrl);
  audio.play().catch(err => console.error('Failed to play audio:', err));
};

export const speakText = (text, lang = 'en') => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  }
};

export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const getStreakEmoji = (streak) => {
  if (streak === 0) return '❄️';
  if (streak < 3) return '🌱';
  if (streak < 7) return '🔥';
  if (streak < 14) return '⚡';
  if (streak < 30) return '🚀';
  return '👑';
};

export const getBadgeColor = (badgeName) => {
  const colorMap = {
    'First Steps': 'bg-blue-100 text-blue-800',
    'Streak Master': 'bg-red-100 text-red-800',
    'Perfect Score': 'bg-yellow-100 text-yellow-800',
    'Vocabulary Champion': 'bg-purple-100 text-purple-800',
    'Dedication': 'bg-pink-100 text-pink-800'
  };
  return colorMap[badgeName] || 'bg-gray-100 text-gray-800';
};
