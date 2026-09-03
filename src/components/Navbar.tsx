import React, { useState, useEffect } from 'react';
import { CatEnergyLogo } from './CatEnergyLogo';
import { COMPANY_INFO } from '../data/catenergyData';
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  FileText, 
  Sparkles, 
  Zap, 
  Wrench, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export interface NavbarProps {
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuote: (prefillService?: string) => void;
  onReplayIntro?: () => void;
  onOpenIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = 'inicio',
  onNavigate,
  onOpenQuote,
  onReplayIntro,
  onOpenIntro,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleIntroClick = () => {
    if (onReplayIntro) {
      onReplayIntro();
    } else if (onOpenIntro) {
      onOpenIntro();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#07090D] border-b border-white/5 text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              RUC: {COMPANY_INFO.ruc} (ACTIVO / HABIDO)
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Ica – Lima – Cobertura a Nivel Nacional</span>
            <span className="text-slate-400">|</span>
            <span className="text-amber-300/80 font-mono">24/7 Soporte en Alta Tensión</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <button
              id="btn-ver-intro-header"
              onClick={handleIntroClick}
              type="button"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded bg-amber-400/15 hover:bg-amber-400/25 text-amber-300 hover:text-amber-200 border border-amber-400/40 transition-all cursor-pointer shadow-sm active:scale-95"
              title="Volver a reproducir experiencia inmersiva"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Ver Intro</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0C10]/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20 py-2.5'
            : 'bg-[#0A0C10]/85 backdrop-blur-sm border-b border-white/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Real CAT ENERGY Brand Logo with illuminated frame on hover */}
          <div className="flex items-center gap-3">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-xl bg-amber-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div 
                className="relative px-2.5 py-1 rounded-xl border border-amber-500/25 group-hover:border-amber-300 bg-black/30 group-hover:bg-black/70 transition-all duration-300 shadow-sm cursor-pointer"
                style={{
                  boxShadow: '0 0 10px rgba(250, 184, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 0 25px rgba(250, 184, 0, 0.7), inset 0 0 10px rgba(250, 184, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(250, 184, 0, 0.1)';
                }}
              >
                <CatEnergyLogo
                  variant="yellow"
                  subtitleType="auditoria"
                  size="md"
                  onClick={() => handleNavClick('inicio')}
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            <button
              id="nav-inicio"
              onClick={() => handleNavClick('inicio')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeSection === 'inicio'
                  ? 'text-amber-400 font-semibold bg-amber-400/10'
                  : 'text-slate-200 hover:text-amber-300 hover:bg-white/5'
              }`}
            >
              INICIO
            </button>

            <button
              id="nav-nosotros"
              onClick={() => handleNavClick('nosotros')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeSection === 'nosotros'
                  ? 'text-amber-400 font-semibold bg-amber-400/10'
                  : 'text-slate-200 hover:text-amber-300 hover:bg-white/5'
              }`}
            >
              NOSOTROS
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                id="nav-servicios-toggle"
                onClick={() => handleNavClick('areas')}
                className={`px-3 py-2 rounded-lg inline-flex items-center gap-1.5 transition-colors ${
                  ['energia', 'mantenimiento', 'subestaciones', 'areas'].includes(activeSection)
                    ? 'text-amber-400 font-semibold bg-amber-400/10'
                    : 'text-slate-200 hover:text-amber-300 hover:bg-white/5'
                }`}
              >
                <span>SERVICIOS & ÁREAS</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 mt-1 bg-[#101319] border border-amber-500/30 rounded-xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <button
                    onClick={() => handleNavClick('energia')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-amber-400/10 flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-amber-500/20 text-amber-400 mt-0.5 group-hover:scale-105 transition-transform">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100 group-hover:text-amber-400 text-xs tracking-wider uppercase">
                        Área 01: Gestión de la Energía
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Auditorías AEE, Calidad Clase A, Renovables e ISO 50001
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('mantenimiento')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-amber-400/10 flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-emerald-500/20 text-emerald-400 mt-0.5 group-hover:scale-105 transition-transform">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100 group-hover:text-amber-400 text-xs tracking-wider uppercase">
                        Área 02: Gestión de Mantenimiento
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Causa Raíz ACR, Contingencias MATPEL, SST & IPERC
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('subestaciones')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-amber-400/10 flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-amber-400/20 text-amber-400 mt-0.5 group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100 group-hover:text-amber-400 text-xs tracking-wider uppercase">
                        Área 03: Subestaciones AT / MT / BT
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Transformadores, Fugas SF6 DILO, Pozos a Tierra y Baterías
                      </p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-casos"
              onClick={() => handleNavClick('proyectos')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeSection === 'proyectos'
                  ? 'text-amber-400 font-semibold bg-amber-400/10'
                  : 'text-slate-200 hover:text-amber-300 hover:bg-white/5'
              }`}
            >
              CASOS DE ÉXITO
            </button>

            <button
              id="nav-blog"
              onClick={() => handleNavClick('blog')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeSection === 'blog'
                  ? 'text-amber-400 font-semibold bg-amber-400/10'
                  : 'text-slate-200 hover:text-amber-300 hover:bg-white/5'
              }`}
            >
              BLOG
            </button>

            <button
              id="nav-contacto"
              onClick={() => handleNavClick('contacto')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                activeSection === 'contacto'
                  ? 'text-amber-400 font-semibold bg-amber-400/10'
                  : 'text-slate-200 hover:text-amber-300 hover:bg-white/5'
              }`}
            >
              CONTACTO
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="btn-nav-ver-intro"
              onClick={handleIntroClick}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-bold text-xs uppercase tracking-wider text-amber-300 hover:text-amber-200 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 transition-all cursor-pointer hover:scale-105 active:scale-95"
              title="Ver experiencia inmersiva de 6 escenas"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Ver Intro</span>
            </button>

            <button
              id="btn-nav-cotizar"
              onClick={() => onOpenQuote()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                <span>COTIZAR</span>
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 lg:hidden"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D0F14] border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-2 mt-2">
            <button
              onClick={() => handleNavClick('inicio')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-200 font-medium hover:bg-white/5 hover:text-amber-400"
            >
              INICIO
            </button>
            <button
              onClick={() => handleNavClick('nosotros')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-200 font-medium hover:bg-white/5 hover:text-amber-400"
            >
              NOSOTROS & FILOSOFÍA PHVA
            </button>
            <div className="border-t border-white/10 pt-2 pb-1 text-xs text-amber-400 font-semibold px-3 uppercase tracking-wider">
              Áreas de Especialidad
            </div>
            <button
              onClick={() => handleNavClick('energia')}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-amber-400/10 hover:text-amber-400 text-sm"
            >
              • 01. Consultorías en Gestión de la Energía
            </button>
            <button
              onClick={() => handleNavClick('mantenimiento')}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-amber-400/10 hover:text-amber-400 text-sm"
            >
              • 02. Consultorías en Gestión de Mantenimiento
            </button>
            <button
              onClick={() => handleNavClick('subestaciones')}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-300 hover:bg-amber-400/10 hover:text-amber-400 text-sm"
            >
              • 03. Mantenimiento Subestaciones AT/MT/BT
            </button>
            <button
              onClick={() => handleNavClick('proyectos')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-200 font-medium hover:bg-white/5 hover:text-amber-400"
            >
              CASOS DE ÉXITO REALES
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-200 font-medium hover:bg-white/5 hover:text-amber-400"
            >
              BLOG TÉCNICO
            </button>
            <button
              onClick={() => handleNavClick('contacto')}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-200 font-medium hover:bg-white/5 hover:text-amber-400"
            >
              CONTACTO
            </button>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-amber-400 text-black text-center"
              >
                SOLICITAR COTIZACIÓN
              </button>
              <button
                id="btn-mobile-ver-intro"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleIntroClick();
                }}
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Ver Intro Inmersivo (6 Escenas)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
