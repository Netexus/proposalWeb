// Script específico para la página de inicio

// Función para renderizar cursos
function renderCourses() {
    const container = document.getElementById('coursesContainer');
    
    if (!container) return;
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden border-t-4 border-crimson-700';
        
        courseCard.innerHTML = `
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <svg class="w-12 h-12 text-crimson-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${course.icon}"></path>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-crimson-800 mb-3">${course.title}</h3>
                <p class="text-gray-600 mb-4">${course.description}</p>
                <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        ${course.duration}
                    </span>
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        ${course.students.toLocaleString()} estudiantes
                    </span>
                </div>
                <span class="inline-block bg-crimson-100 text-crimson-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    ${course.level}
                </span>
                <button onclick="enrollCourse(${course.id})" class="w-full bg-crimson-700 text-white py-2 rounded-lg font-semibold hover:bg-crimson-800 transition">
                    Inscribirse
                </button>
            </div>
        `;
        
        container.appendChild(courseCard);
    });
}

// Función para inscribirse en un curso
function enrollCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    alert(`¡Te has inscrito en el curso: ${course.title}!\n\nRecibirás un correo de confirmación pronto.`);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Esperar a que los datos de cursos estén disponibles
    if (typeof courses !== 'undefined') {
        renderCourses();
    }
});
