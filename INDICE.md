# 📚 Índice de Documentación - EduPlataforma

## 🎯 Guía de Lectura

### Para Empezar Rápido
1. **[README.md](README.md)** - Comienza aquí
   - Información general del proyecto
   - Instalación y setup
   - Comandos básicos

### Para Entender la Arquitectura
2. **[ARQUITECTURA.md](ARQUITECTURA.md)** - Lectura esencial
   - Separación de responsabilidades
   - Estructura de carpetas explicada
   - Flujo de la aplicación
   - Cómo extender el proyecto

### Para Desarrollo Diario
3. **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** - Tu referencia rápida
   - Dónde está cada cosa
   - Tareas comunes
   - Solución de problemas
   - Comandos útiles

### Para Ver el Estado Actual
4. **[RESUMEN_PROYECTO.md](RESUMEN_PROYECTO.md)** - Vista general
   - Objetivos cumplidos
   - Páginas implementadas
   - Estadísticas del proyecto
   - Mejoras futuras

### Para Verificar Todo Funciona
5. **[VERIFICACION.md](VERIFICACION.md)** - Checklist completo
   - Requisitos cumplidos
   - Tests de funcionalidad
   - Calidad del código
   - Estado final

## 📁 Estructura de Archivos del Proyecto

```
ecuadoer/
├── 📄 README.md                    # Inicio - Lee esto primero
├── 📄 ARQUITECTURA.md              # Arquitectura detallada
├── 📄 GUIA_RAPIDA.md               # Guía de desarrollo
├── 📄 RESUMEN_PROYECTO.md          # Resumen ejecutivo
├── 📄 VERIFICACION.md              # Checklist de verificación
├── 📄 INDICE.md                    # Este archivo
├── 📄 package.json                 # Dependencias NPM
├── 📄 .gitignore                   # Archivos ignorados
│
├── 📄 server.js                    # Servidor Express
│
├── 📁 src/                         # Código fuente
│   └── 📁 views/
│       ├── 📁 components/          # Componentes HTML
│       │   ├── navbar.html
│       │   └── footer.html
│       └── 📁 pages/               # Páginas HTML
│           ├── inicio.html
│           ├── coach1.html
│           ├── coach2.html
│           └── coach3.html
│
├── 📁 public/                      # Archivos públicos
│   ├── 📁 css/
│   │   └── main.css                # Estilos principales
│   ├── 📁 js/
│   │   ├── 📁 config/
│   │   │   └── tailwind-config.js  # Config Tailwind
│   │   ├── 📁 data/
│   │   │   └── courses.js          # Datos de cursos
│   │   ├── 📁 pages/
│   │   │   ├── inicio.js           # Lógica inicio
│   │   │   └── coach.js            # Lógica coaches
│   │   └── 📁 utils/
│   │       └── component-loader.js # Cargador
│   └── 📁 components/              # Componentes servidos
│       ├── navbar.html
│       └── footer.html
│
└── 📁 scripts/                     # Scripts de utilidad
    ├── sync-components.sh          # Sincronizar
    └── create-page.sh              # Crear páginas
```

## 🗺️ Mapa de Navegación

### Quiero Aprender Sobre...

#### 🏗️ Arquitectura
- **Separación de responsabilidades** → [ARQUITECTURA.md](ARQUITECTURA.md#-separación-de-responsabilidades)
- **Estructura de carpetas** → [ARQUITECTURA.md](ARQUITECTURA.md#️-estructura-de-carpetas)
- **Flujo de la aplicación** → [ARQUITECTURA.md](ARQUITECTURA.md#-flujo-de-la-aplicación)

#### 💻 Desarrollo
- **Dónde está cada cosa** → [GUIA_RAPIDA.md](GUIA_RAPIDA.md#-dónde-está-cada-cosa)
- **Tareas comunes** → [GUIA_RAPIDA.md](GUIA_RAPIDA.md#️-tareas-comunes)
- **Solución de problemas** → [GUIA_RAPIDA.md](GUIA_RAPIDA.md#-solución-de-problemas)

#### 🎨 Diseño
- **Colores** → [README.md](README.md#-personalización)
- **Estilos CSS** → [GUIA_RAPIDA.md](GUIA_RAPIDA.md#-quiero-cambiar-estilos)
- **Componentes** → [ARQUITECTURA.md](ARQUITECTURA.md#srcviewscomponents)

#### 📄 Páginas
- **Páginas implementadas** → [RESUMEN_PROYECTO.md](RESUMEN_PROYECTO.md#-páginas-implementadas)
- **Agregar nueva página** → [GUIA_RAPIDA.md](GUIA_RAPIDA.md#agregar-un-nuevo-coach)
- **Modificar página** → [GUIA_RAPIDA.md](GUIA_RAPIDA.md#-quiero-modificar-una-página)

#### 🔧 Configuración
- **Instalación** → [README.md](README.md#-instalación)
- **Comandos** → [README.md](README.md#-uso)
- **Scripts** → [GUIA_RAPIDA.md](GUIA_RAPIDA.md#-comandos-útiles)

## 🎯 Casos de Uso

### "Soy nuevo en el proyecto"
1. Lee [README.md](README.md) para entender qué es el proyecto
2. Lee [ARQUITECTURA.md](ARQUITECTURA.md) para entender cómo funciona
3. Usa [GUIA_RAPIDA.md](GUIA_RAPIDA.md) como referencia diaria

### "Necesito agregar una funcionalidad"
1. Revisa [ARQUITECTURA.md](ARQUITECTURA.md) para entender dónde va
2. Usa [GUIA_RAPIDA.md](GUIA_RAPIDA.md) para ver cómo hacerlo
3. Verifica con [VERIFICACION.md](VERIFICACION.md) que todo funciona

### "Tengo un problema"
1. Busca en [GUIA_RAPIDA.md](GUIA_RAPIDA.md#-solución-de-problemas)
2. Revisa [ARQUITECTURA.md](ARQUITECTURA.md) para entender el flujo
3. Verifica [VERIFICACION.md](VERIFICACION.md) para confirmar el estado

### "Quiero ver qué se ha hecho"
1. Lee [RESUMEN_PROYECTO.md](RESUMEN_PROYECTO.md)
2. Revisa [VERIFICACION.md](VERIFICACION.md)

## 📖 Glosario de Términos

- **Component**: Elemento HTML reutilizable (navbar, footer)
- **Page**: Página completa de la aplicación
- **Route**: URL que mapea a una página
- **Script**: Archivo JavaScript con lógica
- **Style**: Archivo CSS con estilos
- **Public**: Archivos servidos directamente al cliente
- **Src**: Código fuente del proyecto

## 🔗 Enlaces Rápidos

### Documentación
- [README.md](README.md) - Información general
- [ARQUITECTURA.md](ARQUITECTURA.md) - Arquitectura
- [GUIA_RAPIDA.md](GUIA_RAPIDA.md) - Guía de desarrollo
- [RESUMEN_PROYECTO.md](RESUMEN_PROYECTO.md) - Resumen
- [VERIFICACION.md](VERIFICACION.md) - Verificación

### Código Principal
- [server.js](server.js) - Servidor Express
- [package.json](package.json) - Dependencias

### Componentes
- [navbar.html](src/views/components/navbar.html) - Navegación
- [footer.html](src/views/components/footer.html) - Pie de página

### Páginas
- [inicio.html](src/views/pages/inicio.html) - Página principal
- [coach1.html](src/views/pages/coach1.html) - Coach 1
- [coach2.html](src/views/pages/coach2.html) - Coach 2
- [coach3.html](src/views/pages/coach3.html) - Coach 3

### Estilos
- [main.css](public/css/main.css) - Estilos principales
- [tailwind-config.js](public/js/config/tailwind-config.js) - Config Tailwind

### Scripts
- [courses.js](public/js/data/courses.js) - Datos
- [inicio.js](public/js/pages/inicio.js) - Lógica inicio
- [coach.js](public/js/pages/coach.js) - Lógica coaches
- [component-loader.js](public/js/utils/component-loader.js) - Utilidades

### Utilidades
- [sync-components.sh](scripts/sync-components.sh) - Sincronizar
- [create-page.sh](scripts/create-page.sh) - Crear páginas

## 💡 Tips de Navegación

1. **Usa Ctrl+F** para buscar términos específicos en cada documento
2. **Los enlaces** te llevan directamente a las secciones relevantes
3. **Comienza por README.md** si es tu primera vez
4. **GUIA_RAPIDA.md** es tu mejor amigo para el día a día
5. **ARQUITECTURA.md** te ayuda a entender el "por qué"

## 🎓 Recursos Externos

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Node.js Docs](https://nodejs.org/docs/)

---

**¿Perdido? Empieza por [README.md](README.md)**
