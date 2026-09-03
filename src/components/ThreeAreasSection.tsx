import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service, Area } from '../types';
import { SERVICES_DATA, AREAS_DATA } from '../data/catenergyData';
import { 
  Zap, 
  Wrench, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  CheckCircle, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';

interface ThreeAreasSectionProps {
  selectedAreaId: 'all' | 'energia' | 'mantenimiento' | 'subestaciones';
  onSelectArea: (areaId: 'all' | 'energia' | 'mantenimiento' | 'subestaciones') => void;
  onSelectService: (service: Service) => void;
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ThreeAreasSection: React.FC<ThreeAreasSectionProps> = ({
  selectedAreaId,
  onSelectArea,
  onSelectService,
  onOpenQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_DATA.filter((srv) => {
    const matchesArea = selectedAreaId === 'all' || srv.areaId === selectedAreaId;
    const matchesSearch =
      searchQuery.trim() === '' ||
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesArea && matchesSearch;
  });

  return (
    <section id="areas" className="py-20 bg-[#0B0D13] relative overflow-hidden border-t border-white/5">
      {/* Background visual accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Portafolio de Soluciones Especializadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Nuestras Tres Grandes Áreas de <span className="text-amber-400">Ingeniería y Servicios</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Cada área cuenta con ingenieros especialistas certificados, instrumental de laboratorio y protocolos homologados por OSINERGMIN e instituciones rectoras del sector eléctrico.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onSelectArea('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedAreaId === 'all'
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              Todos los Servicios ({SERVICES_DATA.length})
            </button>

            {AREAS_DATA.map((area) => (
              <button
                key={area.id}
                onClick={() => onSelectArea(area.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedAreaId === area.id
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{area.number}.</span>
                <span>{area.id === 'energia' ? 'Gestión de Energía' : area.id === 'mantenimiento' ? 'Gestión Mantenimiento' : 'Subestaciones AT/MT/BT'}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar servicio (ej. SF6, AEE, IPERC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121620] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Selected Area Banner if specific area active */}
        {selectedAreaId !== 'all' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#131722] to-[#10131C] border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                <span>ÁREA {AREAS_DATA.find((a) => a.id === selectedAreaId)?.number}</span>
                <span>•</span>
                <span>{AREAS_DATA.find((a) => a.id === selectedAreaId)?.badge}</span>
              </div>
              <h3 className="text-xl font-black text-white mt-1">
                {AREAS_DATA.find((a) => a.id === selectedAreaId)?.title}
              </h3>
              <p className="text-xs text-amber-300/90 font-medium italic mt-1">
                "{AREAS_DATA.find((a) => a.id === selectedAreaId)?.heroPhrase}"
              </p>
            </div>
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 whitespace-nowrap self-start md:self-auto"
            >
              Cotizar esta Área
            </button>
          </motion.div>
        )}

        {/* Services Grid with Hover Elevation & Interactive Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative rounded-2xl bg-[#121622] hover:bg-[#161B29] border border-white/10 hover:border-amber-400/80 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/15"
              >
                {/* Header Tag & Area Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-400/15 text-amber-300 border border-amber-400/25">
                      {service.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {service.areaId === 'energia'
                        ? 'ÁREA 01'
                        : service.areaId === 'mantenimiento'
                        ? 'ÁREA 02'
                        : 'ÁREA 03'}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Impact Phrase */}
                  <p className="mt-2 text-xs font-medium text-amber-400/90 italic">
                    "{service.heroPhrase}"
                  </p>

                  {/* Short Technical Summary */}
                  <p className="mt-3 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Scope Highlights Preview */}
                  <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                    {service.scopeActivities.slice(0, 2).map((act, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{act}</span>
                      </div>
                    ))}
                  </div>

                  {/* Real Reference Case pill if exists */}
                  {service.realCasesExecuted && service.realCasesExecuted.length > 0 && (
                    <div className="mt-3 p-2 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300">
                      <span className="text-amber-400 font-semibold">Caso real: </span>
                      <span className="text-slate-300">{service.realCasesExecuted[0]}</span>
                    </div>
                  )}
                </div>

                {/* Card Action Footer with required "VER SERVICIO" button */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shadow-md shadow-amber-400/10 flex items-center justify-center gap-1.5"
                  >
                    <span>VER SERVICIO</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amber-400 transition-colors"
                    title="Cotizar directamente este servicio"
                  >
                    <Zap className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[#121622] rounded-2xl border border-white/10 p-8">
            <p className="text-base text-slate-300">No se encontraron servicios que coincidan con su búsqueda.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectArea('all');
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
