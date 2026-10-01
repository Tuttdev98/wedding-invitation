import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  VolumeX,
  Music,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  ListMusic,
  ChevronDown,
  Repeat,
  Heart,
  Sparkles,
  Disc3,
} from 'lucide-react';

export interface Track {
  id: string;
  title: string;
  artist: string;
  genre: string;
  durationSeconds: number;
  chords: number[][];
  tempoMs: number;
}

const PLAYLIST: Track[] = [
  {
    id: 'canon-in-d',
    title: 'Canon in D (Pachelbel)',
    artist: 'Acoustic Piano & Cello',
    genre: 'Giai điệu kinh điển lễ đường',
    durationSeconds: 218, // 3:38
    tempoMs: 3400,
    chords: [
      [146.83, 220.0, 293.66, 369.99], // D
      [110.0, 164.81, 220.0, 277.18], // A
      [123.47, 185.0, 246.94, 293.66], // Bm
      [98.0, 146.83, 196.0, 246.94], // G
      [146.83, 220.0, 293.66, 440.0], // D/F#
      [98.0, 146.83, 196.0, 293.66], // G
      [110.0, 164.81, 220.0, 329.63], // A
    ],
  },
  {
    id: 'beautiful-in-white',
    title: 'Beautiful in White',
    artist: 'Romantic Piano Solo',
    genre: 'Bước vào lễ đường cùng em',
    durationSeconds: 232, // 3:52
    tempoMs: 3200,
    chords: [
      [130.81, 196.0, 261.63, 329.63], // C
      [98.0, 146.83, 196.0, 246.94], // G
      [110.0, 164.81, 220.0, 261.63], // Am
      [87.31, 130.81, 174.61, 220.0], // F
      [130.81, 196.0, 261.63, 392.0], // C/E
      [87.31, 130.81, 174.61, 261.63], // F
      [98.0, 146.83, 196.0, 293.66], // G
    ],
  },
  {
    id: 'a-thousand-years',
    title: 'A Thousand Years',
    artist: 'Harp & Violin Serenade',
    genre: 'Nguyện yêu em một nghìn năm',
    durationSeconds: 285, // 4:45
    tempoMs: 3600,
    chords: [
      [116.54, 174.61, 233.08, 293.66], // Bb
      [130.81, 196.0, 261.63, 349.23], // F
      [87.31, 130.81, 174.61, 261.63], // Gm
      [103.83, 155.56, 207.65, 311.13], // Eb
      [116.54, 174.61, 233.08, 349.23], // Bb
      [103.83, 155.56, 207.65, 311.13], // Eb
      [130.81, 196.0, 261.63, 349.23], // F
    ],
  },
  {
    id: 'anh-nang-cua-anh',
    title: 'Ánh Nắng Của Anh',
    artist: 'Acoustic Guitar & Piano',
    genre: 'Ấm áp & Ngọt ngào',
    durationSeconds: 210, // 3:30
    tempoMs: 3100,
    chords: [
      [174.61, 220.0, 261.63, 349.23], // F
      [130.81, 164.81, 196.0, 261.63], // C
      [110.0, 146.83, 174.61, 220.0], // Dm
      [116.54, 174.61, 233.08, 293.66], // Bb
      [174.61, 220.0, 261.63, 392.0], // F/A
      [116.54, 174.61, 233.08, 349.23], // Bb
      [130.81, 164.81, 196.0, 261.63], // C
    ],
  },
  {
    id: 'perfect-waltz',
    title: 'Perfect (Ed Sheeran)',
    artist: 'Orchestral Wedding Waltz',
    genre: 'Khúc Valse hôn lễ hoàn mỹ',
    durationSeconds: 263, // 4:23
    tempoMs: 3500,
    chords: [
      [103.83, 155.56, 207.65, 311.13], // Ab
      [138.59, 207.65, 277.18, 415.3], // Fm
      [116.54, 174.61, 233.08, 349.23], // Db
      [155.56, 233.08, 311.13, 392.0], // Eb
      [103.83, 155.56, 207.65, 349.23], // Ab
      [116.54, 174.61, 233.08, 349.23], // Db
      [155.56, 233.08, 311.13, 415.3], // Eb
    ],
  },
  {
    id: 'until-i-found-you',
    title: 'Until I Found You',
    artist: 'Vintage Romantic Strings',
    genre: 'Tình yêu tìm thấy nơi người',
    durationSeconds: 195, // 3:15
    tempoMs: 3300,
    chords: [
      [155.56, 233.08, 311.13, 392.0], // Eb
      [130.81, 196.0, 261.63, 311.13], // Cm
      [103.83, 155.56, 207.65, 311.13], // Ab
      [116.54, 174.61, 233.08, 349.23], // Bb
      [155.56, 233.08, 311.13, 466.16], // Eb
      [103.83, 155.56, 207.65, 311.13], // Ab
      [116.54, 174.61, 233.08, 349.23], // Bb
    ],
  },
];

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isLooping, setIsLooping] = useState<boolean>(true);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const progressTimerRef = useRef<number | null>(null);
  const chordIndexRef = useRef<number>(0);
  const gainNodeMasterRef = useRef<GainNode | null>(null);

  const currentTrack = PLAYLIST[currentTrackIndex];

  // Helper to format seconds into mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Play romantic chord with warm gentle harmonics
  const playRomanticChord = (ctx: AudioContext, freqs: number[], duration = 3.6) => {
    const now = ctx.currentTime;
    const gainNode = ctx.createGain();
    const effectiveVol = isMuted ? 0 : volume * 0.05;

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(effectiveVol, now + 0.65);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    if (gainNodeMasterRef.current) {
      gainNode.connect(gainNodeMasterRef.current);
    } else {
      gainNode.connect(ctx.destination);
    }

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      // Use sine and subtle warm triangle blend for acoustic timbre
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.connect(gainNode);
      osc.start(now);
      osc.stop(now + duration);
    });
  };

  const startMusic = (track = currentTrack) => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
      gainNodeMasterRef.current = audioCtxRef.current.createGain();
      gainNodeMasterRef.current.connect(audioCtxRef.current.destination);
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    setIsPlaying(true);

    if (timerRef.current) clearInterval(timerRef.current);
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);

    const step = () => {
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        const chord = track.chords[chordIndexRef.current % track.chords.length];
        playRomanticChord(audioCtxRef.current, chord, (track.tempoMs / 1000) * 1.05);
        chordIndexRef.current = (chordIndexRef.current + 1) % track.chords.length;
      }
    };

    step();
    timerRef.current = window.setInterval(step, track.tempoMs);

    // Progress timer
    progressTimerRef.current = window.setInterval(() => {
      setCurrentTime((prev) => {
        if (prev + 1 >= track.durationSeconds) {
          if (isLooping) {
            return 0;
          } else {
            handleNextTrack();
            return 0;
          }
        }
        return prev + 1;
      });
    }, 1000);
  };

  const stopMusic = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic(currentTrack);
    }
  };

  const handleSelectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    chordIndexRef.current = 0;
    const selectedTrack = PLAYLIST[index];

    if (isPlaying) {
      stopMusic();
      setTimeout(() => startMusic(selectedTrack), 100);
    }
  };

  const handleNextTrack = () => {
    const nextIdx = (currentTrackIndex + 1) % PLAYLIST.length;
    handleSelectTrack(nextIdx);
  };

  const handlePrevTrack = () => {
    const prevIdx = (currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    handleSelectTrack(prevIdx);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newSeconds = Math.floor(percentage * currentTrack.durationSeconds);
    setCurrentTime(newSeconds);

    // Recalculate chord index to sync music loop
    const chordsCount = currentTrack.chords.length;
    chordIndexRef.current = Math.floor((newSeconds / (currentTrack.tempoMs / 1000)) % chordsCount);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Clean up
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const progressPercent = (currentTime / currentTrack.durationSeconds) * 100;

  return (
    <>
      {/* Floating Mini Player Widget (Fixed bottom right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
        <AnimatePresence>
          {isExpanded ? (
            /* Expanded Player Card */
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-[320px] sm:w-[350px] bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-[#E5DAC1] gold-shadow overflow-hidden flex flex-col gap-4 text-stone-800"
            >
              {/* Header with Minimize Button */}
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <Disc3
                    className={`w-5 h-5 text-[#9E7D3B] ${isPlaying ? 'animate-spin' : ''}`}
                    style={{ animationDuration: '4s' }}
                  />
                  <span className="font-display-luxury text-[11px] uppercase tracking-widest text-[#9E7D3B] font-semibold">
                    Wedding Melody
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setShowPlaylist((prev) => !prev)}
                    type="button"
                    className={`p-1.5 rounded-full transition-colors ${
                      showPlaylist ? 'bg-[#FAF3E5] text-[#9E7D3B]' : 'text-stone-400 hover:text-stone-700'
                    }`}
                    title="Danh sách bài hát"
                    aria-label="Danh sách phát"
                  >
                    <ListMusic className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsExpanded(false)}
                    type="button"
                    className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                    title="Thu nhỏ"
                    aria-label="Thu nhỏ trình phát"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Content: Playlist view OR Track details view */}
              {showPlaylist ? (
                /* Playlist Drawer View */
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                    <span>Danh sách phát ({PLAYLIST.length})</span>
                    <span className="text-[10px] text-[#9E7D3B]">Tú & Hải Wedding</span>
                  </div>

                  {PLAYLIST.map((item, idx) => {
                    const isSelected = idx === currentTrackIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectTrack(idx)}
                        className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between gap-2.5 ${
                          isSelected
                            ? 'bg-[#FAF3E5] text-stone-900 border border-[#E8DFC9]'
                            : 'hover:bg-stone-50 text-stone-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span
                            className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium shrink-0 ${
                              isSelected ? 'bg-[#9E7D3B] text-white' : 'bg-stone-100 text-stone-400'
                            }`}
                          >
                            {isSelected && isPlaying ? (
                              <Volume2 className="w-3 h-3 animate-pulse" />
                            ) : (
                              idx + 1
                            )}
                          </span>
                          <div className="truncate">
                            <p className="text-xs font-medium truncate">{item.title}</p>
                            <p className="text-[10px] text-stone-400 truncate">{item.genre}</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-stone-400 tabular-nums shrink-0">
                          {formatTime(item.durationSeconds)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* Current Song Details View */
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    {/* Spinning Vinyl Album Art */}
                    <div className="relative w-14 h-14 rounded-2xl bg-[#FAF6EE] border border-[#E5DAC1] flex items-center justify-center shadow-xs overflow-hidden shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full bg-stone-900 border border-[#C8A359] flex items-center justify-center text-[#E8D4A8] ${
                          isPlaying ? 'animate-spin' : ''
                        }`}
                        style={{ animationDuration: '6s' }}
                      >
                        <span className="text-[9px] font-serif-luxury italic">H&T</span>
                      </div>
                      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/10 pointer-events-none" />
                    </div>

                    <div className="truncate flex-1">
                      <h4 className="font-serif-luxury text-base font-semibold text-stone-900 truncate">
                        {currentTrack.title}
                      </h4>
                      <p className="text-xs text-[#9E7D3B] font-medium truncate mt-0.5">
                        {currentTrack.artist}
                      </p>
                      <span className="text-[10px] text-stone-400 block truncate">
                        {currentTrack.genre}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar with Seek capability */}
                  <div className="space-y-1.5">
                    <div
                      onClick={handleSeek}
                      className="group relative w-full h-2 bg-stone-100 rounded-full cursor-pointer overflow-hidden border border-stone-200/50"
                      title="Nhấp để chuyển đoạn bài hát"
                    >
                      {/* Active progress fill */}
                      <div
                        className="h-full bg-gradient-to-r from-[#9E7D3B] to-[#C8A359] rounded-full transition-all duration-200"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-stone-400 font-medium tabular-nums">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(currentTrack.durationSeconds)}</span>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    {/* Repeat toggle */}
                    <button
                      onClick={() => setIsLooping((prev) => !prev)}
                      type="button"
                      className={`p-2 rounded-full transition-colors ${
                        isLooping ? 'text-[#9E7D3B] bg-[#FAF3E5]' : 'text-stone-400 hover:text-stone-700'
                      }`}
                      title={isLooping ? 'Lặp lại bài hát: Bật' : 'Lặp lại bài hát: Tắt'}
                    >
                      <Repeat className="w-3.5 h-3.5" />
                    </button>

                    {/* Previous Track */}
                    <button
                      onClick={handlePrevTrack}
                      type="button"
                      className="p-2 rounded-full text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                      title="Bài trước"
                    >
                      <SkipBack className="w-4 h-4" />
                    </button>

                    {/* Play / Pause Main CTA */}
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={toggleMusic}
                      type="button"
                      className="w-12 h-12 rounded-full bg-[#9E7D3B] text-white flex items-center justify-center shadow-md hover:bg-[#886a2e] transition-colors cursor-pointer"
                      title={isPlaying ? 'Tạm dừng' : 'Phát nhạc'}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-white" />
                      ) : (
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      )}
                    </motion.button>

                    {/* Next Track */}
                    <button
                      onClick={handleNextTrack}
                      type="button"
                      className="p-2 rounded-full text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                      title="Bài kế tiếp"
                    >
                      <SkipForward className="w-4 h-4" />
                    </button>

                    {/* Volume Mute */}
                    <button
                      onClick={toggleMute}
                      type="button"
                      className={`p-2 rounded-full transition-colors ${
                        isMuted ? 'text-rose-500 bg-rose-50' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                      }`}
                      title={isMuted ? 'Bật âm thanh' : 'Tắt tiếng'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            /* Collapsed Floating Music Pill */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md rounded-full border border-[#E8DFC9] p-1.5 shadow-lg text-stone-700 hover:border-[#9E7D3B] transition-all"
            >
              {/* Play/Pause Button */}
              <button
                onClick={toggleMusic}
                type="button"
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-all cursor-pointer ${
                  isPlaying
                    ? 'bg-[#9E7D3B] text-white shadow-xs'
                    : 'bg-[#FAF3E5] text-[#9E7D3B] hover:bg-[#F3ECE0]'
                }`}
                title={isPlaying ? 'Tạm dừng nhạc cưới' : 'Bật nhạc cưới lãng mạn'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-white" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              {/* Title & Open Player expand button */}
              <button
                onClick={() => setIsExpanded(true)}
                type="button"
                className="flex items-center gap-2 pl-1 pr-3 py-1 text-left cursor-pointer group"
                title="Mở bảng điều khiển nhạc & danh sách phát"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-stone-800 line-clamp-1 max-w-[120px] sm:max-w-[160px] group-hover:text-[#9E7D3B] transition-colors">
                    {currentTrack.title}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] text-stone-400">
                    <span className="tabular-nums">{formatTime(currentTime)}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#9E7D3B]">Playlist ({PLAYLIST.length})</span>
                  </div>
                </div>

                <Music
                  className={`w-3.5 h-3.5 text-stone-400 group-hover:text-[#9E7D3B] transition-colors ${
                    isPlaying ? 'animate-bounce text-[#9E7D3B]' : ''
                  }`}
                />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
