import React, { useState, useRef, useEffect } from 'react';
import { SHOWREEL_VIDEO_URL } from '../data/projects';
import { X, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [timecode, setTimecode] = useState('00:00:00:00');
  const [aspectRatio, setAspectRatio] = useState<'2.39' | '16:9' | '1.33'>('2.39');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const mins = Math.floor(cur / 60);
    const secs = Math.floor(cur % 60);
    const frames = Math.floor((cur % 1) * 24);
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    setTimecode(`00:${pad(mins)}:${pad(secs)}:${pad(frames)}`);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between select-none">
      {/* Top Header HUD */}
      <div className="p-6 md:p-8 flex justify-between items-center text-xs font-mono tracking-[0.25em] text-[#8e8c85]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span className="text-[#f4f3ef] font-semibold">KARIM MOHAMED // CINEMATOGRAPHY REEL</span>
        </div>

        {/* Aspect Ratio Switcher */}
        <div className="hidden sm:flex items-center gap-2 border border-white/10 rounded-full px-2 py-1 text-[10px]">
          <span className="text-white/40">RATIO:</span>
          <button
            onClick={() => setAspectRatio('2.39')}
            className={`px-2 py-0.5 rounded cursor-pointer ${
              aspectRatio === '2.39' ? 'bg-white text-black font-semibold' : 'text-[#8e8c85]'
            }`}
          >
            2.39:1
          </button>
          <button
            onClick={() => setAspectRatio('16:9')}
            className={`px-2 py-0.5 rounded cursor-pointer ${
              aspectRatio === '16:9' ? 'bg-white text-black font-semibold' : 'text-[#8e8c85]'
            }`}
          >
            16:9
          </button>
          <button
            onClick={() => setAspectRatio('1.33')}
            className={`px-2 py-0.5 rounded cursor-pointer ${
              aspectRatio === '1.33' ? 'bg-white text-black font-semibold' : 'text-[#8e8c85]'
            }`}
          >
            4:3
          </button>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full border border-white/20 text-white hover:border-white transition-colors cursor-pointer"
          aria-label="Close Showreel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Center Film Screen */}
      <div className="my-auto max-w-7xl w-full mx-auto px-4 md:px-12 flex items-center justify-center">
        <div
          className={`relative overflow-hidden bg-black shadow-2xl transition-all duration-500 w-full ${
            aspectRatio === '2.39'
              ? 'aspect-[2.39/1]'
              : aspectRatio === '1.33'
              ? 'aspect-[4/3] max-w-3xl'
              : 'aspect-[16/9]'
          }`}
        >
          <video
            ref={videoRef}
            src={SHOWREEL_VIDEO_URL}
            autoPlay
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
          />
        </div>
      </div>

      {/* Bottom Control Bar */}
      <div className="p-6 md:p-8 flex justify-between items-center text-xs font-mono tracking-[0.25em] text-[#8e8c85]">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full border border-white/20 text-white hover:border-white transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 rounded-full border border-white/20 text-white hover:border-white transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
          <span className="text-white/80">{timecode}</span>
        </div>

        <div className="text-[10px] text-white/50 tracking-[0.3em] uppercase hidden sm:block">
          MASTER SHOT ON ARRI ALEXA 35 &amp; SONY VENICE 2
        </div>

        <button
          onClick={() => {
            if (videoRef.current?.requestFullscreen) {
              videoRef.current.requestFullscreen();
            }
          }}
          className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <Maximize className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">FULLSCREEN</span>
        </button>
      </div>
    </div>
  );
};
