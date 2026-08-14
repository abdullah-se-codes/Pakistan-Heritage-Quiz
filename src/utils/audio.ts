// Web Audio API helper for sound effects with graceful fallback

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function playSound(type: 'select' | 'correct' | 'wrong' | 'complete' | 'sad' | 'click', enabled: boolean = true) {
  if (!enabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (type === 'select' || type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'correct') {
      // Pleasant uplifting arpeggio (C5, E5, G5, C6)
      const freqs = [523.25, 659.25, 783.99, 1046.5];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.18, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.35);
      });
    } else if (type === 'wrong') {
      // Prominent, crisp, two-tone buzzer sound (dissonant downward buzzer)
      const tones = [
        { freqStart: 290, freqEnd: 220, start: 0, duration: 0.18, type: 'sawtooth' as OscillatorType, vol: 0.28 },
        { freqStart: 180, freqEnd: 130, start: 0.19, duration: 0.32, type: 'sawtooth' as OscillatorType, vol: 0.32 }
      ];

      tones.forEach(t => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = t.type;
        osc.frequency.setValueAtTime(t.freqStart, now + t.start);
        osc.frequency.exponentialRampToValueAtTime(t.freqEnd, now + t.start + t.duration);

        gain.gain.setValueAtTime(t.vol, now + t.start);
        gain.gain.exponentialRampToValueAtTime(0.001, now + t.start + t.duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + t.start);
        osc.stop(now + t.start + t.duration);
      });
    } else if (type === 'sad') {
      // Somber melancholic descending minor melody (Sad game over music)
      // D minor / F / Eb descent
      const notes = [
        { freq: 392.00, start: 0, dur: 0.45, vol: 0.22 },    // G4
        { freq: 349.23, start: 0.45, dur: 0.45, vol: 0.22 }, // F4
        { freq: 311.13, start: 0.90, dur: 0.50, vol: 0.24 }, // Eb4
        { freq: 293.66, start: 1.40, dur: 0.55, vol: 0.25 }, // D4
        { freq: 220.00, start: 1.95, dur: 1.10, vol: 0.28 }, // A3 low sustained
        { freq: 196.00, start: 2.20, dur: 1.30, vol: 0.26 }  // G3 final deep bass
      ];

      notes.forEach(note => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, now + note.start);
        // Add subtle vibrato / pitch drop for sadness
        osc.frequency.linearRampToValueAtTime(note.freq * 0.98, now + note.start + note.dur);

        gain.gain.setValueAtTime(note.vol, now + note.start);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.start + note.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + note.start);
        osc.stop(now + note.start + note.dur);
      });
    } else if (type === 'complete') {
      // Fanfare celebratory chord
      const chords = [523.25, 659.25, 783.99, 1046.5, 1318.5];
      chords.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + (i * 0.08));

        gain.gain.setValueAtTime(0.18, now + (i * 0.08));
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + (i * 0.08));
        osc.stop(now + 1.2);
      });
    }
  } catch {
    // Gracefully ignore audio errors (e.g. autoplay permissions)
  }
}
