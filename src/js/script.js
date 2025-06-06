const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('nav ul');

function toggleMenu() {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Impede o scroll quando o menu está aberto
    if(navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

hamburguer.addEventListener('click', toggleMenu);

// Fechar o menu ao clicar em um link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if(navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Substitua pelo ID do seu último vídeo do YouTube
function carregarUltimoVideo() {
    const videoId = '2Lm5CJVdeN8'; // Ex: 'dQw4w9WgXcQ'
    const iframe = document.querySelector('.video-container iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
}

// Chame a função quando a página carregar
window.addEventListener('load', carregarUltimoVideo);

