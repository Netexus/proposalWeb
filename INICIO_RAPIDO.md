# ⚡ Inicio Rápido - 2 Minutos

## 🚀 Arrancar el Proyecto

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Iniciar servidor
npm start

# 3. Abrir navegador
http://localhost:3000
```

## 📄 Páginas Disponibles

- **/** - Inicio (cursos destacados)
- **/coach1** - María González (Desarrollo Personal)
- **/coach2** - Carlos Ramírez (Fitness y Bienestar)
- **/coach3** - Ana Martínez (Carrera Profesional)

## 📂 Dónde Está Cada Cosa

| Quiero cambiar... | Archivo |
|-------------------|---------|
| **Navbar** | `src/views/components/navbar.html` |
| **Footer** | `src/views/components/footer.html` |
| **Página inicio** | `src/views/pages/inicio.html` |
| **Página coach** | `src/views/pages/coach[1-3].html` |
| **Estilos** | `public/css/main.css` |
| **Colores** | `public/js/config/tailwind-config.js` |
| **Cursos** | `public/js/data/courses.js` |
| **Rutas** | `server.js` |

## 🔧 Tareas Comunes

### Modificar el Navbar
```bash
# 1. Editar
nano src/views/components/navbar.html

# 2. Sincronizar
./scripts/sync-components.sh

# 3. Recargar navegador
```

### Agregar un Coach
```bash
# 1. Crear página
./scripts/create-page.sh coach4 "Coach 4: Nombre"

# 2. Agregar ruta en server.js
# 3. Actualizar navbar
# 4. Reiniciar servidor
```

### Cambiar Colores
```bash
# Editar: public/js/config/tailwind-config.js
# Recargar navegador (no requiere reinicio)
```

## 📚 Documentación Completa

- **[INDICE.md](INDICE.md)** - Índice de toda la documentación
- **[README.md](README.md)** - Información general
- **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** - Guía de desarrollo
- **[ARQUITECTURA.md](ARQUITECTURA.md)** - Arquitectura detallada

## ❓ Problemas Comunes

**Navbar no se muestra**
```bash
./scripts/sync-components.sh
```

**Cambios no se ven**
```
Ctrl + Shift + R (hard refresh)
```

**Puerto ocupado**
```bash
pkill -f "node server.js"
npm start
```

---

**¿Necesitas más ayuda?** → [GUIA_RAPIDA.md](GUIA_RAPIDA.md)
