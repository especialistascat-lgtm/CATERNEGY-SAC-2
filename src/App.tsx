import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ImmersiveIntro } from './components/ImmersiveIntro';
import { SecondHeroValueProp } from './components/SecondHeroValueProp';
import { ThreeAreasSection } from './components/ThreeAreasSection';
import { ServiceModal } from './components/ServiceModal';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { AboutUsSection } from './components/AboutUsSection';
import { QuoteSection } from './components/QuoteSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { Service } from './types';
import { COMPANY_INFO } from './data/catenergyData';
import { PhoneCall, Zap, MessageCircle } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedAreaId, setSelectedAreaId] = useState<'all' | 'energia' | 'mantenimiento' | 'subestaciones'>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [quoteServiceTarget, setQuoteServiceTarget] = useState<string>('');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    // If intro is open, close it first
    if (showIntro) {
      setShowIntro(false);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowIntro(true);
  };

  const handleSelectAreaFromHero = (areaId: 'energia' | 'mantenimiento' | 'subestaciones') => {
    setSelectedAreaId(areaId);
    handleNavigate('areas');
  };

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setQuoteServiceTarget(serviceTitle);
    }
    handleNavigate('contacto');
  };

  return (
    <div className="min-h-screen bg-[#0A0C11] text-white flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* 6-Scene Immersive Experience as requested in prompt */}
      {showIntro && (
        <ImmersiveIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Main Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onReplayIntro={handleOpenIntro}
        onOpenIntro={handleOpenIntro}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Body */}
      <main className="flex-grow">
        {/* Segunda Portada — Propuesta de Valor (Golden headline, sunset background, 3 golden areas) */}
        <SecondHeroValueProp
          onSelectArea={handleSelectAreaFromHero}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Portafolio Interactivo de las Tres Áreas y Servicios con botón "VER SERVICIO" */}
        <ThreeAreasSection
          selectedAreaId={selectedAreaId}
          onSelectArea={(areaId) => setSelectedAreaId(areaId)}
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuote={(title) => handleOpenQuote(title)}
        />

        {/* Casos de Éxito y Trabajos Realizados extraídos del Brochure oficial */}
        <ProjectsPortfolio
          onOpenQuote={(title) => handleOpenQuote(title)}
        />

        {/* Sección Nosotros: Misión, Visión, Ciclo PHVA, Valores, Liderazgo (Ing. Richter Gómez), Datos SUNAT */}
        <AboutUsSection />

        {/* Artículos Técnicos / Blog de Especialidad */}
        <BlogSection />

        {/* Formulario de Cotización Técnica con Carga de Archivos */}
        <QuoteSection
          initialService={quoteServiceTarget}
          onSuccess={() => {}}
        />
      </main>

      {/* Footer Corporativo con Datos Oficiales, Ficha SUNAT y Libro de Reclamaciones */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenIntro={handleOpenIntro}
      />

      {/* Modal para Visualización Detallada de Cada Servicio */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={(title) => {
          setSelectedService(null);
          handleOpenQuote(title);
        }}
      />

      {/* Botón Flotante Permanente de WhatsApp para Emergencias e Ingeniería */}
      <aside aria-label="Contacto Rápido" className="fixed bottom-6 right-6 z-50">
        <a
          id="btn-floating-whatsapp"
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hola CATENERGY SAC, requiero asistencia técnica para mis instalaciones eléctricas.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#15803D] hover:bg-[#16A34A] text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-emerald-900/50 hover:scale-105 transition-all duration-300 border border-emerald-400/40"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="hidden sm:inline">WhatsApp 994 782 124</span>
        </a>
      </aside>
    </div>
  );
}
