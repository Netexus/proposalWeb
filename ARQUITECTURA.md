# Arquitectura del Proyecto

## 📐 Separación de Responsabilidades

Este proyecto sigue el principio de **separación de responsabilidades** (Separation of Concerns) para mantener el código organizado, mantenible y escalable.

## 🗂️ Estructura de Carpetas

### `/src/views/`
Contiene todas las vistas HTML de la aplicación.

#### `/src/views/components/`
**Responsabilidad**: Componentes HTML reutilizables

- `navbar.html` - Barra de navegación compartida por todas las páginas
- `footer.html` - Pie de página compartido por todas las páginas

**Ventajas**:
- Un solo lugar para modificar la navegación
- Consistencia en todas las páginas
- Fácil mantenimiento

#### `/src/views/pages/`
**Responsabilidad**: Páginas completas de la aplicación

- `inicio.html` - Página principal con cursos destacados
- `coach1.html` - Página del Coach 1 (Desarrollo Personal)
- `coach2.html` - Página del Coach 2 (Fitness y Bienestar)
- `coach3.html` - Página del Coach 3 (Carrera Profesional)

**Características**:
- Cada página es independiente
- Cargan componentes dinámicamente
- Tienen su propio contenido específico

### `/public/`
Contiene todos los archivos estáticos servidos directamente al cliente.

#### `/public/css/`
**Responsabilidad**: Estilos CSS

- `main.css` - Estilos principales y personalizados
  - Animaciones
  - Utilidades responsive
  - Estilos base del body
  - Efectos de transición

#### `/public/js/config/`
**Responsabilidad**: Configuraciones globales

- `tailwind-config.js` - Configuración de Tailwind CSS
  - Paleta de colores crimson personalizada
  - Extensiones del tema

#### `/public/js/data/`
**Responsabilidad**: Datos de la aplicación

- `courses.js` - Array de cursos disponibles
  - Información de cada curso
  - Fácil de modificar o conectar a una API

#### `/public/js/pages/`
**Responsabilidad**: Lógica específica de cada página

- `inicio.js` - Lógica para la página de inicio
  - Renderizado de cursos
  - Función de inscripción
- `coach.js` - Lógica para páginas de coaches
  - Manejo de botones de agendar
  - Funcionalidades específicas

#### `/public/js/utils/`
**Responsabilidad**: Utilidades y funciones auxiliares

- `component-loader.js` - Carga dinámica de componentes
  - Carga navbar y footer
  - Inicializa menú móvil
  - Reutilizable para futuros componentes

#### `/public/components/`
**Responsabilidad**: Copia de componentes HTML para servir estáticamente

- Espejo de `/src/views/components/`
- Servidos por Express

## 🔄 Flujo de la Aplicación

### 1. Solicitud del Usuario
```
Usuario → http://localhost:3000/coach1
```

### 2. Servidor (server.js)
```javascript
app.get('/coach1', (req, res) => {
  res.sendFile('src/views/pages/coach1.html');
});
```

### 3. Página HTML Cargada
```html
<div id="navbar"></div>  <!-- Contenedor para navbar -->
<script src="/js/utils/component-loader.js"></script>
```

### 4. Component Loader
```javascript
loadComponent('navbar', '/components/navbar.html');
loadComponent('footer', '/components/footer.html');
```

### 5. Scripts Específicos
```javascript
// Se ejecuta el script específico de la página
// Ejemplo: /js/pages/coach.js
```

## 🎯 Ventajas de esta Arquitectura

### 1. **Mantenibilidad**
- Cada archivo tiene una responsabilidad clara
- Fácil encontrar dónde hacer cambios
- Reducción de código duplicado

### 2. **Escalabilidad**
- Fácil agregar nuevas páginas
- Componentes reutilizables
- Preparado para migrar a frameworks (React, Vue, Angular)

### 3. **Organización**
- Estructura lógica y predecible
- Separación clara entre vistas, estilos y lógica
- Código más limpio y legible

### 4. **Desarrollo en Equipo**
- Diferentes desarrolladores pueden trabajar en diferentes partes
- Menos conflictos en control de versiones
- Responsabilidades claras

## 🚀 Cómo Extender

### Agregar una Nueva Página

1. **Crear la vista HTML**
   ```bash
   src/views/pages/nueva-pagina.html
   ```

2. **Agregar la ruta en el servidor**
   ```javascript
   // server.js
   app.get('/nueva-pagina', (req, res) => {
     res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'nueva-pagina.html'));
   });
   ```

3. **Actualizar la navegación**
   ```html
   <!-- src/views/components/navbar.html -->
   <a href="/nueva-pagina">Nueva Página</a>
   ```

4. **Crear script específico (opcional)**
   ```bash
   public/js/pages/nueva-pagina.js
   ```

### Agregar un Nuevo Componente

1. **Crear el componente**
   ```bash
   src/views/components/nuevo-componente.html
   ```

2. **Copiar a public**
   ```bash
   cp src/views/components/nuevo-componente.html public/components/
   ```

3. **Cargar en la página**
   ```html
   <div id="nuevo-componente"></div>
   <script>
     loadComponent('nuevo-componente', '/components/nuevo-componente.html');
   </script>
   ```

### Agregar Nuevos Datos

1. **Crear archivo de datos**
   ```bash
   public/js/data/nuevos-datos.js
   ```

2. **Definir la estructura**
   ```javascript
   const nuevosDatos = [
     { id: 1, nombre: "Dato 1" },
     { id: 2, nombre: "Dato 2" }
   ];
   ```

3. **Importar en la página**
   ```html
   <script src="/js/data/nuevos-datos.js"></script>
   ```

## 📋 Convenciones de Código

### Nombres de Archivos
- **HTML**: kebab-case (coach1.html, nueva-pagina.html)
- **JavaScript**: kebab-case (component-loader.js, inicio.js)
- **CSS**: kebab-case (main.css)

### Nombres de Variables
- **JavaScript**: camelCase (coursesContainer, enrollCourse)
- **Constantes**: camelCase o UPPER_CASE según contexto

### Estructura de Funciones
```javascript
// Comentario descriptivo
function nombreFuncion(parametro) {
    // Implementación
}
```

## 🔒 Buenas Prácticas

1. **No mezclar responsabilidades**: CSS en archivos CSS, JS en archivos JS
2. **Componentes pequeños y enfocados**: Cada componente hace una cosa bien
3. **Reutilización**: Si se repite, crear un componente
4. **Comentarios**: Explicar el "por qué", no el "qué"
5. **Consistencia**: Seguir las convenciones establecidas

## 🔮 Futuras Mejoras

- [ ] Sistema de plantillas (Handlebars, EJS)
- [ ] Bundler (Webpack, Vite)
- [ ] Preprocesador CSS (SASS, LESS)
- [ ] Framework frontend (React, Vue, Angular)
- [ ] TypeScript para type safety
- [ ] Testing automatizado
- [ ] CI/CD pipeline
