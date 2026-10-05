import React, { useState } from 'react';
import { useTenderStore } from '../../store/useTenderStore';
import { useUIStore } from '../../store/useUIStore';
import { HARDWARE_ITEMS } from '../../data/mockData';
import { HardwareItem } from '../../types';

export const CatalogoEquipos: React.FC = () => {
  const tenderCount = useTenderStore((state) => state.totalTenderCount());
  const onAddToTender = useTenderStore((state) => state.addToTender);
  const onClearTender = useTenderStore((state) => state.clearTender);
  const onSelectProductForModal = useUIStore((state) => state.setActiveFichaItem);
  const onOpenTenderBasket = () => useUIStore.getState().setIsBasketModalOpen(true);
  
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItemNotification, setAddedItemNotification] = useState<string | null>(null);

  const filteredItems = HARDWARE_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'todos' ||
      (selectedCategory === 'ofimatica' && item.category === 'ofimatica') ||
      (selectedCategory === 'servidores' && item.category === 'servidores') ||
      (selectedCategory === 'redes' && item.category === 'redes') ||
      (selectedCategory === 'tactico' && item.category === 'tactico') ||
      (selectedCategory === 'biometria' && item.category === 'biometria') ||
      (selectedCategory === 'seguridad' && item.category === 'seguridad') ||
      (selectedCategory === 'ups' && item.category === 'ups');

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddItem = (item: HardwareItem) => {
    onAddToTender(item);
    setAddedItemNotification(item.code);
    setTimeout(() => {
      setAddedItemNotification(null);
    }, 2500);
  };
  return (
    <>
      {/* SECTION: CATEGORY FILTERS & EQUIPMENT CATALOG */}{/* ==================== SECTION: CATEGORY FILTERS & EQUIPMENT CATALOG ==================== */}
      <section className="py-20 bg-[#f7f9fb]" id="catalogo">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-label-caps font-label-caps text-cyan-700 font-semibold mb-2">
                <span className="material-symbols-outlined text-base">dataset</span>
                <span>CATÁLOGO TÉCNICO B2G 2025</span>
              </div>
              <h2 className="text-headline-xl font-headline-xl text-slate-900">
                Equipamiento Homologado para Licitaciones y Compras Directas
              </h2>
              <p className="text-body-md font-body-md text-slate-600 mt-2 max-w-3xl">
                Equipos de alta disponibilidad con especificaciones neutrales aptas para pliegos de condiciones según la
                Ley No. 340-06. Sin bloqueos propietarios y con soporte nacional garantizado.
              </p>
            </div>

            {/* Search Filter */}
            <div className="mt-6 md:mt-0 flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por código PPT o componente..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-72 bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-body-sm font-body-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                />
                <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-slate-400 text-base">
                  search
                </span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Selector Filter Buttons (Tab Group) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-200 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-4 py-2 rounded-lg text-body-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'todos'
                  ? 'bg-slate-950 text-white shadow-sm border border-cyan-500/30'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Todos los Sistemas
            </button>
            <button
              onClick={() => setSelectedCategory('ofimatica')}
              className={`px-4 py-2 rounded-lg text-body-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                selectedCategory === 'ofimatica'
                  ? 'bg-slate-950 text-white shadow-sm border border-cyan-500/30'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="material-symbols-outlined text-sm text-cyan-600">devices</span>
              <span>Puestos de Trabajo & Ofimática</span>
            </button>
            <button
              onClick={() => setSelectedCategory('servidores')}
              className={`px-4 py-2 rounded-lg text-body-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'servidores'
                  ? 'bg-slate-950 text-white shadow-sm border border-cyan-500/30'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Servidores de Misión Crítica
            </button>
            <button
              onClick={() => setSelectedCategory('redes')}
              className={`px-4 py-2 rounded-lg text-body-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'redes'
                  ? 'bg-slate-950 text-white shadow-sm border border-cyan-500/30'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Conmutación Core & SD-WAN
            </button>
            <button
              onClick={() => setSelectedCategory('tactico')}
              className={`px-4 py-2 rounded-lg text-body-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'tactico'
                  ? 'bg-slate-950 text-white shadow-sm border border-cyan-500/30'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Estaciones Tácticas & Despachos
            </button>
            <button
              onClick={() => setSelectedCategory('biometria')}
              className={`px-4 py-2 rounded-lg text-body-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'biometria'
                  ? 'bg-slate-950 text-white shadow-sm border border-cyan-500/30'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Identificación Biométrica
            </button>
            <button
              onClick={() => setSelectedCategory('ups')}
              className={`px-4 py-2 rounded-lg text-body-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'ups'
                  ? 'bg-slate-950 text-white shadow-sm border border-cyan-500/30'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Sistemas UPS & Respaldo
            </button>
          </div>

          {/* BENTO TECHNICAL CATALOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-cyan-600/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-label-caps font-label-caps px-2.5 py-1 rounded bg-slate-100 text-slate-800 font-semibold">
                      {item.code}
                    </span>
                    {item.homologadoDGCP && (
                      <span className="inline-flex items-center text-label-caps font-label-caps text-cyan-700 font-semibold gap-1">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        <span>DGCP Homologado</span>
                      </span>
                    )}
                  </div>

                  {/* Visual Header */}
                  {item.image ? (
                    <div className="relative h-44 rounded-lg overflow-hidden mb-5 bg-slate-950 border border-slate-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                        <span>{item.badges[0]}</span>
                        <span className="text-white">{item.categoryLabel}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#0B1528] rounded-lg p-5 mb-5 text-white flex items-center justify-center relative overflow-hidden border border-slate-800">
                      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-transparent"></div>
                      <div className="relative z-10 flex flex-col items-center">
                        <span className="material-symbols-outlined text-5xl text-cyan-400 mb-2">
                          {item.iconName}
                        </span>
                        <span className="text-label-caps font-label-caps text-slate-300">
                          {item.badges[0]}
                        </span>
                      </div>
                    </div>
                  )}

                  <h3 className="text-headline-sm font-headline-sm text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-body-sm font-body-sm text-slate-600 mb-4">{item.description}</p>

                  {/* Technical Matrix Specs */}
                  <div className="space-y-2 mb-6 border-t border-b border-slate-100 py-3 text-body-sm font-body-sm">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-start text-xs">
                        <span className="text-slate-500">{spec.label}:</span>
                        <span className="font-code-numeric text-slate-900 font-medium text-right ml-2">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-label-caps font-label-caps text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {item.warranty}
                    </span>
                    <span className="text-label-caps font-label-caps text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {item.stockStatus}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProductForModal(item)}
                      className="w-full py-2 px-3 text-center border border-slate-300 hover:border-cyan-600 rounded-lg text-body-sm font-semibold text-slate-800 hover:text-cyan-700 transition-colors"
                    >
                      Ver Ficha PPT
                    </button>
                    <button
                      onClick={() => handleAddItem(item)}
                      className="w-full py-2 px-3 text-center bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-body-sm font-semibold transition-colors flex items-center justify-center gap-1 active:scale-95"
                    >
                      <span className="material-symbols-outlined text-sm text-cyan-400">content_copy</span>
                      <span>Incluir en Borrador PPT</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Tender Basket Bar */}
          <div
            className="mt-12 bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between shadow-sm"
            id="tenderBar"
          >
            <div className="flex items-start sm:items-center gap-4 mb-4 sm:mb-0">
              <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 shrink-0">
                <span className="material-symbols-outlined text-2xl">assignment</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-body-md font-body-md font-semibold text-slate-900">
                    Borrador de Ficha Técnica PPT para Comités de Compras (
                    <span className="text-cyan-700 font-bold">{tenderCount}</span> especificaciones seleccionadas)
                  </p>
                  <span className="text-label-caps font-label-caps px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[11px]">
                    Apoyo Técnico Neutral DGCP
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-slate-500 max-w-3xl mt-0.5">
                  Herramienta técnica de apoyo para redacción de términos de referencia. La presentación de ofertas y
                  adjudicación se realiza exclusivamente en el Portal Transaccional de la DGCP / Compras Dominicana
                  conforme a la Ley No. 340-06.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {tenderCount > 0 && (
                <button
                  onClick={onClearTender}
                  className="text-body-sm font-body-sm text-slate-500 hover:text-rose-600 transition-colors px-3 py-1.5"
                >
                  Limpiar Pliego
                </button>
              )}
              <button
                onClick={onOpenTenderBasket}
                className="inline-flex items-center gap-2 bg-slate-950 text-white px-5 py-2.5 rounded-lg text-body-sm font-semibold hover:bg-slate-800 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-sm text-cyan-400">download</span>
                <span>Descargar Borrador PPT (Word / PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};
