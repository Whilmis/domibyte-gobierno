import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTenderStore } from '../store/useTenderStore';
import { useUIStore } from '../store/useUIStore';
import LogoDomiByte from '../assets/logo-transparent.png';

export const TopNavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentScreen = location.pathname.startsWith('/equipamiento') ? 'equipamiento' : 'portal';
  
  const tenderCount = useTenderStore((state) => state.totalTenderCount());
  const setIsBasketModalOpen = useUIStore((state) => state.setIsBasketModalOpen);
  const setIsDossierModalOpen = useUIStore((state) => state.setIsDossierModalOpen);
  const language = useUIStore((state) => state.language);
  const toggleLanguage = useUIStore((state) => state.toggleLanguage);

  const onNavigateScreen = (screen: string) => navigate(screen === 'equipamiento' ? '/equipamiento' : '/');
  const onOpenTenderBasket = () => setIsBasketModalOpen(true);
  const onOpenDossierModal = () => setIsDossierModalOpen(true);
  const onToggleLanguage = () => toggleLanguage();
  const [isInicioOpen, setIsInicioOpen] = useState(false);
  const [isEquiposOpen, setIsEquiposOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<'inicio' | 'equipos' | null>(null);

  const inicioDropdownRef = useRef<HTMLDivElement>(null);
  const equiposDropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inicioDropdownRef.current &&
        !inicioDropdownRef.current.contains(event.target as Node)
      ) {
        setIsInicioOpen(false);
      }
      if (
        equiposDropdownRef.current &&
        !equiposDropdownRef.current.contains(event.target as Node)
      ) {
        setIsEquiposOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmenuClick = (sectionId: string) => {
    setIsInicioOpen(false);
    setMobileActiveDropdown(null);
    if (currentScreen !== 'portal') {
      onNavigateScreen('portal');
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = sectionId;
      }
    }, 100);
  };

  const handleEquiposSubmenuClick = (sectionId: string) => {
    setIsEquiposOpen(false);
    setMobileActiveDropdown(null);
    if (currentScreen !== 'equipamiento') {
      onNavigateScreen('equipamiento');
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = sectionId;
      }
    }, 100);
  };

  const handleDesktopInicioToggle = () => {
    if (currentScreen !== 'portal') {
      onNavigateScreen('portal');
    }
    setIsInicioOpen((prev) => !prev);
    setIsEquiposOpen(false);
  };

  const handleDesktopEquiposToggle = () => {
    if (currentScreen !== 'equipamiento') {
      onNavigateScreen('equipamiento');
    }
    setIsEquiposOpen((prev) => !prev);
    setIsInicioOpen(false);
  };

  const handleMobileInicioTap = () => {
    if (currentScreen !== 'portal') {
      onNavigateScreen('portal');
    }
    setMobileActiveDropdown((prev) => (prev === 'inicio' ? null : 'inicio'));
  };

  const handleMobileEquiposTap = () => {
    if (currentScreen !== 'equipamiento') {
      onNavigateScreen('equipamiento');
    }
    setMobileActiveDropdown((prev) => (prev === 'equipos' ? null : 'equipos'));
  };

  const inicioSubmenuItems = [
    {
      id: 'capacidades',
      label: language === 'es' ? 'Capacidades Tecnológicas' : 'Technological Capabilities',
      icon: 'terminal',
      desc: language === 'es' ? 'Software a medida, IA y datos soberanos' : 'Custom software & sovereign AI'
    },
    {
      id: 'infraestructura-cpd',
      label: language === 'es' ? 'Infraestructura Data Center (Tier IV)' : 'Tier IV Data Center Infrastructure',
      icon: 'dns',
      desc: language === 'es' ? 'Soberanía tecnológica y alta disponibilidad' : 'Technological sovereignty & uptime'
    },
    {
      id: 'casos-exito',
      label: language === 'es' ? 'Capacidad Técnica y Garantías' : 'Technical Capacity & Warranties',
      icon: 'verified_user',
      desc: language === 'es' ? 'Pólizas 100% y laboratorio de QA' : '100% Surety bonds & QA lab'
    },
    {
      id: 'soc-ciberseguridad',
      label: language === 'es' ? 'Centro Ciberseguridad (SOC / CNCS)' : 'Cybersecurity Center (SOC / CNCS)',
      icon: 'security',
      desc: language === 'es' ? 'Monitoreo 24/7 y SLA < 15 min' : '24/7 monitoring & CSIRT response'
    },
    {
      id: 'ciclo-integracion',
      label: language === 'es' ? 'Ciclo de Homologación Ley 340-06' : 'Homologation Cycle (Law 340-06)',
      icon: 'sync_alt',
      desc: language === 'es' ? 'Metodología contractual en 4 fases' : '4-phase procurement methodology'
    },
    {
      id: 'solvencia-rolece',
      label: language === 'es' ? 'Solvencia Acreditada RPE' : 'Accredited RPE Solvency',
      icon: 'fact_check',
      desc: language === 'es' ? 'Comparativa técnica vs mercado estándar' : 'Technical benchmark vs standard market'
    },
    {
      id: 'sectores',
      label: language === 'es' ? 'Sectores de Actuación' : 'Government Impact Sectors',
      icon: 'account_balance',
      desc: language === 'es' ? 'Gobierno digital, salud, smart cities' : 'GovTech, health, smart cities'
    },
    {
      id: 'contacto',
      label: language === 'es' ? 'Canal para Comités de Compras' : 'Procurement Committees Channel',
      icon: 'assignment',
      desc: language === 'es' ? 'Solicitud directa de pliegos y dossier' : 'Direct tender request channel'
    }
  ];

  const equiposSubmenuItems = [
    {
      id: 'catalogo',
      label: language === 'es' ? 'Catálogo de Servidores & Redes 2025' : '2025 Server & Network Catalog',
      icon: 'layers',
      desc: language === 'es' ? 'Hardware homologado para compras públicas' : 'Approved hardware for public procurement'
    },
    {
      id: 'puestos-trabajo',
      label: language === 'es' ? 'Puestos de Trabajo & Ofimática' : 'Workstations & Office IT',
      icon: 'computer',
      desc: language === 'es' ? 'Laptops, PCs SFF, monitores y docks' : 'Laptops, SFF PCs, monitors & docks'
    },
    {
      id: 'proceso-adquisicion',
      label: language === 'es' ? 'Proceso de Suministro Ley 340-06' : 'Supply Process Law 340-06',
      icon: 'local_shipping',
      desc: language === 'es' ? 'Flujo de licitación y entrega conforme' : 'Tender and delivery workflow'
    },
    {
      id: 'garantias-sla',
      label: language === 'es' ? 'Garantías In-Situ & SLA < 4h' : 'On-Site Warranties & SLA < 4h',
      icon: 'handshake',
      desc: language === 'es' ? 'Almacén local y reemplazo express' : 'Local warehouse & express swap'
    },
    {
      id: 'fichas-tecnicas',
      label: language === 'es' ? 'Pliegos PPT Modelo Descargables' : 'Model PPT Tender Specs',
      icon: 'sim_card_download',
      desc: language === 'es' ? 'Términos de referencia neutrales editables' : 'Neutral editable terms of reference'
    },
    {
      id: 'contacto-b2g',
      label: language === 'es' ? 'Solicitud de Cotización para Estudio de Mercado' : 'Market Study Quotation Request',
      icon: 'request_quote',
      desc: language === 'es' ? 'Formulario oficial de requerimiento' : 'Official procurement RFP form'
    }
  ];

  return (
    <>
      {/* TOP INSTITUTIONAL COMPLIANCE TICKER */}
      <div className="bg-[#0A1424] text-slate-400 text-xs py-1.5 border-b border-cyan-500/20 px-4 lg:px-12 select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-slate-300 font-semibold">
              {language === 'es' ? 'RPE DGCP Certificado:' : 'DGCP Registered Supplier:'}
            </span>
            <span className="text-cyan-400">
              {language === 'es' ? 'Proveedor Oficial del Estado Dominicano (Ley 340-06)' : 'Official Dominican GovTech Contractor'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[13px] text-cyan-400">verified</span>
              <span>Normativas OGTIC / NORTIC A2, A3, A4, A5</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[13px] text-cyan-400">shield</span>
              <span>ISO 27001 & ISO 9001</span>
            </span>
          </div>
        </div>
      </div>

      {/* STICKY MAIN HEADER */}
      <header className="sticky top-0 z-50 bg-[#071324]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-md">
        <div className="flex justify-between items-center w-full px-4 lg:px-12 max-w-7xl mx-auto py-2">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (currentScreen !== 'portal') onNavigateScreen('portal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 text-left group transition-transform active:scale-95 focus:outline-none"
              title="DomiByte GovTech B2G"
            >
              <img
                src={LogoDomiByte}
                alt="DomiByte Logo"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-md scale-[1.35] origin-left"
              />
              <div className="hidden sm:flex flex-col border-l border-slate-700 pl-3">
                <span className="text-[11px] font-mono font-bold text-cyan-400 tracking-wider uppercase">
                  B2G GovTech
                </span>
                <span className="text-xs text-slate-300 font-medium">Rep. Dominicana & LATAM</span>
              </div>
            </button>
          </div>

          {/* Navigation Links with DIRECT SUBMENUS on INICIO & EQUIPOS */}
          <nav className="hidden lg:flex items-center gap-4">
            {/* 1. DIRECT SUBMENU: INICIO (HOME) */}
            <div
              ref={inicioDropdownRef}
              className="relative group py-1"
              onMouseEnter={() => setIsInicioOpen(true)}
              onMouseLeave={() => setIsInicioOpen(false)}
            >
              <button
                onClick={handleDesktopInicioToggle}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all focus:outline-none cursor-pointer ${
                  currentScreen === 'portal'
                    ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
                aria-expanded={isInicioOpen}
              >
                <span className="material-symbols-outlined text-[19px] text-cyan-400">home</span>
                <span>{language === 'es' ? 'Inicio' : 'Home'}</span>
                <span
                  className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                    isInicioOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  expand_more
                </span>
              </button>

              {/* Submenu directly attached to Inicio */}
              <div
                className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${
                  isInicioOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="w-80 bg-slate-900/98 border border-slate-700/90 rounded-2xl shadow-2xl p-2.5 backdrop-blur-xl space-y-1">
                  <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                      {language === 'es' ? 'SECCIONES DE INICIO' : 'HOME SECTIONS'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                      Ley 340-06
                    </span>
                  </div>

                  {inicioSubmenuItems.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => handleSubmenuClick(sec.id)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-200 hover:bg-cyan-950/70 hover:text-cyan-300 transition-all flex items-start gap-2.5 group/item cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-cyan-400 mt-0.5 group-hover/item:scale-110 transition-transform">
                        {sec.icon}
                      </span>
                      <div className="flex-1">
                        <span className="font-semibold block text-slate-100 group-hover/item:text-cyan-300">
                          {sec.label}
                        </span>
                        <span className="text-[11px] text-slate-400 line-clamp-1 block">
                          {sec.desc}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. DIRECT SUBMENU: EQUIPOS (HARDWARE) */}
            <div
              ref={equiposDropdownRef}
              className="relative group py-1"
              onMouseEnter={() => setIsEquiposOpen(true)}
              onMouseLeave={() => setIsEquiposOpen(false)}
            >
              <button
                onClick={handleDesktopEquiposToggle}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all focus:outline-none cursor-pointer ${
                  currentScreen === 'equipamiento'
                    ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
                aria-expanded={isEquiposOpen}
              >
                <span className="material-symbols-outlined text-[19px] text-cyan-400">devices</span>
                <span>{language === 'es' ? 'Equipos' : 'Hardware'}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span
                  className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                    isEquiposOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  expand_more
                </span>
              </button>

              {/* Submenu directly attached to Equipos */}
              <div
                className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${
                  isEquiposOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="w-80 bg-slate-900/98 border border-slate-700/90 rounded-2xl shadow-2xl p-2.5 backdrop-blur-xl space-y-1">
                  <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                      {language === 'es' ? 'SECCIONES DE EQUIPOS' : 'HARDWARE SECTIONS'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                      DGCP
                    </span>
                  </div>

                  {equiposSubmenuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleEquiposSubmenuClick(item.id)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-200 hover:bg-cyan-950/70 hover:text-cyan-300 transition-all flex items-start gap-2.5 group/item cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-cyan-400 mt-0.5 group-hover/item:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <div className="flex-1">
                        <span className="font-semibold block text-slate-100 group-hover/item:text-cyan-300">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-slate-400 line-clamp-1 block">
                          {item.desc}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Action Controls: Tender Basket, Language Toggle, and Dossier CTA */}
          <div className="flex items-center gap-3">
            {/* Tender Basket Button */}
            <button
              onClick={onOpenTenderBasket}
              className="relative p-2 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-300 hover:bg-slate-800 transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
              title={language === 'es' ? 'Generador de TDR (Términos de Referencia)' : 'TDR Generator'}
            >
              <span className="material-symbols-outlined text-[19px]">description</span>
              <span className="hidden sm:inline text-xs font-mono font-semibold">PPT</span>
              {tenderCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-500 text-slate-950 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {tenderCount}
                </span>
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              className="text-xs font-mono font-bold px-2 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-300 rounded transition-colors cursor-pointer"
              title="Cambiar Idioma / Change Language"
            >
              {language === 'es' ? 'ES | EN' : 'EN | ES'}
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenDossierModal}
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-4 py-2 rounded-lg text-xs md:text-sm active:scale-95 transition-all shadow-[0_0_16px_-2px_rgba(6,182,212,0.4)] whitespace-nowrap cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px]">assignment</span>
              <span>{language === 'es' ? 'Dossier Técnico RPE' : 'RPE Solvency Dossier'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Strip: DIRECT INICIO & EQUIPOS SUBMENUS (No extra "Secciones" button) */}
        <div className="lg:hidden border-t border-slate-800 bg-[#0A1424] px-4 py-2">
          <div className="flex items-center justify-around gap-2">
            {/* Mobile Direct Button: Inicio */}
            <button
              onClick={handleMobileInicioTap}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                currentScreen === 'portal' || mobileActiveDropdown === 'inicio'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/50'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>{language === 'es' ? 'Inicio' : 'Home'}</span>
              <span
                className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                  mobileActiveDropdown === 'inicio' ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                }`}
              >
                expand_more
              </span>
            </button>

            {/* Mobile Direct Button: Equipos */}
            <button
              onClick={handleMobileEquiposTap}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                currentScreen === 'equipamiento' || mobileActiveDropdown === 'equipos'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/50'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">devices</span>
              <span>{language === 'es' ? 'Equipos' : 'Hardware'}</span>
              <span
                className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                  mobileActiveDropdown === 'equipos' ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                }`}
              >
                expand_more
              </span>
            </button>
          </div>

          {/* Mobile Accordion Submenu for INICIO */}
          {mobileActiveDropdown === 'inicio' && (
            <div className="pt-3 pb-2 mt-2 border-t border-slate-800 space-y-1 animate-in slide-in-from-top-2">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block px-1 mb-1 font-bold">
                {language === 'es' ? 'SECCIONES DE INICIO:' : 'HOME SECTIONS:'}
              </span>
              <div className="grid grid-cols-1 gap-1">
                {inicioSubmenuItems.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleSubmenuClick(sec.id)}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-cyan-300 hover:bg-slate-900 flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm text-cyan-400">{sec.icon}</span>
                    <span className="font-medium truncate">{sec.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Accordion Submenu for EQUIPOS */}
          {mobileActiveDropdown === 'equipos' && (
            <div className="pt-3 pb-2 mt-2 border-t border-slate-800 space-y-1 animate-in slide-in-from-top-2">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block px-1 mb-1 font-bold">
                {language === 'es' ? 'SECCIONES DE EQUIPOS:' : 'HARDWARE SECTIONS:'}
              </span>
              <div className="grid grid-cols-1 gap-1">
                {equiposSubmenuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleEquiposSubmenuClick(item.id)}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-cyan-300 hover:bg-slate-900 flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm text-cyan-400">{item.icon}</span>
                    <span className="font-medium truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
