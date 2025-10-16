# 📝 Guía de Personalización - Plantilla Web

Esta guía te ayudará a personalizar la plantilla para tu proyecto específico.

## 🎯 Pasos Rápidos de Personalización

### 1️⃣ Información Básica del Sitio

#### Cambiar el Nombre del Sitio

Busca y reemplaza `[NOMBRE DEL SITIO]` en los siguientes archivos:

- **Navbar**: `src/views/components/navbar.html` (línea 11)
- **Footer**: `src/views/components/footer.html` (línea 5)
- **Todas las páginas**: `src/views/pages/*.html` (en los títulos `<title>`)

**Ejemplo:**
```html
<!-- Antes -->
<span class="text-2xl font-bold">[NOMBRE DEL SITIO]</span>

<!-- Después -->
<span class="text-2xl font-bold">Mi Empresa</span>
```

### 2️⃣ Personalizar la Navegación

**Archivo**: `src/views/components/navbar.html`

Cambia los enlaces del menú (líneas 15-18 y 28-31):

```html
<!-- PERSONALIZAR: Enlaces de navegación -->
<div class="hidden md:flex space-x-6">
    <a href="/" class="hover:text-crimson-200 transition">Inicio</a>
    <a href="/servicios" class="hover:text-crimson-200 transition">Servicios</a>
    <a href="/nosotros" class="hover:text-crimson-200 transition">Nosotros</a>
    <a href="/contacto" class="hover:text-crimson-200 transition">Contacto</a>
</div>
```

**No olvides** actualizar también el menú móvil (líneas 27-32).

### 3️⃣ Configurar Rutas en el Servidor

**Archivo**: `server.js`

Agrega o modifica las rutas según tus enlaces de navegación:

```javascript
// Ejemplo: Agregar nueva ruta
app.get('/servicios', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'servicios.html'));
});
```

### 4️⃣ Personalizar la Página de Inicio

**Archivo**: `src/views/pages/inicio.html`

#### Hero Section (líneas 20-30)
```html
<h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
    Tu Título Principal Aquí
</h1>
<p class="text-xl md:text-2xl mb-8 text-crimson-100">
    Tu descripción o eslogan aquí
</p>
<button class="bg-white text-crimson-700 px-8 py-3 rounded-full font-semibold hover:bg-crimson-50 transition transform hover:scale-105 shadow-lg">
    Comenzar Ahora
</button>
```

#### Estadísticas (líneas 39-51)
Reemplaza los números y descripciones:

```html
<div class="text-4xl font-bold text-crimson-700 mb-2">500+</div>
<div class="text-gray-600">Clientes Satisfechos</div>
```

#### Título de Sección (línea 62)
```html
<h2 class="text-4xl font-bold text-center text-crimson-800 mb-12">
    Nuestros Servicios
</h2>
```

### 5️⃣ Actualizar Contenido Dinámico

**Archivo**: `public/js/data/courses.js`

Modifica los datos que se mostrarán en la página de inicio:

```javascript
const courses = [
    {
        id: 1,
        title: "Servicio 1",
        description: "Descripción de tu servicio",
        level: "Premium",
        duration: "Flexible",
        students: 150, // Número de clientes o usuarios
        icon: "M9 7h6m0 10v-3m-3 3h.01..." // Path SVG del ícono
    },
    // Agrega más items...
];
```

### 6️⃣ Personalizar Páginas Internas

**Archivos**: `src/views/pages/coach1.html`, `coach2.html`, `coach3.html`

Cada página tiene las siguientes secciones personalizables:

#### Hero Section (líneas 21-26)
```html
<h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
    Título de la Página
</h1>
<p class="text-xl md:text-2xl text-crimson-100">
    Subtítulo o descripción
</p>
```

#### Perfil/Información Principal (líneas 47-56)
```html
<h2 class="text-3xl font-bold text-crimson-800 mb-4">Nombre o Título</h2>
<p class="text-gray-700 text-lg mb-4">
    Descripción detallada de esta sección
</p>
<div class="flex flex-wrap gap-2 justify-center md:justify-start">
    <span class="bg-crimson-700 text-white px-4 py-2 rounded-full text-sm">Tag 1</span>
    <span class="bg-crimson-700 text-white px-4 py-2 rounded-full text-sm">Tag 2</span>
</div>
```

#### Grid de Características (líneas 65-86)
```html
<h3 class="text-3xl font-bold text-crimson-800 mb-6">Características</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white border-2 border-crimson-200 rounded-lg p-6 hover:shadow-xl transition">
        <h4 class="text-xl font-bold text-crimson-700 mb-3">Característica 1</h4>
        <p class="text-gray-600">Descripción de la característica</p>
    </div>
    <!-- Repite para más características -->
</div>
```

### 7️⃣ Personalizar el Footer

**Archivo**: `src/views/components/footer.html`

```html
<p class="mb-4">&copy; 2025 Tu Empresa. Todos los derechos reservados.</p>
<div class="flex justify-center space-x-6">
    <a href="/terminos" class="hover:text-crimson-300 transition">Términos</a>
    <a href="/privacidad" class="hover:text-crimson-300 transition">Privacidad</a>
    <a href="/contacto" class="hover:text-crimson-300 transition">Contacto</a>
</div>
```

### 8️⃣ Cambiar Colores (Opcional)

**Archivo**: `public/css/main.css`

Si quieres cambiar el esquema de colores carmesí, puedes:

1. Usar las utilidades de Tailwind directamente en el HTML
2. Modificar `public/js/config/tailwind-config.js` para personalizar los colores

**Ejemplo de cambio de color:**
```html
<!-- De crimson a blue -->
<nav class="bg-blue-700 text-white">
```

## 🔄 Sincronizar Componentes

Después de modificar componentes en `src/views/components/`, cópialos a `public/components/`:

```bash
cp src/views/components/navbar.html public/components/navbar.html
cp src/views/components/footer.html public/components/footer.html
```

O usa el script (si existe):
```bash
./scripts/sync-components.sh
```

## ✅ Checklist de Personalización

- [ ] Cambiar nombre del sitio en navbar y footer
- [ ] Actualizar enlaces de navegación
- [ ] Configurar rutas en `server.js`
- [ ] Personalizar hero section de inicio
- [ ] Actualizar estadísticas
- [ ] Modificar datos en `courses.js`
- [ ] Personalizar páginas internas
- [ ] Actualizar footer con tu información
- [ ] Cambiar títulos de todas las páginas
- [ ] Sincronizar componentes a `public/`
- [ ] Probar todas las rutas

## 🎨 Personalización Avanzada

### Agregar Nueva Página

1. Crea el archivo HTML en `src/views/pages/nueva-pagina.html`
2. Usa una de las páginas existentes como plantilla
3. Agrega la ruta en `server.js`:
   ```javascript
   app.get('/nueva-pagina', (req, res) => {
     res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'nueva-pagina.html'));
   });
   ```
4. Agrega el enlace en el navbar

### Cambiar Iconos SVG

Los iconos SVG están en formato de path. Puedes obtener nuevos iconos de:
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)
- [Lucide](https://lucide.dev/)

Copia el path del SVG y reemplázalo en el atributo `d` de la etiqueta `<path>`.

## 🚀 Después de Personalizar

1. **Reinicia el servidor** si está corriendo:
   ```bash
   npm run dev
   ```

2. **Prueba todas las páginas** en el navegador

3. **Verifica la responsividad** en diferentes tamaños de pantalla

4. **Revisa los enlaces** para asegurarte de que funcionan

## 💡 Consejos

- Usa búsqueda global (`Ctrl+Shift+F` o `Cmd+Shift+F`) para encontrar todos los `[PLACEHOLDERS]`
- Mantén la consistencia en nombres y estilos
- Prueba frecuentemente mientras personalizas
- Guarda copias de seguridad antes de cambios grandes

## 📞 Soporte

Si tienes problemas, revisa:
- `README.md` - Información general
- `ARQUITECTURA.md` - Estructura del proyecto
- `GUIA_RAPIDA.md` - Guía de desarrollo
