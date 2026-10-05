import React, { useState } from 'react';


export const FormularioContacto: React.FC = () => {
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
    <>
      {/* SECTION: B2G CONTACT & SOLICITUD DE COTIZACIÓN */}{/* ==================== SECTION: B2G CONTACT & SOLICITUD DE COTIZACIÓN ==================== */}
      <section className="py-20 bg-[#f7f9fb]" id="contacto-b2g">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Context (5 cols) */}
            <div className="lg:col-span-5">
              <span className="text-label-caps font-label-caps text-cyan-700 font-semibold">
                DIVISIÓN DE LICITACIONES Y CONTRATACIONES PÚBLICAS
              </span>
              <h2 className="text-headline-xl font-headline-xl text-slate-900 mt-2 mb-4">
                Solicitud de Cotización para Estudio de Mercado (Ley 340-06)
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
                Complete los campos requeridos para coordinar una reunión técnica o preparar su cotización para su Estudio de Mercado conforme a su
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

          </>
  );
};
