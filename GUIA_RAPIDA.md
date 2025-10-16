# 🚀 Guía Rápida de Desarrollo

## ✅ Estado Actual del Proyecto

### Páginas Disponibles
- ✅ **Inicio** - `http://localhost:3000/` - Página principal con cursos
- ✅ **Coach 1** - `http://localhost:3000/coach1` - Desarrollo Personal (María González)
- ✅ **Coach 2** - `http://localhost:3000/coach2` - Fitness y Bienestar (Carlos Ramírez)
- ✅ **Coach 3** - `http://localhost:3000/coach3` - Carrera Profesional (Ana Martínez)

### Navegación
El navbar tiene enlaces a:
- Inicio
- Coach 1
- Coach 2
- Coach 3

## 📂 Dónde Está Cada Cosa

### 🎨 Quiero cambiar ESTILOS
```
📁 public/css/main.css
```
- Animaciones
- Colores personalizados
- Efectos hover
- Responsive design

### 🎨 Quiero cambiar COLORES de Tailwind
```
📁 public/js/config/tailwind-config.js
```
- Paleta crimson (50-950)
- Extensiones de tema

### 📝 Quiero cambiar el NAVBAR
```
📁 src/views/components/navbar.html
```
- Agregar/quitar enlaces
- Cambiar logo
- Modificar menú móvil

### 📝 Quiero cambiar el FOOTER
```
📁 src/views/components/footer.html
```
- Enlaces de footer
- Copyright
- Información adicional

### 📄 Quiero modificar una PÁGINA
```
📁 src/views/pages/
   ├── inicio.html    # Página principal
   ├── coach1.html    # Coach 1
   ├── coach2.html    # Coach 2
   └── coach3.html    # Coach 3
```

### 💻 Quiero cambiar la LÓGICA de una página
```
📁 public/js/pages/
   ├── inicio.js      # Lógica de inicio (renderizar cursos)
   └── coach.js       # Lógica de coaches (botones, etc)
```

### 📊 Quiero modificar los DATOS de cursos
```
📁 public/js/data/courses.js
```
- Array de cursos
- Agregar/quitar/modificar cursos

### 🔧 Quiero agregar RUTAS nuevas
```
📁 server.js
```
- Agregar `app.get('/nueva-ruta', ...)`

## 🛠️ Tareas Comunes

### Agregar un Nuevo Coach

1. **Crear la página HTML**
   ```bash
   # Copiar una página existente como plantilla
   cp src/views/pages/coach1.html src/views/pages/coach4.html
   ```

2. **Modificar el contenido**
   - Cambiar título
   - Cambiar nombre del coach
   - Actualizar especialización
   - Modificar áreas de especialización

3. **Agregar la ruta en server.js**
   ```javascript
   app.get('/coach4', (req, res) => {
     res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'coach4.html'));
   });
   ```

4. **Actualizar el navbar**
   ```html
   <!-- En src/views/components/navbar.html -->
   <a href="/coach4" class="hover:text-crimson-200 transition">Coach 4</a>
   ```

5. **Copiar navbar actualizado a public**
   ```bash
   cp src/views/components/navbar.html public/components/
   ```

6. **Reiniciar el servidor**
   ```bash
   npm start
   ```

### Modificar Cursos Existentes

1. **Abrir el archivo de datos**
   ```bash
   # Editar: public/js/data/courses.js
   ```

2. **Modificar el array**
   ```javascript
   {
       id: 1,
       title: "Nuevo Título",
       description: "Nueva descripción",
       level: "Avanzado",
       duration: "12 semanas",
       students: 1234,
       icon: "SVG_PATH"
   }
   ```

3. **Guardar y recargar la página**
   - No necesitas reiniciar el servidor
   - Solo refresca el navegador

### Cambiar Colores del Sitio

1. **Abrir configuración de Tailwind**
   ```bash
   # Editar: public/js/config/tailwind-config.js
   ```

2. **Modificar la paleta**
   ```javascript
   crimson: {
       700: '#b91c1c',  // Color principal del navbar
       800: '#991b1b',  // Color de títulos
       // etc...
   }
   ```

3. **Recargar la página**
   - Los cambios se aplican inmediatamente

### Agregar Estilos Personalizados

1. **Abrir archivo CSS**
   ```bash
   # Editar: public/css/main.css
   ```

2. **Agregar tus estilos**
   ```css
   .mi-clase-personalizada {
       background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
   }
   ```

3. **Usar en HTML**
   ```html
   <div class="mi-clase-personalizada">Contenido</div>
   ```

## 🐛 Solución de Problemas

### El navbar o footer no se muestran

**Problema**: Los componentes no cargan

**Solución**:
1. Verificar que existan en `public/components/`
2. Copiar desde src:
   ```bash
   cp src/views/components/*.html public/components/
   ```

### Los cursos no se muestran

**Problema**: Script de cursos no carga

**Solución**:
1. Verificar que `courses.js` esté en `public/js/data/`
2. Verificar que se importe en `inicio.html`:
   ```html
   <script src="/js/data/courses.js"></script>
   <script src="/js/pages/inicio.js"></script>
   ```

### Cambios no se reflejan

**Problema**: Caché del navegador

**Solución**:
1. Hacer hard refresh: `Ctrl + Shift + R` (Linux/Windows) o `Cmd + Shift + R` (Mac)
2. O limpiar caché del navegador

### Error 404 en nueva ruta

**Problema**: Ruta no configurada en servidor

**Solución**:
1. Agregar ruta en `server.js`
2. Reiniciar servidor:
   ```bash
   pkill -f "node server.js"
   npm start
   ```

## 📋 Checklist para Nuevas Funcionalidades

- [ ] ¿Creé el archivo HTML en `src/views/pages/`?
- [ ] ¿Agregué la ruta en `server.js`?
- [ ] ¿Actualicé el navbar si es necesario?
- [ ] ¿Copié componentes actualizados a `public/components/`?
- [ ] ¿Creé el script JS específico si es necesario?
- [ ] ¿Probé la funcionalidad en el navegador?
- [ ] ¿Funciona en móvil (responsive)?

## 🎯 Comandos Útiles

```bash
# Iniciar servidor
npm start

# Iniciar en modo desarrollo (auto-reload)
npm run dev

# Detener servidor
pkill -f "node server.js"

# Ver logs del servidor
# (los verás en la terminal donde ejecutaste npm start)

# Copiar componentes actualizados
cp src/views/components/*.html public/components/

# Verificar estructura de archivos
find . -type f -name "*.html" | grep -v node_modules
```

## 📚 Recursos Adicionales

- **README.md** - Información general del proyecto
- **ARQUITECTURA.md** - Explicación detallada de la arquitectura
- **Tailwind CSS** - https://tailwindcss.com/docs
- **Express.js** - https://expressjs.com/

## 💡 Tips de Productividad

1. **Usa el auto-reload**: `npm run dev` para no reiniciar manualmente
2. **Inspecciona en el navegador**: F12 para ver errores de JavaScript
3. **Usa Tailwind Play**: https://play.tailwindcss.com/ para probar estilos
4. **Mantén el código limpio**: Sigue las convenciones del proyecto
5. **Comenta tu código**: Ayuda a otros (y a ti mismo) a entender

---

**¿Necesitas ayuda?** Revisa `ARQUITECTURA.md` para entender cómo funciona todo.
