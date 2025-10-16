# 🎨 Plantilla Web Moderna

Plantilla web profesional con diseño en rojo carmesí y blanco, construida con Node.js, Express y Tailwind CSS.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con esquema de colores rojo carmesí
- **Totalmente Responsivo**: Funciona perfectamente en móvil, tablet y desktop
- **Componentes Reutilizables**: Navbar y footer modulares
- **Fácil de Personalizar**: Todos los textos marcados con comentarios `<!-- PERSONALIZAR -->`
- **Arquitectura Limpia**: Separación clara entre vistas, estilos y lógica
- **Carga Dinámica**: Sistema de componentes y datos dinámicos

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [tu-repositorio]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# O iniciar servidor de producción
npm start
```

El sitio estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
├── src/views/              # Vistas HTML
│   ├── components/         # Componentes reutilizables
│   │   ├── navbar.html
│   │   └── footer.html
│   └── pages/              # Páginas individuales
│       ├── inicio.html
│       ├── coach1.html
│       ├── coach2.html
│       └── coach3.html
├── public/                 # Archivos estáticos
│   ├── css/                # Estilos
│   ├── js/                 # Scripts
│   │   ├── config/         # Configuración
│   │   ├── data/           # Datos dinámicos
│   │   ├── pages/          # Lógica de páginas
│   │   └── utils/          # Utilidades
│   └── components/         # Componentes servidos
├── server.js               # Servidor Express
└── package.json
```

## 🎨 Personalización

### 1. Cambiar el Nombre del Sitio

Busca `[NOMBRE DEL SITIO]` en:
- `src/views/components/navbar.html`
- `src/views/components/footer.html`
- Todas las páginas en `src/views/pages/`

### 2. Modificar Rutas

Edita `server.js` para cambiar las rutas:
```javascript
app.get('/tu-ruta', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'tu-pagina.html'));
});
```

### 3. Actualizar Contenido Dinámico

Edita `public/js/data/courses.js` para cambiar los datos que se muestran dinámicamente.

### 4. Personalizar Estilos

Los estilos están en `public/css/main.css`. El proyecto usa Tailwind CSS vía CDN.

## 📄 Páginas Incluidas

- **Inicio** (`/`): Página principal con hero section, estadísticas y contenido dinámico
- **Página 1** (`/page1`): Plantilla de página con perfil, grid de características y CTA
- **Página 2** (`/page2`): Similar a página 1 con diferentes iconos
- **Página 3** (`/page3`): Similar a página 1 con diferentes iconos

## 🛠️ Tecnologías

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5, JavaScript (Vanilla)
- **Estilos**: Tailwind CSS (CDN)
- **Desarrollo**: Nodemon para auto-reload

## 📝 Guía de Personalización

Todos los elementos personalizables están marcados con comentarios:
- `<!-- PERSONALIZAR: ... -->` en archivos HTML
- `// PERSONALIZAR: ...` en archivos JavaScript

Simplemente busca estos comentarios y reemplaza el contenido entre corchetes `[...]` con tu información.

## 🎯 Casos de Uso

Esta plantilla es ideal para:
- Sitios web de coaching/consultoría
- Portafolios profesionales
- Páginas de servicios
- Landing pages
- Sitios corporativos

## 📚 Documentación Adicional

- `ARQUITECTURA.md`: Explicación detallada de la arquitectura
- `GUIA_RAPIDA.md`: Guía práctica para desarrollo
- `INICIO_RAPIDO.md`: Tutorial de inicio rápido

## 📄 Licencia

ISC

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.
