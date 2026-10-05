import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUIStore } from '../store/useUIStore';
import { TECHNICAL_COMPARISON_DATA } from '../data/mockData';

export const PortalInstitucional: React.FC = () => {
  const navigate = useNavigate();
  const onNavigateScreen = (screen: string) => navigate(screen === 'equipamiento' ? '/equipamiento' : '/');
  const onOpenDossierModal = () => useUIStore.getState().setIsDossierModalOpen(true);
  const language = useUIStore((state) => state.language);
  return (
    <div className="w-full">
      {/* ==================== 1. HERO SECTION (OSCURO) ==================== */}
      <section
        className="relative overflow-hidden bg-[#0A192F] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-cyan-500/20"
        id="inicio"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Contenido Hero Principal (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              {/* Badges de Certificación Oficial RD / LATAM */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-label-caps font-label-caps bg-slate-800/80 border border-cyan-400/30 text-cyan-300 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[14px] mr-1 text-cyan-400">military_tech</span>
                  RPE DGCP Certificado Activo
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-label-caps font-label-caps bg-cyan-950/60 border border-cyan-400/40 text-cyan-200">
                  Estándares NORTIC A2, A3, A4, A5 (OGTIC)
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-label-caps font-label-caps bg-slate-800/80 border border-slate-600 text-slate-300">
                  ISO 27001 & ISO 9001
                </span>
              </div>

              {/* Titular H1 de Ingeniería */}
              <h1 className="font-display-hero text-display-hero-mobile md:font-display-hero md:text-display-hero text-white tracking-tight">
                Ingeniería de Software e Integración Tecnológica para el Sector Público.
              </h1>

              {/* Subtítulo Institucional Riguroso */}
              <p className="text-body-lg font-body-lg text-slate-300 max-w-2xl leading-relaxed">
                Desarrollamos sistemas de misión crítica a medida, gobernanza soberana de datos con IA y provisión integral
                de infraestructura IT con alineación a las normativas NORTIC de la OGTIC, ciberseguridad CNCS y estándares
                internacionales de auditoría técnica.
              </p>

              {/* Acciones Principales */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenDossierModal}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-headline-sm text-headline-sm active:scale-95 transition-all shadow-[0_0_20px_-2px_rgba(6,182,212,0.4)]"
                >
                  <span className="material-symbols-outlined mr-2 text-[20px]">description</span>
                  Solicitar Dossier de Solvencia B2G
                </button>
                <button
                  onClick={() => onNavigateScreen('equipamiento')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-slate-800/90 border border-cyan-500/30 text-cyan-300 font-headline-sm text-headline-sm hover:bg-slate-700 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined mr-2 text-[20px]">devices</span>
                  Ver Catálogo de Equipamiento
                </button>
              </div>

              {/* Garantía de Interoperabilidad RD / LATAM */}
              <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-body-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-cyan-400">check_circle</span> Ley 340-06 Compras y Contrataciones
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-cyan-400">check_circle</span> Portal Transaccional DGCP
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-cyan-400">check_circle</span> Plataforma Firma Digital / Firma Gob
                </span>
              </div>
            </div>

            {/* Panel Visual Técnico Flotante: Cockpit de Solvencia (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-cyan-500/30 bg-slate-900/90 backdrop-blur-md p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/70">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="font-label-caps text-label-caps text-slate-400 ml-2">
                      ESTADO TÉCNICO // B2G-GOV-RD
                    </span>
                  </div>
                  <span className="font-code-numeric text-code-numeric text-cyan-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span> OPERATIVO // RPE HABILITADO
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-body-sm text-slate-300">Estatus Legal y Regulatorio</span>
                      <span className="font-label-caps text-label-caps text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/20">
                        DGCP HABILITADO
                      </span>
                    </div>
                    <div className="font-display-hero-mobile text-display-hero-mobile text-white tracking-tight">
                      RPE ACTIVO <span className="text-base text-cyan-400 font-normal">/ 100% Habilitado</span>
                    </div>
                    <p className="text-body-sm text-slate-400 mt-1">
                      Registro de Proveedores del Estado listo para licitaciones públicas (Ley No. 340-06)
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800">
                      <span className="text-body-sm text-slate-400 block mb-1">Capacidad de Fianza y Garantías</span>
                      <div className="font-headline-lg text-headline-lg text-cyan-300">100% Cobertura</div>
                      <span className="text-label-caps font-label-caps text-slate-400">PÓLIZAS LISTAS PARA EMISIÓN</span>
                      <p className="text-body-sm text-slate-400 mt-1 text-[12px]">
                        Seriedad de Oferta y Fiel Cumplimiento
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800">
                      <span className="text-body-sm text-slate-400 block mb-1">Arquitectura y Cumplimiento</span>
                      <div className="font-headline-lg text-headline-lg text-white">NORTIC A2-A5</div>
                      <span className="text-label-caps font-label-caps text-slate-400">ESTÁNDARES OGTIC</span>
                      <p className="text-body-sm text-slate-400 mt-1 text-[12px]">
                        Integrados de fábrica para desarrollo y datos
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="material-symbols-outlined text-cyan-400 text-[18px]">verified_user</span>
                      <span className="font-label-caps text-label-caps text-cyan-200">
                        GARANTÍA DE CUMPLIMIENTO INMEDIATO
                      </span>
                    </div>
                    <span className="font-code-numeric text-code-numeric text-cyan-400 font-bold">
                      PLIEGOS LEY 340-06
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. CAPACIDADES TECNOLÓGICAS (FONDO CLARO) ==================== */}
      <section className="py-20 lg:py-28 bg-[#f7f9fb] border-b border-slate-200" id="capacidades">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps text-cyan-700 uppercase tracking-wider block mb-2">
              CATÁLOGO DE INGENIERÍA
            </span>
            <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight mb-4">
              Capacidades Tecnológicas Especializadas
            </h2>
            <p className="text-body-lg font-body-lg text-slate-600">
              Soluciones robustas diseñadas con rigor técnico para satisfacer los pliegos de condiciones específicas más
              exigentes de compras públicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tarjeta 1: Software a Medida */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-600/40 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-6 text-cyan-700">
                  <span className="material-symbols-outlined text-[28px]">terminal</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3">
                  Desarrollo de Software a Medida
                </h3>
                <p className="text-body-sm font-body-sm text-slate-600 mb-4 leading-relaxed">
                  Portales y aplicaciones web de alta concurrencia, Apps móviles ciudadanas seguras para iOS y Android,
                  sistemas de gestión y arquitecturas de microservicios resilientes.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">React</span>
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">Node.js</span>
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">PostgreSQL</span>
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">Docker</span>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: IA y Datos Soberanos */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-600/40 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-6 text-cyan-700">
                  <span className="material-symbols-outlined text-[28px]">neurology</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3">
                  Inteligencia Artificial y Datos Soberanos
                </h3>
                <p className="text-body-sm font-body-sm text-slate-600 mb-4 leading-relaxed">
                  Modelos de Machine Learning institucionales, LLMs aislados on-premise, analítica de datos públicos masivos
                  conforme a la Ley 172-13 sobre Protección de Datos Personales.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">LLM Local</span>
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">MLOps</span>
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">Ley 172-13</span>
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Automatización de Procesos (RPA) */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-600/40 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-6 text-cyan-700">
                  <span className="material-symbols-outlined text-[28px]">flowsheet</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3">
                  Automatización de Procesos (RPA)
                </h3>
                <p className="text-body-sm font-body-sm text-slate-600 mb-4 leading-relaxed">
                  Digitalización de trámites y expedientes administrativos, flujos de firma digital institucional (Firma
                  Gob / INDOTEL), interoperabilidad gubernamental y cero burocracia.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">NORTIC A4</span>
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">Firma Gob</span>
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">BPMN 2.0</span>
                </div>
              </div>
            </div>

            {/* Tarjeta 4: Infraestructura Llave en Mano */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-600/40 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-6 text-cyan-700">
                  <span className="material-symbols-outlined text-[28px]">dns</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3">
                  Suministro e Infraestructura IT
                </h3>
                <p className="text-body-sm font-body-sm text-slate-600 mb-4 leading-relaxed">
                  Equipamiento informático corporativo homologado, servidores para centros de datos de alta densidad,
                  licenciamiento institucional para ministerios y switches de telecomunicaciones.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">CPD Tier-IV</span>
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">Switches L3</span>
                  <span className="text-label-caps font-label-caps bg-slate-100 px-2 py-0.5 rounded text-slate-700">OEM Oficial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. INFRAESTRUCTURA CRÍTICA SOBERANA & CPD TIER-IV (FONDO OSCURO) ==================== */}
      <section
        className="py-20 lg:py-28 bg-[#071324] text-white border-b border-cyan-500/20"
        id="infraestructura-cpd"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-label-caps text-label-caps text-cyan-400 uppercase tracking-wider block">
                INFRAESTRUCTURA CRÍTICA GUBERNAMENTAL
              </span>
              <h2 className="font-headline-xl text-headline-xl text-white tracking-tight">
                Centros de Datos Homologados (Tier IV) y Soberanía Tecnológica
              </h2>
              <p className="text-body-md font-body-md text-slate-300 leading-relaxed">
                Garantizamos la custodia y procesamiento de información sensible gubernamental en instalaciones físicas de
                alta seguridad, con arquitectura tolerante a fallos, enlace directo con la Red Multiservicios del Estado y
                directrices de ciberseguridad del CNCS.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <span className="material-symbols-outlined">bolt</span>
                    <span className="font-headline-sm text-headline-sm text-white">Redundancia N+1 / 2N</span>
                  </div>
                  <p className="text-body-sm text-slate-400">
                    Doble acometida eléctrica independiente, sistemas UPS modulares y grupos de generación eléctrica de
                    respaldo continuo.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <span className="material-symbols-outlined">hub</span>
                    <span className="font-headline-sm text-headline-sm text-white">Conectividad Estatal Segura</span>
                  </div>
                  <p className="text-body-sm text-slate-400">
                    Interconexión dedicada por fibra óptica redundante y túneles cifrados IPsec hacia nodos
                    institucionales gubernamentales.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <span className="material-symbols-outlined">security</span>
                    <span className="font-headline-sm text-headline-sm text-white">Soberanía de Datos Ley 172-13</span>
                  </div>
                  <p className="text-body-sm text-slate-400">
                    Custodia en territorio soberano, aislamiento criptográfico mediante módulos HSM y estricta
                    confidencialidad de la información pública.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <span className="material-symbols-outlined">thermostat</span>
                    <span className="font-headline-sm text-headline-sm text-white">Eficiencia PUE &lt; 1.2</span>
                  </div>
                  <p className="text-body-sm text-slate-400">
                    Climatización de pasillo confinado, eficiencia energética y respaldo 100% verificado contra contingencias
                    climáticas.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigateScreen('equipamiento')}
                  className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 text-body-sm"
                >
                  <span>Consultar especificaciones para pliego de infraestructura técnica</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl group">
                <img
                  alt="Centro de Datos estatal homologado con servidores y tecnología de punta"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XDu_Qc4RNV-tpEBnd_R0lXhUZZIb46ShctJLkomWsOWh3mnNA-qRahe4UIT_De4cO6NUdUDU8jummE5jtPJzhq4Xo46HW5ZIuKHQHRWQd86PDIwo3tnvBtiCYkgn3_5HVN2G3eaHLjFoi4PLDosNf-gNbcPuVRs0c2YRn0nQhK57z-qpMKtZCmB6ob7VENNs6PoEmnYqzDQluPlGqyC7zbd8CE0VDoaOkp_RvHen9NwwvUAtuthV8Bmbk"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <p className="font-label-caps text-label-caps text-cyan-400 uppercase">
                      DATA CENTER PRINCIPAL DE MISIÓN CRÍTICA
                    </p>
                    <p className="text-body-sm text-slate-200">
                      Sala de Servidores • Control Biométrico y Alta Disponibilidad
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-label-caps font-label-caps rounded">
                    TIER IV READY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. CAPACIDAD TÉCNICA Y GARANTÍAS DE EJECUCIÓN (FONDO CLARO) ==================== */}
      <section className="py-20 lg:py-28 bg-[#f2f4f6] border-b border-slate-200" id="casos-exito">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps text-cyan-700 uppercase tracking-wider block mb-2">
              COMPRAS PÚBLICAS • LEY NO. 340-06 & DGCP
            </span>
            <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight mb-4">
              Capacidad Técnica Instalada y Garantías de Ejecución
            </h2>
            <p className="text-body-lg font-body-lg text-slate-600">
              Infraestructura de ingeniería, solvencia asegurada y metodologías de entrega listas para procesos de
              contratación en República Dominicana y LATAM.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group flex-1 bg-slate-900 flex flex-col justify-end">
                <img
                  alt="Modern technology enterprise engineering and QA laboratory"
                  className="w-full h-full object-cover min-h-[380px] group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgBthkTk2DxNylnnETBKUCjzIknNHeaCfYimrD5tfjAPfjNEBb_F7bAxEvNEmg8vjY0Pm-_OdMGqBa29pAa0TJci6EWmWo5cUFODPcu8MC4I6UWuVs-6QVZvnpJE6X32GF0kNYmgk6rLGjYUsNNs0hqohx8xlDp88zm0mCox0GALns6igjKPyX8zjqnRQOvxOEttVLyjlnsjfa0TVQJNIw0SNbs_RVPjaP5y9D8I2ETiS2x7_bSgYzaw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-cyan-400 text-[18px]">biotech</span>
                    <span className="font-label-caps text-label-caps text-cyan-300 uppercase tracking-wider">
                      CENTRO DE INGENIERÍA Y QA
                    </span>
                  </div>
                  <p className="text-body-sm text-slate-200 font-medium">
                    Laboratorio de Auditoría de Código, QA Automatizado y Pruebas de Estrés Pre-Despliegue
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cyan-600/40 transition-all flex flex-col justify-between">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-4 text-cyan-700">
                    <span className="material-symbols-outlined text-[26px]">verified_user</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-2">
                    Pólizas de Seriedad de Oferta y Fiel Cumplimiento
                  </h3>
                  <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                    Respaldadas al 100% por entidades aseguradoras reguladas, cumpliendo estrictamente con el régimen de
                    garantías de la Ley No. 340-06 y la DGCP.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-label-caps font-label-caps text-emerald-700 font-semibold">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span> 100% Cobertura Asegurada
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cyan-600/40 transition-all flex flex-col justify-between">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-4 text-cyan-700">
                    <span className="material-symbols-outlined text-[26px]">groups</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-2">
                    Equipo Técnico Senior Multidisciplinario
                  </h3>
                  <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                    Especialistas en ciberseguridad, arquitectura Cloud Sovereign, bases de datos distribuidas y desarrollo
                    bajo estándares NORTIC A2/A3/A4/A5.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-label-caps font-label-caps text-cyan-800 font-semibold">
                  <span className="material-symbols-outlined text-[16px]">school</span> Certificaciones OGTIC y CNCS
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cyan-600/40 transition-all flex flex-col justify-between">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-4 text-cyan-700">
                    <span className="material-symbols-outlined text-[26px]">code</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-2">
                    Entrega de Código Fuente y Cero Vendor Lock-in
                  </h3>
                  <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                    Propiedad intelectual transferida al Estado dominicano, documentación técnica de arquitectura y manuales
                    de transferencia de conocimiento.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-label-caps font-label-caps text-emerald-700 font-semibold">
                  <span className="material-symbols-outlined text-[16px]">lock_open</span> Soberanía Tecnológica Total
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-cyan-600/40 transition-all flex flex-col justify-between">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-4 text-cyan-700">
                    <span className="material-symbols-outlined text-[26px]">hub</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-2">
                    Alianzas Tecnológicas de Infraestructura
                  </h3>
                  <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                    Acuerdos de provisión directa con fabricantes líderes de hardware enterprise, licencias corporativas y
                    centros de datos Tier IV homologados.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-label-caps font-label-caps text-cyan-800 font-semibold">
                  <span className="material-symbols-outlined text-[16px]">domain</span> Canal de Distribución Oficial
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. SOC B2G Y CIBERSEGURIDAD ACTIVA (FONDO OSCURO) ==================== */}
      <section
        className="py-20 lg:py-28 bg-[#0A192F] text-white border-b border-cyan-500/20"
        id="soc-ciberseguridad"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl group">
                <img
                  alt="Centro de Operaciones de Ciberseguridad SOC / Sala de Monitoreo 24/7"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Wogb1Ghfvubl0O_u24BjaAY40oWENPlfacWTXlOGm0CsmdjOPmWZJMiA_V-RmBwPmhm0EzoOXENj4fItFxrX0BgMepz9zuBa8QWwBXeMCZvIV_DeyMgJQOHXs829FJNnxKkptRXTeE4_s6-v2cSWWDcXPX-kUwnkpZSDXu9g8VE6tbXINka7d6gBYFoF_5kYJY_BT8z-tEm0CC0V1aOWESJN8WTmgpIVWuoGOfWSvfcMOWssTdW98z-lI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <p className="font-label-caps text-label-caps text-cyan-400 uppercase">
                      MONITOREO CONTINUO & SALA DE INCIDENTES
                    </p>
                    <p className="text-body-sm text-slate-200">
                      Equipo CSIRT propio • SIEM/SOAR y análisis de amenazas
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-label-caps font-label-caps rounded">
                    24/7/365 ACTIVO
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="font-label-caps text-label-caps text-cyan-400 uppercase tracking-wider block">
                SEGURIDAD INSTITUCIONAL INTEGRAL
              </span>
              <h2 className="font-headline-xl text-headline-xl text-white tracking-tight">
                Centro de Operaciones de Ciberseguridad (SOC B2G) y Respuesta ante Incidentes
              </h2>
              <p className="text-body-md font-body-md text-slate-300 leading-relaxed">
                Protección proactiva para infraestructuras públicas, detección temprana de ciberamenazas y coordinación con
                el CNCS (Centro Nacional de Ciberseguridad de República Dominicana / CSIRT-RD) para la salvaguarda de
                infraestructuras críticas del Estado.
              </p>

              <div className="space-y-3.5">
                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-[24px] mt-0.5">verified_user</span>
                  <div>
                    <h4 className="text-body-md font-semibold text-white">Cumplimiento Estándar NORTIC A5 & ISO 27001</h4>
                    <p className="text-body-sm text-slate-400">
                      Implementación de controles de seguridad de la información exigidos para portales, bases de datos y
                      servicios en línea del Estado Dominicano.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-[24px] mt-0.5">crisis_alert</span>
                  <div>
                    <h4 className="text-body-md font-semibold text-white">Equipo de Respuesta CERT Propio (&lt; 15 min SLA)</h4>
                    <p className="text-body-sm text-slate-400">
                      Contención inmediata de ciberataques de tipo Ransomware, ataques DDoS masivos y prevención de fuga de
                      datos gubernamentales.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-400 text-[24px] mt-0.5">lan</span>
                  <div>
                    <h4 className="text-body-md font-semibold text-white">Coordinación con Protocolos CNCS / CSIRT-RD</h4>
                    <p className="text-body-sm text-slate-400">
                      Integración con los lineamientos de ciberdefensa de la Estrategia Nacional de Ciberseguridad para
                      notificación y resolución de incidentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. CICLO DE HOMOLOGACIÓN E INTEGRACIÓN (FONDO CLARO) ==================== */}
      <section className="py-20 lg:py-28 bg-[#f7f9fb] border-b border-slate-200" id="ciclo-integracion">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps text-cyan-700 uppercase tracking-wider block mb-2">
              METODOLOGÍA CONTRACTUAL B2G - LEY 340-06
            </span>
            <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight mb-4">
              Ciclo de Homologación e Integración
            </h2>
            <p className="text-body-lg font-body-lg text-slate-600">
              Flujo estructurado en cuatro fases diseñado para dar respuesta rigurosa y sin demoras a los Comités de Compras
              y Direcciones de Tecnologías (TIC).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fase 1 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm relative">
              <span className="font-code-numeric text-cyan-600 font-bold text-[32px] block mb-2">01</span>
              <span className="font-label-caps text-label-caps text-slate-500 uppercase block mb-1">
                FASE PREVIA Y PLIEGOS
              </span>
              <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3">
                Análisis de Pliego de Condiciones
              </h3>
              <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                Estudio pormenorizado de términos de referencia técnicos y legales de la DGCP. Mapeo de requerimientos,
                garantías de fiel cumplimiento y solvencia económica.
              </p>
            </div>

            {/* Fase 2 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm relative">
              <span className="font-code-numeric text-cyan-600 font-bold text-[32px] block mb-2">02</span>
              <span className="font-label-caps text-label-caps text-slate-500 uppercase block mb-1">
                ARQUITECTURA PREVENTIVA
              </span>
              <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3">
                Diseño Seguro y Normas NORTIC
              </h3>
              <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                Definición de modelos criptográficos, aislamiento en redes gubernamentales, impacto en protección de datos
                (Ley 172-13) y validación NORTIC A2/A3/A5.
              </p>
            </div>

            {/* Fase 3 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm relative">
              <span className="font-code-numeric text-cyan-600 font-bold text-[32px] block mb-2">03</span>
              <span className="font-label-caps text-label-caps text-slate-500 uppercase block mb-1">
                DESPLIEGUE AUDITADO
              </span>
              <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3">
                DevSecOps & Pruebas de Carga
              </h3>
              <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                Integración continua en ambientes aislados, escaneo SAST/DAST, pruebas de estrés de alta concurrencia y plan
                de contingencia y continuidad operativa (DRP).
              </p>
            </div>

            {/* Fase 4 */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm relative">
              <span className="font-code-numeric text-cyan-600 font-bold text-[32px] block mb-2">04</span>
              <span className="font-label-caps text-label-caps text-slate-500 uppercase block mb-1">
                OPERACIÓN CONTINUA
              </span>
              <h3 className="font-headline-sm text-headline-sm text-slate-900 mb-3">
                Mantenimiento y Soporte SLA
              </h3>
              <p className="text-body-sm font-body-sm text-slate-600 leading-relaxed">
                Mantenimiento preventivo, correctivo y evolutivo con compromisos contractuales de disponibilidad. Informes
                técnicos mensuales y pólizas de garantía respaldadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. TABLA DE SOLVENCIA TÉCNICA ACREDITADA VS ESTÁNDAR ==================== */}
      <section className="py-20 lg:py-28 bg-[#f2f4f6] border-b border-slate-200" id="solvencia-rolece">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps text-cyan-700 uppercase tracking-wider block mb-2">
              ANÁLISIS COMPARATIVO DE CONFIABILIDAD B2G
            </span>
            <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight mb-4">
              Solvencia Técnica Acreditada vs Estándar
            </h2>
            <p className="text-body-lg font-body-lg text-slate-600">
              Evaluación objetiva de parámetros de idoneidad y solvencia técnica requeridos en las contrataciones de la
              administración pública.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-4 lg:p-5 font-headline-sm text-headline-sm">Criterio de Evaluación Técnica</th>
                  <th className="p-4 lg:p-5 font-headline-sm text-headline-sm text-cyan-400 bg-slate-950/80 border-x border-cyan-500/20">
                    DomiByte (GovTech B2G)
                  </th>
                  <th className="p-4 lg:p-5 font-headline-sm text-headline-sm text-slate-300">
                    Estándar del Mercado Local
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-body-sm">
                {TECHNICAL_COMPARISON_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 lg:p-5 font-medium text-slate-900">
                      {row.criterion}
                      <span className="block text-slate-500 text-[12px]">{row.subtext}</span>
                    </td>
                    <td className="p-4 lg:p-5 bg-cyan-50/50 border-x border-cyan-500/20 font-semibold text-slate-900">
                      <span className="inline-flex items-center text-emerald-700 gap-1.5">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        {row.domibyte}
                      </span>
                    </td>
                    <td className="p-4 lg:p-5 text-slate-600">{row.market}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== 8. SECTORES DE ACTUACIÓN GUBERNAMENTAL (FONDO CLARO) ==================== */}
      <section className="py-20 lg:py-28 bg-[#f7f9fb] border-b border-slate-200" id="sectores">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-caps text-label-caps text-cyan-700 uppercase tracking-wider block mb-2">
                VERTICALES DE IMPACTO PÚBLICO
              </span>
              <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight">
                Sectores de Actuación Gubernamental
              </h2>
            </div>
            <p className="text-body-md font-body-md text-slate-600 max-w-md">
              Despliegues contrastados con capacidad comprobada para gestionar servicios de atención masiva a la
              ciudadanía e instituciones públicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sector 1 */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col justify-between hover:border-cyan-600/40 transition-all shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-caps text-label-caps text-cyan-800 bg-cyan-950/10 px-2.5 py-1 rounded">
                    ÁREA 01
                  </span>
                  <span className="font-code-numeric text-code-numeric text-slate-500">+2.5M Trámites/año</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-slate-900 mb-2">
                  Gobierno Digital y Ventanillas Únicas
                </h3>
                <p className="text-body-md font-body-md text-slate-600 mb-6 leading-relaxed">
                  Implantación de ventanillas únicas de servicios públicos, portales institucionales bajo NORTIC A2,
                  pasarelas de pago de impuestos en línea y firma digital validada para servidores públicos.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-body-sm text-slate-900">
                <span className="font-medium text-slate-700">Integración: Firma Gob, Portal Transaccional DGCP</span>
                <span className="material-symbols-outlined text-cyan-700">arrow_forward</span>
              </div>
            </div>

            {/* Sector 2 */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col justify-between hover:border-cyan-600/40 transition-all shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-caps text-label-caps text-cyan-800 bg-cyan-950/10 px-2.5 py-1 rounded">
                    ÁREA 02
                  </span>
                  <span className="font-code-numeric text-code-numeric text-slate-500">HL7 / FHIR Nativo</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-slate-900 mb-2">
                  Salud Pública y Gestión Hospitalaria (MISPAS / SNS)
                </h3>
                <p className="text-body-md font-body-md text-slate-600 mb-6 leading-relaxed">
                  Sistemas integrados de Expediente Clínico Electrónico, telemedicina segura, trazabilidad de medicamentos
                  en almacenes centrales y cuadros de mando epidemiológicos.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-body-sm text-slate-900">
                <span className="font-medium text-slate-700">Privacidad y confidencialidad Ley 172-13</span>
                <span className="material-symbols-outlined text-cyan-700">arrow_forward</span>
              </div>
            </div>

            {/* Sector 3 */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col justify-between hover:border-cyan-600/40 transition-all shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-caps text-label-caps text-cyan-800 bg-cyan-950/10 px-2.5 py-1 rounded">
                    ÁREA 03
                  </span>
                  <span className="font-code-numeric text-code-numeric text-slate-500">+12,500 Sensores IoT</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-slate-900 mb-2">
                  Smart Cities y Gobiernos Locales / Ayuntamientos
                </h3>
                <p className="text-body-md font-body-md text-slate-600 mb-6 leading-relaxed">
                  Plataformas inteligentes de telegestión de luminarias LED, monitoreo de cuencas y drenaje, gestión
                  computarizada de residuos sólidos y portales de datos abiertos municipales.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-body-sm text-slate-900">
                <span className="font-medium text-slate-700">Conectividad LoRaWAN e Interoperabilidad NORTIC A3</span>
                <span className="material-symbols-outlined text-cyan-700">arrow_forward</span>
              </div>
            </div>

            {/* Sector 4 */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col justify-between hover:border-cyan-600/40 transition-all shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-caps text-label-caps text-cyan-800 bg-cyan-950/10 px-2.5 py-1 rounded">
                    ÁREA 04
                  </span>
                  <span className="font-code-numeric text-code-numeric text-slate-500">420k Estudiantes y Docentes</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-slate-900 mb-2">
                  Educación Superior y Sector Académico Público
                </h3>
                <p className="text-body-md font-body-md text-slate-600 mb-6 leading-relaxed">
                  Plataformas de educación virtual masiva con alta tolerancia a fallos, digitalización de títulos
                  universitarios con código QR de verificación y analítica de retención estudiantil.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-body-sm text-slate-900">
                <span className="font-medium text-slate-700">Autenticación centralizada y estándares NORTIC</span>
                <span className="material-symbols-outlined text-cyan-700">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 9. PARTNERS, FABRICANTES Y HOMOLOGACIONES ==================== */}
      <section className="py-16 bg-[#eceef0] border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <p className="text-center font-label-caps text-label-caps text-slate-600 uppercase tracking-widest mb-10">
            ALIANZAS ESTRUCTURALES Y NODOS DE CONFIANZA TÉCNICA HOMOLOGADA
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center">
            <div className="p-4 rounded-lg bg-white/80 border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-cyan-600 transition-colors">
              <span className="material-symbols-outlined text-[32px] block mb-1 text-cyan-700">cloud_done</span>
              <span className="font-label-caps text-label-caps uppercase block">Cloud Gubernamental</span>
            </div>
            <div className="p-4 rounded-lg bg-white/80 border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-cyan-600 transition-colors">
              <span className="material-symbols-outlined text-[32px] block mb-1 text-cyan-700">memory</span>
              <span className="font-label-caps text-label-caps uppercase block">Hardware Enterprise</span>
            </div>
            <div className="p-4 rounded-lg bg-white/80 border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-cyan-600 transition-colors">
              <span className="material-symbols-outlined text-[32px] block mb-1 text-cyan-700">storage</span>
              <span className="font-label-caps text-label-caps uppercase block">Tier-IV Data Center</span>
            </div>
            <div className="p-4 rounded-lg bg-white/80 border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-cyan-600 transition-colors">
              <span className="material-symbols-outlined text-[32px] block mb-1 text-cyan-700">shield_with_heart</span>
              <span className="font-label-caps text-label-caps uppercase block">Cybersecurity SOC/CNCS</span>
            </div>
            <div className="col-span-2 md:col-span-1 p-4 rounded-lg bg-white/80 border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-cyan-600 transition-colors">
              <span className="material-symbols-outlined text-[32px] block mb-1 text-cyan-700">hub</span>
              <span className="font-label-caps text-label-caps uppercase block">RPE / DGCP Homologado</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 10. FORMULARIO / ACCIÓN DIRECTA PARA COMITÉS DE COMPRAS ==================== */}
      <section className="py-20 lg:py-24 bg-[#081526] text-white border-t border-cyan-500/20" id="contacto">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-[#0B1528] border border-cyan-500/30 p-8 lg:p-16 shadow-2xl">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-label-caps font-label-caps">
                <span className="material-symbols-outlined text-[16px] text-cyan-400">verified_user</span>
                CANAL OFICIAL PARA COMITÉS DE COMPRAS Y LICITACIONES
              </div>

              <h2 className="font-headline-xl text-headline-xl text-white tracking-tight">
                ¿Estructurando un Pliego o Licitación Pública bajo Ley 340-06?
              </h2>

              <p className="text-body-lg font-body-lg text-slate-300 leading-relaxed">
                Acceda al canal exclusivo para Comités de Compras y Contrataciones Públicas, Direcciones de Tecnología
                (TIC) y Unidades Operativas de Contrataciones. Solicite el Dossier Técnico Oficial de Solvencia B2G, ficha de
                proveedor RPE y credenciales NORTIC en menos de 24 horas.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenDossierModal}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-headline-sm text-headline-sm active:scale-95 transition-all shadow-[0_0_20px_-2px_rgba(6,182,212,0.45)]"
                >
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                  <span>Solicitar Dossier Técnico RPE Oficial</span>
                </button>
                <button
                  onClick={() => onNavigateScreen('equipamiento')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-slate-800/90 border border-cyan-500/30 text-cyan-300 font-headline-sm text-headline-sm hover:bg-slate-700 transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">devices</span>
                  <span>Ir al Catálogo de Equipamiento</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800 text-slate-400 text-body-sm">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-cyan-400 text-[16px]">lock_clock</span> Enlace Cifrado / Confidencialidad
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-cyan-400 text-[16px]">bolt</span> Emisión Rápida en &lt; 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-cyan-400 text-[16px]">check_circle</span> Conforme a Ley 340-06 y OGTIC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
