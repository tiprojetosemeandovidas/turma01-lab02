/**
 * Barbearia Classic - Script by Luiz Henrique
 * Foco: UX Fluida, Performance e Conversão
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Loader Experience
    // Remove o loader assim que todo o conteúdo for processado
    const hideLoader = () => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    };

    // 2. Header Scroll Dynamics
    // Muda o estilo do header para dar contraste ao rolar
    const header = document.querySelector('.main-header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // 3. Initialize AOS (Animate On Scroll)
    // Biblioteca para os efeitos de entrada dos elementos
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out-cubic'
        });
    }

    // 4. Feedback Slider (Swiper.js)
    // Configuração para o slider estilo "Reels/TikTok"
    if (document.querySelector('.feedbackSlider')) {
        new Swiper('.feedbackSlider', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 1.5,
                }
            }
        });
    }

    // 5. Smooth Scroll para links internos
    // Melhora a navegação entre as seções da Home
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 6. WhatsApp Tracking (Opcional - Útil para Gestão de Tráfego)
    // Função para você saber quando alguém clicou no botão de agendamento
    const wppButtons = document.querySelectorAll('a[href*="wa.me"]');
    wppButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Evento de Conversão: Clique no WhatsApp');
            // Aqui você pode integrar o Pixel do Facebook ou Google Ads futuramente
        });
    });

    // Finaliza o loader após carregar tudo
    window.addEventListener('load', hideLoader);
});
