// Inicializar animações de scroll
AOS.init({
    duration: 1000,
    once: true
});

// Lógica de Agendamento via WhatsApp
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = form.querySelector('input[type="text"]').value;
    const servico = form.querySelector('select').value;
    const data = form.querySelector('input[type="date"]').value;
    
    const telefoneBarbearia = "5531999999999"; // Substituir pelo real
    
    const mensagem = `Olá! Meu nome é ${nome}. Gostaria de agendar o serviço de ${servico} para o dia ${data}. Vi o site e quero confirmar o horário!`;
    
    const url = `https://api.whatsapp.com/send?phone=${telefoneBarbearia}&text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
});

// Efeito de mudar header ao scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});
