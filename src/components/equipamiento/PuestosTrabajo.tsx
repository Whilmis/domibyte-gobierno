import React, { useState } from 'react';
import { useTenderStore } from '../../store/useTenderStore';
import { useUIStore } from '../../store/useUIStore';
import { HardwareItem } from '../../types';
import { HARDWARE_ITEMS } from '../../data/mockData';

export const PuestosTrabajo: React.FC = () => {
  const onAddToTender = useTenderStore((state) => state.addToTender);
  const onSelectProductForModal = useUIStore((state) => state.setActiveFichaItem);
  
  const handleAddItem = (item: HardwareItem) => {
    onAddToTender(item);
  };
  return (
    <>
      {/* DOTACIÓN INTEGRAL DE PUESTOS DE TRABAJO (#puestos-trabajo) */}{/* ==================== DOTACIÓN INTEGRAL DE PUESTOS DE TRABAJO (#puestos-trabajo) ==================== */}
      <section
        className="py-20 bg-[#0d1424] text-white border-t border-b border-slate-800 relative overflow-hidden"
        id="puestos-trabajo"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#131b2e]/40 via-transparent to-[#131b2e]/60 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-label-caps font-label-caps mb-3 border border-cyan-500/30">
                <span className="material-symbols-outlined text-sm text-cyan-400 fill">computer</span>
                <span>DOTACIÓN MASIVA DE OFIMÁTICA GUBERNAMENTAL</span>
              </div>
              <h2 className="text-headline-xl font-headline-xl text-white tracking-tight">
                Dotación Integral de Puestos de Trabajo, Portátiles y Periféricos
              </h2>
              <p className="text-body-md font-body-md text-slate-300 mt-3 max-w-3xl leading-relaxed">
                Suministro masivo para ministerios, direcciones generales, centros educativos y oficinas de servicio al
                ciudadano bajo modalidad de Compras Menores, Comparación de Precios y Licitación Pública Nacional con
                pliegos 100% neutrales.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto-b2g"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-body-sm font-bold transition-all shadow-md active:scale-95"
              >
                <span className="material-symbols-outlined text-slate-950 text-base">request_quote</span>
                <span>Cotizar Lote de Computadoras</span>
              </a>
            </div>
          </div>

          {/* Institutional Telemetry Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-[#131b2e]/90 p-4 rounded-xl border border-slate-700/80 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <div>
                <p className="text-label-caps font-label-caps text-cyan-400 font-semibold">CAPACIDAD INMEDIATA</p>
                <p className="text-body-sm font-body-sm font-bold text-white">50 a 5,000+ Unidades</p>
              </div>
            </div>
            <div className="bg-[#131b2e]/90 p-4 rounded-xl border border-slate-700/80 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <p className="text-label-caps font-label-caps text-cyan-400 font-semibold">ESTÁNDAR DGCP</p>
                <p className="text-body-sm font-body-sm font-bold text-white">Fichas PPT Homologadas</p>
              </div>
            </div>
            <div className="bg-[#131b2e]/90 p-4 rounded-xl border border-slate-700/80 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <div>
                <p className="text-label-caps font-label-caps text-cyan-400 font-semibold">COBERTURA TOTAL</p>
                <p className="text-body-sm font-body-sm font-bold text-white">Entrega en 32 Provincias</p>
              </div>
            </div>
            <div className="bg-[#131b2e]/90 p-4 rounded-xl border border-slate-700/80 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                <span className="material-symbols-outlined">lab_profile</span>
              </div>
              <div>
                <p className="text-label-caps font-label-caps text-cyan-400 font-semibold">COMITÉS DE COMPRAS</p>
                <p className="text-body-sm font-body-sm font-bold text-white">Muestras para Validación</p>
              </div>
            </div>
          </div>

          {/* 4 Workstations Photographically Enriched Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HARDWARE_ITEMS.filter((i) => i.category === 'ofimatica').map((prod) => (
              <div
                key={prod.id}
                className="bg-[#131b2e] rounded-xl border border-slate-700/70 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-xl transition-all duration-200 group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900 border-b border-slate-700/60">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-label-caps font-label-caps px-2.5 py-1 rounded bg-[#0d1424]/90 backdrop-blur-sm text-cyan-400 border border-cyan-500/30 font-semibold">
                        {prod.code}
                      </span>
                      <span className="inline-flex items-center text-label-caps font-label-caps text-cyan-300 font-semibold gap-1 bg-[#0d1424]/90 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700">
                        <span className="material-symbols-outlined text-sm text-cyan-400">verified</span>
                        <span>DGCP Homologado</span>
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                      <span className="bg-black/70 px-2 py-0.5 rounded border border-white/10">{prod.badges[0]}</span>
                      <span className="text-cyan-400 font-semibold">{prod.badges[1]}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-headline-sm font-headline-sm text-white mb-2">{prod.name}</h3>
                    <p className="text-body-sm font-body-sm text-slate-300 mb-4">{prod.description}</p>
                    <div className="space-y-2 mb-6 border-t border-b border-slate-700/50 py-3 text-body-sm font-body-sm">
                      {prod.specs.map((s, idx) => (
                        <div key={idx} className="flex justify-between items-start text-xs">
                          <span className="text-slate-400">{s.label}:</span>
                          <span className="font-code-numeric text-white font-medium text-right">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-label-caps font-label-caps text-slate-300 bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
                      {prod.warranty}
                    </span>
                    <span className="text-label-caps font-label-caps text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                      {prod.stockStatus}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProductForModal(prod)}
                      className="w-full py-2.5 px-3 text-center border border-slate-700 hover:border-cyan-400 rounded-lg text-body-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      Ver Ficha PPT
                    </button>
                    <button
                      onClick={() => handleAddItem(prod)}
                      className="w-full py-2.5 px-3 text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg text-body-sm font-bold transition-colors flex items-center justify-center gap-1 shadow-sm active:scale-95"
                    >
                      <span className="material-symbols-outlined text-sm">content_copy</span>
                      <span>Incluir en Borrador PPT</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner: Advisory and Drafting for PPT Documents */}
          <div className="mt-12 p-6 rounded-2xl bg-[#131b2e] border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <span className="material-symbols-outlined text-2xl">badge</span>
              </div>
              <div>
                <h4 className="text-headline-sm font-headline-sm text-white font-bold">
                  ¿Requiere Asesoría Técnica para Formulación de Pliegos de Ofimática?
                </h4>
                <p className="text-body-sm font-body-sm text-slate-300 mt-1">
                  Nuestros ingenieros de preventa preparan especificaciones neutrales homologadas listas para Compras
                  Menores y LPN sin costo para su institución.
                </p>
              </div>
            </div>
            <a
              href="#contacto-b2g"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-body-sm font-bold transition-all whitespace-nowrap shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-slate-950 text-sm">description</span>
              <span>Solicitar Ficha PPT para Puestos de Trabajo</span>
            </a>
          </div>
        </div>
      </section>

      
    </>
  );
};
