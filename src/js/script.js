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

// Animação suave ao rolar
        document.querySelector('.scroll-prompt').addEventListener('click', function() {
            document.getElementById('noticias').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });

        // Efeito de parallax simples
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const welcomeSection = document.querySelector('.boas-vindas');
            welcomeSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
            
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach(shape => {
                shape.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            });
        });

        // Carregar mais notícias ao rolar até o final (simulação)
        window.addEventListener('scroll', function() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
                // Aqui você poderia carregar mais notícias via AJAX
                console.log('Carregar mais notícias...');
            }
        });
        
// Substitua pelo ID do seu último vídeo do YouTube
function carregarUltimoVideo() {
    const videoId = '2Lm5CJVdeN8'; // Ex: 'dQw4w9WgXcQ'
    const iframe = document.querySelector('.video-container iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
}

// Chame a função quando a página carregar
window.addEventListener('load', carregarUltimoVideo);

