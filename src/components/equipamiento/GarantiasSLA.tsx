import React from 'react';


export const GarantiasSLA: React.FC = () => {

  return (
    <>
      {/* SECTION: DATA CENTER, SLA & REPLACEMENT WAREHOUSE (#garantias-sla) */}{/* ==================== SECTION: DATA CENTER, SLA & REPLACEMENT WAREHOUSE (#garantias-sla) ==================== */}
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

      
    </>
  );
};
