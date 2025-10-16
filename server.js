// PLANTILLA: Servidor Express - Personaliza las rutas según tus necesidades
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// PERSONALIZAR: Rutas de las páginas - Cambia los nombres según tu proyecto
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'inicio.html'));
});

app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'coach1.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'coach2.html'));
});

app.get('/page3', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'coach3.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📄 Páginas disponibles:`);
  console.log(`   - http://localhost:${PORT}/ (Inicio)`);
  console.log(`   - http://localhost:${PORT}/page1 (Página 1)`);
  console.log(`   - http://localhost:${PORT}/page2 (Página 2)`);
  console.log(`   - http://localhost:${PORT}/page3 (Página 3)`);
});
