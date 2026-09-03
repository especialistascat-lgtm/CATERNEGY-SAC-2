import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_ARTICLES } from '../data/catenergyData';
import { BlogArticle } from '../types';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  X, 
  Share2, 
  CheckCircle2, 
  Tag
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section id="blog" className="py-20 bg-[#0C0E14] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Divulgación Técnica & Artículos de Valor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Artículos Técnicos y <span className="text-amber-400">Publicaciones Especializadas</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Conocimiento práctico escrito por ingenieros con experiencia en campo: subestaciones, normatividad y eficiencia energética.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_ARTICLES.map((article, idx) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="cursor-pointer group rounded-2xl bg-[#121622] hover:bg-[#161B29] border border-white/10 hover:border-amber-400/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30">
                    {article.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] text-slate-400">
                  <span className="font-medium text-slate-300">{article.author}</span>
                  <span className="block text-[10px] text-slate-500">{article.date}</span>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div
            className="fixed inset-0 z-[130] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#11141E] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="px-3 py-1 rounded bg-amber-400/20 text-amber-300 text-xs font-bold uppercase font-mono">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
                <span>Por <strong className="text-amber-300">{selectedArticle.author}</strong></span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime} de lectura</span>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-4 text-sm text-slate-300 leading-relaxed">
                <p className="text-base text-slate-200 font-medium leading-relaxed">
                  {selectedArticle.excerpt}
                </p>
                <p>
                  {selectedArticle.content}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
                  Puntos Clave del Análisis:
                </h4>
                <div className="space-y-2">
                  {selectedArticle.keyTakeaways.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs text-slate-400">CATENERGY SAC — Centro de Información Técnica</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase"
                >
                  Cerrar Artículo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
