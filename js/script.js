// Inicializar animações de scroll
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
    });
});

// Efeito de mudar cor do header ao rolar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 5%';
        nav.style.background = '#0a0a0a';
    } else {
        nav.style.padding = '2rem 5%';
        nav.style.background = 'rgba(10,10,10,0.8)';
    }
});
