#!/bin/bash

# Script para sincronizar componentes de src a public

echo "🔄 Sincronizando componentes..."

# Copiar componentes
cp -v src/views/components/*.html public/components/

echo "✅ Componentes sincronizados correctamente"
echo ""
echo "Componentes actualizados:"
ls -lh public/components/
