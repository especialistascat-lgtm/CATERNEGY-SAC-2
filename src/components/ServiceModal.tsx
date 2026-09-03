import React from 'react';
import { motion } from 'motion/react';
import { Service } from '../types';
import { COMPANY_INFO } from '../data/catenergyData';
import { HazardStripe } from './HazardStripe';
import { 
  X, 
  FileText, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Factory, 
  Activity, 
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenQuote,
}) => {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola CATENERGY SAC, estoy interesado en recibir información técnica y cotización sobre el servicio: ${service.title}`
  );

  return (
    <div
      id="service-detail-modal-backdrop"
      className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0F1219] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-100"
      >
        {/* Top Header & Close Button */}
        <div className="sticky top-0 z-30 bg-[#0F1219]/95 backdrop-blur-md px-6 py-3.5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              {service.areaName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-10">
          {/* ================= HERO DEL SERVICIO ================= */}
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 p-6 sm:p-10 bg-gradient-to-br from-[#171B26] via-[#10131B] to-[#0A0C11]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 filter saturate-150"
              style={{ backgroundImage: `url(${service.coverImage})` }}
            />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                {service.tag}
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {service.title}
              </h1>
              <p className="mt-3 text-base sm:text-xl font-medium text-amber-300/90 italic">
                "{service.heroPhrase}"
              </p>

              {service.equipmentHomologated && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-amber-400/40 text-xs font-mono text-amber-300">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>{service.equipmentHomologated}</span>
                </div>
              )}
            </div>
          </div>

          {/* ================= DESCRIPCIÓN TÉCNICA (4 PREGUNTAS) ================= */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              <Layers className="w-4 h-4" />
              <span>DESCRIPCIÓN DEL SERVICIO</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-[#141824] border border-white/5">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  ¿Qué es?
                </h4>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {service.description.whatIs}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141824] border border-white/5">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  ¿Para qué sirve?
                </h4>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {service.description.whatFor}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141824] border border-white/5">
                <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  ¿Qué problema resuelve?
                </h4>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {service.description.problemSolved}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141824] border border-white/5">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Beneficios para el cliente
                </h4>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {service.description.clientBenefits}
                </p>
              </div>
            </div>
          </div>

          {/* ================= ALCANCE DE ACTIVIDADES ================= */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              <Activity className="w-4 h-4" />
              <span>ALCANCE TÉCNICO & ACTIVIDADES PRINCIPALES</span>
            </div>

            <div className="rounded-2xl bg-[#131722] border border-white/10 p-5 divide-y divide-white/5">
              {service.scopeActivities.map((act, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-start gap-3">
                  <div className="p-1 rounded bg-amber-400/20 text-amber-400 shrink-0 mt-0.5 font-mono text-[11px] font-bold">
                    0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {act}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= BENEFICIOS MEDIANTE TARJETAS VISUALES ================= */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              <Award className="w-4 h-4" />
              <span>BENEFICIOS CLAVE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.benefits.map((b, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#181D2C] to-[#121622] border border-amber-500/20 hover:border-amber-400/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    {b.metric && (
                      <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono block mb-2">
                        {b.metric}
                      </span>
                    )}
                    <h5 className="font-bold text-sm text-white">{b.title}</h5>
                    <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= APLICACIONES Y SECTORES ================= */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              <Factory className="w-4 h-4" />
              <span>SECTORES Y CAMPOS DE APLICACIÓN</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {service.applications.map((app, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-[#141824] border border-white/10 text-slate-200 text-xs font-medium flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{app}</span>
                </span>
              ))}
            </div>
          </div>

          {/* ================= METODOLOGÍA PHVA EN 6 PASOS ================= */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              <span>METODOLOGÍA DE TRABAJO (PROCESO EN 6 PASOS)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {service.methodology.map((m) => (
                <div
                  key={m.step}
                  className="p-4 rounded-xl bg-[#131620] border border-white/5 relative flex flex-col justify-between"
                >
                  <span className="text-amber-400 font-mono font-black text-lg">
                    0{m.step}
                  </span>
                  <div className="mt-2">
                    <h6 className="font-bold text-xs text-white leading-snug">{m.title}</h6>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real case reference if exists */}
          {service.realCasesExecuted && service.realCasesExecuted.length > 0 && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-xs text-amber-300 uppercase tracking-wider">
                  Experiencia Comprobada en Brochure Oficial:
                </p>
                <p className="text-xs text-slate-200 mt-0.5">
                  {service.realCasesExecuted.join(' • ')}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Sticky CTA Bottom Bar */}
        <div className="sticky bottom-0 bg-[#0A0C11] border-t border-amber-500/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs text-slate-400 block font-mono">
              ¿Listo para intervenir o auditar sus instalaciones?
            </span>
            <span className="text-xs font-bold text-white">
              Cotice con ingenieros especialistas certificados de CATENERGY SAC
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenQuote(service.title);
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>SOLICITAR COTIZACIÓN</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-[#15803D] hover:bg-[#16A34A] text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>CONSULTAR POR WHATSAPP</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
