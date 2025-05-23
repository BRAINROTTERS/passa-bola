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

let map = L.map('mapid').setView([-23.5505, -46.6333], 10);

//CONTRUINDO A APLICAÇÃO DO MAP DA API
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);


map.on('click', mapa);

function mapa(e) {
    let lat = e.latlng.lat.toFixed(6);
    let long = e.latlng.lng.toFixed(6); // Correção: 'long' para 'lng'
    const locationInfo = document.getElementById('localizacao'); // Exemplo de como obter a referência ao elemento
    if (locationInfo) {
        locationInfo.textContent = `Localização clicada: Latitude ${lat}, Longitude ${long}`;
    }
    L.marker(e.latlng).addTo(map)
        .bindPopup(`Latitude: ${lat}<br>Longitude: ${long}`).openPopup();
}

map.on('click', mapa);