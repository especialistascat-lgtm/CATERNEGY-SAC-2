import React, { useState } from 'react';
import { CatEnergyLogo } from './CatEnergyLogo';
import { HazardStripe } from './HazardStripe';
import { COMPANY_INFO, AREAS_DATA } from '../data/catenergyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  ArrowUp,
  FileCheck2,
  ExternalLink,
  X,
  Send,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
  onOpenIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote, onOpenIntro }) => {
  const [complaintsModalOpen, setComplaintsModalOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  // Complaints form state
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);
  const [complaintForm, setComplaintForm] = useState({
    claimantName: '',
    dniRuc: '',
    email: '',
    phone: '',
    type: 'Reclamo (Disconformidad con el servicio)',
    detail: '',
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080B] text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Hazard stripe line */}
      <HazardStripe height="h-2" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Official Tax Identity (2 Cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="group relative inline-block">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-400/40 to-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div 
                className="relative bg-black/80 p-4 rounded-2xl border-2 border-amber-500/40 group-hover:border-amber-200 transition-all duration-300 shadow-md cursor-pointer"
                style={{
                  boxShadow: '0 0 20px rgba(250, 184, 0, 0.2), inset 0 0 10px rgba(250, 184, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 0 40px rgba(250, 184, 0, 0.8), inset 0 0 20px rgba(250, 184, 0, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 0 20px rgba(250, 184, 0, 0.2), inset 0 0 10px rgba(250, 184, 0, 0.1)';
                }}
              >
                <CatEnergyLogo
                  variant="yellow"
                  subtitleType="auditoria"
                  size="md"
                />
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Socio estratégico en consultorías energéticas y mantenimiento especializado en subestaciones de alta, media y baja tensión a nivel nacional.
            </p>

            {/* Official SUNAT data card */}
            <div className="p-4 rounded-xl bg-[#0E1118] border border-white/5 space-y-1.5 text-[11px] font-mono">
              <div>
                <span className="text-slate-400">Razón Social: </span>
                <span className="text-slate-200 font-bold">{COMPANY_INFO.legalName}</span>
              </div>
              <div>
                <span className="text-slate-400">RUC: </span>
                <span className="text-amber-400 font-bold">{COMPANY_INFO.ruc}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Estado: </span>
                <span className="text-emerald-400 font-bold">ACTIVO</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">Condición: </span>
                <span className="text-emerald-400 font-bold">HABIDO</span>
              </div>
              <div>
                <span className="text-slate-400">Tipo: </span>
                <span className="text-slate-200">{COMPANY_INFO.taxEntity}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('inicio')} className="hover:text-amber-400 transition-colors">
                  Inicio / Propuesta
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('areas')} className="hover:text-amber-400 transition-colors">
                  Las Tres Áreas Técnicas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('proyectos')} className="hover:text-amber-400 transition-colors">
                  Casos de Éxito y Obras
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('nosotros')} className="hover:text-amber-400 transition-colors">
                  Quiénes Somos (PHVA)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-amber-400 transition-colors">
                  Artículos de Valor
                </button>
              </li>
              {onOpenIntro && (
                <li>
                  <button 
                    id="footer-ver-intro"
                    onClick={onOpenIntro} 
                    className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-medium"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span>Ver Intro Inmersivo (6 Escenas)</span>
                  </button>
                </li>
              )}
              <li>
                <button onClick={onOpenQuote} className="text-amber-400 font-bold hover:underline">
                  Solicita tu Cotización
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The 3 Core Areas */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {AREAS_DATA.map((a) => (
                <li key={a.id}>
                  <button
                    onClick={() => onNavigate('areas')}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    <span className="text-amber-400 font-mono font-bold">{a.number}. </span>
                    <span>{a.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2 text-[11px] text-slate-400">
                Homologación Clase A • OSINERGMIN
              </li>
              <li className="text-[11px] text-slate-400">
                Sistemas de Gestión ISO 50001
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Legal Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Contacto Directo
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-amber-400">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-400">
                  {COMPANY_INFO.fiscalAddress}
                </span>
              </div>
            </div>

            {/* Complaints Book & Legal triggers */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <button
                onClick={() => setComplaintsModalOpen(true)}
                className="w-full py-2 px-3 rounded-lg bg-[#141824] hover:bg-amber-400 hover:text-black border border-white/10 text-amber-300 text-xs font-bold uppercase flex items-center justify-center gap-2 transition-all"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Libro de Reclamaciones</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <button onClick={() => setPolicyModalOpen(true)} className="hover:text-white">
                  Privacidad
                </button>
                <span>•</span>
                <button onClick={() => setTermsModalOpen(true)} className="hover:text-white">
                  Términos
                </button>
                <span>•</span>
                <span className="text-slate-400">Marca Reg.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Slogan & Closing Banner */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-black text-amber-400 tracking-wider uppercase font-mono">
              CATENERGY SAC: Energía + Tecnología + Confiabilidad + Seguridad + Sostenibilidad
            </p>
            <p className="text-[11px] text-slate-400">
              © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Todos los derechos reservados.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-amber-400 hover:text-black text-slate-300 transition-all flex items-center gap-1.5 text-xs font-bold uppercase"
          >
            <span>Arriba</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ================= MODAL LIBRO DE RECLAMACIONES ================= */}
      {complaintsModalOpen && (
        <div
          className="fixed inset-0 z-[140] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setComplaintsModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-[#11141E] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-black text-white uppercase">
                  Libro de Reclamaciones Virtual
                </h3>
              </div>
              <button
                onClick={() => setComplaintsModalOpen(false)}
                className="p-1 rounded-full bg-white/5 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Conforme a lo establecido en el Código de Protección y Defensa del Consumidor (Ley N° 29571), CATENERGY SAC pone a su disposición este registro oficial.
            </p>

            {complaintSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Hoja de Reclamación Registrada</h4>
                <p className="text-xs text-slate-300">
                  Código de trámite: <span className="font-mono text-amber-400 font-bold">REC-CAT-2025-0042</span>. Recibirá una copia formal y respuesta en un plazo no mayor a 15 días hábiles conforme a ley.
                </p>
                <button
                  onClick={() => {
                    setComplaintSubmitted(false);
                    setComplaintsModalOpen(false);
                  }}
                  className="mt-4 px-5 py-2 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase"
                >
                  Entendido
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setComplaintSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="block text-slate-300 font-bold uppercase mb-1">Nombre y Apellidos *</label>
                  <input
                    type="text"
                    required
                    value={complaintForm.claimantName}
                    onChange={(e) => setComplaintForm({ ...complaintForm, claimantName: e.target.value })}
                    className="w-full bg-[#171B26] border border-white/10 rounded-xl px-3 py-2 text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-bold uppercase mb-1">DNI / RUC *</label>
                    <input
                      type="text"
                      required
                      value={complaintForm.dniRuc}
                      onChange={(e) => setComplaintForm({ ...complaintForm, dniRuc: e.target.value })}
                      className="w-full bg-[#171B26] border border-white/10 rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-bold uppercase mb-1">Teléfono *</label>
                    <input
                      type="tel"
                      required
                      value={complaintForm.phone}
                      onChange={(e) => setComplaintForm({ ...complaintForm, phone: e.target.value })}
                      className="w-full bg-[#171B26] border border-white/10 rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 font-bold uppercase mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={complaintForm.email}
                    onChange={(e) => setComplaintForm({ ...complaintForm, email: e.target.value })}
                    className="w-full bg-[#171B26] border border-white/10 rounded-xl px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold uppercase mb-1">Tipo</label>
                  <select
                    value={complaintForm.type}
                    onChange={(e) => setComplaintForm({ ...complaintForm, type: e.target.value })}
                    className="w-full bg-[#171B26] border border-white/10 rounded-xl px-3 py-2 text-white"
                  >
                    <option value="Reclamo">Reclamo (Disconformidad con el servicio)</option>
                    <option value="Queja">Queja (Malestar respecto a la atención al cliente)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-bold uppercase mb-1">Detalle del Reclamo o Queja *</label>
                  <textarea
                    rows={3}
                    required
                    value={complaintForm.detail}
                    onChange={(e) => setComplaintForm({ ...complaintForm, detail: e.target.value })}
                    className="w-full bg-[#171B26] border border-white/10 rounded-xl p-3 text-white"
                    placeholder="Describa los hechos ocurridos..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold uppercase tracking-wider"
                >
                  Registrar Reclamo Virtual
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ================= MODAL POLÍTICA DE PRIVACIDAD ================= */}
      {policyModalOpen && (
        <div
          className="fixed inset-0 z-[140] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setPolicyModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#11141E] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-black text-white uppercase">Política de Privacidad y Protección de Datos</h3>
              <button onClick={() => setPolicyModalOpen(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto">
              <p>
                En cumplimiento de la Ley N° 29733 (Ley de Protección de Datos Personales del Perú) y su Reglamento, CONSULTORÍAS EN ALTA TENSIÓN Y ENERGÍA S.A.C. (CATENERGY SAC), con RUC 20609382105, informa que la información proporcionada a través de formularios o WhatsApp es tratada de manera estrictamente confidencial.
              </p>
              <p>
                Los datos solicitados se emplean única y exclusivamente para contactar a los representantes de las empresas interesadas, emitir cotizaciones técnicas formales y coordinar visitas operativas en subestaciones o plantas industriales.
              </p>
              <p>
                CATENERGY SAC no comercializa ni cede datos a terceros no vinculados con la ejecución técnica contractual.
              </p>
            </div>
            <button
              onClick={() => setPolicyModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL TÉRMINOS Y CONDICIONES ================= */}
      {termsModalOpen && (
        <div
          className="fixed inset-0 z-[140] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setTermsModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#11141E] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-black text-white uppercase">Términos y Condiciones de Servicio</h3>
              <button onClick={() => setTermsModalOpen(false)} className="p-1 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto">
              <p>
                Los servicios brindados por CATENERGY SAC en alta, media y baja tensión se ejecutan bajo estrictos protocolos de Seguridad y Salud en el Trabajo (SST), cumplimiento del Código Nacional de Electricidad (CNE) y normas OSINERGMIN.
              </p>
              <p>
                Las cotizaciones y propuestas técnicas emitidas tienen una validez de 30 días calendarios salvo acuerdo expreso entre las partes.
              </p>
            </div>
            <button
              onClick={() => setTermsModalOpen(false)}
              className="w-full py-2.5 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
