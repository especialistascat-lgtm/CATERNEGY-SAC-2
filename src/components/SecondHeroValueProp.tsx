import React from 'react';
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
  FileText
} from 'lucide-react';

interface SecondHeroValuePropProps {
  onSelectArea: (areaId: 'energia' | 'mantenimiento' | 'subestaciones') => void;
  onOpenQuote: () => void;
}

export const SecondHeroValueProp: React.FC<SecondHeroValuePropProps> = ({
  onSelectArea,
  onOpenQuote,
}) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#0A0C11]">
      {/* Panoramic Sunset & Nature Backdrop combined with electrical infrastructure */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-35 filter saturate-125"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,12,17,0.7) 0%, rgba(10,12,17,0.85) 60%, #0A0C11 100%), url('https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Atmospheric ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Hazard Stripe Bar */}
      <div className="relative z-10 w-full mb-8">
        <HazardStripe height="h-2.5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto text-center">
        {/* Environmental & Corporate Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-amber-400/40 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-widest mb-6 shadow-lg shadow-amber-500/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Consultorías en Alta Tensión y Energía S.A.C.</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

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

          <p className="mt-6 text-base sm:text-xl text-slate-200 font-normal max-w-3xl mx-auto leading-relaxed drop-shadow">
            Socio estratégico en el sector eléctrico para subestaciones e industrias en todo el Perú. Auditamos, prevenimos y garantizamos la continuidad de sus activos de alta, media y baja tensión con metodología de ciclo continuo PHVA.
          </p>
        </motion.div>

        {/* Quick Highlights / Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs font-medium text-slate-300"
        >
          <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Homologación OSINERGMIN (Clase A)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Sistemas de Gestión ISO 50001</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Compromiso CERO ACCIDENTES (IPERC)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Subestaciones AT/MT hasta 500 kV</span>
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
