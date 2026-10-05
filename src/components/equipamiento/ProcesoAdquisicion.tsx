import React from 'react';


export const ProcesoAdquisicion: React.FC = () => {

  return (
    <>
      {/* SECTION: PROCESO DE ADQUISICIÓN LEY NO. 340-06 */}{/* ==================== SECTION: PROCESO DE ADQUISICIÓN LEY NO. 340-06 ==================== */}
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

      
    </>
  );
};
