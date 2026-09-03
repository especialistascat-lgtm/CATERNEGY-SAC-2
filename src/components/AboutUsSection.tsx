import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  COMPANY_INFO, 
  COMPANY_VALUES, 
  PHVA_CYCLE, 
  TEAM_DATA 
} from '../data/catenergyData';
import { 
  ShieldCheck, 
  Lightbulb, 
  Handshake, 
  Users, 
  TrendingUp, 
  Sparkles, 
  Award, 
  FileCheck, 
  Leaf, 
  Zap, 
  Building, 
  MapPin, 
  Calendar,
  CheckCircle2
} from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  const [activePhva, setActivePhva] = useState('P');

  const valueIcons = {
    ShieldCheck: ShieldCheck,
    Lightbulb: Lightbulb,
    Handshake: Handshake,
    Users: Users,
    TrendingUp: TrendingUp,
  };

  return (
    <section id="nosotros" className="py-24 bg-[#0A0C11] relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
        {/* ================= HEADER CORPORATIVO ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Nuestra Esencia & Liderazgo Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Quiénes Somos en <span className="text-amber-400">CATENERGY SAC</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Somos su socio estratégico para la excelencia en el sector eléctrico. Brindamos soluciones integrales de consultoría en eficiencia energética y mantenimiento de subestaciones de alta, media y baja tensión a nivel nacional.
          </p>
        </div>

        {/* ================= MISIÓN & VISIÓN ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="p-8 rounded-3xl bg-[#11141E] border-2 border-amber-500/30 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-28 h-28 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-400 flex items-center justify-center font-black text-xl mb-4">
                M
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Nuestra Misión</h3>
              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                {COMPANY_INFO.missionStatement}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-amber-400">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Ciclo continuo PHVA y Cero Accidentes</span>
            </div>
          </div>

          {/* Visión */}
          <div className="p-8 rounded-3xl bg-[#11141E] border-2 border-emerald-500/30 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-400/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center font-black text-xl mb-4">
                V
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Nuestra Visión</h3>
              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                {COMPANY_INFO.visionStatement}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Transición energética y liderazgo técnico</span>
            </div>
          </div>
        </div>

        {/* ================= COMPROMISOS CORPORATIVOS & EMBLEMA NATURAL ================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121622] via-[#0E1119] to-[#0A0C11] border border-amber-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5" />
                <span>Naturaleza & Sostenibilidad</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                El Vuelo de la Energía: <span className="text-amber-400">Equilibrio con el Medio Ambiente</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                "{COMPANY_INFO.natureSlogan}"
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                El guacamayo simboliza la libertad, la agudeza visual para anticipar fallas críticas y el compromiso indoblegable de CATENERGY con la preservación de la riqueza ecológica de Ica y el Perú. Toda intervención técnica en subestaciones minimiza el impacto acústico, gestiona residuos peligrosos conforme a normativa MATPEL y fomenta fuentes renovables.
              </p>
            </div>

            {/* Guacamayo / Eco-Badge */}
            <div className="p-6 rounded-2xl bg-black/60 border border-amber-400/30 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 via-amber-400 to-rose-500 p-0.5 mb-3 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-emerald-400" />
                </div>
              </div>
              <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">Símbolo Distintivo</h4>
              <p className="text-xs text-amber-300 mt-1 font-mono">Biodiversidad & Huella Cero</p>
              <p className="text-[11px] text-slate-400 mt-2 leading-tight">
                Eficiencia energética que cuida los recursos del planeta para las próximas generaciones.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CICLO PHVA DE MEJORA CONTINUA ================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Nuestra Filosofía de Trabajo: <span className="text-amber-400">Ciclo PHVA</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Garantizamos que cada proyecto cumpla con los más altos estándares de calidad, seguridad y eficiencia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PHVA_CYCLE.map((step) => {
              const isActive = activePhva === step.letter;
              return (
                <div
                  key={step.letter}
                  onClick={() => setActivePhva(step.letter)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-amber-400/15 border-amber-400 shadow-xl shadow-amber-400/10 -translate-y-1'
                      : 'bg-[#12151F] border-white/10 hover:border-amber-400/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black font-mono text-amber-400">
                      {step.letter}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      Fase {step.letter}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight">{step.title}</h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= LOS 5 VALORES CORPORATIVOS ================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Nuestros <span className="text-amber-400">Valores Corporativos</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Pilares éticos y operacionales que guían cada inspección, ensayo y relación de confianza.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_VALUES.map((val) => {
              const IconComp = valueIcons[val.icon as keyof typeof valueIcons] || ShieldCheck;
              return (
                <div
                  key={val.number}
                  className="p-5 rounded-2xl bg-[#11141E] border border-white/10 hover:border-amber-400/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-black font-mono text-amber-400">
                        0{val.number}
                      </span>
                      <IconComp className="w-5 h-5 text-amber-400" />
                    </div>
                    <h4 className="font-bold text-sm text-white uppercase tracking-wider">{val.title}</h4>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= LIDERAZGO & EQUIPO TÉCNICO ================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Talento Humano & Dirección</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Equipo de Especialistas y <span className="text-amber-400">Liderazgo</span>
            </h3>
          </div>

          {/* CEO Feature: Ing. Richter Gómez */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#171B26] via-[#121622] to-[#0A0C11] border-2 border-amber-400/50 shadow-2xl mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block p-1 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 shadow-xl shadow-amber-500/20 mb-4">
                  <div className="w-28 h-28 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 font-black text-3xl">
                    RG
                  </div>
                </div>
                <h4 className="text-2xl font-black text-white">{TEAM_DATA[0].name}</h4>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mt-1">
                  {TEAM_DATA[0].role}
                </p>
                <div className="mt-3 inline-block px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-mono font-bold">
                  {TEAM_DATA[0].experience} de Trayectoria
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {TEAM_DATA[0].bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  {TEAM_DATA[0].credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Org Chart / Collaborators Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM_DATA.slice(1).map((member, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#11141E] border border-white/10 hover:border-amber-400/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider">
                    {member.experience}
                  </span>
                  <h5 className="font-bold text-sm text-white mt-1">{member.name}</h5>
                  <p className="text-xs text-amber-300/80 font-medium mt-0.5">{member.role}</p>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1">
                  {member.specialties.slice(0, 2).map((s, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DATOS OFICIALES DE LA EMPRESA (SUNAT) ================= */}
        <div className="p-8 rounded-3xl bg-[#10131B] border border-amber-500/30">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-6">
            <Building className="w-4 h-4" />
            <span>FICHA CORPORATIVA Y DATOS FISCALES (SUNAT PERÚ)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <span className="text-xs text-slate-400 font-mono block">Razón Social:</span>
              <span className="text-xs sm:text-sm font-bold text-white block mt-1">
                {COMPANY_INFO.legalName}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-mono block">Número de RUC:</span>
              <span className="text-sm sm:text-base font-black text-amber-400 font-mono block mt-1">
                {COMPANY_INFO.ruc}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-mono block">Estado / Condición:</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-400 block mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {COMPANY_INFO.taxStatus}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-mono block">Domicilio Fiscal:</span>
              <span className="text-xs text-slate-200 block mt-1">
                {COMPANY_INFO.fiscalAddress}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
