document.addEventListener('DOMContentLoaded', function() {
    // Toggle del menú en dispositivos móviles
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarNav = document.getElementById('navbarNav');
    
    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('active');
            
            // Cambiar el icono del botón
            if (navbarNav.classList.contains('active')) {
                this.innerHTML = '✕';
                this.style.color = '#3498db';
            } else {
                this.innerHTML = '☰';
                this.style.color = '#333';
            }
        });
    }

    // Cerrar el menú al hacer clic en un enlace (en móviles)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                if (navbarNav) {
                    navbarNav.classList.remove('active');
                }
                if (navbarToggle) {
                    navbarToggle.innerHTML = '☰';
                    navbarToggle.style.color = '#333';
                }
            }
        });
    });

    // Cerrar el menú al hacer clic fuera de él (en móviles)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && navbarNav && navbarNav.classList.contains('active')) {
            const isClickInsideNav = navbarNav.contains(event.target);
            const isClickOnToggle = navbarToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle) {
                navbarNav.classList.remove('active');
                if (navbarToggle) {
                    navbarToggle.innerHTML = '☰';
                    navbarToggle.style.color = '#333';
                }
            }
        }
    });

    // Cerrar el menú al redimensionar la ventana si pasa el breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (navbarNav) {
                navbarNav.classList.remove('active');
            }
            if (navbarToggle) {
                navbarToggle.innerHTML = '☰';
                navbarToggle.style.color = '#333';
            }
        }
    });
});