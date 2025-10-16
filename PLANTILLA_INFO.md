# 📋 Información de la Plantilla

## 🎨 Descripción General

Esta es una **plantilla web profesional** lista para usar, diseñada con un esquema de colores rojo carmesí y blanco. Está construida con tecnologías modernas y es completamente personalizable.

## ✨ Características Principales

### Diseño
- ✅ **Esquema de colores**: Rojo carmesí (#b91c1c) y blanco
- ✅ **Totalmente responsivo**: Mobile-first design
- ✅ **Animaciones suaves**: Transiciones y efectos hover
- ✅ **Componentes modulares**: Navbar y footer reutilizables
- ✅ **Iconos SVG**: Heroicons incluidos

### Tecnología
- ✅ **Backend**: Node.js + Express.js
- ✅ **Frontend**: HTML5 + JavaScript Vanilla
- ✅ **Estilos**: Tailwind CSS (vía CDN)
- ✅ **Desarrollo**: Nodemon para hot-reload

### Funcionalidades
- ✅ **Carga dinámica de componentes**: Sistema modular
- ✅ **Datos dinámicos**: Contenido cargado desde JavaScript
- ✅ **Menú móvil funcional**: Hamburger menu responsive
- ✅ **Smooth scroll**: Navegación suave
- ✅ **SEO-friendly**: Estructura semántica HTML5

## 📁 Estructura de Archivos

```
plantilla-web/
│
├── 📂 src/views/                    # VISTAS HTML
│   ├── 📂 components/               # Componentes reutilizables
│   │   ├── navbar.html              # Barra de navegación
│   │   └── footer.html              # Pie de página
│   └── 📂 pages/                    # Páginas completas
│       ├── inicio.html              # Página principal (/)
│       ├── coach1.html              # Página 1 (/page1)
│       ├── coach2.html              # Página 2 (/page2)
│       └── coach3.html              # Página 3 (/page3)
│
├── 📂 public/                       # ARCHIVOS ESTÁTICOS
│   ├── 📂 css/
│   │   └── main.css                 # Estilos personalizados
│   ├── 📂 js/
│   │   ├── 📂 config/
│   │   │   └── tailwind-config.js   # Configuración de Tailwind
│   │   ├── 📂 data/
│   │   │   └── courses.js           # Datos dinámicos
│   │   ├── 📂 pages/
│   │   │   ├── inicio.js            # Lógica página inicio
│   │   │   └── coach.js             # Lógica páginas internas
│   │   └── 📂 utils/
│   │       └── component-loader.js  # Cargador de componentes
│   └── 📂 components/               # Componentes servidos
│       ├── navbar.html
│       └── footer.html
│
├── 📂 scripts/                      # SCRIPTS DE UTILIDAD
│   ├── sync-components.sh           # Sincronizar componentes
│   └── create-page.sh               # Crear nuevas páginas
│
├── 📄 server.js                     # SERVIDOR EXPRESS
├── 📄 package.json                  # Dependencias del proyecto
│
└── 📚 DOCUMENTACIÓN
    ├── README.md                    # Información general
    ├── GUIA_PERSONALIZACION.md      # Guía de personalización
    ├── ARQUITECTURA.md              # Arquitectura del proyecto
    ├── GUIA_RAPIDA.md               # Guía rápida de desarrollo
    ├── INICIO_RAPIDO.md             # Tutorial de inicio
    └── PLANTILLA_INFO.md            # Este archivo
```

## 📄 Páginas Incluidas

### 1. Página de Inicio (`/`)
**Archivo**: `src/views/pages/inicio.html`

**Secciones**:
- Hero section con título y CTA
- 3 estadísticas destacadas
- Grid de 6 items dinámicos (cargados desde `courses.js`)

**Ideal para**: Landing page, página principal

### 2. Página 1 (`/page1`)
**Archivo**: `src/views/pages/coach1.html`

**Secciones**:
- Hero section
- Perfil/información principal con imagen circular
- Grid 2x2 de características
- Sección de llamado a la acción con 2 items

**Ideal para**: Perfil de servicio, página de producto, about

### 3. Página 2 (`/page2`)
**Archivo**: `src/views/pages/coach2.html`

**Estructura**: Idéntica a Página 1, con ícono diferente

### 4. Página 3 (`/page3`)
**Archivo**: `src/views/pages/coach3.html`

**Estructura**: Idéntica a Página 1, con ícono diferente

## 🎯 Elementos Personalizables

Todos los elementos que debes personalizar están marcados con comentarios:

### En HTML
```html
<!-- PERSONALIZAR: Descripción de qué cambiar -->
[TEXTO A REEMPLAZAR]
```

### En JavaScript
```javascript
// PERSONALIZAR: Descripción de qué cambiar
"[TEXTO A REEMPLAZAR]"
```

### Placeholders Comunes

- `[NOMBRE DEL SITIO]` - Nombre de tu empresa/proyecto
- `[TÍTULO PRINCIPAL]` - Títulos de secciones
- `[DESCRIPCIÓN]` - Descripciones y textos
- `[TEXTO DEL BOTÓN]` - Textos de botones CTA
- `[Etiqueta X]` - Tags o categorías

## 🎨 Paleta de Colores

### Colores Principales (Tailwind)
```css
crimson-50:  #fef2f2  /* Fondo muy claro */
crimson-100: #fee2e2  /* Fondo claro */
crimson-200: #fecaca  /* Bordes */
crimson-600: #dc2626  /* Gradientes */
crimson-700: #b91c1c  /* Principal */
crimson-800: #991b1b  /* Hover */
crimson-900: #7f1d1d  /* Footer */
```

### Colores Neutros
```css
white:    #ffffff
gray-600: #4b5563
gray-700: #374151
```

## 🔧 Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (con auto-reload)
npm run dev

# Iniciar servidor de producción
npm start

# Sincronizar componentes (si el script existe)
./scripts/sync-components.sh
```

## 📊 Casos de Uso Recomendados

Esta plantilla es perfecta para:

1. **Sitios de Coaching/Consultoría**
   - Perfiles de coaches
   - Servicios ofrecidos
   - Sesiones disponibles

2. **Portafolios Profesionales**
   - Presentación personal
   - Proyectos destacados
   - Habilidades y experiencia

3. **Páginas de Servicios**
   - Descripción de servicios
   - Características y beneficios
   - Llamados a la acción

4. **Landing Pages**
   - Promoción de productos
   - Captación de leads
   - Eventos o cursos

5. **Sitios Corporativos**
   - Información de empresa
   - Equipo y valores
   - Contacto

## 🚀 Inicio Rápido

1. **Clonar/Descargar** el proyecto
2. **Instalar** dependencias: `npm install`
3. **Iniciar** servidor: `npm run dev`
4. **Abrir** navegador en `http://localhost:3000`
5. **Personalizar** siguiendo `GUIA_PERSONALIZACION.md`

## 📝 Flujo de Personalización Recomendado

1. ✅ Cambiar nombre del sitio en navbar y footer
2. ✅ Actualizar enlaces de navegación
3. ✅ Modificar rutas en `server.js`
4. ✅ Personalizar página de inicio
5. ✅ Actualizar datos dinámicos en `courses.js`
6. ✅ Personalizar páginas internas
7. ✅ Ajustar footer
8. ✅ Sincronizar componentes
9. ✅ Probar todas las funcionalidades

## 🎓 Recursos de Aprendizaje

### Tailwind CSS
- [Documentación oficial](https://tailwindcss.com/docs)
- [Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### Express.js
- [Guía oficial](https://expressjs.com/es/guide/routing.html)

### Heroicons (Iconos)
- [Catálogo de iconos](https://heroicons.com/)

## 🔒 Seguridad y Mejores Prácticas

- ✅ Sin dependencias vulnerables conocidas
- ✅ Código limpio y comentado
- ✅ Separación de responsabilidades
- ✅ Estructura escalable
- ✅ SEO-friendly

## 📈 Próximos Pasos Sugeridos

Después de personalizar la plantilla, considera:

1. **Agregar formularios de contacto**
2. **Integrar analytics** (Google Analytics, etc.)
3. **Optimizar imágenes** si las agregas
4. **Configurar dominio personalizado**
5. **Implementar backend** para funcionalidades dinámicas
6. **Agregar base de datos** si es necesario
7. **Configurar SSL/HTTPS**
8. **Optimizar para SEO**

## 💡 Tips Importantes

- 🔍 Usa búsqueda global para encontrar todos los `[PLACEHOLDERS]`
- 💾 Haz commits frecuentes si usas Git
- 🧪 Prueba en diferentes navegadores
- 📱 Verifica responsividad en móvil
- ⚡ Mantén el código limpio y comentado

## 📞 Soporte y Documentación

- `README.md` - Información general y setup
- `GUIA_PERSONALIZACION.md` - Guía paso a paso
- `ARQUITECTURA.md` - Detalles técnicos
- `GUIA_RAPIDA.md` - Referencia rápida
- `INICIO_RAPIDO.md` - Tutorial para empezar

## 📄 Licencia

ISC - Libre para uso personal y comercial

---

**¡Disfruta personalizando tu plantilla!** 🎉
