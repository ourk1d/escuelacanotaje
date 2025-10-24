// DATOS DE LOS 3 PROFESORES - MODIFICA AQUÍ
// DATOS DE LOS 3 PROFESORES - MODIFICA AQUÍ
const professors = [
    {
        id: 1,
        name: "María González",
        role: "Directora e Instructora Principal",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        bio: "Fundadora de la escuela con más de 15 años de experiencia en canotaje. Especialista en técnicas de remo y seguridad acuática.",
        specialties: ["Técnica Avanzada", "Seguridad Acuática", "Liderazgo"]
    },
    {
        id: 2,
        name: "Carlos Rodríguez",
        role: "Entrenador de Competición",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        bio: "Ex-campeón nacional de kayak con más de 10 años de experiencia competitiva. Especializado en entrenamiento de alto rendimiento.",
        specialties: ["Alto Rendimiento", "Preparación Física", "Estrategia"]
    },
    {
        id: 3,
        name: "Ana Martínez",
        role: "Instructora de Iniciación",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        bio: "Especializada en introducir a principiantes al mundo del canotaje. Métodos pedagógicos innovadores para aprendizaje seguro.",
        specialties: ["Iniciación", "Pedagogía", "Clases para Niños"]
    }
];

// Variables globales
let currentIndex = 0;
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('indicators');

// Inicializar el carousel
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
});

function initCarousel() {
    createProfessorCards();
    createIndicators();
    
    prevBtn.addEventListener('click', showPrevCard);
    nextBtn.addEventListener('click', showNextCard);
    
    updateCarousel();
}

function createProfessorCards() {
    professors.forEach(professor => {
        const card = document.createElement('div');
        card.className = 'professor-card';
        
        const specialtyTags = professor.specialties.map(specialty => 
            `<span class="specialty-tag">${specialty}</span>`
        ).join('');
        
        card.innerHTML = `
            <div class="professor-image-container">
                <img src="${professor.image}" alt="${professor.name}" class="professor-image">
            </div>
            <div class="professor-info">
                <h3 class="professor-name">${professor.name}</h3>
                <p class="professor-role">${professor.role}</p>
                <p class="professor-bio">${professor.bio}</p>
                <div class="professor-specialty">
                    ${specialtyTags}
                </div>
            </div>
        `;
        
        carouselTrack.appendChild(card);
    });
}

function createIndicators() {
    professors.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        indicatorsContainer.appendChild(indicator);
    });
}

function showPrevCard() {
    currentIndex = (currentIndex - 1 + professors.length) % professors.length;
    updateCarousel();
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % professors.length;
    updateCarousel();
}

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}