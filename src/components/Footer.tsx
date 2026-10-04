import React from 'react';
import { ScreenType } from '../types';

interface FooterProps {
  onNavigateScreen: (screen: ScreenType) => void;
  onOpenDossierModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateScreen, onOpenDossierModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#060D1A] text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 pt-12 pb-8">
        {/* Sellos de Acreditación Oficial Dominicana y Regional */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 border-b border-slate-800 text-center">
          <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
            <span className="font-label-caps text-label-caps text-cyan-400 block font-semibold">RPE ACTIVO (DGCP)</span>
            <span className="text-[11px] text-slate-400">Proveedor del Estado Ley 340-06</span>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
            <span className="font-label-caps text-label-caps text-cyan-400 block font-semibold">MARCO NORTIC</span>
            <span className="text-[11px] text-slate-400">OGTIC / Estándares de Gobierno Digital</span>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
            <span className="font-label-caps text-label-caps text-cyan-400 block font-semibold">ISO 27001 & ISO 9001</span>
            <span className="text-[11px] text-slate-400">Seguridad & Gestión de Calidad</span>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
            <span className="font-label-caps text-label-caps text-cyan-400 block font-semibold">CNCS / CSIRT-RD</span>
            <span className="text-[11px] text-slate-400">Ciberdefensa e Infraestructuras Críticas</span>
          </div>
        </div>

        {/* Detalle Institucional DomiByte GovTech Dominicana */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-slate-800">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjesmWAbsIXm7Vfnl1hueclnSZJR8yUraBIpMbpcH9U0YEo4jsx1wYJx36r5DnTZqyFvke0dFyllSpmS_3zTZZcoVpv-qxXV4qZWh5XK6xianbIJjD1wW_6t84d3iREgDBrc-UDOSF6w-5rrPIYrDwG_XdslsKKCHKjT8y1AmmMI7D_H1AXuir0hXGzdERsGYFsUz_53HZjAr9LrdueIMsxVdlJ2-zViH_mQaxi5DaJhANP284M4TyAHaJ_mw6zDGkyQc"
                alt="DomiByte"
                className="h-14 w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
            <p className="text-body-sm font-body-sm text-slate-400 max-w-md mb-4 leading-relaxed">
              Firma tecnológica integradora de referencia y desarrolladora de soluciones de software de misión crítica
              para el Estado Dominicano, compras públicas bajo la Ley 340-06 y estándares OGTIC/NORTIC.
            </p>
            <div className="text-label-caps font-label-caps text-slate-400 space-y-1">
              <p>RNC: 1-32-84920-1 | Registro Mercantil Cámara de Comercio de Santo Domingo</p>
              <p>Registro de Proveedores del Estado (RPE): HABILITADO / DGCP</p>
            </div>
          </div>

          <div>
            <h4 className="font-label-caps text-label-caps text-white uppercase tracking-wider mb-4">
              Gobernanza y Transparencia
            </h4>
            <ul className="space-y-2 text-body-sm font-body-sm">
              <li>
                <button
                  onClick={() => onNavigateScreen('portal')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Portal Transaccional DGCP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateScreen('portal')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Portal de Transparencia (Ley 200-04)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateScreen('portal')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Ley 172-13 sobre Protección de Datos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateScreen('portal')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Normativas OGTIC / NORTIC
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDossierModal}
                  className="hover:text-cyan-400 transition-colors text-left text-cyan-400 font-semibold"
                >
                  Solicitar Dossier RPE Oficial
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-caps text-label-caps text-white uppercase tracking-wider mb-4">
              Oficina de Licitaciones B2G
            </h4>
            <div className="text-body-sm space-y-2 text-slate-300">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-cyan-400">location_on</span>
                <span>Av. Winston Churchill, Piantini, Santo Domingo, D.N.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-cyan-400">phone</span>
                <span>+1 (809) 555-0190</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-cyan-400">mail</span>
                <span>licitaciones@domibyte.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-cyan-400">lock_clock</span>
                <span>Llave Pública PGP: ID 0x82C4A79E</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pt-8 gap-6 text-body-sm text-slate-400">
          <p>
            © 2024 DomiByte GovTech S.R.L. Todos los derechos reservados. Desarrollado por Whilmis Perez y Richard Hernández.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="hover:text-cyan-400 cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-cyan-400 cursor-pointer">Términos de Contratación</span>
            <span className="hover:text-cyan-400 cursor-pointer">Aviso Legal</span>
            <button
              onClick={scrollToTop}
              className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Subir al Inicio</span>
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
