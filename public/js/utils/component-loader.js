// Utilidad para cargar componentes HTML
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error(`Error cargando componente ${componentPath}:`, error);
    }
}

// Cargar navbar y footer automáticamente
document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('navbar', '/components/navbar.html');
    await loadComponent('footer', '/components/footer.html');
    
    // Inicializar menú móvil después de cargar el navbar
    initMobileMenu();
});

// Función para inicializar el menú móvil
function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}
