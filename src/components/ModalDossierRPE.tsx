import React, { useState } from 'react';
import { useUIStore } from '../store/useUIStore';

export const ModalDossierRPE: React.FC = () => {
  const isOpen = useUIStore((state) => state.isDossierModalOpen);
  const onClose = () => useUIStore.getState().setIsDossierModalOpen(false);
  const [formData, setFormData] = useState({
    institution: '',
    department: '',
    officialName: '',
    officialEmail: '',
    phone: '',
    tenderCode: '',
    needPrequalification: true,
    acceptTerms: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0B1528] border border-cyan-500/40 max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden text-white animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-cyan-500/30 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <span className="material-symbols-outlined text-[26px]">military_tech</span>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-cyan-400 tracking-wider">
                CANAL OFICIAL COMITÉS DE COMPRAS • DGCP LEY 340-06
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-white">
                Dossier Oficial de Solvencia Técnica B2G
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

        {/* Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h4 className="text-xl font-bold text-white">
              ¡Dossier Técnico B2G Emitido Satisfactoriamente!
            </h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Hemos remitido el expediente digital encriptado al correo institucional{' '}
              <strong className="text-cyan-400">{formData.officialEmail}</strong>. El paquete incluye:
            </p>
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-xs text-left max-w-md mx-auto space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                <span>Certificado RPE Vigente (Rubros TIC, Servidores, Software)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                <span>Certificaciones DGII y TSS al día (Art. 14 Ley 340-06)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                <span>Acreditaciones NORTIC A2, A3, A4, A5 y Protocolos CNCS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                <span>Fichas Técnicas PPT en Formato Neutral Editable (DOCX)</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              Un Oficial de Licitaciones de DomiByte se mantendrá en línea para responder a cualquier requerimiento
              de aclaración de pliego.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all shadow-md"
              >
                Entendido y Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            {/* Quick credentials banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] font-mono">
              <div className="p-1.5">
                <span className="text-slate-400 block">RNC DOMIBYTE</span>
                <span className="text-white font-bold">1-32-84920-1</span>
              </div>
              <div className="p-1.5">
                <span className="text-slate-400 block">RPE DGCP</span>
                <span className="text-emerald-400 font-bold">HABILITADO</span>
              </div>
              <div className="p-1.5">
                <span className="text-slate-400 block">TIER IV CPD</span>
                <span className="text-cyan-400 font-bold">HOMOLOGADO</span>
              </div>
              <div className="p-1.5">
                <span className="text-slate-400 block">OGTIC</span>
                <span className="text-white font-bold">NORTIC A2-A5</span>
              </div>
            </div>

            <p className="text-xs text-slate-300">
              Complete los datos del comité técnico evaluador o departamento solicitante para la entrega
              prioritaria del Dossier Institucional y pliegos editables.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Institución Pública / Ministerio *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Ministerio de Hacienda, CAASD..."
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full h-10 px-3 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Dirección o Departamento Solicitante *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Dirección de Tecnología (TIC) / Compras"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full h-10 px-3 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nombre del Funcionario Técnico *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nombre y Apellidos"
                  value={formData.officialName}
                  onChange={(e) => setFormData({ ...formData, officialName: e.target.value })}
                  className="w-full h-10 px-3 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Correo Institucional (.gob.do o corporativo) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="funcionario@institucion.gob.do"
                  value={formData.officialEmail}
                  onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                  className="w-full h-10 px-3 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Número de Teléfono / Flota
                </label>
                <input
                  type="tel"
                  placeholder="(809) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-10 px-3 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Código de Proceso DGCP (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej: MIN-CCC-LPN-2025-0014"
                  value={formData.tenderCode}
                  onChange={(e) => setFormData({ ...formData, tenderCode: e.target.value })}
                  className="w-full h-10 px-3 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  checked={formData.needPrequalification}
                  onChange={(e) => setFormData({ ...formData, needPrequalification: e.target.checked })}
                  className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
                <span>
                  Incluir Póliza modelo de seriedad de oferta y solvencia bancaria calificada AAA.
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                  className="rounded border-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
                <span>
                  Acepto el uso de estos datos con estricta confidencialidad bajo la Ley 172-13.
                </span>
              </label>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_-2px_rgba(6,182,212,0.4)] disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-[16px]">send</span>
                <span>
                  {isSubmitting ? 'Verificando RPE...' : 'Solicitar Dossier Institucional'}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
