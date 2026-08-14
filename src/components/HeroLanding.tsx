import { motion } from 'motion/react';
import { CATEGORIES } from '../data/questions';
import { IndependenceDayBanner } from './IndependenceDayBanner';
import {
  Play,
  CheckCircle2,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  Trophy,
  Atom,
  Flag,
  Landmark,
  ShieldAlert,
  UserCheck,
  Heart
} from 'lucide-react';
import { QuestionCategory } from '../types';

interface HeroLandingProps {
  onStartQuiz: (category: QuestionCategory | 'All') => void;
  onOpenStudyGuide: () => void;
  thankYouMessage?: string | null;
  onDismissThankYou?: () => void;
}

export function HeroLanding({
  onStartQuiz,
  onOpenStudyGuide,
  thankYouMessage,
  onDismissThankYou
}: HeroLandingProps) {
  const getCategoryLucideIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flag':
        return <Flag className="w-5 h-5" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'Atom':
        return <Atom className="w-5 h-5" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Thank you message banner when returned from results */}
      {thankYouMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 sm:p-5 rounded-2xl bg-emerald-900 text-white border-2 border-emerald-400 shadow-xl flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-amber-300 fill-amber-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base font-['Outfit'] text-amber-300">
                Thank You For Participating! 🇵🇰
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90">
                {thankYouMessage}
              </p>
            </div>
          </div>
          {onDismissThankYou && (
            <button
              onClick={onDismissThankYou}
              className="text-xs text-emerald-200 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition flex-shrink-0"
            >
              Dismiss
            </button>
          )}
        </motion.div>
      )}

      {/* 79th Independence Tribute Banner */}
      <IndependenceDayBanner />

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="hero-main-card"
        className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-emerald-900/10 p-6 sm:p-10 text-slate-800"
      >
        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Interactive 79th Independence Edition • 10-Question Master Quizzes</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Outfit'] text-slate-900 tracking-tight leading-[1.15]">
            Pakistan <span className="text-[#01411C] underline decoration-emerald-500/40 decoration-wavy">Heritage</span> Quiz
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            Celebrate the founders, martyrs, scientists, poets, and world-record feats of Pakistan.
            <strong className="text-slate-900 font-semibold block mt-1">
              Every option reveals a story: get detailed explanations for all 4 choices on every question!
            </strong>
          </p>

          {/* Key Feature Pillars */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">4-Option Insights</span>
                <span className="text-slate-600">Learn why each option matters historically</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <Award className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">National Certificate</span>
                <span className="text-slate-600">Scores, ranks, and performance ledger</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <Sparkles className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Multi-Level Rounds</span>
                <span className="text-slate-600">Retake, advance levels, with zero repeats</span>
              </div>
            </div>
          </div>

          {/* Primary Launch CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              id="btn-start-standard-quiz"
              onClick={() => onStartQuiz('All')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#01411C] hover:bg-[#085327] text-white font-bold text-base shadow-lg shadow-emerald-950/20 transition transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              <Play className="w-5 h-5 fill-white text-white" />
              <span>Start 10-Question Master Quiz</span>
              <ArrowRight className="w-4 h-4 text-emerald-200" />
            </button>

            <button
              id="btn-view-study-topics-hero"
              onClick={onOpenStudyGuide}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-sm border border-emerald-200 transition active:scale-98 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <span>Explore Study Guide & Glossary</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Specific Topic Categories Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-slate-900">
              Select a Topic for Your 10-Question Quiz
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Choose a specific subject: Pakistan Movement, Science, Leadership, Sports, Military, or Culture
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              id={`cat-card-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
              className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center group-hover:bg-[#01411C] group-hover:text-white transition-colors duration-200">
                    {getCategoryLucideIcon(cat.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-900">
                    10 MCQs / Round
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-900 transition">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  id={`btn-start-cat-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => onStartQuiz(cat.id as QuestionCategory)}
                  className="w-full text-xs font-bold text-emerald-800 hover:text-white bg-emerald-50 hover:bg-[#01411C] py-2.5 px-3 rounded-xl border border-emerald-200 transition duration-150 flex items-center justify-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start Topic Quiz</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
