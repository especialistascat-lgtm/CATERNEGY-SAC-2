import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REAL_PROJECTS_PORTFOLIO } from '../data/catenergyData';
import { ProjectCase } from '../types';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Layers, 
  Filter, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Wrench
} from 'lucide-react';

interface ProjectsPortfolioProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<'all' | 'energia' | 'mantenimiento' | 'subestaciones'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);

  const filteredProjects = REAL_PROJECTS_PORTFOLIO.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="proyectos" className="py-20 bg-[#090B10] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Brochure Oficial • Experiencia Acreditada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Casos de Éxito y <span className="text-amber-400">Trabajos Realizados</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Intervenciones de alta complejidad ejecutadas para empresas líderes de generación, transmisión, agroindustria y entidades del Estado peruano.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Todos los Trabajos', count: REAL_PROJECTS_PORTFOLIO.length },
            { id: 'energia', label: 'Auditorías de Energía', count: REAL_PROJECTS_PORTFOLIO.filter((p) => p.category === 'energia').length },
            { id: 'mantenimiento', label: 'Gestión & Planes SST', count: REAL_PROJECTS_PORTFOLIO.filter((p) => p.category === 'mantenimiento').length },
            { id: 'subestaciones', label: 'Subestaciones AT/MT', count: REAL_PROJECTS_PORTFOLIO.filter((p) => p.category === 'subestaciones').length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === tab.id
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                  : 'bg-[#131622] text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="rounded-2xl bg-[#11141E] border border-white/10 hover:border-amber-400/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30">
                      {project.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      #{project.number.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base font-bold text-white leading-snug">
                    {project.title}
                  </h3>

                  {/* Client & Date Information */}
                  <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2 font-medium text-amber-300">
                      <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="line-clamp-1">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{project.date}</span>
                    </div>
                    {project.location && (
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="line-clamp-1">{project.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Bullet points from brochure */}
                  <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                    {project.descriptionPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Trabajo Certificado
                  </span>
                  <button
                    onClick={() => onOpenQuote(project.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Cotizar similar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner with Client Logos / Mentions from Brochure */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#121622] border border-amber-500/20 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-4 font-bold">
            Entidades y Organizaciones con Trabajos Verificados en Brochure
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm sm:text-base font-bold text-slate-200">
            <span className="hover:text-amber-400 transition-colors">SENAMHI</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-amber-400 transition-colors">COMPLEJO AGROINDUSTRIAL BETA</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-amber-400 transition-colors">IPEN (Energía Nuclear)</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-amber-400 transition-colors">ATLANTICA</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-amber-400 transition-colors">EGEJUNIN</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-amber-400 transition-colors">RED DE ENERGÍA DEL PERÚ (ISA REP)</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-amber-400 transition-colors">CANCHAYLLO</span>
          </div>
        </div>
      </div>
    </section>
  );
};
