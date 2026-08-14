import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { UserAnswerRecord, QuizQuestion } from '../types';
import { CrescentStarIcon } from './CrescentStarIcon';
import {
  RotateCcw,
  Sparkles,
  CheckCircle2,
  XCircle,
  Home,
  FastForward,
  BookOpen,
  Share2,
  Check,
  Award,
  ArrowRight
} from 'lucide-react';
import { playSound } from '../utils/audio';

interface ResultsSummaryProps {
  answers: UserAnswerRecord[];
  questions: QuizQuestion[];
  onStartAgain: () => void;
  onNextLevel: () => void;
  onGoHome: () => void;
  onReviewAll: () => void;
  soundEnabled: boolean;
}

export function ResultsSummary({
  answers,
  questions,
  onStartAgain,
  onNextLevel,
  onGoHome,
  onReviewAll,
  soundEnabled
}: ResultsSummaryProps) {
  const [copied, setCopied] = useState(false);

  const totalQuestions = questions.length || 10;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const totalTimeSeconds = answers.reduce((acc, curr) => acc + curr.timeSpentSeconds, 0);
  const isLowScore = correctCount < 3;

  // Trigger celebration or sad audio effects based on final score
  useEffect(() => {
    if (isLowScore) {
      playSound('sad', soundEnabled);
    } else {
      playSound('complete', soundEnabled);
    }

    if (percentage >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#01411C', '#0E5A2A', '#10B981', '#F59E0B', '#FFFFFF']
        });
      } catch {
        // Safe fallback
      }
    }
  }, [percentage, soundEnabled, isLowScore]);

  // Determine Title & Message
  const getBadgeAndMessage = () => {
    if (correctCount < 3) {
      return {
        title: 'Need More Practice 📖',
        rank: 'History Novice',
        message: 'Your score was below 3. Review all the detailed explanations below to master Pakistan\'s historic milestones, leaders, and national feats!',
        color: 'from-rose-900 via-red-950 to-slate-950'
      };
    } else if (percentage === 100) {
      return {
        title: 'National Heritage Laureate 🏆',
        rank: 'Master of Pakistan History',
        message: 'Magnificent achievement! You scored a perfect 10/10 on Pakistan\'s history, visionary leaders, and national feats.',
        color: 'from-emerald-700 to-[#01411C]'
      };
    } else if (percentage >= 80) {
      return {
        title: 'Pride of the Nation 🌟',
        rank: 'Distinguished Patriot Scholar',
        message: 'Outstanding knowledge! You demonstrated profound understanding of Pakistan\'s independence journey and monumental landmarks.',
        color: 'from-emerald-800 to-teal-900'
      };
    } else if (percentage >= 60) {
      return {
        title: 'Heritage Scholar 📜',
        rank: 'Knowledgeable Patriot',
        message: 'Great effort! You have a solid grasp of Pakistan\'s cultural identity. Check the detailed answers below to master all 10 questions.',
        color: 'from-teal-800 to-emerald-950'
      };
    } else {
      return {
        title: 'Keen Explorer 🇵🇰',
        rank: 'Aspiring Historian',
        message: 'Good effort! Review the correct answers and comprehensive explanations below to learn the stories behind every option.',
        color: 'from-slate-800 to-emerald-950'
      };
    }
  };

  const badge = getBadgeAndMessage();

  // Category breakdown calculation
  const categoryStats: Record<string, { total: number; correct: number }> = {};
  questions.forEach((q) => {
    if (!categoryStats[q.category]) {
      categoryStats[q.category] = { total: 0, correct: 0 };
    }
    categoryStats[q.category].total += 1;
    const ans = answers.find((a) => a.questionId === q.id);
    if (ans?.isCorrect) {
      categoryStats[q.category].correct += 1;
    }
  });

  const handleShare = () => {
    const text = `🇵🇰 Pakistan Heritage Quiz:\nI scored ${correctCount}/${totalQuestions} (${percentage}%) as "${badge.title}"!\nTest your knowledge celebrating Pakistan's rich history.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div id="results-summary-view" className="space-y-6 max-w-3xl mx-auto pb-12">
      {/* Hero Certificate / Score Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        id="score-celebration-card"
        className={`relative overflow-hidden rounded-3xl text-white p-6 sm:p-10 shadow-2xl border text-center transition-all ${
          isLowScore
            ? 'bg-gradient-to-br from-[#2a0808] via-[#450a0a] to-[#1a0505] border-rose-600/50 shadow-rose-950/50'
            : 'bg-gradient-to-br from-[#01411C] via-[#085327] to-[#012f14] border-emerald-500/30 shadow-emerald-950/50'
        }`}
      >
        {/* Decorative Crescent watermark */}
        <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none transform rotate-12">
          <CrescentStarIcon size={220} color="#FFFFFF" />
        </div>

        {/* 79th Independence Jubilee Emblem */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md border text-xs font-bold mb-3 ${
          isLowScore 
            ? 'bg-red-500/20 border-red-400/40 text-rose-300' 
            : 'bg-white/10 border-white/20 text-amber-300'
        }`}>
          <Sparkles className={`w-3.5 h-3.5 ${isLowScore ? 'text-rose-400' : 'text-amber-300'}`} />
          <span>79th Independence Celebration • Quiz Certificate</span>
        </div>

        {/* Score Display */}
        <div className="my-2" id="final-score-display-wrapper">
          <span 
            id="final-score-number"
            className={`text-6xl sm:text-7xl font-extrabold font-['Outfit'] tracking-tight drop-shadow-md transition-colors ${
              isLowScore ? 'text-red-500 font-black drop-shadow-[0_4px_12px_rgba(239,68,68,0.5)]' : 'text-white'
            }`}
          >
            {correctCount}
          </span>
          <span className={`text-2xl sm:text-4xl font-bold font-['Outfit'] ${
            isLowScore ? 'text-red-300/80' : 'text-emerald-200/80'
          }`}>
            /{totalQuestions}
          </span>
        </div>

        <div className={`text-base sm:text-lg font-semibold ${
          isLowScore ? 'text-red-200' : 'text-emerald-200'
        }`}>
          Accuracy: <span className={`font-bold ${isLowScore ? 'text-red-400 font-extrabold' : 'text-white'}`}>{percentage}%</span> • Time: {totalTimeSeconds}s
        </div>

        {/* Honorific Badge */}
        <div className={`mt-4 inline-block backdrop-blur-md px-5 py-2 rounded-2xl border shadow-inner ${
          isLowScore ? 'bg-red-950/60 border-red-500/40' : 'bg-white/15 border-white/20'
        }`}>
          <h2 className={`text-lg sm:text-xl font-extrabold font-['Outfit'] ${
            isLowScore ? 'text-rose-300' : 'text-amber-300'
          }`}>
            {badge.title}
          </h2>
          <span className={`text-xs font-medium ${
            isLowScore ? 'text-rose-200/80' : 'text-emerald-100'
          }`}>
            {badge.rank}
          </span>
        </div>

        <p className={`mt-3 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed ${
          isLowScore ? 'text-red-200/90' : 'text-emerald-100/90'
        }`}>
          {badge.message}
        </p>

        {/* ========================================================= */}
        {/* THE 3 MANDATORY POST-QUIZ ACTION BUTTONS */}
        {/* ========================================================= */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* 1. Start Again (Same Quiz) */}
          <button
            id="btn-start-again-same-quiz"
            onClick={onStartAgain}
            className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-[#01411C] font-bold text-sm shadow-md transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            title="Retake this exact 10-question set to improve your score"
          >
            <RotateCcw className="w-4 h-4 text-[#01411C]" />
            <span>Start Again</span>
          </button>

          {/* 2. Next Level (10 New MCQs) */}
          <button
            id="btn-next-level-quiz"
            onClick={onNextLevel}
            className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-md transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-200"
            title="Advance to 10 brand new unseen questions"
          >
            <FastForward className="w-4 h-4 text-slate-950" />
            <span>Next Level (10 New)</span>
          </button>

          {/* 3. Home Screen (Thank you message + Home) */}
          <button
            id="btn-home-screen-quiz"
            onClick={onGoHome}
            className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-950/90 hover:bg-emerald-950 text-white font-bold text-sm border border-emerald-500/40 shadow-sm transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            title="Return to Home with participation greeting"
          >
            <Home className="w-4 h-4 text-emerald-300" />
            <span>Home Screen</span>
          </button>
        </div>

        {/* Secondary review & share buttons */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            id="btn-review-explanations-results"
            onClick={onReviewAll}
            className="text-xs font-semibold text-emerald-200 hover:text-white underline inline-flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Explore All 4-Option Explanations</span>
          </button>

          <span className="text-emerald-400/50">•</span>

          <button
            id="btn-share-certificate"
            onClick={handleShare}
            className="text-xs font-semibold text-emerald-200 hover:text-white inline-flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Score</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* Correct Answers Ledger (Requirement: tell score AND also correct answers) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            <h3 className="text-lg font-bold font-['Outfit'] text-slate-900">
              Quiz Answers & Correct Solutions Ledger
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-semibold">
            {correctCount} / {totalQuestions} Correct
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {questions.map((q, idx) => {
            const ans = answers.find((a) => a.questionId === q.id);
            const isCorrect = ans?.isCorrect ?? false;
            const correctOpt = q.options.find((o) => o.isCorrect);
            const userPick = q.options.find((o) => o.id === ans?.selectedOptionId);

            return (
              <div key={q.id} className="py-4 space-y-2 text-xs sm:text-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5">
                      {isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">
                        {idx + 1}. {q.question}
                      </span>
                      <span className="ml-2 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {q.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded flex-shrink-0 ${
                      isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-red-100 text-red-900'
                    }`}
                  >
                    {isCorrect ? 'Correct' : 'Missed'}
                  </span>
                </div>

                {/* Solution Summary */}
                <div className="pl-6 space-y-1">
                  <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 text-xs">
                    <strong>✓ Correct Answer ({correctOpt?.id}):</strong> {correctOpt?.text}
                    <p className="mt-0.5 text-emerald-900/90 font-normal">{correctOpt?.explanation}</p>
                  </div>

                  {!isCorrect && userPick && (
                    <div className="p-2 rounded-xl bg-red-50/70 border border-red-200 text-red-950 text-xs">
                      <strong>Your Selection ({userPick.id}):</strong> {userPick.text}
                      <p className="mt-0.5 text-slate-600 font-normal">{userPick.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onReviewAll}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl border border-emerald-200 transition"
          >
            <BookOpen className="w-4 h-4" />
            <span>Open Detailed 4-Option Review for All Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Category Performance Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-700" />
            <h3 className="text-lg font-bold font-['Outfit'] text-slate-900">
              Topic Breakdown in this Round
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(categoryStats).map(([catName, stats]) => {
            const catPct = Math.round((stats.correct / stats.total) * 100);
            return (
              <div
                key={catName}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3"
              >
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-800">
                    {catName}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {stats.correct} of {stats.total} correct
                  </p>
                </div>
                <div>
                  <span
                    className={`inline-block text-xs font-bold px-2.5 py-1 rounded-lg ${
                      catPct >= 75
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                        : catPct >= 50
                        ? 'bg-amber-100 text-amber-900 border border-amber-200'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {catPct}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
