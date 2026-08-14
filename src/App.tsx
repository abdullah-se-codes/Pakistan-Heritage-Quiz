import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUESTION_BANK, getQuizQuestions } from './data/questions';
import { QuizQuestion, UserAnswerRecord, QuizViewMode, QuestionCategory } from './types';
import { Header } from './components/Header';
import { HeroLanding } from './components/HeroLanding';
import { QuestionCard } from './components/QuestionCard';
import { ResultsSummary } from './components/ResultsSummary';
import { ExplanationReview } from './components/ExplanationReview';
import { CrescentStarIcon } from './components/CrescentStarIcon';
import { playSound } from './utils/audio';

const SEEN_STORAGE_KEY = 'pak_heritage_seen_by_topic_v2';

export default function App() {
  const [viewMode, setViewMode] = useState<QuizViewMode>('landing');
  const [isStudyGuide, setIsStudyGuide] = useState<boolean>(false);
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerRecord[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<QuestionCategory | 'All'>('All');
  
  // Track seen question IDs per topic in localStorage to strictly ensure NO question repeats in the current quiz or across levels
  const [seenByTopic, setSeenByTopic] = useState<Record<string, number[]>>(() => {
    try {
      const saved = localStorage.getItem(SEEN_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return {
      'All': [],
      'Pakistan Movement': [],
      'National Icons': [],
      'Science & Innovation': [],
      'Culture & Heritage': [],
      'Military Gallantry': [],
      'Sports & Global Feats': []
    };
  });

  const [thankYouMessage, setThankYouMessage] = useState<string | null>(null);
  const [quizLevel, setQuizLevel] = useState<number>(1);

  // Sync seen question IDs to localStorage
  const saveSeenState = (updated: Record<string, number[]>) => {
    setSeenByTopic(updated);
    try {
      localStorage.setItem(SEEN_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore localStorage errors
    }
  };

  // Start a fresh 10-question quiz (e.g. from Landing or Category Pick) with guaranteed zero repeats
  const handleStartQuiz = (category: QuestionCategory | 'All' = 'All') => {
    playSound('click', soundEnabled);
    const categoryKey = category;
    const currentSeen = seenByTopic[categoryKey] || [];

    const { questions: chosenQuestions, isNewCycle } = getQuizQuestions(
      category === 'All' ? 'all' : category,
      10,
      currentSeen
    );
    
    // Update seen questions for this specific category and the global pool
    const newIds = chosenQuestions.map(q => q.id);
    const updatedCategorySeen = isNewCycle
      ? newIds
      : Array.from(new Set([...currentSeen, ...newIds]));

    const updatedAllSeen = Array.from(new Set([...(seenByTopic['All'] || []), ...newIds]));

    const updatedState = {
      ...seenByTopic,
      [categoryKey]: updatedCategorySeen,
      'All': updatedAllSeen
    };

    saveSeenState(updatedState);

    setCurrentQuestions(chosenQuestions);
    setCurrentIndex(0);
    setUserAnswers([]);
    setActiveCategory(category);
    setIsStudyGuide(false);
    setThankYouMessage(null);
    setQuizLevel(1);
    setViewMode('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Option 1 at end: Start Again (retries the current 10 questions for revision/practice)
  const handleStartAgainSameQuiz = () => {
    playSound('click', soundEnabled);
    setCurrentIndex(0);
    setUserAnswers([]);
    setIsStudyGuide(false);
    setViewMode('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Option 2 at end: Next Level (10 brand-new unseen MCQs with zero repeats)
  const handleNextLevelQuiz = () => {
    playSound('click', soundEnabled);
    const categoryKey = activeCategory;
    const currentSeen = seenByTopic[categoryKey] || [];

    const { questions: newQuestions, isNewCycle } = getQuizQuestions(
      activeCategory === 'All' ? 'all' : activeCategory,
      10,
      currentSeen
    );

    const newIds = newQuestions.map(q => q.id);
    const updatedCategorySeen = isNewCycle
      ? newIds
      : Array.from(new Set([...currentSeen, ...newIds]));

    const updatedAllSeen = Array.from(new Set([...(seenByTopic['All'] || []), ...newIds]));

    const updatedState = {
      ...seenByTopic,
      [categoryKey]: updatedCategorySeen,
      'All': updatedAllSeen
    };

    saveSeenState(updatedState);

    setCurrentQuestions(newQuestions);
    setCurrentIndex(0);
    setUserAnswers([]);
    setIsStudyGuide(false);
    setQuizLevel(prev => prev + 1);
    setViewMode('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Option 3 at end: Home Screen (with thank you message)
  const handleGoHomeFromResults = () => {
    playSound('click', soundEnabled);
    const correctCount = userAnswers.filter((a) => a.isCorrect).length;
    const totalCount = currentQuestions.length || 10;
    
    setThankYouMessage(
      `We hope you enjoyed exploring Pakistan's glorious history, culture, and achievements. You scored ${correctCount}/${totalCount} in your last session!`
    );
    setViewMode('landing');
    setIsStudyGuide(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generic go home (e.g. from header)
  const handleGoHome = () => {
    playSound('click', soundEnabled);
    setViewMode('landing');
    setIsStudyGuide(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open study guide / full exploration
  const handleOpenStudyGuide = () => {
    playSound('click', soundEnabled);
    setIsStudyGuide(true);
    setViewMode('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Answer selected
  const handleAnswerSelected = (answer: UserAnswerRecord) => {
    setUserAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== answer.questionId);
      return [...filtered, answer];
    });
  };

  // Next question / Finish
  const handleNextQuestion = () => {
    playSound('click', soundEnabled);
    if (currentIndex + 1 < currentQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setViewMode('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Open deep review mode
  const handleReviewAll = () => {
    playSound('click', soundEnabled);
    setIsStudyGuide(false);
    setViewMode('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQuestion = currentQuestions[currentIndex];
  const score = userAnswers.filter((a) => a.isCorrect).length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 font-['Plus_Jakarta_Sans'] antialiased">
      {/* Sticky App Header */}
      <Header
        viewMode={viewMode}
        onGoHome={handleGoHome}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        currentQuestionIndex={currentIndex}
        totalQuestions={currentQuestions.length || 10}
        score={score}
        onOpenStudyGuide={handleOpenStudyGuide}
      />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <AnimatePresence mode="wait">
          {viewMode === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HeroLanding
                onStartQuiz={handleStartQuiz}
                onOpenStudyGuide={handleOpenStudyGuide}
                thankYouMessage={thankYouMessage}
                onDismissThankYou={() => setThankYouMessage(null)}
              />
            </motion.div>
          )}

          {viewMode === 'quiz' && currentQuestion && (
            <motion.div
              key={`quiz-${currentQuestion.id}-${quizLevel}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionCard
                question={currentQuestion}
                currentIndex={currentIndex}
                totalQuestions={currentQuestions.length || 10}
                onAnswerSelected={handleAnswerSelected}
                onNextQuestion={handleNextQuestion}
                isLastQuestion={currentIndex === currentQuestions.length - 1}
                soundEnabled={soundEnabled}
              />
            </motion.div>
          )}

          {viewMode === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ResultsSummary
                answers={userAnswers}
                questions={currentQuestions}
                onStartAgain={handleStartAgainSameQuiz}
                onNextLevel={handleNextLevelQuiz}
                onGoHome={handleGoHomeFromResults}
                onReviewAll={handleReviewAll}
                soundEnabled={soundEnabled}
              />
            </motion.div>
          )}

          {viewMode === 'review' && (
            <motion.div
              key="review"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ExplanationReview
                questions={isStudyGuide ? QUESTION_BANK : currentQuestions}
                answers={userAnswers}
                onBackToResults={!isStudyGuide ? () => setViewMode('results') : undefined}
                onRetakeQuiz={() => handleStartQuiz('All')}
                isStudyGuideMode={isStudyGuide}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Patriotic Footer */}
      <footer id="app-footer" className="w-full bg-[#01411C] text-white border-t border-emerald-800 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-white border border-emerald-600/50 shadow-inner">
              <CrescentStarIcon className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-base font-['Outfit'] tracking-tight">
              Pakistan Heritage Quiz
            </span>
          </div>

          <p className="text-xs sm:text-sm text-emerald-200/90 max-w-xl mx-auto leading-relaxed">
            Celebrating 79 Years of Pakistan&apos;s Independence (14 August 1947 – 2026).
            Honoring the founders, scientists, poets, armed forces heroes, sports legends, and people of Pakistan.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-emerald-300/80 font-medium">
            <span>Unity • Faith • Discipline</span>
            <span>•</span>
            <span>Pakistan Zindabad 🇵🇰</span>
          </div>

          <div id="footer-author-credit" className="pt-3 border-t border-emerald-800/80">
            <p className="text-xs sm:text-sm font-bold text-amber-300 tracking-wide font-['Outfit']">
              Made by Muhammad Abdullah, SED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
