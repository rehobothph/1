// Web Audio API synthesizer for peaceful church piano/organ chords and hymn melody playback
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playHymnMelody(notes: number[], noteDuration = 0.6) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    notes.forEach((freq, index) => {
      const startTime = now + index * noteDuration;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Warm organ/piano timbre with gentle harmonics
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      // Sub-oscillator for warmth
      const subOsc = ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(freq / 2, startTime);
      const subGain = ctx.createGain();

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.18, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + noteDuration * 0.95);

      subGain.gain.setValueAtTime(0, startTime);
      subGain.gain.linearRampToValueAtTime(0.08, startTime + 0.05);
      subGain.gain.exponentialRampToValueAtTime(0.001, startTime + noteDuration * 0.95);

      osc.connect(gain);
      subOsc.connect(subGain);
      gain.connect(ctx.destination);
      subGain.connect(ctx.destination);

      osc.start(startTime);
      subOsc.start(startTime);

      osc.stop(startTime + noteDuration);
      subOsc.stop(startTime + noteDuration);
    });
  } catch (err) {
    console.error('Audio playback error:', err);
  }
}

// Play gentle single worship bell chime
export function playAmenChime() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const chords = [523.25, 659.25, 783.99, 1046.50]; // C Major heavenly chime

    chords.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0, now + i * 0.06);
      gain.gain.linearRampToValueAtTime(0.15, now + i * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 2.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 2.3);
    });
  } catch (e) {
    console.warn('Amen chime sound failed', e);
  }
}

// Text to speech helper supporting Kannada & English
export function speakScriptureText(text: string, lang: 'kn' | 'en') {
  if (!('speechSynthesis' in window)) {
    return false;
  }
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.0;

  const voices = window.speechSynthesis.getVoices();
  if (lang === 'kn') {
    const knVoice = voices.find(v => v.lang.includes('kn') || v.lang.includes('kannada') || v.lang.includes('hi') || v.lang.includes('te'));
    if (knVoice) {
      utterance.voice = knVoice;
    }
    utterance.lang = 'kn-IN';
  } else {
    const enVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('en-US') || v.lang.includes('en-GB'));
    if (enVoice) {
      utterance.voice = enVoice;
    }
    utterance.lang = 'en-IN';
  }

  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
