import React, { useState } from 'react';
import { PPT_TEMPLATES } from '../../data/mockData';
import { PPTTemplate } from '../../types';

export const FichasTecnicas: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<PPTTemplate | null>(null);
  return (
    <>
      {/* SECTION: DOWNLOAD PPT TEMPLATES & TECHNICAL SPECIFICATIONS */}{/* ==================== SECTION: DOWNLOAD PPT TEMPLATES & TECHNICAL SPECIFICATIONS ==================== */}
      <section className="py-20 bg-[#f2f4f6] border-b border-slate-200" id="fichas-tecnicas">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-label-caps font-label-caps text-cyan-700 font-semibold">
                RECURSOS PARA COMITÉS DE COMPRAS
              </span>
              <h2 className="text-headline-xl font-headline-xl text-slate-900 mt-1">
                Pliegos de Condiciones Modelo & Fichas Técnicas PPT
              </h2>
              <p className="text-body-md font-body-md text-slate-600 mt-2 max-w-2xl">
                Descargue gratuitamente especificaciones técnicas formalmente redactadas para Compras Menores,
                Licitaciones Públicas Nacionales (LPN) y Comparaciones de Precios.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-label-caps font-label-caps px-3 py-1.5 rounded-full bg-slate-200 text-slate-800 font-semibold">
                FORMATO ESTÁNDAR DGCP RD
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PPT_TEMPLATES.map((tmpl) => (
              <div
                key={tmpl.id}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-cyan-600/40 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 mb-4">
                    <span className="material-symbols-outlined">sim_card_download</span>
                  </div>
                  <span className="text-label-caps font-label-caps text-slate-500 font-semibold">{tmpl.code}</span>
                  <h3 className="text-headline-sm font-headline-sm text-slate-900 mt-1 mb-2">{tmpl.title}</h3>
                  <p className="text-body-sm font-body-sm text-slate-600 mb-4">{tmpl.description}</p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
                    {tmpl.sections.map((sec, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-cyan-700">check</span>
                        <span className="truncate">{sec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-code-numeric text-xs text-slate-500">{tmpl.format} • {tmpl.fileSize}</span>
                  <button
                    onClick={() => setSelectedTemplate(tmpl)}
                    className="inline-flex items-center gap-1 text-body-sm font-body-sm font-semibold text-cyan-700 hover:text-cyan-800 hover:underline"
                  >
                    <span>Ver Pliego</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Template Preview Drawer / Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/40 max-w-xl w-full rounded-2xl p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400">{selectedTemplate.code}</span>
                <h3 className="text-lg font-bold text-white">{selectedTemplate.title}</h3>
              </div>
              <button onClick={() => setSelectedTemplate(null)} className="text-slate-400 hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-xs text-slate-300 mb-4">{selectedTemplate.description}</p>
            <div className="space-y-2 mb-6 text-xs text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="font-bold text-white block mb-1">Índice del Pliego Modelo DGCP:</span>
              {selectedTemplate.sections.map((sec, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">0{i + 1}.</span>
                  <span>{sec}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">{selectedTemplate.format} • {selectedTemplate.fileSize}</span>
              <button
                onClick={() => {
                  alert(`Descargando ${selectedTemplate.title} en formato editable Word / DOCX...`);
                  setSelectedTemplate(null);
                }}
                className="px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Descargar Pliego DOCX</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
