import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/catenergyData';
import { 
  FileText, 
  Send, 
  PhoneCall, 
  Mail, 
  CheckCircle2, 
  Paperclip, 
  X, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  Building,
  User,
  Phone,
  Briefcase
} from 'lucide-react';

interface QuoteSectionProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    role: '',
    phone: '',
    email: '',
    serviceInterest: initialService || SERVICES_DATA[0]?.title || '',
    facilityType: 'Subestación AT/MT',
    voltageLevel: 'Alta Tensión (60 kV - 500 kV)',
    city: 'Ica',
    description: '',
    privacyAccepted: false,
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceInterest: initialService }));
    }
  }, [initialService]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 15 * 1024 * 1024) {
        setErrorMsg('El archivo seleccionado supera el límite de 15 MB.');
        return;
      }
      setAttachedFile(file);
      setErrorMsg('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Por favor complete todos los campos obligatorios (*).');
      return;
    }
    if (!formData.privacyAccepted) {
      setErrorMsg('Debe aceptar la política de privacidad y tratamiento de datos.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleSendWhatsAppDirect = () => {
    const text = `*SOLICITUD DE COTIZACIÓN - CATENERGY SAC*\n\n` +
      `*Cliente:* ${formData.fullName}\n` +
      `*Empresa:* ${formData.company || 'Particular'}\n` +
      `*Cargo:* ${formData.role || '-'}\n` +
      `*Teléfono:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Servicio de Interés:* ${formData.serviceInterest}\n` +
      `*Instalación:* ${formData.facilityType} (${formData.voltageLevel})\n` +
      `*Ubicación:* ${formData.city}\n` +
      `*Detalle:* ${formData.description || 'Solicitud de visita técnica o cotización.'}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-[#0A0C11] relative overflow-hidden border-t border-white/5">
      {/* Background Nature + High Voltage Infrastructure */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 filter saturate-125"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,12,17,0.85), rgba(10,12,17,0.95)), url('https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Atención Comercial e Ingeniería de Proyectos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            SOLICITA TU <span className="text-amber-400">COTIZACIÓN</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Póngase en contacto directo con nuestro equipo de ingenieros especialistas. Reciba una evaluación técnica adaptada a los requerimientos normativos de su empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#11141E]/95 border border-amber-500/30 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-amber-300 font-mono mb-6">
                {COMPANY_INFO.legalName}
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-mono block">WhatsApp / Teléfono</span>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-white hover:text-amber-400">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-mono block">Correo Oficial</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-white hover:text-amber-400 break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-mono block">Sede Fiscal</span>
                    <span className="text-slate-200">
                      {COMPANY_INFO.fiscalAddress}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[11px] text-amber-300/90 font-medium">
                  Atención para emergencias y paradas mayores en subestaciones eléctricas a nivel nacional.
                </p>
                <button
                  onClick={handleSendWhatsAppDirect}
                  className="mt-4 w-full py-3 rounded-xl bg-[#15803D] hover:bg-[#16A34A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-102 shadow-lg shadow-emerald-700/20"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Escribir por WhatsApp Ahora</span>
                </button>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#11141E]/95 border-2 border-amber-400/40 backdrop-blur-md shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    ¡Solicitud Enviada con Éxito!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                    Hemos registrado los requerimientos de su empresa. Un ingeniero especialista de CATENERGY SAC se comunicará a la brevedad al teléfono <strong className="text-amber-400">{formData.phone}</strong> o correo <strong className="text-amber-400">{formData.email}</strong> para coordinar la visita técnica o propuesta económica.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button
                      onClick={handleSendWhatsAppDirect}
                      className="px-6 py-3 rounded-xl bg-[#15803D] hover:bg-[#16A34A] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Reenviar copia por WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider"
                    >
                      Nueva Cotización
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/50 text-xs text-rose-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                        Nombre Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Ej. Ing. Carlos Mendoza"
                          className="w-full bg-[#171B26] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                        Empresa / Razón Social
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Ej. Agroexportadora San Juan SAC"
                          className="w-full bg-[#171B26] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                        Cargo
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          placeholder="Ej. Jefe de Mantenimiento"
                          className="w-full bg-[#171B26] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                        Teléfono / Móvil *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ej. +51 987 654 321"
                          className="w-full bg-[#171B26] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                        Correo Electrónico *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="carlos@empresa.com"
                          className="w-full bg-[#171B26] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                        Servicio de Interés
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full bg-[#171B26] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                        Nivel de Tensión
                      </label>
                      <select
                        value={formData.voltageLevel}
                        onChange={(e) => setFormData({ ...formData, voltageLevel: e.target.value })}
                        className="w-full bg-[#171B26] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Alta Tensión (60 kV - 500 kV)">Alta Tensión (60 kV - 500 kV)</option>
                        <option value="Media Tensión (10 kV - 36 kV)">Media Tensión (10 kV - 36 kV)</option>
                        <option value="Baja Tensión (220V - 480V)">Baja Tensión (220V - 480V)</option>
                        <option value="Multitensión / Integral">Multitensión / Integral</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                        Tipo de Instalación
                      </label>
                      <select
                        value={formData.facilityType}
                        onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                        className="w-full bg-[#171B26] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Subestación de Potencia">Subestación de Potencia</option>
                        <option value="Planta Agroindustrial">Planta Agroindustrial</option>
                        <option value="Planta Minera / Concentradora">Planta Minera / Concentradora</option>
                        <option value="Central Hidroeléctrica / Térmica">Central Hidroeléctrica / Térmica</option>
                        <option value="Parque Solar Fotovoltaico">Parque Solar Fotovoltaico</option>
                        <option value="Instalación Estatal / Nuclear (IPEN / SENAMHI)">Instalación Estatal / Nuclear</option>
                        <option value="Línea de Transmisión">Línea de Transmisión</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                        Ciudad / Ubicación
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Ej. Ica, Chincha, Lima, Junín, Pisco..."
                          className="w-full bg-[#171B26] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                      Descripción de la Necesidad / Alcance Requerido
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describa brevemente su requerimiento técnico: potencia del transformador, número de interruptores, síntomas de falla, cumplimiento de auditoría, etc."
                      className="w-full bg-[#171B26] border border-white/10 rounded-xl p-4 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* File Upload Requirement */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                      Adjuntar Archivo Técnico / Diagrama Unifilar (Opcional, máx. 15MB)
                    </label>
                    <div className="relative border-2 border-dashed border-white/15 hover:border-amber-400/50 rounded-2xl p-4 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Paperclip className="w-5 h-5 text-amber-400" />
                        <div>
                          <p className="text-xs text-slate-200">
                            {attachedFile ? attachedFile.name : 'Arrastre su plano, unifilar o especificación técnica (PDF, DWG, JPG, PNG)'}
                          </p>
                          {attachedFile && (
                            <span className="text-[10px] text-emerald-400 font-mono">
                              {(attachedFile.size / 1024 / 1024).toFixed(2)} MB • Listo para envío
                            </span>
                          )}
                        </div>
                      </div>
                      {attachedFile ? (
                        <button
                          type="button"
                          onClick={() => setAttachedFile(null)}
                          className="p-1 rounded-full bg-white/10 text-rose-400 hover:bg-rose-500/20"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      ) : (
                        <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 text-xs font-bold uppercase">
                          Seleccionar
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.dwg,.jpg,.jpeg,.png,.doc,.docx"
                          />
                        </label>
                      )}
                    </div>
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="mt-1 accent-amber-400 w-4 h-4 rounded"
                    />
                    <label htmlFor="privacyAccepted" className="text-xs text-slate-400 leading-snug cursor-pointer">
                      Acepto la política de privacidad y autorizo a CATENERGY SAC a utilizar estos datos exclusivamente para la elaboración y envío de la propuesta técnica y cotización formal solicitada.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      id="btn-enviar-consulta"
                      className="w-full sm:flex-1 py-4 px-8 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black font-black text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-black" />
                      <span>ENVIAR CONSULTA TÉCNICA</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsAppDirect}
                      className="w-full sm:w-auto py-4 px-6 rounded-xl bg-[#15803D] hover:bg-[#16A34A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-700/20"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Cotizar por WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
