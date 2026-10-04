import React, { useState } from 'react';
import { HARDWARE_ITEMS, PPT_TEMPLATES } from '../data/mockData';
import { HardwareItem, PPTTemplate, Language } from '../types';

interface EquipamientoSuministroProps {
  onSelectProductForModal: (item: HardwareItem) => void;
  onAddToTender: (item: HardwareItem) => void;
  tenderCount: number;
  onOpenTenderBasket: () => void;
  onClearTender: () => void;
  onOpenDossierModal: () => void;
  language: Language;
}

export const EquipamientoSuministro: React.FC<EquipamientoSuministroProps> = ({
  onSelectProductForModal,
  onAddToTender,
  tenderCount,
  onOpenTenderBasket,
  onClearTender,
  onOpenDossierModal,
  language
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTemplate, setSelectedTemplate] = useState<PPTTemplate | null>(null);
  const [quoteFormData, setQuoteFormData] = useState({
    institution: '',
    department: '',
    officialName: '',
    officialEmail: '',
    procurementType: 'Licitación Pública Nacional (LPN)',
    deliveryTime: 'Inmediato (Disponibilidad en almacén local)',
    details: '',
    siteVisit: true
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [addedItemNotification, setAddedItemNotification] = useState<string | null>(null);

  // Filter hardware items
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

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setQuoteFormData({
        institution: '',
        department: '',
        officialName: '',
        officialEmail: '',
        procurementType: 'Licitación Pública Nacional (LPN)',
        deliveryTime: 'Inmediato (Disponibilidad en almacén local)',
        details: '',
        siteVisit: true
      });
    }, 6000);
  };

  return (
    <div className="w-full">
      {/* Toast Notification when an item is added */}
      {addedItemNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-cyan-950 border border-cyan-400 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-4">
          <span className="material-symbols-outlined text-cyan-400 text-xl">check_circle</span>
          <div className="text-xs">
            <span className="font-bold text-white block">{addedItemNotification} Añadido</span>
            <span className="text-slate-300">Incluido en el Borrador de Pliego Técnico PPT</span>
          </div>
        </div>
      )}

      {/* ==================== HERO SECTION: B2G INFRAESTRUCTURA & EQUIPAMIENTO ==================== */}
      <section
        className="relative overflow-hidden bg-gradient-to-b from-[#f7f9fb] via-white to-[#f2f4f6] pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200"
        id="inicio"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Copy Left (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/10 text-cyan-900 text-label-caps font-label-caps mb-6 border border-cyan-600/30">
                <span className="material-symbols-outlined text-sm text-cyan-600 fill">verified</span>
                <span>SUMINISTRO OFICIAL HOMOLOGADO • GOBIERNO DE LA REP. DOMINICANA & LATAM</span>
              </div>

              <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero text-slate-900 tracking-tight leading-tight mb-6">
                Equipamiento Tecnológico & Suministro de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 via-cyan-600 to-slate-900">
                  Infraestructura Crítica
                </span>{' '}
                para el Estado.
              </h1>

              <p className="text-body-lg font-body-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
                Suministro oficial de servidores de misión crítica, redes seguras, centros de cómputo y estaciones de
                trabajo de alto rendimiento para instituciones públicas de República Dominicana y Latinoamérica con
                apego irrestricto a la Ley No. 340-06.
              </p>

              {/* Quick Solvency / Compliance Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8">
                <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col">
                  <span className="text-label-caps font-label-caps text-cyan-700 font-semibold">100% HOMOLOGADO</span>
                  <span className="text-body-sm font-body-sm text-slate-900 font-semibold">DGCP República Dominicana</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col">
                  <span className="text-label-caps font-label-caps text-cyan-700 font-semibold">GARANTÍA TOTAL</span>
                  <span className="text-body-sm font-body-sm text-slate-900 font-semibold">3 a 5 Años On-Site</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col">
                  <span className="text-label-caps font-label-caps text-cyan-700 font-semibold">SOPORTE 24/7/365</span>
                  <span className="text-body-sm font-body-sm text-slate-900 font-semibold">En Territorio Nacional</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex flex-col">
                  <span className="text-label-caps font-label-caps text-cyan-700 font-semibold">PÓLIZAS</span>
                  <span className="text-body-sm font-body-sm text-slate-900 font-semibold">Fiel Cumplimiento 100%</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#catalogo"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-slate-950 text-white text-body-md font-body-md font-semibold hover:bg-slate-900 transition-all duration-200 cyan-glow active:scale-95 border border-cyan-500/30"
                >
                  <span className="material-symbols-outlined text-cyan-400">layers</span>
                  <span>Explorar Catálogo B2G 2025</span>
                </a>
                <a
                  href="#fichas-tecnicas"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-slate-900 border border-slate-300 text-body-md font-body-md font-semibold hover:bg-slate-50 transition-all duration-200 active:scale-95 shadow-sm"
                >
                  <span className="material-symbols-outlined text-slate-600">download_for_offline</span>
                  <span>Descargar Pliegos PPT (Modelos)</span>
                </a>
              </div>
            </div>

            {/* Hero Image & Interactive Telemetry Overlay (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-slate-300 shadow-xl bg-slate-950 group">
                <img
                  alt="Catálogo de Hardware Gubernamental DomiByte"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhbSEjj_0lRZtmNKMj575YDb8T4R_qL5iN55B2mreC4H6Co3IoA4Hb9yx2qCzrcsoc-PiTGVHHKsByQ-0HOri_ZlMO0BL2_jFyNoa9lShPkpqTZsuboG5S4oIWEEED95_x46RFXi506y-7vPmWDEvWSSXcq9wQ8dFFaayzbBwaah_LcQBxLjJwoVbMkpglEdfiCoE4nqnJsUzbsA0dP9mO9PM-c49vYYhhEX8dWS9kSnziJ3qWCVXIrg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating Telemetry Card */}
                <div className="absolute bottom-4 left-4 right-4 glass-navy border border-cyan-500/40 p-4 rounded-lg text-white shadow-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                      <span className="text-label-caps font-label-caps text-cyan-400">STOCK ESTRATÉGICO LOCAL</span>
                    </div>
                    <span className="text-label-caps font-label-caps text-slate-300">SANTO DOMINGO D.N.</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-white/10 font-label-caps text-code-numeric">
                    <div>
                      <p className="text-xs text-slate-400">DISPONIBLE</p>
                      <p className="text-sm font-bold text-white">450+ Nodos</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">TIEMPO SLA</p>
                      <p className="text-sm font-bold text-cyan-400">&lt; 4 Horas</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">HOMOLOGACIÓN</p>
                      <p className="text-sm font-bold text-white">ISO / NORTIC</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent badge hovering top right */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-white border border-slate-300 shadow-lg px-3 py-2 rounded-lg">
                <span className="material-symbols-outlined text-cyan-600 fill text-lg">shield</span>
                <div className="text-left">
                  <p className="text-label-caps font-label-caps text-slate-500 leading-none">SEGURIDAD CRÍTICA</p>
                  <p className="text-body-sm font-body-sm font-bold text-slate-900 leading-none mt-0.5">
                    FIPS 140-3 Nivel 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CLIENT INSTITUTIONS BANNER ==================== */}
      <section className="py-10 bg-[#f2f4f6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <p className="text-center text-label-caps font-label-caps text-slate-600 mb-6 tracking-widest">
            SUMINISTRO Y HOMOLOGACIÓN TÉCNICA PARA ENTIDADES DEL PODER EJECUTIVO, JUDICIAL Y MUNICIPAL
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center">
            <div className="bg-white py-3 px-4 rounded border border-slate-200 shadow-sm flex items-center justify-center gap-2 text-slate-700 font-semibold text-body-sm">
              <span className="material-symbols-outlined text-cyan-700">account_balance</span>
              <span>Ministerios de Estado</span>
            </div>
            <div className="bg-white py-3 px-4 rounded border border-slate-200 shadow-sm flex items-center justify-center gap-2 text-slate-700 font-semibold text-body-sm">
              <span className="material-symbols-outlined text-cyan-700">corporate_fare</span>
              <span>Direcciones Generales</span>
            </div>
            <div className="bg-white py-3 px-4 rounded border border-slate-200 shadow-sm flex items-center justify-center gap-2 text-slate-700 font-semibold text-body-sm">
              <span className="material-symbols-outlined text-cyan-700">local_hospital</span>
              <span>Red Hospitalaria Nacional</span>
            </div>
            <div className="bg-white py-3 px-4 rounded border border-slate-200 shadow-sm flex items-center justify-center gap-2 text-slate-700 font-semibold text-body-sm">
              <span className="material-symbols-outlined text-cyan-700">gavel</span>
              <span>Poder Judicial & Cortes</span>
            </div>
            <div className="col-span-2 md:col-span-1 bg-white py-3 px-4 rounded border border-slate-200 shadow-sm flex items-center justify-center gap-2 text-slate-700 font-semibold text-body-sm">
              <span className="material-symbols-outlined text-cyan-700">location_city</span>
              <span>Alcaldías & Ayuntamientos</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION: CATEGORY FILTERS & EQUIPMENT CATALOG ==================== */}
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

      {/* ==================== DOTACIÓN INTEGRAL DE PUESTOS DE TRABAJO (#puestos-trabajo) ==================== */}
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

      {/* ==================== SECTION: PROCESO DE ADQUISICIÓN LEY NO. 340-06 ==================== */}
      <section className="py-20 bg-[#f2f4f6] border-t border-b border-slate-200" id="proceso-adquisicion">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-label-caps font-label-caps text-cyan-700 font-semibold">
              TRANSPARENCIA Y RIGOR NORMATIVO
            </span>
            <h2 className="text-headline-xl font-headline-xl text-slate-900 mt-2">
              Proceso de Adquisición y Suministro Conforme a la Ley No. 340-06
            </h2>
            <p className="text-body-md font-body-md text-slate-600 mt-3">
              Acompañamos a los comités de compras y departamentos de TI de las instituciones públicas en cada fase del
              proceso de licitación, garantizando cumplimiento legal y máxima eficiencia técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-code-numeric text-headline-sm font-bold text-cyan-700">01</span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <span className="material-symbols-outlined text-sm">description</span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-slate-900 mb-2">Asesoría Técnica PPT</h3>
                <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                  Elaboración de Fichas Técnicas PPT con términos neutrales no dirigidos, cumpliendo con los principios
                  de libre concurrencia, equidad e igualdad de la DGCP.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-label-caps font-label-caps text-cyan-700 font-semibold">
                SIN COSTO INSTITUCIONAL
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-code-numeric text-headline-sm font-bold text-cyan-700">02</span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <span className="material-symbols-outlined text-sm">contract</span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-slate-900 mb-2">Póliza & Oferta Formal</h3>
                <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                  Presentación de Sobre A (Técnico) y Sobre B (Económico) con Póliza de Seriedad de Oferta emitida por
                  aseguradoras calificadas grado AAA en la República Dominicana.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-label-caps font-label-caps text-cyan-700 font-semibold">
                RESPALDO ASEGURADOR AAA
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-code-numeric text-headline-sm font-bold text-cyan-700">03</span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-slate-900 mb-2">Importación & QA Lab</h3>
                <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                  Logística de importación prioritaria bajo régimen DGA y certificación de componentes en nuestro
                  Laboratorio de Ensamble y Validación Técnica en Santo Domingo.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-label-caps font-label-caps text-cyan-700 font-semibold">
                TESTING 72H DE ESTRÉS
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-code-numeric text-headline-sm font-bold text-cyan-700">04</span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <span className="material-symbols-outlined text-sm">fact_check</span>
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-slate-900 mb-2">Entrega y Acta Conforme</h3>
                <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                  Instalación física en rack, cableado estructurado, energización, pruebas de carga y firma de Acta de
                  Recepción Conforme junto al departamento de auditoría interna.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-label-caps font-label-caps text-cyan-700 font-semibold">
                LLAVE EN MANO CERTIFICADA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION: DATA CENTER, SLA & REPLACEMENT WAREHOUSE (#garantias-sla) ==================== */}
      <section className="py-20 bg-[#f7f9fb]" id="garantias-sla">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="bg-[#0B1528] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Data Center Visual Container (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
                <img
                  alt="Data Center y Almacén Estratégico DomiByte"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XDu_Qc4RNV-tpEBnd_R0lXhUZZIb46ShctJLkomWsOWh3mnNA-qRahe4UIT_De4cO6NUdUDU8jummE5jtPJzhq4Xo46HW5ZIuKHQHRWQd86PDIwo3tnvBtiCYkgn3_5HVN2G3eaHLjFoi4PLDosNf-gNbcPuVRs0c2YRn0nQhK57z-qpMKtZCmB6ob7VENNs6PoEmnYqzDQluPlGqyC7zbd8CE0VDoaOkp_RvHen9NwwvUAtuthV8Bmbk"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg glass-navy border border-white/10 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-cyan-400 text-base">warehouse</span>
                    <span className="text-label-caps font-label-caps text-cyan-400">ALMACÉN DE REPUESTOS LOCAL</span>
                  </div>
                  <p className="text-body-sm font-body-sm text-slate-300">
                    Inventario permanente de discos SAS, fuentes hot-swap, módulos de memoria y switches de respaldo en
                    Santo Domingo para recambio inmediato.
                  </p>
                </div>
              </div>

              {/* Right SLA Details Container (7 cols) */}
              <div className="lg:col-span-7 p-8 lg:p-12 text-white flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 text-cyan-300 text-label-caps font-label-caps mb-4 border border-cyan-500/30">
                    <span className="material-symbols-outlined text-sm">handshake</span>
                    <span>ACUERDOS DE NIVEL DE SERVICIO (SLA) INSTITUCIONAL</span>
                  </div>
                  <h2 className="text-headline-xl font-headline-xl text-white mb-4">
                    Garantías Reales In-Situ Respaldadas por Pólizas de Fiel Cumplimiento
                  </h2>
                  <p className="text-body-md font-body-md text-slate-300 mb-8 leading-relaxed">
                    Para las instituciones del Estado dominicano, una falla no es solo un contratiempo técnico: es una
                    interrupción del servicio al ciudadano. Por ello, nuestros contratos incorporan garantías de
                    reposición rápida sin trámite burocrático.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="border-l-2 border-cyan-400 pl-4">
                      <span className="text-label-caps font-label-caps text-cyan-400 block mb-1">
                        SLA TIEMPO DE RESPUESTA
                      </span>
                      <h4 className="text-headline-sm font-headline-sm text-white font-bold">&lt; 4 Horas In-Situ</h4>
                      <p className="text-body-sm font-body-sm text-slate-400 mt-1">
                        Cobertura directa en Gran Santo Domingo y Santiago de los Caballeros con técnicos certificados.
                      </p>
                    </div>
                    <div className="border-l-2 border-cyan-400 pl-4">
                      <span className="text-label-caps font-label-caps text-cyan-400 block mb-1">COBERTURA NACIONAL</span>
                      <h4 className="text-headline-sm font-headline-sm text-white font-bold">&lt; 12 Horas Provincias</h4>
                      <p className="text-body-sm font-body-sm text-slate-400 mt-1">
                        Atención técnica en todas las regiones del país (Norte/Cibao, Sur y Este).
                      </p>
                    </div>
                    <div className="border-l-2 border-cyan-400 pl-4">
                      <span className="text-label-caps font-label-caps text-cyan-400 block mb-1">
                        CONTINUIDAD OPERATIVA
                      </span>
                      <h4 className="text-headline-sm font-headline-sm text-white font-bold">Unidad de Préstamo</h4>
                      <p className="text-body-sm font-body-sm text-slate-400 mt-1">
                        Si una reparación excede 24 horas, instalamos de inmediato un equipo de igual o mayor potencia.
                      </p>
                    </div>
                    <div className="border-l-2 border-cyan-400 pl-4">
                      <span className="text-label-caps font-label-caps text-cyan-400 block mb-1">
                        DOCUMENTACIÓN DGCP
                      </span>
                      <h4 className="text-headline-sm font-headline-sm text-white font-bold">Pólizas al 100%</h4>
                      <p className="text-body-sm font-body-sm text-slate-400 mt-1">
                        Pólizas de vicios ocultos y garantía de fábrica directa del fabricante respaldada por DomiByte.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                  <a
                    href="#contacto-b2g"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-bold text-body-sm transition-all shadow-md active:scale-95"
                  >
                    <span className="material-symbols-outlined text-base">support_agent</span>
                    <span>Contactar a un Ingeniero de Preventa B2G</span>
                  </a>
                  <span className="text-body-sm font-body-sm text-slate-400">
                    Mesa de Ayuda Gubernamental activa 24/7/365
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION: DOWNLOAD PPT TEMPLATES & TECHNICAL SPECIFICATIONS ==================== */}
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

      {/* ==================== SECTION: B2G CONTACT & SOLICITUD DE COTIZACIÓN ==================== */}
      <section className="py-20 bg-[#f7f9fb]" id="contacto-b2g">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Context (5 cols) */}
            <div className="lg:col-span-5">
              <span className="text-label-caps font-label-caps text-cyan-700 font-semibold">
                DIVISIÓN DE LICITACIONES Y CONTRATACIONES PÚBLICAS
              </span>
              <h2 className="text-headline-xl font-headline-xl text-slate-900 mt-2 mb-4">
                Solicitud de Cotización Institucional o Acompañamiento PPT
              </h2>
              <p className="text-body-md font-body-md text-slate-600 mb-8">
                Atendemos de forma prioritaria a Directores de Tecnología, Encargados de Compras y Planificación de
                instituciones gubernamentales en la República Dominicana y la región.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="text-body-md font-body-md font-semibold text-slate-900">
                      Oficina Corporativa Central
                    </h4>
                    <p className="text-body-sm font-body-sm text-slate-600">
                      Av. Winston Churchill, Torre Corporativa DomiByte, Santo Domingo, Distrito Nacional, República Dominicana.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 shrink-0">
                    <span className="material-symbols-outlined">mark_email_read</span>
                  </div>
                  <div>
                    <h4 className="text-body-md font-body-md font-semibold text-slate-900">
                      Correo Exclusivo para Licitaciones
                    </h4>
                    <p className="text-body-sm font-body-sm text-slate-600">licitaciones@domibyte.com</p>
                    <p className="text-label-caps font-label-caps text-cyan-700 mt-0.5">
                      Recepción de pliegos y solicitudes 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 shrink-0">
                    <span className="material-symbols-outlined">phone_in_talk</span>
                  </div>
                  <div>
                    <h4 className="text-body-md font-body-md font-semibold text-slate-900">
                      Línea Directa Compras del Estado
                    </h4>
                    <p className="text-body-sm font-body-sm text-slate-600">(809) 555-0190 / Ext. 104 y 105</p>
                  </div>
                </div>
              </div>

              {/* Transparency Compliance Shield */}
              <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-emerald-600 shrink-0">shield_lock</span>
                <p className="text-body-sm font-body-sm text-slate-600">
                  DomiByte cuenta con certificación de estar al día en la DGII y TSS, no teniendo prohibición para
                  contratar con el Estado bajo el Art. 14 de la Ley 340-06.
                </p>
              </div>
            </div>

            {/* B2G Quote Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-2xl border border-slate-200 shadow-lg">
              <h3 className="text-headline-md font-headline-md text-slate-900 mb-2">
                Formulario de Requerimiento Institucional
              </h3>
              <p className="text-body-sm font-body-sm text-slate-600 mb-6">
                Complete los campos requeridos para coordinar una reunión técnica o preparar su cotización conforme a su
                proceso de compras.
              </p>

              {quoteSubmitted ? (
                <div className="p-6 bg-cyan-50 border border-cyan-400 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-2xl">task_alt</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Requerimiento Institucional Recibido
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Un Oficial de Licitaciones de DomiByte responderá en menos de 2 horas hábiles con el informe técnico y
                    cotización formal en Sobre Virtual.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-body-sm font-medium text-slate-900 mb-1">
                        Institución Gubernamental *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Ministerio de Hacienda, CAASD..."
                        value={quoteFormData.institution}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, institution: e.target.value })}
                        className="w-full h-11 bg-white border border-slate-300 rounded-lg px-3 text-body-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                      />
                    </div>
                    <div>
                      <label className="block text-body-sm font-medium text-slate-900 mb-1">
                        Departamento Solicitante *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Dirección de TI / Unidad de Compras"
                        value={quoteFormData.department}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, department: e.target.value })}
                        className="w-full h-11 bg-white border border-slate-300 rounded-lg px-3 text-body-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-body-sm font-medium text-slate-900 mb-1">
                        Nombre del Funcionario / Contacto *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nombre y Apellidos"
                        value={quoteFormData.officialName}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, officialName: e.target.value })}
                        className="w-full h-11 bg-white border border-slate-300 rounded-lg px-3 text-body-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                      />
                    </div>
                    <div>
                      <label className="block text-body-sm font-medium text-slate-900 mb-1">
                        Correo Institucional (.gob.do / oficial) *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="funcionario@institucion.gob.do"
                        value={quoteFormData.officialEmail}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, officialEmail: e.target.value })}
                        className="w-full h-11 bg-white border border-slate-300 rounded-lg px-3 text-body-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-body-sm font-medium text-slate-900 mb-1">
                        Modalidad de Contratación Estimada
                      </label>
                      <select
                        value={quoteFormData.procurementType}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, procurementType: e.target.value })}
                        className="w-full h-11 bg-white border border-slate-300 rounded-lg px-3 text-body-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 text-slate-700"
                      >
                        <option>Licitación Pública Nacional (LPN)</option>
                        <option>Comparación de Precios</option>
                        <option>Compras Menores</option>
                        <option>Suministro de Excepción / Emergencia</option>
                        <option>Solicitud de Ficha Técnica PPT Preventiva</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-body-sm font-medium text-slate-900 mb-1">
                        Plazo Requerido de Entrega
                      </label>
                      <select
                        value={quoteFormData.deliveryTime}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, deliveryTime: e.target.value })}
                        className="w-full h-11 bg-white border border-slate-300 rounded-lg px-3 text-body-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 text-slate-700"
                      >
                        <option>Inmediato (Disponibilidad en almacén local)</option>
                        <option>30 Días calendario</option>
                        <option>45 a 60 Días (Proyectos de gran escala)</option>
                        <option>A convenir según pliego</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-body-sm font-medium text-slate-900 mb-1">
                      Detalle del Requerimiento o Enlace al Portal Transaccional DGCP
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describa los equipos de cómputo, servidores, licencias o adjunte el número de proceso (ej. MIN-CCC-LPN-2025-0012)..."
                      value={quoteFormData.details}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, details: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg p-3 text-body-sm focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="siteVisit"
                      checked={quoteFormData.siteVisit}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, siteVisit: e.target.checked })}
                      className="rounded border-slate-300 text-slate-950 focus:ring-cyan-600"
                    />
                    <label htmlFor="siteVisit" className="text-body-sm text-slate-600">
                      Solicitar visita técnica in-situ para levantamiento de infraestructura y compatibilidad.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-semibold text-body-md rounded-lg transition-all duration-200 cyan-glow border border-cyan-500/30 flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span className="material-symbols-outlined text-cyan-400">send</span>
                      <span>Enviar Requerimiento a la División B2G</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
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
    </div>
  );
};
