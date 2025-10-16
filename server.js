const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Rutas de las páginas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'inicio.html'));
});

app.get('/coach1', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'coach1.html'));
});

app.get('/coach2', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'coach2.html'));
});

app.get('/coach3', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'pages', 'coach3.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📄 Páginas disponibles:`);
  console.log(`   - http://localhost:${PORT}/ (Inicio)`);
  console.log(`   - http://localhost:${PORT}/coach1 (Coach 1)`);
  console.log(`   - http://localhost:${PORT}/coach2 (Coach 2)`);
  console.log(`   - http://localhost:${PORT}/coach3 (Coach 3)`);
});
