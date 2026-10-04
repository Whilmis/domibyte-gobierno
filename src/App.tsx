/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HARDWARE_ITEMS } from './data/mockData';
import { ScreenType, Language, HardwareItem, TenderBasketItem } from './types';
import { TopNavBar } from './components/TopNavBar';
import { PortalInstitucional } from './components/PortalInstitucional';
import { EquipamientoSuministro } from './components/EquipamientoSuministro';
import { ModalFichaPPT } from './components/ModalFichaPPT';
import { ModalDossierRPE } from './components/ModalDossierRPE';
import { ModalTenderBasket } from './components/ModalTenderBasket';
import { Footer } from './components/Footer';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('portal');
  const [language, setLanguage] = useState<Language>('es');

  // Pre-seed 2 items in tender basket as shown in the prototype ("2 especificaciones seleccionadas")
  const [basket, setBasket] = useState<TenderBasketItem[]>([
    {
      item: HARDWARE_ITEMS[0], // DB-SRV-9400
      quantity: 1,
      addedAt: new Date().toISOString()
    },
    {
      item: HARDWARE_ITEMS[1], // DB-NET-48F
      quantity: 1,
      addedAt: new Date().toISOString()
    }
  ]);

  // Modals state
  const [activeFichaItem, setActiveFichaItem] = useState<HardwareItem | null>(null);
  const [isDossierModalOpen, setIsDossierModalOpen] = useState(false);
  const [isBasketModalOpen, setIsBasketModalOpen] = useState(false);

  // Sync hash routing on load
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (
        hash === '#catalogo' ||
        hash === '#puestos-trabajo' ||
        hash === '#fichas-tecnicas' ||
        hash === '#garantias-sla' ||
        hash === '#contacto-b2g'
      ) {
        setCurrentScreen('equipamiento');
      } else if (
        hash === '#capacidades' ||
        hash === '#infraestructura-cpd' ||
        hash === '#casos-exito' ||
        hash === '#soc-ciberseguridad' ||
        hash === '#solvencia-rolece' ||
        hash === '#sectores'
      ) {
        setCurrentScreen('portal');
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigateScreen = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const handleAddToTender = (item: HardwareItem) => {
    setBasket((prev) => {
      const existing = prev.find((b) => b.item.id === item.id);
      if (existing) {
        return prev.map((b) =>
          b.item.id === item.id ? { ...b, quantity: b.quantity + 1 } : b
        );
      }
      return [...prev, { item, quantity: 1, addedAt: new Date().toISOString() }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setBasket((prev) => {
      return prev
        .map((b) => {
          if (b.item.id === id) {
            const newQty = b.quantity + delta;
            return newQty > 0 ? { ...b, quantity: newQty } : null;
          }
          return b;
        })
        .filter(Boolean) as TenderBasketItem[];
    });
  };

  const handleRemoveFromTender = (id: string) => {
    setBasket((prev) => prev.filter((b) => b.item.id !== id));
  };

  const handleClearTender = () => {
    setBasket([]);
  };

  const totalTenderCount = basket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e] selection:bg-cyan-500 selection:text-white">
      {/* Top Navbar */}
      <TopNavBar
        currentScreen={currentScreen}
        onNavigateScreen={handleNavigateScreen}
        tenderCount={totalTenderCount}
        onOpenTenderBasket={() => setIsBasketModalOpen(true)}
        onOpenDossierModal={() => setIsDossierModalOpen(true)}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Screen Content */}
      <main className="flex-1 w-full">
        {currentScreen === 'portal' ? (
          <PortalInstitucional
            onNavigateScreen={handleNavigateScreen}
            onOpenDossierModal={() => setIsDossierModalOpen(true)}
            language={language}
          />
        ) : (
          <EquipamientoSuministro
            onSelectProductForModal={(item) => setActiveFichaItem(item)}
            onAddToTender={handleAddToTender}
            tenderCount={totalTenderCount}
            onOpenTenderBasket={() => setIsBasketModalOpen(true)}
            onClearTender={handleClearTender}
            onOpenDossierModal={() => setIsDossierModalOpen(true)}
            language={language}
          />
        )}
      </main>

      {/* Shared Footer */}
      <Footer
        onNavigateScreen={handleNavigateScreen}
        onOpenDossierModal={() => setIsDossierModalOpen(true)}
      />

      {/* Ficha PPT Modal */}
      <ModalFichaPPT
        item={activeFichaItem}
        onClose={() => setActiveFichaItem(null)}
        onAddToTender={handleAddToTender}
        isAlreadyInTender={basket.some((b) => b.item.id === activeFichaItem?.id)}
      />

      {/* Dossier RPE Modal */}
      <ModalDossierRPE
        isOpen={isDossierModalOpen}
        onClose={() => setIsDossierModalOpen(false)}
      />

      {/* Tender Basket Modal */}
      <ModalTenderBasket
        isOpen={isBasketModalOpen}
        onClose={() => setIsBasketModalOpen(false)}
        basket={basket}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromTender}
        onClearBasket={handleClearTender}
        onGoToQuote={() => {
          if (currentScreen !== 'equipamiento') {
            setCurrentScreen('equipamiento');
          }
          setTimeout(() => {
            const el = document.getElementById('contacto-b2g');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />
    </div>
  );
}
