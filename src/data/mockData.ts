import { HardwareItem, PPTTemplate } from '../types';

export const HARDWARE_ITEMS: HardwareItem[] = [
  // 1. Enterprise Server
  {
    id: 'srv-9400',
    code: 'DB-SRV-9400',
    name: 'Servidor de Cómputo Central Gov-Series X100',
    category: 'servidores',
    categoryLabel: 'Servidores de Misión Crítica',
    description: 'Diseñado para virtualización de bases de datos tributarias, registros civiles y portales de servicios ciudadanos con tiempo de actividad 99.999%.',
    iconName: 'dns',
    warranty: 'Garantía 5 Años 4h On-Site',
    stockStatus: 'Stock Santo Domingo',
    homologadoDGCP: true,
    badges: ['RACK UNIT 2U HIGH DENSITY', 'DGCP HOMOLOGADO'],
    specs: [
      { label: 'Procesador', value: 'Dual Intel Xeon Scalable Platinum / AMD EPYC 9004' },
      { label: 'Memoria RAM', value: 'Hasta 1.5TB DDR5 ECC Registered' },
      { label: 'Redundancia', value: 'Fuentes Platinum Hot-Swap Dual 1600W' },
      { label: 'Seguridad Cripto', value: 'TPM 2.0 / FIPS 140-3 Encrypted' }
    ],
    pptClauses: {
      neutralSpec: 'Servidor para montaje en rack de 2U, arquitectura x86-64 de doble zócalo para procesadores de servidor de última generación con soporte mínimo de 64 núcleos físicos concurrentes.',
      warrantyClause: 'El oferente adjudicado deberá garantizar una cobertura no menor a 60 meses On-Site con tiempo de respuesta ante incidencias de severidad crítica menor a 4 horas en Santo Domingo y Santiago.',
      sparePartsClause: 'Se requiere certificación de inventario permanente de discos duros SAS, fuentes redundantes y módulos de memoria en almacén local en República Dominicana.'
    }
  },
  // 2. Core Switch 48F
  {
    id: 'net-48f',
    code: 'DB-NET-48F',
    name: 'Conmutador Troncal Enterprise Core Switch 48F',
    category: 'redes',
    categoryLabel: 'Conmutación Core & SD-WAN',
    description: 'Topología de red troncal para ministerios y palacios de justicia. Encriptación MACsec a velocidad de cable y microsegmentación segura.',
    iconName: 'hub',
    warranty: 'Garantía 5 Años Reemplazo',
    stockStatus: 'Configuración Incluida',
    homologadoDGCP: true,
    badges: ['48-PORT FIBER CORE SWITCH', 'DGCP HOMOLOGADO'],
    specs: [
      { label: 'Puertos Downlink', value: '48x SFP28 (10G/25G) Ópticos' },
      { label: 'Uplinks Troncales', value: '6x QSFP28 (100G) Ultra-baja latencia' },
      { label: 'Capacidad Switch', value: '3.2 Tbps Full Duplex / Line Rate' },
      { label: 'Normativa NORTIC', value: 'Apto NORTIC A2, A3 y NORTIC E1' }
    ],
    pptClauses: {
      neutralSpec: 'Conmutador troncal administrable capa 3 (L3) de 48 puertos de fibra óptica SFP28 con capacidad switching no bloqueante mínima de 3.2 Tbps y fuentes de alimentación redundantes.',
      warrantyClause: 'Garantía oficial de 5 años con sustitución de chasis completo y soporte de actualización de firmware sin costo recurrente de suscripción.',
      sparePartsClause: 'Disponibilidad de transceptores ópticos y módulos de fuente en bodega central Santo Domingo para despacho en menos de 6 horas hábiles.'
    }
  },
  // 3. Tactical Rugged Workstation
  {
    id: 'wks-mil',
    code: 'DB-WKS-MIL',
    name: 'Estación Táctica Móvil Defender G-WKS10',
    category: 'tactico',
    categoryLabel: 'Estaciones Tácticas & Despachos',
    description: 'Unidad rugerizada para centros de operaciones de emergencia (COE), seguridad fronteriza, aduanas e inspecciones gubernamentales en campo.',
    iconName: 'laptop_chromebook',
    warranty: 'Garantía 3 Años Total',
    stockStatus: 'Maletín Táctico Incluido',
    homologadoDGCP: true,
    badges: ['DEFENDER G-WKS10 RUGGED MIL-STD', 'DGCP HOMOLOGADO'],
    specs: [
      { label: 'Certificación', value: 'MIL-STD-810H & Certificado IP65' },
      { label: 'Pantalla Doble', value: '15.6" Full HD Sunlight Readable 1200 Nits' },
      { label: 'Almacenamiento', value: 'NVMe Militar Autodestructible / Cifrado SED' },
      { label: 'Autonomía', value: 'Baterías Duales Hot-Swap (Hasta 14h continuas)' }
    ],
    pptClauses: {
      neutralSpec: 'Computadora portátil militar rugerizada apta para condiciones extremas de humedad, polvo y vibración certificada bajo estándar MIL-STD-810H y grado de protección IP65.',
      warrantyClause: 'Garantía de 36 meses ante cualquier daño accidental en operaciones de campo, incluyendo rotura de pantalla y fallas en bisagras blindadas.',
      sparePartsClause: 'Provisión obligatoria de cargadores vehiculares de 12V/24V, bases de acoplamiento táctico y baterías auxiliares.'
    }
  },
  // 4. Biometric Terminal
  {
    id: 'bio-pass',
    code: 'DB-BIO-SECURE',
    name: 'Terminal de Control Biométrico Secure-Pass',
    category: 'biometria',
    categoryLabel: 'Identificación Biométrica',
    description: 'Identificación de personal institucional y control de acceso seguro a salas de servidores, despachos ministeriales y áreas de alta seguridad.',
    iconName: 'fingerprint',
    warranty: 'Garantía 3 Años In-Situ',
    stockStatus: 'Software SDK Abierto',
    homologadoDGCP: true,
    badges: ['TERMINAL BIOMÉTRICA GUBERNAMENTAL', 'DGCP HOMOLOGADO'],
    specs: [
      { label: 'Lectores', value: 'Sensor Óptico FIPS 201 + Reconocimiento Facial 3D' },
      { label: 'Conectividad', value: 'TCP/IP, PoE IEEE 802.3af, Wiegand, RS-485' },
      { label: 'Capacidad', value: '100,000 Usuarios / 1,000,000 Eventos Offline' },
      { label: 'Protección Física', value: 'Sensor Tamper Antidesarme / Alarma Centralizada' }
    ],
    pptClauses: {
      neutralSpec: 'Terminal de identificación biométrica multimodal con lector dactilar homologado FIPS 201 y cámara infrarroja con reconocimiento facial sin contacto bajo iluminación nula.',
      warrantyClause: 'Garantía técnica de 3 años que contemple servicio de calibración anual y soporte de integración con bases de datos de RRHH del Estado dominicano.',
      sparePartsClause: 'Módulos de sensor y relés de cerradura electromagnética disponibles en Santo Domingo.'
    }
  },
  // 5. Next-Gen Firewall
  {
    id: 'sec-fw700',
    code: 'DB-SEC-FW700',
    name: 'Cluster de Seguridad Perimetral CyberSec G7',
    category: 'seguridad',
    categoryLabel: 'Ciberseguridad Perimetral',
    description: 'Defensa activa para infraestructura de gobierno electrónico contra ataques DDoS de denegación de servicio, filtración y malware avanzado.',
    iconName: 'security',
    warranty: 'Suscripción UTM 3 Años',
    stockStatus: 'SLA Crítico 2h',
    homologadoDGCP: true,
    badges: ['CYBERSEC G7 FIREWALL CLUSTER', 'DGCP HOMOLOGADO'],
    specs: [
      { label: 'Throughput NGFW', value: '40 Gbps Inspección Profunda SSL/TLS 1.3' },
      { label: 'Túneles VPN', value: 'Hasta 15,000 conexiones IPsec simultáneas' },
      { label: 'Alta Disponibilidad', value: 'Active-Active Clustering con failover de 0ms' },
      { label: 'Soporte SOC', value: 'Integración nativa con CSIRT-RD y SOC DomiByte' }
    ],
    pptClauses: {
      neutralSpec: 'Dispositivo firewall de próxima generación (NGFW) en rack de alta disponibilidad redundante con filtrado web, prevención de intrusiones (IPS) y antivirus a nivel de gateway.',
      warrantyClause: 'Soporte 24/7/365 con actualización continua de firmas de amenazas mundiales y coordinación directa con alertas del Centro Nacional de Ciberseguridad (CNCS).',
      sparePartsClause: 'Reemplazo de hardware avanzado en sitio en caso de fallo físico en menos de 2 horas hábiles.'
    }
  },
  // 6. UPS 50kVA
  {
    id: 'pwr-50k',
    code: 'DB-PWR-50K',
    name: 'Sistema de Respaldo Energético GovPower 50kVA',
    category: 'ups',
    categoryLabel: 'Sistemas UPS & Respaldo',
    description: 'Protección eléctrica grado hospitalario y data center para garantizar continuidad operativa ante cortes imprevistos en la red nacional.',
    iconName: 'bolt',
    warranty: 'Garantía 5 Años Módulos',
    stockStatus: 'Mantenimiento Preventivo',
    homologadoDGCP: true,
    badges: ['SISTEMA MODULAR UPS ONLINE 50kVA', 'DGCP HOMOLOGADO'],
    specs: [
      { label: 'Topología', value: 'Doble Conversión True Online Grado Médico' },
      { label: 'Arquitectura', value: 'Módulos de 10kVA intercambiables en caliente (N+1)' },
      { label: 'Bancos de Batería', value: 'Litio LiFePO4 de larga vida (10 años vida útil)' },
      { label: 'Gestión SNMP', value: 'Monitoreo NORTIC e integración BMS remota' }
    ],
    pptClauses: {
      neutralSpec: 'Sistema de alimentación ininterrumpida (UPS) trifásico modular de doble conversión en línea con factor de potencia unitario (PF=1.0) y módulos de potencia escalables.',
      warrantyClause: 'Garantía de 5 años que incluya inspección termográfica semestral y pruebas de descarga de baterías supervisadas por ingeniero eléctrico colegiado (CODIA).',
      sparePartsClause: 'Módulos de potencia y tarjetas de control SNMP en stock permanente en Santo Domingo.'
    }
  },
  // 7. Laptops Corporativas
  {
    id: 'lap-gov',
    code: 'DB-LAP-GOV',
    name: 'Laptops Corporativas e Institucionales Gov-Pro',
    category: 'ofimatica',
    categoryLabel: 'Puestos de Trabajo & Ofimática',
    description: 'Equipos portátiles para funcionarios, mandos medios y técnicos de campo con chasis reforzado antigolpes, teclados resistentes y alta autonomía operativa.',
    iconName: 'laptop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfL53deHNFoJgdpY04yh6Y8xdIU9xea-wGaN5OtYH9lwJt3-PzFdHLEOuc6D2uz_WHAANgMcxyYnlKoNv6oN80p5WeOYHIiK5sh9BeGoVewEICvG0A2zjOyLHJaU4t5P0qHP2_6QBATimvFQAgWP0rj_y46H5-k27wnbNMLmLv13qn90b1LfX16wsDVqbRtgLk8HiiqC2GA525YjMaof7Y2D2b0KVsjU16w0FtjwTmU3U-hSNeZU347g',
    warranty: 'Garantía 3 Años In-Situ',
    stockStatus: 'Lote Disponible Inmediato',
    homologadoDGCP: true,
    badges: ['CHASIS REFORZADO 14" / 15.6"', 'BATERÍA LARGA DURACIÓN'],
    specs: [
      { label: 'Procesador', value: 'Intel Core i5/i7 o AMD Ryzen 5/7 PRO' },
      { label: 'Memoria & Disco', value: '16GB DDR5 / 512GB-1TB NVMe PCIe 4.0' },
      { label: 'Seguridad Estatal', value: 'Lector Huella / SmartCard / TPM 2.0' },
      { label: 'Sistema Operativo', value: 'Windows 11 Pro Gobierno 64-bit' }
    ],
    pptClauses: {
      neutralSpec: 'Computadora portátil empresarial con procesador de gama corporativa, mínimo 16GB RAM DDR5, almacenamiento de estado sólido NVMe y chip criptográfico TPM 2.0 activo.',
      warrantyClause: 'Garantía del fabricante con cobertura en territorio nacional dominicano por 36 meses con reemplazo de partes en sitio.',
      sparePartsClause: 'Baterías y adaptadores de corriente homologados disponibles para entrega inmediata.'
    }
  },
  // 8. PCs de Escritorio SFF
  {
    id: 'desk-sff',
    code: 'DB-DESK-SFF',
    name: 'PCs de Escritorio SFF & All-in-One Gov-Desk',
    category: 'ofimatica',
    categoryLabel: 'Puestos de Trabajo & Ofimática',
    description: 'Formato compacto Small Form Factor (SFF) o AIO para optimización de espacio ministerial, bajo consumo eléctrico y rendimiento multi-pantalla continuo.',
    iconName: 'desktop_windows',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxEVjiIj17lXbgs9Ba5GktHkX99EzAi5sTXUCFBz234qaEVYh4FkBPLgLSw6mlFumHq9WJLI6DZAv6jyMSiYmvTZHke8KPeFVl-kei1OHt4McTtt3rQ5ZuowCpAdmJO5TL9J4WO7PHyzKo-7GZ-e828yOH0a6HGSURN6gtkR9uF7KG-fiZNfJbVesYgjtHUiiiAWxjTrgi1GPsv6JgNhN7cZZcUBgvBZ_3z1FtCfOaUx8SS98TJvX8yA',
    warranty: 'Garantía 3 Años On-Site',
    stockStatus: 'Entrega Inmediata 32 Provincias',
    homologadoDGCP: true,
    badges: ['SFF & ALL-IN-ONE 23.8"', 'EFICIENCIA 80 PLUS GOLD'],
    specs: [
      { label: 'Factor Forma', value: 'SFF / Micro Torre / All-in-One 23.8"' },
      { label: 'Eficiencia Energética', value: 'Fuente 80 Plus Gold 260W/300W PFC' },
      { label: 'Seguridad Estatal', value: 'TPM 2.0 / Sensor Apertura de Chasis' },
      { label: 'Conectividad', value: 'Gigabit LAN + Wi-Fi 6E + BT 5.3' }
    ],
    pptClauses: {
      neutralSpec: 'Computadora de escritorio formato Small Form Factor (SFF) con fuente de poder con certificación de eficiencia energética 80 PLUS Gold o superior y teclado institucional con Ñ en español.',
      warrantyClause: 'Garantía 36 meses On-Site con cobertura técnica en todas las provincias de la República Dominicana.',
      sparePartsClause: 'Centro de servicio técnico oficial y piezas de recambio en Santo Domingo.'
    }
  },
  // 9. Monitores Ergonómicos
  {
    id: 'mon-ergo24',
    code: 'DB-MON-ERGO24',
    name: 'Monitores Ergonómicos de Productividad 24" & 27"',
    category: 'ofimatica',
    categoryLabel: 'Puestos de Trabajo & Ofimática',
    description: 'Pantallas antideslumbrantes con peana articulada para confort visual en jornadas operativas intensivas en dependencias públicas y salas de control.',
    iconName: 'monitor',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk-o-vX_floiZptRLAz-0AYEVWcC-_Miap7RLAk0jJiod_YYuOqw0SNdMBVvOFC1V3qIUMkGkYi8FgG--SUP7puZt5_PecLpCkq2FnIgFk9jguTieQjq5KXXeeedTTIciO5F8nWWH64z5KXFp92Kvol9tNZksq1pAvPrczZivkgt6jmCgKzvGc6FhCiwVn3pd5c6W6biuFIlsU17jmSD5ml9ZOZcauS1uyKECDZFBIVPdu6Jl2E6kRkQ',
    warranty: 'Garantía 3 Años Reemplazo',
    stockStatus: 'Bajo Consumo Energético A+',
    homologadoDGCP: true,
    badges: ['IPS FHD / QHD 99% sRGB', 'TÜV FLICKER-FREE'],
    specs: [
      { label: 'Panel & Color', value: 'IPS Antirreflejo 99% sRGB 24" y 27"' },
      { label: 'Ergonomía Completa', value: 'Ajuste Altura 130mm, Pivote 90°, Giro' },
      { label: 'Salud Ocupacional', value: 'TÜV Rheinland Flicker-Free & Low Blue' },
      { label: 'Conexión & Carga', value: 'HDMI, DisplayPort, USB Hub / USB-C 65W PD' }
    ],
    pptClauses: {
      neutralSpec: 'Monitor profesional con panel IPS antirreflejo, resolución mínima FHD 1080p, peana regulable en altura, giro y pivote vertical y puertos de entrada DisplayPort y HDMI.',
      warrantyClause: 'Garantía de reposición de 36 meses con política de cero píxeles muertos.',
      sparePartsClause: 'Cables HDMI, DisplayPort y fuentes de poder de repuesto local.'
    }
  },
  // 10. Periféricos Masivos
  {
    id: 'kit-perif',
    code: 'DB-KIT-PERIF',
    name: 'Periféricos Masivos, Docks & Conectividad',
    category: 'ofimatica',
    categoryLabel: 'Puestos de Trabajo & Ofimática',
    description: 'Kits ergonómicos con distribución oficial en español, estaciones dock USB-C multipuerto para doble monitor y accesorios duraderos para puestos de trabajo.',
    iconName: 'keyboard',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxPPlLQnV_hwUgXhIABRio51-RWFQNjwMxje7rPwZhBuXtgCDwTIog7GAwJdlcPbe8L4WHLoHOR65A2zt0Y7aYEV1DP5BuntnYGzHpsO4-WzMHec_XUgONuIjO-T4AE4yeiFZWQhisDjEETTZjDqHAeTxxUb5LhHBlI0YNxdFns-FnSd617TXjHA6z24vj_tWPoL9spPKx5PEcs5dZgbOmRuiQMcMzbjFu-WsDb18RkJLA160OovInVA',
    warranty: 'Garantía 2-3 Años Reposición',
    stockStatus: 'Empaque Ecológico Institucional',
    homologadoDGCP: true,
    badges: ['TECLADO "Ñ" FÍSICA + MOUSE', 'DOCK DUAL 4K 100W PD'],
    specs: [
      { label: 'Distribución Teclado', value: "Español Latinoamérica con 'Ñ' física" },
      { label: 'Dock Estación USB-C', value: 'Dual 4K @ 60Hz + Carga 100W PD + RJ45' },
      { label: 'Audio & Diademas', value: 'USB con Cancelación de Ruido Call Center' },
      { label: 'Seguridad Inalámbrica', value: '2.4GHz / Bluetooth con Cifrado AES-128' }
    ],
    pptClauses: {
      neutralSpec: 'Teclado y ratón óptico USB de uso rudo con serigrafía láser de la letra Ñ en español latinoamericano, resistente a derrames de líquidos.',
      warrantyClause: 'Garantía de reposición directa e inmediata por 24 meses.',
      sparePartsClause: 'Stock permanente de kits de teclado y ratón para dotación ministerial.'
    }
  }
];

export const PPT_TEMPLATES: PPTTemplate[] = [
  {
    id: 'ppt-01',
    code: 'PLIEGO TÉCNICO MODELO #01',
    title: 'Servidores & Almacenamiento SAN/NAS',
    subtitle: 'Infraestructura de Datos y Virtualización',
    description: 'Especificaciones técnicas neutrales para adquisición de servidores de base de datos con redundancia de hardware, virtualización y backup automatizado.',
    fileSize: '4.2 MB',
    format: 'DOCX / PDF',
    sections: [
      'Capítulo 1: Objeto de la Contratación y Descripción Neutral',
      'Capítulo 2: Requerimientos Técnicos Mínimos (CPU, RAM, RAID, TPM 2.0)',
      'Capítulo 3: Régimen de Garantía On-Site (60 meses) y SLA de 4 horas',
      'Capítulo 4: Pruebas de Recepción Conforme y Certificación DGCP'
    ]
  },
  {
    id: 'ppt-02',
    code: 'PLIEGO TÉCNICO MODELO #02',
    title: 'Redes Institucionales & Seguridad NGFW',
    subtitle: 'Conmutación L3 y Ciberdefensa Perimetral',
    description: 'Términos de referencia para cableado estructurado Cat 6A/7, conmutadores PoE+, enlaces de fibra óptica y firewalls perimetrales de alta velocidad.',
    fileSize: '3.8 MB',
    format: 'DOCX / PDF',
    sections: [
      'Capítulo 1: Topología de Red y Enlaces de Fibra Óptica',
      'Capítulo 2: Especificaciones de Conmutadores Core y Acceso PoE+',
      'Capítulo 3: Requisitos de Ciberseguridad NGFW y Enlace CNCS',
      'Capítulo 4: Documentación As-Built y Transferencia Tecnológica'
    ]
  },
  {
    id: 'ppt-03',
    code: 'PLIEGO TÉCNICO MODELO #03',
    title: 'Equipamiento de Puestos de Trabajo & UPS',
    subtitle: 'Ofimática Ministerial y Respaldo Eléctrico',
    description: 'Especificaciones para dotación de computadoras de escritorio, monitores ergonómicos, laptops corporativas y sistemas de energía ininterrumpida.',
    fileSize: '2.9 MB',
    format: 'DOCX / PDF',
    sections: [
      'Capítulo 1: Laptops y Computadoras SFF con Teclado en Español ("Ñ")',
      'Capítulo 2: Monitores Ergonómicos con Certificación TÜV Flicker-Free',
      'Capítulo 3: Sistemas UPS Modulares con Baterías LiFePO4',
      'Capítulo 4: Matriz de Evaluación Pasa / No Pasa para Comités de Compras'
    ]
  }
];

export const TECHNICAL_COMPARISON_DATA = [
  {
    criterion: 'Registro de Proveedores del Estado (RPE)',
    subtext: 'Dirección General de Contrataciones Públicas (DGCP)',
    domibyte: 'RPE Habilitado Activo • Rubros TIC y Equipamiento',
    market: 'Registro con documentación pendiente o limitada',
    status: 'optimal'
  },
  {
    criterion: 'Conformidad con Normas NORTIC (OGTIC)',
    subtext: 'Normas de Tecnología y Gobierno Digital',
    domibyte: 'NORTIC A2, A3, A4 y A5 Integradas de Fábrica',
    market: 'Ajuste empírico posterior sin auditoría previa',
    status: 'optimal'
  },
  {
    criterion: 'Integración con Firma Digital y Portal DGCP',
    subtext: 'Interoperabilidad y tramitación telemática',
    domibyte: 'Conectores Certificados Firma Gob e INDOTEL',
    market: 'Procesos manuales o pasarelas de terceros no validadas',
    status: 'optimal'
  },
  {
    criterion: 'Garantías Contractuales Ley 340-06',
    subtext: 'Garantía de seriedad de oferta y fiel cumplimiento',
    domibyte: '100% Pólizas de Fianza y Responsabilidad Asegurada',
    market: 'Limitaciones de cobertura y cláusulas excluyentes',
    status: 'optimal'
  },
  {
    criterion: 'Tiempo de Respuesta SOC ante Incidentes',
    subtext: 'Intervención ante eventos críticos P1 / CNCS',
    domibyte: '< 15 minutos (Equipo CSIRT 24/7 propio)',
    market: '4 a 12 horas en horario comercial ordinario',
    status: 'optimal'
  }
];
