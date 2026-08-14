import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HISTORIC_QUOTES } from '../data/questions';
import { CrescentStarIcon } from './CrescentStarIcon';
import { Sparkles, Quote } from 'lucide-react';

export function IndependenceDayBanner() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % HISTORIC_QUOTES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = HISTORIC_QUOTES[quoteIndex];

  return (
    <div
      id="independence-anniversary-banner"
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#01411C] via-[#085327] to-[#012f14] text-white p-5 sm:p-7 shadow-xl border border-emerald-500/30"
    >
      {/* Background Decorative Crescent/Star watermark */}
      <div className="absolute -right-6 -bottom-10 opacity-10 pointer-events-none transform rotate-12">
        <CrescentStarIcon size={180} color="#FFFFFF" />
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: 79th Jubilee Callout */}
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-emerald-300/30 flex items-center justify-center text-center shadow-inner">
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-emerald-300">Aug</span>
              <span className="block text-base font-extrabold text-white leading-none">14</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-500/30">
                <Sparkles className="w-3 h-3" />
                79th Independence Celebration
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold font-['Outfit'] text-white mt-0.5 tracking-tight">
              1947 — 2026 • Honoring Pakistan&apos;s Journey
            </h2>
          </div>
        </div>

        {/* Right: Rotating Historic Quote */}
        <div className="sm:max-w-md bg-black/25 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-white/10 text-left">
          <div className="flex items-start gap-2">
            <Quote className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 opacity-80" />
            <div className="min-h-[44px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={quoteIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-xs sm:text-[13px] text-emerald-100 italic leading-relaxed">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <p className="text-[11px] font-semibold text-emerald-300 mt-1">
                    — {current.author}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
