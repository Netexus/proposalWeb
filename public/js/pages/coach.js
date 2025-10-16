// Script específico para las páginas de coaches

document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes agregar funcionalidad específica para las páginas de coaches
    console.log('Página de coach cargada');
    
    // Ejemplo: Manejar el botón de agendar sesión
    const agendarBtn = document.querySelector('button');
    if (agendarBtn && agendarBtn.textContent.includes('Agendar')) {
        agendarBtn.addEventListener('click', () => {
            alert('¡Gracias por tu interés! Te contactaremos pronto para coordinar tu sesión.');
        });
    }
});
