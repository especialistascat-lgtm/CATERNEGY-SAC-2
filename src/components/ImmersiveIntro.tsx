import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CatEnergyLogo } from './CatEnergyLogo';
import { 
  Play, 
  Pause, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Wind, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Radio,
  Maximize2,
  Minimize2,
  Flame,
  Activity
} from 'lucide-react';

interface ImmersiveIntroProps {
  onComplete: () => void;
}

export const ImmersiveIntro: React.FC<ImmersiveIntroProps> = ({ onComplete }) => {
  const [currentScene, setCurrentScene] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [portalFocusMode, setPortalFocusMode] = useState(false); // Toggle to prioritize 3D vortex video
  const [playbackProgress, setPlaybackProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Prevent background scroll while intro is open
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Background video synchronization with play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Autoplay handled silently
        });
      }
    }
  }, [isPaused]);

  // Audio synchronization with sound toggle & pause state
  useEffect(() => {
    if (audioRef.current) {
      if (!soundEnabled || isPaused) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.65;
        audioRef.current.play().catch(() => {
          // Browser audio restriction handled silently
        });
      }
    }
  }, [soundEnabled, isPaused]);

  // Play energetic chime using Web Audio API
  const playEnergyChime = (freq = 440, duration = 0.4) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.09, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // ignore
    }
  };

  // Speak brand name on Scene 6
  const speakBrandName = () => {
    if (!soundEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance('CAT ENERGY');
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.lang = 'es-ES';
      window.speechSynthesis.speak(utterance);
    } catch {
      // ignore
    }
  };

  // Scene durations in milliseconds
  const sceneDurations: { [key: number]: number } = {
    1: 4500, // Scene 1: Naturaleza & Amazonía
    2: 3800, // Scene 2: Transición Progresiva
    3: 4200, // Scene 3: Subestación AT 500kV
    4: 3800, // Scene 4: Líneas de Transmisión
    5: 5000, // Scene 5: Vórtice Electromagnético (Inspiración Video)
    6: 7000, // Scene 6: Singularidad & Revelación de Marca
  };

  // Scene Progression & Timer Progress
  useEffect(() => {
    if (isPaused) return;

    const duration = sceneDurations[currentScene] || 4000;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, (elapsed / duration) * 100);
      setPlaybackProgress(progress);
    }, 50);

    const timer = setTimeout(() => {
      if (currentScene < 6) {
        setCurrentScene((prev) => prev + 1);
        setPlaybackProgress(0);
        playEnergyChime(320 + currentScene * 65, 0.45);
      }
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [currentScene, isPaused, soundEnabled]);

  // Voice trigger on Scene 6
  useEffect(() => {
    if (currentScene === 6) {
      playEnergyChime(587.33, 0.9);
      const voiceTimer = setTimeout(() => {
        speakBrandName();
      }, 700);
      return () => clearTimeout(voiceTimer);
    }
  }, [currentScene]);

  const scenes = [
    { num: 1, name: 'Naturaleza', desc: 'Amanecer, sol radiante y biodiversidad' },
    { num: 2, name: 'Transición', desc: 'Naturaleza → Energía → Infraestructura' },
    { num: 3, name: 'Subestación AT', desc: '500 kV, SF6 y patio de llaves' },
    { num: 4, name: 'Línea Transmisión', desc: 'Torres y cables conductores' },
    { num: 5, name: 'Vórtice Eléctrico', desc: 'Campos y plasma (Inspiración video)' },
    { num: 6, name: 'CATENERGY', desc: 'Singularidad, marca y excelencia' },
  ];

  // Dynamic opacity of the inspiration video layer per scene
  const getVideoOpacity = () => {
    if (portalFocusMode) return 'opacity-95';
    switch (currentScene) {
      case 1:
        return 'opacity-35 mix-blend-screen';
      case 2:
        return 'opacity-55 mix-blend-screen';
      case 3:
        return 'opacity-50 mix-blend-screen';
      case 4:
        return 'opacity-60 mix-blend-screen';
      case 5:
        return 'opacity-90 mix-blend-screen';
      case 6:
        return 'opacity-85 mix-blend-screen';
      default:
        return 'opacity-50 mix-blend-screen';
    }
  };

  return (
    <div
      id="immersive-intro-overlay"
      className="fixed inset-0 z-[100] bg-[#05070B] text-white flex flex-col justify-between overflow-hidden select-none"
    >
      {/* ================= BACKGROUND VIDEO INSPIRATION LAYER ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/video/energy_portal_bg.mp4"
          poster="/video/energy_portal_poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${getVideoOpacity()}`}
        />

        {/* Ambient Dark Gradients to preserve legibility and optical depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#05070B]/40 to-[#05070B]/90 pointer-events-none" />
      </div>

      {/* Background Audio SFX synchronized */}
      <audio
        ref={audioRef}
        src="/video/intro_energy_sfx.mp3"
        loop
        preload="auto"
      />

      {/* ================= TOP CONTROLS HEADER ================= */}
      <div className="relative z-30 px-4 sm:px-8 py-4 flex items-center justify-between bg-gradient-to-b from-black/90 via-black/50 to-transparent backdrop-blur-[2px]">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping absolute" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-black text-amber-400">
                EXPERIENCIA INMERSIVA
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/40 text-cyan-300">
                <Radio className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
                <span>VÓRTICE VFX</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-300 hidden md:block">
              <span className="text-amber-300 font-semibold">Consultorías en Alta Tensión y Energía S.A.C.</span>
            </p>
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Toggle Focus on Portal Video */}
          <button
            id="btn-toggle-portal-vfx"
            onClick={() => setPortalFocusMode(!portalFocusMode)}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              portalFocusMode
                ? 'bg-cyan-500/25 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20'
                : 'bg-white/5 border-white/15 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
            title="Alternar entre modo cinemático combinado y visualización de vórtice puro"
          >
            {portalFocusMode ? <Minimize2 className="w-3.5 h-3.5 text-cyan-400" /> : <Maximize2 className="w-3.5 h-3.5 text-amber-400" />}
            <span>{portalFocusMode ? 'Modo Cinemático' : 'Vórtice VFX'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            id="btn-intro-sound"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-amber-400/30 text-slate-200 transition-colors"
            title={soundEnabled ? 'Silenciar audio' : 'Activar audio'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Pause / Resume */}
          <button
            id="btn-intro-pause"
            onClick={() => setIsPaused(!isPaused)}
            className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-amber-400/30 text-slate-200 transition-colors"
            title={isPaused ? 'Reanudar reproducción' : 'Pausar'}
          >
            {isPaused ? <Play className="w-4 h-4 text-amber-400" /> : <Pause className="w-4 h-4 text-slate-400" />}
          </button>

          {/* OMITIR INTRO (Primary user accessibility button) */}
          <button
            id="btn-omitir-intro"
            onClick={onComplete}
            type="button"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400/20 to-amber-500/30 hover:from-amber-400/30 hover:to-amber-500/40 border border-amber-400/50 text-amber-300 hover:text-white text-xs uppercase font-extrabold tracking-wider transition-all flex items-center gap-1.5 shadow-lg shadow-amber-500/10 active:scale-95 cursor-pointer"
          >
            <span>OMITIR INTRO</span>
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ================= MAIN CINEMATIC STAGE ================= */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <AnimatePresence mode="wait">
          {/* ================= ESCENA 1: NATURALEZA ================= */}
          {currentScene === 1 && (
            <motion.div
              key="scene-1"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-center max-w-3xl flex flex-col items-center"
            >
              {/* Natural Sunrise Background Backing Plate */}
              <div 
                className="absolute -inset-20 bg-cover bg-center -z-10 opacity-30 rounded-3xl blur-md"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80')`,
                }}
              />

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md shadow-lg shadow-emerald-950/50">
                <Wind className="w-3.5 h-3.5 text-emerald-400" />
                <span>Armonía Natural & Biodiversidad</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-2xl leading-tight">
                El origen natural de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                  la energía que impulsa al país
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-lg text-slate-200 drop-shadow max-w-2xl mx-auto leading-relaxed">
                En <strong>CATENERGY</strong>, la naturaleza es el origen. Inspirados en los ecosistemas del Perú y el majestuoso vuelo del guacamayo, concebimos la ingeniería eléctrica como una fuerza viva que respeta el medio ambiente y transforma recursos en desarrollo sostenible.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                <span className="text-xs px-3.5 py-1.5 rounded-lg bg-black/60 border border-emerald-500/40 text-emerald-300 font-semibold backdrop-blur-sm">
                  ☀️ Sol Radiante & Clima Andino
                </span>
                <span className="text-xs px-3.5 py-1.5 rounded-lg bg-black/60 border border-emerald-500/40 text-emerald-300 font-semibold backdrop-blur-sm">
                  🦜 Vuelo del Guacamayo Amazónico
                </span>
                <span className="text-xs px-3.5 py-1.5 rounded-lg bg-black/60 border border-amber-500/40 text-amber-300 font-semibold backdrop-blur-sm">
                  🌱 Sostenibilidad & Huella Cero
                </span>
              </div>
            </motion.div>
          )}

          {/* ================= ESCENA 2: TRANSICIÓN PROGRESIVA ================= */}
          {currentScene === 2 && (
            <motion.div
              key="scene-2"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-center max-w-3xl flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md shadow-lg shadow-amber-950/50">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Transición Progresiva de Potencia</span>
              </div>

              {/* Visual Sequence Chain */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-base font-extrabold uppercase tracking-wider mb-6">
                <div className="px-3.5 py-2 rounded-xl bg-emerald-950/80 border border-emerald-400/50 text-emerald-300 backdrop-blur-md shadow-md">
                  Naturaleza
                </div>
                <span className="text-amber-400 text-lg sm:text-2xl font-black">→</span>
                <div className="px-3.5 py-2 rounded-xl bg-amber-950/80 border border-amber-400/60 text-amber-300 backdrop-blur-md shadow-md shadow-amber-500/20 animate-pulse">
                  Energía
                </div>
                <span className="text-amber-400 text-lg sm:text-2xl font-black">→</span>
                <div className="px-3.5 py-2 rounded-xl bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 backdrop-blur-md shadow-md">
                  Infraestructura
                </div>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-2xl">
                La fuerza del recurso natural <br />
                <span className="text-amber-400">canalizada hacia la alta tensión</span>
              </h2>

              <p className="mt-4 text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                El flujo de electrones se acelera a través de vórtices y campos electromagnéticos, convirtiendo el potencial natural en megavatios estables para la minería, agroindustria y ciudades.
              </p>
            </motion.div>
          )}

          {/* ================= ESCENA 3: SUBESTACIÓN DE ALTA TENSIÓN ================= */}
          {currentScene === 3 && (
            <motion.div
              key="scene-3"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-center max-w-4xl flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md shadow-lg shadow-amber-500/10">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Patio de Llaves & Subestación de Potencia</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-2xl">
                Infraestructura Eléctrica de <span className="text-amber-400">Alta Potencia</span>
              </h2>

              <p className="mt-3 text-slate-200 text-xs sm:text-base max-w-2xl mx-auto">
                Mantenimiento preventivo, predictivo y correctivo en patios de llaves de hasta <strong>500 kV</strong>, asegurando continuidad operativa bajo normativas internacionales IEEE e IEC.
              </p>

              {/* Substation Equipment Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 w-full">
                {[
                  { label: 'Transformadores', sub: 'Potencia & TTR' },
                  { label: 'Interruptores SF6', sub: 'DILO & Hermeticidad' },
                  { label: 'Seccionadores', sub: 'AT / MT / BT' },
                  { label: 'Celdas MT', sub: 'Cables de 36 kV' },
                  { label: 'Líneas 500 kV', sub: 'Aisladores & Flechas' },
                  { label: 'Malla a Tierra', sub: 'Telurómetro & IEEE 80' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    className="p-3 rounded-xl bg-black/75 border border-amber-500/30 backdrop-blur-md text-center hover:border-amber-400 transition-colors"
                  >
                    <p className="font-extrabold text-xs text-amber-300 uppercase tracking-wide">{item.label}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ================= ESCENA 4: LÍNEAS DE TRANSMISIÓN ================= */}
          {currentScene === 4 && (
            <motion.div
              key="scene-4"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-center max-w-3xl flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md shadow-lg shadow-cyan-950/50">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Arterias Eléctricas Interconectadas</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-2xl">
                Líneas de Transmisión que <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-300 to-amber-400">
                  conectan el desarrollo del Perú
                </span>
              </h2>

              <p className="mt-4 text-slate-200 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto">
                Miles de kilómetros de conductores suspendidos sobre valles y desiertos garantizan que la energía llegue con máxima confiabilidad a centrales nucleares (IPEN), plantas agroindustriales y centros mineros.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <div className="px-3.5 py-2 rounded-lg bg-black/70 border border-amber-500/40 text-amber-300 text-xs font-mono">
                  ⚡ 500 kV Chilca – La Niña
                </div>
                <div className="px-3.5 py-2 rounded-lg bg-black/70 border border-amber-500/40 text-amber-300 text-xs font-mono">
                  ⚡ 220 kV Conococha – Huallanca
                </div>
                <div className="px-3.5 py-2 rounded-lg bg-black/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                  ⚡ 36 kV EGEJUNIN Huasahuasi
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= ESCENA 5: VÓRTICE ELECTROMAGNÉTICO (INSPIRADO EN EL VIDEO) ================= */}
          {currentScene === 5 && (
            <motion.div
              key="scene-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-center max-w-4xl flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-400/60 text-cyan-300 text-xs font-black tracking-wider uppercase mb-4 backdrop-blur-md shadow-xl shadow-cyan-500/20">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" />
                <span>Vórtice Electromagnético & Principios Fundamentales</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-2xl">
                La Concentración de Energía en <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-cyan-200">
                  su Máxima Expresión de Potencia
                </span>
              </h2>

              <p className="mt-3 text-slate-200 text-xs sm:text-base max-w-xl mx-auto">
                Inspirado en los campos de plasma y vórtices de aceleración cuántica: los seis valores que rigen la identidad de CATENERGY confluyen en un solo núcleo.
              </p>

              {/* Orbiting Values from User Proposal */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3 w-full">
                {[
                  { name: 'Fuerza', icon: '⚡', desc: 'Potencia & Respaldo' },
                  { name: 'Libertad', icon: '🦅', desc: 'Vuelo del Guacamayo' },
                  { name: 'Naturaleza', icon: '🌿', desc: 'Sostenibilidad Viva' },
                  { name: 'Energía', icon: '🌀', desc: 'Flujo Electromagnético' },
                  { name: 'Identidad', icon: '💎', desc: 'Sello Peruano Ica' },
                  { name: 'Elegancia', icon: '✨', desc: 'Precisión de Ingeniería' },
                ].map((val, idx) => (
                  <motion.div
                    key={val.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.08 * idx }}
                    className="p-3.5 rounded-2xl bg-[#0B0E17]/90 border border-cyan-500/40 text-center shadow-lg shadow-cyan-500/10 backdrop-blur-md hover:border-amber-400 hover:scale-105 transition-all"
                  >
                    <div className="text-xl mb-1">{val.icon}</div>
                    <p className="font-black text-xs text-amber-300 uppercase tracking-wider">{val.name}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{val.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-black/60 border border-amber-400/30 text-xs font-mono text-amber-300">
                <span>⚡ CAMPO ELÉCTRICO NOMINAL</span>
                <span>•</span>
                <span>60.0 Hz SINCRONIZADO</span>
                <span>•</span>
                <span>ALTA CONFIABILIDAD</span>
              </div>
            </motion.div>
          )}

          {/* ================= ESCENA 6: SINGULARIDAD & REVELACIÓN DE MARCA ================= */}
          {currentScene === 6 && (
            <motion.div
              key="scene-6"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative z-10 text-center max-w-4xl flex flex-col items-center px-4"
            >
              {/* Concentric Shockwave Flare Rings */}
              <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-amber-400/20 animate-ping pointer-events-none -z-10" />
              <div className="absolute w-[350px] h-[350px] rounded-full bg-amber-400/15 blur-3xl pointer-events-none -z-10" />

              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-950/80 border border-amber-400/50 text-amber-300 text-xs font-extrabold tracking-widest uppercase mb-4 backdrop-blur-md shadow-lg shadow-amber-500/20">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                <span>Singularidad & Identidad Oficial</span>
              </div>

              {/* Official Brand Logo presentation with 3D energy illuminated frame */}
              <div className="relative group mb-5">
                {/* Background Ambient Glow that expands on hover */}
                <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-r from-amber-500/20 via-yellow-400/40 to-amber-500/20 blur-2xl opacity-40 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="p-6 sm:p-8 rounded-3xl bg-black/85 border-2 border-amber-400/60 group-hover:border-amber-200 backdrop-blur-xl transition-all duration-300 relative cursor-pointer overflow-hidden shadow-2xl"
                  style={{
                    boxShadow: '0 0 45px rgba(250, 184, 0, 0.35), inset 0 0 25px rgba(250, 184, 0, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 0 65px rgba(250, 184, 0, 0.9), 0 0 110px rgba(250, 184, 0, 0.45), inset 0 0 35px rgba(250, 184, 0, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 0 45px rgba(250, 184, 0, 0.35), inset 0 0 25px rgba(250, 184, 0, 0.2)';
                  }}
                >
                  {/* Glowing electric light sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                  <CatEnergyLogo
                    variant="yellow"
                    subtitleType="auditoria"
                    size="xl"
                  />
                </motion.div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-amber-300 tracking-wide max-w-xl text-center">
                Consultorías en Alta Tensión y Energía S.A.C.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 uppercase tracking-widest font-mono">
                RUC: 20609382105 • ESTADO: ACTIVO / HABIDO • ICA – PERÚ
              </p>

              {/* 3 Core Pillars from Corporate Brochure */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl w-full">
                <div className="px-3 py-2 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-amber-200 font-semibold backdrop-blur-sm">
                  1. Gestión de la Energía & Auditorías
                </div>
                <div className="px-3 py-2 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-amber-200 font-semibold backdrop-blur-sm">
                  2. Gestión de Mantenimiento & RCM
                </div>
                <div className="px-3 py-2 rounded-xl bg-black/60 border border-amber-500/30 text-xs text-amber-200 font-semibold backdrop-blur-sm">
                  3. Subestaciones AT / MT / BT (500 kV)
                </div>
              </div>

              {/* Primary Action Button: INGRESAR A CATENERGY */}
              <div className="mt-7 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <button
                  id="btn-ingresar-catenergy"
                  onClick={onComplete}
                  type="button"
                  className="relative group overflow-hidden px-8 py-4 rounded-xl font-black text-sm sm:text-base uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] border-2 border-amber-300 cursor-pointer"
                  style={{
                    boxShadow: '0 0 35px rgba(250, 184, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.6)',
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>INGRESAR A CATENERGY</span>
                    <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1.5 transition-transform" />
                  </span>
                  {/* Lightning sweep shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                </button>

                <button
                  id="btn-explorar-directo"
                  onClick={onComplete}
                  type="button"
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-slate-200 hover:text-white text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
                >
                  Ver Servicios Directamente
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= ULTRA-MINIMAL CINEMATIC PROGRESS LINE (NO STEP BUTTONS) ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-30 h-1 bg-white/10 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-amber-300 to-amber-400 transition-all duration-100 ease-linear shadow-[0_0_8px_rgba(250,184,0,0.8)]"
          style={{ width: `${playbackProgress}%` }}
        />
      </div>
    </div>
  );
};
