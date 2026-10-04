import React, { useState } from 'react';
import { TenderBasketItem } from '../types';

interface ModalTenderBasketProps {
  isOpen: boolean;
  onClose: () => void;
  basket: TenderBasketItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearBasket: () => void;
  onGoToQuote: () => void;
}

export const ModalTenderBasket: React.FC<ModalTenderBasketProps> = ({
  isOpen,
  onClose,
  basket,
  onUpdateQuantity,
  onRemoveItem,
  onClearBasket,
  onGoToQuote
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const totalSpecs = basket.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleDownloadAll = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 2500);
  };

  const handleCopyAll = () => {
    const text = basket
      .map(
        (b, i) =>
          `ITEM ${i + 1}: ${b.item.code} - ${b.item.name} (Cantidad estimada: ${b.quantity} uds)\n` +
          `Especificación Neutral:\n${b.item.pptClauses.neutralSpec}\n` +
          `Garantía On-Site requerida:\n${b.item.pptClauses.warrantyClause}\n` +
          `Suministro de repuestos:\n${b.item.pptClauses.sparePartsClause}\n`
      )
      .join('\n----------------------------------------\n\n');

    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0A1424] border border-cyan-500/40 max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden text-white animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-cyan-500/30 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <span className="material-symbols-outlined text-[24px]">assignment</span>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-cyan-400 tracking-wider">
                COMPILADOR TÉCNICO B2G • LEY NO. 340-06
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-white">
                Borrador de Ficha Técnica PPT ({totalSpecs} componentes)
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
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {basket.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mx-auto">
                <span className="material-symbols-outlined text-[28px]">inventory_2</span>
              </div>
              <h4 className="text-base font-semibold text-white">
                La canasta de pliego técnico está vacía
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Navegue por el Catálogo Homologado o Puestos de Trabajo y haga clic en{' '}
                <strong className="text-cyan-400">"Incluir en Borrador PPT"</strong> para compilar especificaciones neutrales.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <span>Ítems seleccionados para formulación de pliego</span>
                <button
                  onClick={onClearBasket}
                  className="text-rose-400 hover:text-rose-300 font-medium transition-colors"
                >
                  Vaciar canasta
                </button>
              </div>

              <div className="space-y-3">
                {basket.map((item) => (
                  <div
                    key={item.item.id}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/20">
                          {item.item.code}
                        </span>
                        <span className="text-xs text-slate-400">({item.item.categoryLabel})</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white">{item.item.name}</h4>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {item.item.pptClauses.neutralSpec}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                      <div className="flex items-center border border-slate-700 rounded-lg bg-slate-950 overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.item.id, -1)}
                          className="px-2.5 py-1 text-slate-300 hover:bg-slate-800 text-xs transition-colors"
                          title="Reducir"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-xs font-mono font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.item.id, 1)}
                          className="px-2.5 py-1 text-slate-300 hover:bg-slate-800 text-xs transition-colors"
                          title="Aumentar"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.item.id)}
                        className="text-slate-500 hover:text-rose-400 p-1 rounded transition-colors"
                        title="Eliminar de la lista"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* DGCP Regulatory Note */}
              <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
                <span className="material-symbols-outlined text-cyan-400 text-sm mt-0.5">info</span>
                <span>
                  Este compendio técnico cumple los estándares de redacción para Compras Menores, Comparación de
                  Precios y Licitación Pública Nacional (LPN). Los archivos generados son compatibles con el Portal Transaccional de la DGCP.
                </span>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {basket.length > 0 && (
              <button
                onClick={handleCopyAll}
                className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-xs font-mono text-cyan-300 flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">
                  {copiedAll ? 'check' : 'content_copy'}
                </span>
                <span>{copiedAll ? 'Copiado al Portapapeles' : 'Copiar Todo el Texto'}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onGoToQuote();
              }}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Ir a Formulario de Solicitud
            </button>

            {basket.length > 0 && (
              <button
                onClick={handleDownloadAll}
                className="px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-[0_0_15px_-2px_rgba(6,182,212,0.4)]"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>
                  {downloadSuccess ? 'Borrador Compilado (DOCX)' : 'Descargar Pliego Completo (Word)'}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
