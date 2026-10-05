import React from 'react';


export const HeroEquipamiento: React.FC = () => {

  return (
    <>
      {/* HERO SECTION: B2G INFRAESTRUCTURA & EQUIPAMIENTO */}{/* ==================== HERO SECTION: B2G INFRAESTRUCTURA & EQUIPAMIENTO ==================== */}
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

      {/* CLIENT INSTITUTIONS BANNER */}{/* ==================== CLIENT INSTITUTIONS BANNER ==================== */}
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

      
    </>
  );
};
