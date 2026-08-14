import { Volume2, VolumeX, RotateCcw, BookOpen, Shield, Sparkles } from 'lucide-react';
import { CrescentStarIcon } from './CrescentStarIcon';
import { QuizViewMode } from '../types';

interface HeaderProps {
  viewMode: QuizViewMode;
  onGoHome: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  currentQuestionIndex?: number;
  totalQuestions?: number;
  score?: number;
  onOpenStudyGuide?: () => void;
}

export function Header({
  viewMode,
  onGoHome,
  soundEnabled,
  onToggleSound,
  currentQuestionIndex = 0,
  totalQuestions = 10,
  score = 0,
  onOpenStudyGuide
}: HeaderProps) {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-30 w-full bg-[#01411C] text-white border-b border-emerald-800/80 shadow-md backdrop-blur-md bg-opacity-95"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Brand & Emblem */}
        <button
          id="btn-header-home"
          onClick={onGoHome}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 rounded-lg p-1 transition"
          aria-label="Return to quiz home"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-800/80 border border-emerald-400/40 flex items-center justify-center text-emerald-100 shadow-inner group-hover:scale-105 transition">
            <CrescentStarIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-base sm:text-lg font-['Outfit'] leading-tight">
                Pakistan Heritage Quiz
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-800/90 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-600/50">
                <Sparkles className="w-3 h-3 text-amber-300" />
                79th Year
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-emerald-200/90 font-medium hidden xs:block">
              14th August • Independence Celebration
            </p>
          </div>
        </button>

        {/* Live Quiz Status (when in quiz) */}
        {viewMode === 'quiz' && (
          <div className="hidden md:flex items-center gap-3 bg-emerald-900/60 px-3 py-1.5 rounded-full border border-emerald-700/60 text-xs font-semibold">
            <span className="text-emerald-300">
              Q <strong className="text-white">{currentQuestionIndex + 1}</strong> of {totalQuestions}
            </span>
            <span className="w-1 h-1 rounded-full bg-emerald-500" />
            <span className="text-emerald-300">
              Score: <strong className="text-amber-300">{score}</strong>
            </span>
          </div>
        )}

        {/* Header Controls */}
        <div className="flex items-center gap-2">
          {onOpenStudyGuide && (
            <button
              id="btn-study-guide"
              onClick={onOpenStudyGuide}
              className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 border border-emerald-600/40 transition active:scale-95"
              title="Explore Heritage Topics & Glossary"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden sm:inline">Study Guide</span>
            </button>
          )}

          <button
            id="btn-toggle-sound"
            onClick={onToggleSound}
            className="p-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 border border-emerald-600/40 transition active:scale-95"
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            title={soundEnabled ? 'Sound ON' : 'Sound OFF'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-200" />
            ) : (
              <VolumeX className="w-4 h-4 text-emerald-400" />
            )}
          </button>

          {viewMode !== 'landing' && (
            <button
              id="btn-header-reset"
              onClick={onGoHome}
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/60 transition active:scale-95"
              title="Return to Home"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restart</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
