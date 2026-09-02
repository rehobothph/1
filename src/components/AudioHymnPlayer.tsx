import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { Volume2, VolumeX, Play, Pause, Music, Sparkles } from 'lucide-react';

interface AudioHymnPlayerProps {
  currentLang: Language;
}

export const AudioHymnPlayer: React.FC<AudioHymnPlayerProps> = ({ currentLang }) => {
  const isKn = currentLang === 'kn';
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentMelody, setCurrentMelody] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);

  const melodies = [
    {
      titleKn: "ದೈವಿಕ ಶಾಂತಿಯ ರಾಗ (Worship Chimes & Ambient Harmony)",
      titleEn: "Peaceful Sanctuary Chimes & Harmonies",
      notes: [261.63, 329.63, 392.00, 523.25, 440.00, 349.23, 392.00, 329.63], // C4, E4, G4, C5, A4, F4, G4, E4
    },
    {
      titleKn: "ಪವಿತ್ರ ಉಪಸ್ಥಿತಿಯ ನಾದ (Divine Presence Meditation)",
      titleEn: "Divine Presence Meditation",
      notes: [349.23, 440.00, 523.25, 659.25, 523.25, 440.00, 392.00, 349.23], // F4, A4, C5, E5, C5, A4, G4, F4
    }
  ];

  const playChimeSequence = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    let noteIdx = 0;
    const currentNotes = melodies[currentMelody].notes;

    const playNextNote = () => {
      if (!audioCtxRef.current) return;
      const now = ctx.currentTime;
      const freq = currentNotes[noteIdx % currentNotes.length];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Sine wave with soft attack & smooth decay
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12 * volume, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 3.0);

      noteIdx++;
      timerRef.current = window.setTimeout(playNextNote, 1600);
    };

    playNextNote();
  };

  const stopAudio = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      setIsPlaying(true);
      playChimeSequence();
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div className="bg-[#123F42] text-white py-4 px-4 sm:px-8 border-y border-[#D4AF37]/30 shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0F2B2A] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
            <Music className={`w-5 h-5 text-[#D4AF37] ${isPlaying ? 'animate-pulse' : ''}`} />
          </div>
          <div>
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D4AF37] block">
              {isKn ? 'ಆತ್ಮಿಕ ಧ್ಯಾನ ಮತ್ತು ಪ್ರಾರ್ಥನಾ ಸಂಗೀತ' : 'WORSHIP MEDITATION AMBIENCE'}
            </span>
            <p className="text-xs sm:text-sm font-medium text-[#E5E1D8] truncate max-w-xs sm:max-w-md">
              {isKn ? melodies[currentMelody].titleKn : melodies[currentMelody].titleEn}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Track selector */}
          <select
            value={currentMelody}
            onChange={(e) => {
              setCurrentMelody(Number(e.target.value));
              if (isPlaying) {
                stopAudio();
                setTimeout(() => {
                  setIsPlaying(true);
                  playChimeSequence();
                }, 200);
              }
            }}
            className="bg-[#0F2B2A] text-xs text-[#E5E1D8] border border-[#2E6B68] px-2.5 py-1.5 rounded font-sans focus:outline-none"
          >
            <option value={0}>{isKn ? '1. ಶಾಂತಿಯ ರಾಗ' : '1. Peaceful Chimes'}</option>
            <option value={1}>{isKn ? '2. ಪವಿತ್ರ ಉಪಸ್ಥಿತಿ' : '2. Divine Presence'}</option>
          </select>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="px-4 py-2 bg-[#D4AF37] hover:bg-[#B89628] text-[#123F42] text-xs font-sans font-bold uppercase tracking-wider rounded flex items-center gap-1.5 transition-all shadow"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>{isKn ? 'ವಿರಾಮ' : 'Pause'}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>{isKn ? 'ಪ್ಲೇ ಮಾಡಿ' : 'Play Music'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
