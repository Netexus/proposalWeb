#!/bin/bash

# Script para crear una nueva página rápidamente

if [ -z "$1" ]; then
    echo "❌ Error: Debes proporcionar un nombre para la página"
    echo "Uso: ./scripts/create-page.sh nombre-pagina"
    exit 1
fi

PAGE_NAME=$1
PAGE_TITLE=${2:-"$PAGE_NAME"}

echo "📄 Creando nueva página: $PAGE_NAME"

# Crear archivo HTML
cat > "src/views/pages/${PAGE_NAME}.html" << EOF
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${PAGE_TITLE} - EduPlataforma</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="/js/config/tailwind-config.js"></script>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body class="bg-white">
    <!-- Navegación -->
    <div id="navbar"></div>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-crimson-600 to-crimson-800 text-white py-20">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                ${PAGE_TITLE}
            </h1>
            <p class="text-xl md:text-2xl text-crimson-100">
                Descripción de la página
            </p>
        </div>
    </section>

    <!-- Contenido Principal -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <p class="text-gray-700 text-lg">
                    Contenido de la página aquí...
                </p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <div id="footer"></div>

    <script src="/js/utils/component-loader.js"></script>
</body>
</html>
EOF

echo "✅ Página creada: src/views/pages/${PAGE_NAME}.html"
echo ""
echo "📝 Próximos pasos:"
echo "1. Agregar ruta en server.js:"
echo "   app.get('/${PAGE_NAME}', (req, res) => {"
echo "     res.sendFile(path.join(__dirname, 'src', 'views', 'pages', '${PAGE_NAME}.html'));"
echo "   });"
echo ""
echo "2. Agregar enlace en navbar (src/views/components/navbar.html):"
echo "   <a href=\"/${PAGE_NAME}\">${PAGE_TITLE}</a>"
echo ""
echo "3. Sincronizar componentes:"
echo "   ./scripts/sync-components.sh"
echo ""
echo "4. Reiniciar servidor"
