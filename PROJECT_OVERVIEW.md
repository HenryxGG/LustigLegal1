# Lustig Legal - Project Overview & Context

Este archivo sirve como respaldo técnico para recuperar el contexto del proyecto en cualquier momento. Si se pierde el historial del chat, copia y pega el contenido de este archivo en un nuevo chat con Antigravity.

## ⚖️ Objetivo del Proyecto
Crear una landing page moderna, profesional y premium para el estudio jurídico **Lustig Legal**. La página debe transmitir confianza, autoridad y elegancia, enfocándose en la captura de clientes a través de WhatsApp y formularios de contacto.

## 🛠️ Stack Tecnológico
- **Framework**: [React](https://react.dev/) (v18+) con [Vite](https://vitejs.dev/) (v5+).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) para un diseño responsivo y moderno.
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) para una experiencia de usuario fluida y premium.
- **Iconografía**: [Lucide React](https://lucide.dev/) para iconos vectoriales limpios.
- **Enrutamiento**: [React Router Dom](https://reactrouter.com/) (v7+).
- **Utilidades**: `clsx` y `tailwind-merge` para manejo dinámico de clases CSS.

## 📁 Estructura del Proyecto
- `src/components/`: Componentes reutilizables.
  - `ui/`: Botones, inputs, animaciones básicas (ej. `WhatsAppButton.jsx`).
  - `sections/`: Secciones principales de la landing (Hero, Services, Contact, etc.).
- `src/pages/`: Vistas de la aplicación.
- `src/services/`: Lógica de API o servicios externos.
- `public/`: Activos estáticos como imágenes y logos.

## 🎯 Funcionalidades Implementadas
1. **Diseño Responsivo**: Adaptado perfectamente a móviles, tablets y escritorio.
2. **Botón de WhatsApp Flotante**: Con tooltip animado y enlace directo al número configurado.
3. **Hero Section**: Con animaciones de entrada y diseño de alto impacto.
4. **Sección de Servicios**: Grid de áreas de práctica legal.
5. **Formulario de Contacto**: Diseño moderno listo para validación.

## 🚀 Despliegue (Workflow)
- **Repositorio**: GitHub (`HenryxGG/LustigLegal1`).
- **Hosting**: [Vercel](https://lustig-legal1.vercel.app/).
- **Pacto de Deploy**:
  1. Hacemos cambios locales.
  2. Ejecutamos `git add .`, `git commit -m "..."` y `git push`.
  3. Vercel actualiza la página automáticamente en 1-2 minutos.

## 📝 Notas del Desarrollador
- El `.gitignore` está configurado para excluir `node_modules` y `dist` para evitar errores en el build de Vercel.
- Se utiliza un alias `@` para apuntar a `./src` en las importaciones.
- Los colores y tipografía siguen una estética "Law Firm Premium" (Slate, Gold/Amber, White).

---
*Ultima actualización: 25 de febrero de 2026*
