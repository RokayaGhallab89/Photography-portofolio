/**
 * Subtle cinematic ambient tone generator using standard Web Audio API.
 * Non-intrusive, zero external file downloads, muted by default.
 */

let audioCtx: AudioContext | null = null;
let osc1: OscillatorNode | null = null;
let osc2: OscillatorNode | null = null;
let gainNode: GainNode | null = null;
let isAudioActive = false;

export function toggleCinemaAmbience(): boolean {
  if (isAudioActive) {
    stopCinemaAmbience();
    return false;
  } else {
    startCinemaAmbience();
    return true;
  }
}

export function startCinemaAmbience(): void {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Master gentle gain
    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 2.5); // Very soft background hum
    gainNode.connect(audioCtx.destination);

    // Deep warm cinema drone (55Hz + 110Hz harmonic)
    osc1 = audioCtx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // A1 note

    osc2 = audioCtx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(110.2, audioCtx.currentTime); // Gentle chorus detune

    osc1.connect(gainNode);
    osc2.connect(gainNode);

    osc1.start();
    osc2.start();
    isAudioActive = true;
  } catch (err) {
    console.warn("Audio context not allowed yet:", err);
  }
}

export function stopCinemaAmbience(): void {
  if (gainNode && audioCtx) {
    try {
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
      setTimeout(() => {
        osc1?.stop();
        osc2?.stop();
        osc1?.disconnect();
        osc2?.disconnect();
        isAudioActive = false;
      }, 800);
    } catch {
      isAudioActive = false;
    }
  } else {
    isAudioActive = false;
  }
}
