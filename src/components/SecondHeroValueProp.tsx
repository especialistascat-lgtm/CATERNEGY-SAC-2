import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { HazardStripe } from './HazardStripe';
import { COMPANY_INFO, AREAS_DATA } from '../data/catenergyData';
import { 
  Zap, 
  Wrench, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  PhoneCall,
  FileText,
  Volume2,
  VolumeX
} from 'lucide-react';

interface SecondHeroValuePropProps {
  onSelectArea: (areaId: 'energia' | 'mantenimiento' | 'subestaciones') => void;
  onOpenQuote: () => void;
}

export const SecondHeroValueProp: React.FC<SecondHeroValuePropProps> = ({
  onSelectArea,
  onOpenQuote,
}) => {
  const [ambientAudioEnabled, setAmbientAudioEnabled] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioElemRef = useRef<HTMLAudioElement | null>(null);

  // Soft atmospheric discharge audio synthesizer via Web Audio API + audio track
  // Creates a realistic, subtle low-frequency atmospheric rumble and electrostatic crackle from deep background
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const playSoftAtmosphericDischarge = () => {
      if (!ambientAudioEnabled) return;
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioCtx();
        }
        const ctx = audioContextRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const now = ctx.currentTime;
        const duration = 4.5; // Soft lingering atmospheric resonance

        // Sub-bass atmospheric hum (deep rumble in the background)
        const subOsc = ctx.createOscillator();
        const subGain = ctx.createGain();
        const subFilter = ctx.createBiquadFilter();

        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(45, now);
        subOsc.frequency.exponentialRampToValueAtTime(32, now + duration);

        subFilter.type = 'lowpass';
        subFilter.frequency.setValueAtTime(140, now);

        // Very gentle volume scaling from far distance (deep in background)
        subGain.gain.setValueAtTime(0.0001, now);
        subGain.gain.exponentialRampToValueAtTime(0.025, now + 1.2);
        subGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        subOsc.connect(subFilter);
        subFilter.connect(subGain);
        subGain.connect(ctx.destination);

        subOsc.start(now);
        subOsc.stop(now + duration);

        // Electrostatic air ionized crackle (soft discharge texture)
        const bufferSize = ctx.sampleRate * 2.5;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.9));
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const bandpass = ctx.createBiquadFilter();
        bandpass.type = 'bandpass';
        bandpass.frequency.setValueAtTime(650, now);
        bandpass.Q.setValueAtTime(3.5, now);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.0001, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.012, now + 0.8);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        noise.connect(bandpass);
        bandpass.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        noise.start(now + 0.3);
      } catch {
        // Handled silently
      }
    };

    // Trigger initial discharge after brief natural delay
    const initialTimer = setTimeout(() => {
      playSoftAtmosphericDischarge();
    }, 1200);

    // Subtle atmospheric discharges roll periodically in the background (every 14s)
    intervalId = setInterval(() => {
      playSoftAtmosphericDischarge();
    }, 14000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalId);
    };
  }, [ambientAudioEnabled]);

  // Synchronize ambient audio element volume
  useEffect(() => {
    if (audioElemRef.current) {
      if (ambientAudioEnabled) {
        audioElemRef.current.volume = 0.16; // Gentle, distant atmospheric foundation
        audioElemRef.current.play().catch(() => {});
      } else {
        audioElemRef.current.pause();
      }
    }
  }, [ambientAudioEnabled]);

  return (
    <section id="inicio" className="relative min-h-[95vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#07090E]">
      {/* ================= BACKGROUND HIGH-ENERGY VIDEO & ATMOSPHERIC LAYERS ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dynamic Energy Particle & Vortex Video Background */}
        <video
          ref={videoRef}
          src="/video/energy_portal_bg.mp4"
          poster="/video/energy_portal_poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 mix-blend-screen scale-105 filter brightness-110 contrast-125"
        />

        {/* Ambient Photographic Texture (Sunset, Andean sky and high-voltage grid) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay filter saturate-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />

        {/* Deep Optical Gradients for Pristine Contrast and Visual Elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/65 to-[#07090E]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#07090E]/30 to-[#07090E]/90 pointer-events-none" />

        {/* Golden and Cyan Electromagnetic Glows in 3D Space */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[420px] bg-amber-500/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-16 right-12 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-500/8 rounded-full blur-[110px] pointer-events-none" />
      </div>

      {/* Atmospheric Discharge Audio Element */}
      <audio
        ref={audioElemRef}
        src="/video/atmospheric_discharge_ambient.mp3"
        loop
        preload="auto"
      />

      {/* Top Hazard Stripe Bar */}
      <div className="relative z-10 w-full mb-8">
        <HazardStripe height="h-2.5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto text-center">
        {/* Subtle Ambient Sound & Status Controls Bar */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/75 border border-amber-400/40 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-widest shadow-lg shadow-amber-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Consultorías en Alta Tensión y Energía S.A.C.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          {/* Sound Mute / Unmute Button for Atmospheric Discharge */}
          <button
            onClick={() => setAmbientAudioEnabled(!ambientAudioEnabled)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black/95 border border-white/15 text-slate-300 hover:text-amber-400 text-xs transition-colors backdrop-blur-md cursor-pointer"
            title={ambientAudioEnabled ? 'Silenciar descarga atmosférica de fondo' : 'Activar sonido atmosférico'}
          >
            {ambientAudioEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-wider text-amber-300">Descarga Suave</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-wider text-slate-400">Silenciado</span>
              </>
            )}
          </button>
        </div>

        {/* Powerful Value Proposition Headline in Thick, Radiant Gold Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <h1
            id="hero-golden-value-prop"
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FAB800] to-[#E5A900] drop-shadow-[0_4px_24px_rgba(250,184,0,0.35)]"
            style={{
              textShadow: '0 2px 20px rgba(250, 184, 0, 0.35)',
            }}
          >
            Gestión inteligente de la energía, confiabilidad eléctrica y mantenimiento especializado.
          </h1>

          <p className="mt-5 text-sm sm:text-lg text-slate-300/90 font-normal max-w-3xl mx-auto leading-relaxed drop-shadow">
            Socio estratégico en el sector eléctrico para subestaciones e industrias en todo el Perú. Confiabilidad y continuidad de activos en alta, media y baja tensión bajo ciclo PHVA.
          </p>
        </motion.div>

        {/* Quick Highlights / Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 flex flex-wrap justify-center items-center gap-3.5 text-xs font-medium text-slate-300/90"
        >
          <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-amber-500/20 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300">Homologación OSINERGMIN (Clase A)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-amber-500/20 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300">Sistemas de Gestión ISO 50001</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-amber-500/20 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300">Compromiso CERO ACCIDENTES (IPERC)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg border border-amber-500/20 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300">Subestaciones AT/MT hasta 500 kV</span>
          </div>
        </motion.div>

        {/* The 3 Major Areas: Thick Golden Modern Technological Interactive Blocks */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {AREAS_DATA.map((area, idx) => {
            const isEnergia = area.id === 'energia';
            const isMantenimiento = area.id === 'mantenimiento';
            const isSubestaciones = area.id === 'subestaciones';

            return (
              <motion.div
                key={area.id}
                id={`card-area-${area.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.12 }}
                onClick={() => onSelectArea(area.id)}
                className="group relative cursor-pointer rounded-2xl bg-[#0E1118]/90 backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-amber-400/60 hover:border-amber-400 shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex flex-col justify-between"
                style={{
                  boxShadow: '0 0 15px rgba(250, 184, 0, 0.12)',
                }}
              >
                {/* Golden corner accents */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-2xl pointer-events-none">
                  <div className="absolute transform rotate-45 bg-amber-400 text-black font-bold text-[9px] py-0.5 right-[-28px] top-[14px] w-[90px] text-center">
                    ÁREA {area.number}
                  </div>
                </div>

                <div>
                  {/* Icon and Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-black border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-200">
                      {isEnergia && <Zap className="w-6 h-6 text-amber-400" />}
                      {isMantenimiento && <Wrench className="w-6 h-6 text-amber-400" />}
                      {isSubestaciones && <ShieldCheck className="w-6 h-6 text-amber-400" />}
                    </div>
                    <span className="text-[11px] font-bold text-amber-300/90 uppercase tracking-widest px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                      {area.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors uppercase tracking-tight">
                    {area.title}
                  </h2>

                  <p className="mt-2 text-xs font-semibold text-amber-400 italic">
                    "{area.heroPhrase}"
                  </p>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>{area.servicesCount} Especialidades</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORAR SERVICIOS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Actions Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2.5"
          >
            <FileText className="w-4 h-4 text-black" />
            <span>SOLICITA UNA COTIZACIÓN TÉCNICA</span>
          </button>
          
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola CATENERGY SAC, requiero asesoría técnica para mis instalaciones eléctricas.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-[#15803D] hover:bg-[#16A34A] text-white shadow-lg shadow-emerald-600/20 hover:scale-105 transition-all flex items-center justify-center gap-2.5"
          >
            <PhoneCall className="w-4 h-4" />
            <span>CONSULTAR POR WHATSAPP (994 782 124)</span>
          </a>
        </div>
      </div>

      {/* Bottom Hazard Stripe Bar */}
      <div className="relative z-10 w-full mt-10">
        <HazardStripe height="h-2.5" />
      </div>
    </section>
  );
};
