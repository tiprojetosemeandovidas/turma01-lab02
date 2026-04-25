// Inicializar animações de scroll
AOS.init({
    duration: 1000,
    once: true
});

// Lógica de Agendamento via WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura dos campos
    const nome = this.querySelector('input[type="text"]').value;
    const servico = this.querySelector('select').value;
    const data = this.querySelector('input[type="date"]').value;
    
    // Seu WhatsApp real
    const telefone = "5531989100228"; 
    
    // Formatação da data para o BR
    const dataFormatada = data.split('-').reverse().join('/');
    
    const texto = `Fala! Vim pelo site. 
Gostaria de agendar um horário:
👤 *Nome:* ${nome}
✂️ *Serviço:* ${servico}
📅 *Data:* ${dataFormatada}
    
Consegue confirmar pra mim?`;

    const encode = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${encode}`;
    
    window.open(url, '_blank');
});
// Efeito de mudar header ao scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});
