import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TopNavBar } from './components/TopNavBar';
import { PortalInstitucional } from './components/PortalInstitucional';
import { EquipamientoSuministro } from './components/EquipamientoSuministro';
import { ModalFichaPPT } from './components/ModalFichaPPT';
import { ModalDossierRPE } from './components/ModalDossierRPE';
import { ModalTenderBasket } from './components/ModalTenderBasket';
import { Footer } from './components/Footer';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Sync hash routing on load
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'equipamiento' || hash === 'solicitudes' || hash === 'puestos-trabajo') {
        if (location.pathname !== '/equipamiento') navigate('/equipamiento');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'servicios-estado' || hash === 'licitaciones-adjudicadas') {
        if (location.pathname !== '/') navigate('/' + hash);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => window.removeEventListener('hashchange', handleHash);
  }, [navigate, location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e] selection:bg-cyan-500 selection:text-white">
      {/* Top Navbar */}
      <TopNavBar />

      {/* Main Screen Content */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<PortalInstitucional />} />
          <Route path="/equipamiento" element={<EquipamientoSuministro />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Ficha PPT Modal */}
      <ModalFichaPPT />

      {/* Dossier RPE Modal */}
      <ModalDossierRPE />

      {/* Tender Basket Modal */}
      <ModalTenderBasket />
    </div>
  );
}
