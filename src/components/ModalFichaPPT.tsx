import React, { useState } from 'react';
import { HardwareItem } from '../types';

interface ModalFichaPPTProps {
  item: HardwareItem | null;
  onClose: () => void;
  onAddToTender: (item: HardwareItem) => void;
  isAlreadyInTender: boolean;
}

export const ModalFichaPPT: React.FC<ModalFichaPPTProps> = ({
  item,
  onClose,
  onAddToTender,
  isAlreadyInTender
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!item) return null;

  const handleCopy = (text: string, sectionKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const handleDownloadDraft = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-cyan-500/40 max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden text-white animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0B1528] p-5 sm:p-6 border-b border-cyan-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <span className="material-symbols-outlined text-[24px]">description</span>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-cyan-400 tracking-wider">
                DOCUMENTO TÉCNICO OFICIAL DGCP • LEY 340-06
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-white">
                Ficha Técnica Homologada: {item.code}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto text-body-sm text-slate-300">
          {/* Neutrality Disclaimer Notice */}
          <div className="p-3.5 bg-cyan-950/40 rounded-xl border border-cyan-500/30 flex items-start gap-3">
            <span className="material-symbols-outlined text-cyan-400 text-[20px] mt-0.5">verified_user</span>
            <div>
              <strong className="text-white block text-xs uppercase tracking-wider mb-0.5">
                Declaración de Neutralidad Legal (DGCP RD):
              </strong>
              <p className="text-xs text-slate-300 leading-relaxed">
                Este pliego ha sido formulado conforme a los principios de no direccionamiento de la Ley No. 340-06,
                garantizando que ninguna marca o proveedor específico resulte favorecido indebidamente ante el Comité de Compras.
              </p>
            </div>
          </div>

          {/* Section 1: Neutral Technical Specification */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span className="text-cyan-400">01.</span>
                <span>Especificación Técnica Neutral para Pliego</span>
              </h4>
              <button
                onClick={() => handleCopy(item.pptClauses.neutralSpec, 'spec')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded border border-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copiedSection === 'spec' ? 'check' : 'content_copy'}
                </span>
                <span>{copiedSection === 'spec' ? 'Copiado' : 'Copiar Texto'}</span>
              </button>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed">
              "{item.pptClauses.neutralSpec}"
            </div>
          </div>

          {/* Section 2: Warranty & SLA Clause */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span className="text-cyan-400">02.</span>
                <span>Cláusula de Garantía de Fábrica y Soporte On-Site</span>
              </h4>
              <button
                onClick={() => handleCopy(item.pptClauses.warrantyClause, 'warranty')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded border border-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copiedSection === 'warranty' ? 'check' : 'content_copy'}
                </span>
                <span>{copiedSection === 'warranty' ? 'Copiado' : 'Copiar Texto'}</span>
              </button>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed">
              "{item.pptClauses.warrantyClause}"
            </div>
          </div>

          {/* Section 3: Local Spare Parts Requirements */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span className="text-cyan-400">03.</span>
                <span>Disponibilidad de Repuestos Locales (Santo Domingo)</span>
              </h4>
              <button
                onClick={() => handleCopy(item.pptClauses.sparePartsClause, 'spare')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded border border-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copiedSection === 'spare' ? 'check' : 'content_copy'}
                </span>
                <span>{copiedSection === 'spare' ? 'Copiado' : 'Copiar Texto'}</span>
              </button>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed">
              "{item.pptClauses.sparePartsClause}"
            </div>
          </div>

          {/* Key Hardware Specs Table */}
          <div className="pt-2">
            <span className="text-xs uppercase font-mono text-slate-400 font-semibold block mb-2">
              Resumen de Especificaciones de Fábrica ({item.name})
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {item.specs.map((spec, i) => (
                <div key={i} className="p-2.5 rounded bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">{spec.label}</span>
                  <span className="font-medium text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#0B1528] border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onAddToTender(item)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isAlreadyInTender
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isAlreadyInTender ? 'check' : 'add'}
              </span>
              <span>{isAlreadyInTender ? 'En Canasta de Pliegos' : 'Agregar a Canasta PPT'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={handleDownloadDraft}
              className="px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-[0_0_15px_-2px_rgba(6,182,212,0.4)]"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>
                {downloadSuccess ? 'Generando DOCX...' : 'Descargar Ficha en Word / DOCX'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
