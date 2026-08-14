import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuizQuestion, QuizOption, UserAnswerRecord } from '../types';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Lightbulb,
  Clock,
  Flag,
  Atom,
  Landmark,
  ShieldAlert,
  Trophy,
  UserCheck,
  Info
} from 'lucide-react';
import { playSound } from '../utils/audio';

interface QuestionCardProps {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  onAnswerSelected: (answer: UserAnswerRecord) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
  soundEnabled: boolean;
}

export function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  onAnswerSelected,
  onNextQuestion,
  isLastQuestion,
  soundEnabled
}: QuestionCardProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [secondsSpent, setSecondsSpent] = useState<number>(0);

  // Timer counter
  useEffect(() => {
    if (isAnswered) return;
    const interval = setInterval(() => {
      setSecondsSpent((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isAnswered, question.id]);

  // Reset local state when question changes
  useEffect(() => {
    setSelectedOptionId(null);
    setIsAnswered(false);
    setSecondsSpent(0);
  }, [question.id]);

  const handleSelectOption = (option: QuizOption) => {
    if (isAnswered) return;

    setSelectedOptionId(option.id);
    setIsAnswered(true);

    const isCorrect = option.isCorrect;
    if (isCorrect) {
      playSound('correct', soundEnabled);
    } else {
      playSound('wrong', soundEnabled);
    }

    onAnswerSelected({
      questionId: question.id,
      selectedOptionId: option.id,
      isCorrect,
      timeSpentSeconds: secondsSpent
    });
  };

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Flag':
        return <Flag className="w-3.5 h-3.5" />;
      case 'UserCheck':
        return <UserCheck className="w-3.5 h-3.5" />;
      case 'Atom':
        return <Atom className="w-3.5 h-3.5" />;
      case 'Landmark':
        return <Landmark className="w-3.5 h-3.5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-3.5 h-3.5" />;
      case 'Trophy':
        return <Trophy className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  const progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;
  const userOption = question.options.find((o) => o.id === selectedOptionId);
  const userIsCorrect = userOption?.isCorrect ?? false;

  return (
    <div id="quiz-question-container" className="space-y-6 max-w-3xl mx-auto pb-10">
      {/* Top Header & Progress */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#01411C] text-white px-2.5 py-0.5 rounded-full font-bold text-xs">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2 py-0.5 rounded-md text-xs font-semibold">
              {getCategoryIcon(question.categoryIcon)}
              <span className="hidden xs:inline">{question.category}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-500 text-xs">
            <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded text-slate-600">
              <Clock className="w-3 h-3" />
              {secondsSpent}s
            </span>
            <span className="font-bold text-emerald-900">{Math.round(progressPercentage)}%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#01411C] to-emerald-500 rounded-full"
            initial={{ width: `${((currentIndex) / totalQuestions) * 100}%` }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35 }}
        id={`question-card-${question.id}`}
        className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-emerald-900/10 text-slate-900"
      >
        {/* Context Snippet if available */}
        {question.contextSnippet && (
          <div className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-800 bg-emerald-50/80 border border-emerald-200/60 px-3 py-1 rounded-lg">
            <Info className="w-3.5 h-3.5 flex-shrink-0 text-emerald-700" />
            <span>{question.contextSnippet}</span>
          </div>
        )}

        {/* Question Text */}
        <h2 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-slate-900 leading-snug tracking-tight mb-6">
          {question.question}
        </h2>

        {/* ========================================================= */}
        {/* STATE 1: Unanswered - 4 Interactive Option Buttons */}
        {/* ========================================================= */}
        {!isAnswered ? (
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Select the correct answer:
            </p>
            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option) => (
                <button
                  key={option.id}
                  id={`option-btn-${question.id}-${option.id}`}
                  onClick={() => handleSelectOption(option)}
                  className="w-full text-left p-4 sm:p-4.5 rounded-2xl border-2 border-slate-200 bg-slate-50/60 hover:bg-emerald-50/50 hover:border-[#01411C] transition duration-150 flex items-start gap-3.5 group active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <span className="w-8 h-8 rounded-xl bg-white border border-slate-300 text-slate-700 group-hover:bg-[#01411C] group-hover:text-white group-hover:border-[#01411C] font-bold text-sm flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
                    {option.id}
                  </span>
                  <div className="pt-0.5 text-slate-800 text-sm sm:text-base font-semibold group-hover:text-emerald-950 transition-colors">
                    {option.text}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* STATE 2: Answered - Reveal ALL 4 Options with Deep Explanations */
          /* ========================================================= */
          <div className="space-y-6">
            {/* Feedback Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded-2xl flex items-center gap-3.5 border ${
                userIsCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50 border-amber-300 text-amber-950'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  userIsCorrect
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                }`}
              >
                {userIsCorrect ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <XCircle className="w-6 h-6" />
                )}
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base font-['Outfit']">
                  {userIsCorrect ? 'Correct! Excellent Historical Knowledge 🇵🇰' : 'Not quite! Here is the full historical context:'}
                </h4>
                <p className="text-xs sm:text-sm opacity-90">
                  {userIsCorrect
                    ? 'You chose the right answer. Below is the historical context for all four options.'
                    : 'Explore the detailed breakdown for every choice below to understand what actually happened.'}
                </p>
              </div>
            </motion.div>

            {/* Explanation Heading */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <h3 className="text-sm sm:text-base font-bold font-['Outfit'] text-slate-900">
                    Comprehensive Heritage Breakdown (All 4 Options):
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Learn from every option
                </span>
              </div>

              {/* 4 Detailed Option Cards */}
              <div className="space-y-3">
                {question.options.map((option) => {
                  const isUserSelection = option.id === selectedOptionId;
                  const isCorrect = option.isCorrect;

                  return (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      id={`detailed-explanation-${question.id}-${option.id}`}
                      className={`p-4 sm:p-4.5 rounded-2xl border-2 transition ${
                        isCorrect
                          ? 'bg-emerald-50/70 border-[#01411C] shadow-sm ring-1 ring-emerald-500/30'
                          : isUserSelection
                          ? 'bg-red-50/40 border-red-300'
                          : 'bg-slate-50/90 border-slate-200'
                      }`}
                    >
                      {/* Option Header Row */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-start gap-2.5">
                          <span
                            className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm ${
                              isCorrect
                                ? 'bg-[#01411C] text-white'
                                : isUserSelection
                                ? 'bg-red-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {option.id}
                          </span>
                          <span
                            className={`text-sm sm:text-base font-bold leading-tight ${
                              isCorrect ? 'text-emerald-950' : 'text-slate-800'
                            }`}
                          >
                            {option.text}
                          </span>
                        </div>

                        {/* Status Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 flex-shrink-0">
                          {isUserSelection && (
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                                isCorrect
                                  ? 'bg-emerald-200 text-emerald-900'
                                  : 'bg-red-200 text-red-900'
                              }`}
                            >
                              Your Pick
                            </span>
                          )}

                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold bg-[#01411C] text-white px-2.5 py-0.5 rounded-md">
                              <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                              Correct Answer
                            </span>
                          ) : (
                            <span className="text-[11px] font-semibold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                              Historical Fact
                            </span>
                          )}
                        </div>
                      </div>

                      {/* 1-2 sentence detailed historical fact / explanation */}
                      <div
                        className={`mt-2 text-xs sm:text-sm leading-relaxed pl-9 ${
                          isCorrect
                            ? 'text-emerald-900 font-medium'
                            : 'text-slate-600'
                        }`}
                      >
                        {option.explanation}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Fun Fact / Trivia Note */}
            {question.funFact && (
              <div
                id={`fun-fact-${question.id}`}
                className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 text-amber-950 text-xs sm:text-sm"
              >
                <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold font-['Outfit'] block text-amber-900 mb-0.5">
                    Independence Trivia Note:
                  </strong>
                  <p className="text-amber-900/90 leading-relaxed">
                    {question.funFact}
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Action: Next Question / View Results */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-end">
              <button
                id="btn-next-question"
                onClick={onNextQuestion}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#01411C] hover:bg-[#085327] text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-950/20 transition active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
              >
                <span>{isLastQuestion ? 'View Final Results' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
