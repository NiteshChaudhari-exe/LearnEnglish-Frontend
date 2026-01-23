// Toast notification system with encouraging messages
import { toast as sonnerToast } from 'sonner';

export const showSuccessToast = (title, description = '') => {
  return sonnerToast.success(title, {
    description,
    duration: 4000
  });
};

export const showErrorToast = (title, description = '') => {
  return sonnerToast.error(title, {
    description,
    duration: 4000
  });
};

export const showInfoToast = (title, description = '') => {
  return sonnerToast.info(title, {
    description,
    duration: 3000
  });
};

export const showWarningToast = (title, description = '') => {
  return sonnerToast.warning(title, {
    description,
    duration: 3000
  });
};

// Encouraging feedback based on score
export const showQuizFeedback = (score, showNepali = false) => {
  if (score >= 90) {
    return showSuccessToast(
      showNepali ? '🎉 उत्कृष्ट काम!' : '🎉 Perfect Score!',
      showNepali ? 'तपाई राम्रो सिक्दै हुनुहुन्छ!' : 'You are learning exceptionally well!'
    );
  } else if (score >= 80) {
    return showSuccessToast(
      showNepali ? '🎉 उत्कृष्ट काम!' : '🎉 Excellent work!',
      showNepali ? 'तपाई राम्रो सिक्दै हुनुहुन्छ!' : 'You are learning well!'
    );
  } else if (score >= 70) {
    return showSuccessToast(
      showNepali ? '👏 राम्रो प्रयास!' : '👏 Good effort!',
      showNepali ? 'अभ्यास जारी राख्नुहोस्!' : 'Keep practicing to improve!'
    );
  } else if (score >= 60) {
    return showInfoToast(
      showNepali ? '👏 राम्रो प्रयास!' : '👏 Good try!',
      showNepali ? 'अभ्यास जारी राख्नुहोस्!' : 'Practice more to master this lesson!'
    );
  } else {
    return showInfoToast(
      showNepali ? '💪 जारी राख्नुहोस्!' : '💪 Keep Trying!',
      showNepali ? 'अभ्यासले तपाईंलाई उत्कृष्ट बनाउनेछ!' : 'Practice makes perfect!'
    );
  }
};

// Streak milestone feedback
export const showStreakFeedback = (streakDays, showNepali = false) => {
  if (streakDays === 1) {
    return showSuccessToast(
      showNepali ? '🔥 शुरु भयो!' : '🔥 Streak Started!',
      showNepali ? 'प्रत्येक दिन सिकें। तपाई गर्न सक्नुहुन्छ!' : 'Learn every day. You can do this!'
    );
  } else if (streakDays === 7) {
    return showSuccessToast(
      showNepali ? '🔥 एक हप्ता स्ट्रीक!' : '🔥 One Week Streak!',
      showNepali ? 'बहुत राम्रो! अब आजीवन आदत बनाइये!' : 'Awesome! You are building a habit!'
    );
  } else if (streakDays === 14) {
    return showSuccessToast(
      showNepali ? '🔥 दुई हप्ता स्ट्रीक!' : '🔥 Two Week Streak!',
      showNepali ? 'तपाई अनुमोदित हुनुहुन्छ! यो प्रभावशाली छ!' : 'You are unstoppable! This is impressive!'
    );
  } else if (streakDays === 30) {
    return showSuccessToast(
      showNepali ? '👑 एक महिना स्ट्रीक!' : '👑 One Month Streak!',
      showNepali ? 'तपाई एक सीखने वाले हौ! बिल्ल अर्जित गरें!' : 'You are a learning champion! Badge earned!'
    );
  } else if (streakDays % 7 === 0) {
    return showSuccessToast(
      showNepali ? '🔥 स्ट्रीक बनाए रख!' : '🔥 Streak maintained!',
      showNepali ? 'तपाई राम्रो गरीदै हुनुहुन्छ! जारी रखें!' : 'You are doing great! Keep going!'
    );
  }
};

// Lesson completion feedback
export const showLessonCompleteFeedback = (lessonTitle, showNepali = false) => {
  return showSuccessToast(
    showNepali ? '✅ पाठ पूरा!' : '✅ Lesson Complete!',
    showNepali ? `${lessonTitle} सफलतापूर्वक पूरा हुएको!` : `${lessonTitle} completed successfully!`
  );
};

// Badge earned feedback
export const showBadgeEarnedFeedback = (badgeName, showNepali = false) => {
  return showSuccessToast(
    showNepali ? '🎖️ नयाँ बिल्ल अर्जन गरें!' : '🎖️ New Badge Earned!',
    showNepali ? `${badgeName} बिल्ल अब आपका छ!` : `You earned the ${badgeName} badge!`
  );
};

// Vocabulary learned feedback
export const showVocabularyLearned = (wordCount, showNepali = false) => {
  return showInfoToast(
    showNepali ? '📚 शब्दावली सिखा!' : '📚 Word Learned!',
    showNepali ? `अब तपाई ${wordCount} शब्दहरू जानुहुन्छ!` : `You now know ${wordCount} words!`
  );
};

// Error handling with friendly messages
export const showFriendlyError = (error, showNepali = false) => {
  if (error.response?.status === 401) {
    return showErrorToast(
      showNepali ? 'लगइन आवश्यक छ' : 'Login Required',
      showNepali ? 'कृपया लगइन गर्नुहोस् वा खाता बनाउनुहोस्' : 'Please log in or create an account'
    );
  } else if (error.response?.status === 404) {
    return showErrorToast(
      showNepali ? 'पाठ मिलेन' : 'Lesson Not Found',
      showNepali ? 'यो पाठ उपलब्ध छैन' : 'This lesson is not available'
    );
  } else if (error.response?.status === 500) {
    return showErrorToast(
      showNepali ? 'सर्भर त्रुटि' : 'Server Error',
      showNepali ? 'कृपया बाद मा पुनः कोशिश गर्नुहोस्' : 'Please try again later'
    );
  } else {
    return showErrorToast(
      showNepali ? 'त्रुटि हुएको' : 'Error Occurred',
      showNepali ? 'कृपया बाद मा पुनः कोशिश गर्नुहोस्' : 'Please try again'
    );
  }
};
