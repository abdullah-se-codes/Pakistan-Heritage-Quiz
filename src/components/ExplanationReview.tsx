import { useState } from 'react';
import { motion } from 'motion/react';
import { QuizQuestion, UserAnswerRecord, QuestionCategory } from '../types';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Filter,
  Search,
  BookOpen,
  Sparkles,
  RotateCcw,
  Check
} from 'lucide-react';

interface ExplanationReviewProps {
  questions: QuizQuestion[];
  answers: UserAnswerRecord[];
  onBackToResults?: () => void;
  onRetakeQuiz: () => void;
  isStudyGuideMode?: boolean;
}

export function ExplanationReview({
  questions,
  answers,
  onBackToResults,
  onRetakeQuiz,
  isStudyGuideMode = false
}: ExplanationReviewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filterMistakesOnly, setFilterMistakesOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredQuestions = questions.filter((q) => {
    // Category filter
    if (selectedCategory !== 'All' && q.category !== selectedCategory) {
      return false;
    }

    // Mistakes filter
    if (!isStudyGuideMode && filterMistakesOnly) {
      const ans = answers.find((a) => a.questionId === q.id);
      if (ans?.isCorrect) return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const qText = q.question.toLowerCase();
      const qOptions = q.options.map((o) => `${o.text} ${o.explanation}`).join(' ').toLowerCase();
      const match = qText.includes(searchQuery.toLowerCase()) || qOptions.includes(searchQuery.toLowerCase());
      if (!match) return false;
    }

    return true;
  });

  const categories = ['All', ...Array.from(new Set(questions.map((q) => q.category)))];

  return (
    <div id="explanation-review-view" className="space-y-6 max-w-4xl mx-auto pb-14">
      {/* Header bar */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {onBackToResults && (
            <button
              id="btn-back-to-results"
              onClick={onBackToResults}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition active:scale-95"
              aria-label="Back to results"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-slate-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-700" />
              <span>{isStudyGuideMode ? 'Heritage Study Guide & Glossary' : 'Comprehensive Explanations Ledger'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {isStudyGuideMode
                ? 'Explore all historical topics, national heroes, and in-depth facts behind every single option'
                : 'Review the detailed 1–2 sentence facts behind all 4 choices for every question'}
            </p>
          </div>
        </div>

        <button
          id="btn-retake-quiz-review"
          onClick={onRetakeQuiz}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#01411C] hover:bg-[#085327] text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-95"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{isStudyGuideMode ? 'Start Quiz' : 'Retake Quiz'}</span>
        </button>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="input-search-explanations"
            type="text"
            placeholder="Search keywords (e.g. Jinnah, 1940, Nobel, K2)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-[#01411C] text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mistakes only checkbox (only when viewing quiz results) */}
        {!isStudyGuideMode && (
          <button
            onClick={() => setFilterMistakesOnly((prev) => !prev)}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition ${
              filterMistakesOnly
                ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Mistakes Only</span>
          </button>
        )}
      </div>

      {/* Questions list with all 4 explanations */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
            <BookOpen className="w-10 h-10 mx-auto text-slate-300 mb-2" />
            <p className="text-sm font-semibold">No questions match your current filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setFilterMistakesOnly(false);
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-emerald-800 underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredQuestions.map((question, qIdx) => {
            const userAnswer = answers.find((a) => a.questionId === question.id);
            const userPickId = userAnswer?.selectedOptionId;
            const isUserCorrect = userAnswer?.isCorrect;

            return (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: qIdx * 0.04 }}
                id={`review-card-${question.id}`}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200 space-y-4"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-[#01411C] text-white px-2 py-0.5 rounded-md">
                        #{question.id}
                      </span>
                      <span className="text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded-md">
                        {question.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-['Outfit'] text-slate-900 leading-snug">
                      {question.question}
                    </h3>
                  </div>

                  {!isStudyGuideMode && userAnswer && (
                    <div className="flex-shrink-0">
                      {isUserCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-lg">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          Correct
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold bg-red-100 text-red-900 px-2.5 py-1 rounded-lg">
                          <XCircle className="w-3.5 h-3.5 text-red-700" />
                          Incorrect
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* 4 Detailed Option Explanations */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Option-by-Option Breakdown:
                  </p>
                  <div className="grid grid-cols-1 gap-2.5">
                    {question.options.map((opt) => {
                      const isCorrect = opt.isCorrect;
                      const isPicked = opt.id === userPickId;

                      return (
                        <div
                          key={opt.id}
                          className={`p-3.5 rounded-2xl border transition ${
                            isCorrect
                              ? 'bg-emerald-50/70 border-emerald-600 ring-1 ring-emerald-600/20'
                              : isPicked
                              ? 'bg-red-50/40 border-red-300'
                              : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-start gap-2">
                              <span
                                className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center flex-shrink-0 ${
                                  isCorrect
                                    ? 'bg-[#01411C] text-white'
                                    : isPicked
                                    ? 'bg-red-600 text-white'
                                    : 'bg-slate-200 text-slate-700'
                                }`}
                              >
                                {opt.id}
                              </span>
                              <span className={`text-xs sm:text-sm font-bold ${isCorrect ? 'text-emerald-950' : 'text-slate-800'}`}>
                                {opt.text}
                              </span>
                            </div>

                            <div className="flex items-center gap-1 flex-shrink-0">
                              {isPicked && (
                                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 uppercase">
                                  Your Pick
                                </span>
                              )}
                              {isCorrect ? (
                                <span className="text-[10px] font-bold bg-[#01411C] text-white px-2 py-0.5 rounded">
                                  Correct Answer
                                </span>
                              ) : (
                                <span className="text-[10px] font-semibold bg-slate-200 text-slate-600 px-2 py-0.5 rounded">
                                  Historical Context
                                </span>
                              )}
                            </div>
                          </div>

                          <p
                            className={`mt-1.5 text-xs leading-relaxed pl-8 ${
                              isCorrect ? 'text-emerald-900 font-medium' : 'text-slate-600'
                            }`}
                          >
                            {opt.explanation}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Fun Fact */}
                {question.funFact && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs flex items-start gap-2 text-amber-950">
                    <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-amber-900">Historical Trivia: </strong>
                      <span>{question.funFact}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
