# DomiByte GovTech B2G 🇩🇴

DomiByte GovTech es la plataforma institucional B2G (Business-to-Government) diseñada para proveer infraestructura tecnológica, equipamiento y software de misión crítica a las instituciones del Estado Dominicano.

El proyecto está diseñado bajo estrictos estándares de accesibilidad, cumpliendo con las normativas **OGTIC / NORTIC** y los procesos de compras y contrataciones gubernamentales de la **Ley 340-06**.

## 🚀 Tecnologías Principales

- **Frontend:** React 18, TypeScript, Vite
- **Estilos:** Tailwind CSS (Arquitectura de clases de utilidad)
- **Estado Global:** Zustand
- **Enrutamiento:** React Router DOM
- **Iconografía:** Google Material Symbols Outlined

## 🏗️ Arquitectura del Proyecto

El proyecto está altamente componentizado para garantizar la escalabilidad y mantenibilidad.

```
src/
├── assets/            # Imágenes locales y recursos gráficos (Logo, etc.)
├── components/        # Componentes UI reutilizables
│   ├── equipamiento/  # Componentes modulares del catálogo de equipos y hardware
│   └── modals/        # Modales y Drawers (Borrador de TDR, Fichas, etc.)
├── data/              # Mock data y catálogos estáticos (HARDWARE_ITEMS)
├── store/             # Estado global (Zustand)
│   ├── useTenderStore.ts # Gestión del carrito/borrador de TDRs
│   └── useUIStore.ts     # Control de UI (Modales, Idioma)
├── types/             # Definiciones de interfaces TypeScript
├── App.tsx            # Raíz de enrutamiento principal
└── main.tsx           # Punto de entrada de la aplicación
```

## 🛠️ Instalación y Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Whilmis/domibyte-gobierno.git
   cd domibyte-gobierno
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *La aplicación estará disponible en `http://localhost:5173` (por defecto).*

4. **Construir para producción (Build):**
   ```bash
   npm run build
   ```
   *Los archivos estáticos optimizados se generarán en el directorio `dist/`.*

## 💼 Funcionalidades Clave B2G

- **Catálogo de Equipamiento:** Filtros por categoría (Servidores, Redes, Ofimática, Biometría) con descarga de fichas técnicas para Pliegos de Condiciones.
- **Borrador de TDRs:** Sistema similar a un "carrito de compras", pero adaptado a la terminología del Estado. Permite generar borradores de requerimientos.
- **Gestión de SLA:** Módulo informativo sobre Garantías Reales In-Situ y continuidad operativa.
- **Formulario Institucional:** Contacto directo para dependencias del Estado que requieren solicitudes de cotización formales.

---

**DomiByte GovTech** | *Garantizando la Continuidad Operativa del Estado.*
