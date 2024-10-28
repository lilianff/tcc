// JavaScript para manipulação do mapa e exibição dos buffets com base na cidade selecionada

// Função para inicializar o mapa
function initMap() {
    const mapOptions = {
        zoom: 10,
        center: { lat: -23.5505, lng: -46.6333 }, // Centro inicial em São Paulo
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Função para atualizar o mapa e exibir os buffets da cidade selecionada
function updateMap() {
    const city = document.getElementById('city').value;
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: getCityCoordinates(city),
    });
    displayBuffets(city);
}

// Função para obter coordenadas da cidade
function getCityCoordinates(city) {
    switch (city) {
        case 'sao-paulo':
            return { lat: -23.5505, lng: -46.6333 };
        case 'rio-de-janeiro':
            return { lat: -22.9068, lng: -43.1729 };
        case 'belo-horizonte':
            return { lat: -19.9167, lng: -43.9345 };
        default:
            return { lat: -23.5505, lng: -46.6333 }; // São Paulo como padrão
    }
}

// Função para exibir os buffets com base na cidade selecionada
function displayBuffets(city) {
    const buffets = document.querySelectorAll('.buffet');
    buffets.forEach(buffet => buffet.style.display = 'none');

    if (city === 'sao-paulo') {
        document.getElementById('buffet1').style.display = 'block';
        document.getElementById('buffet2').style.display = 'block';
    } else if (city === 'rio-de-janeiro') {
        document.getElementById('buffet3').style.display = 'block';
        document.getElementById('buffet4').style.display = 'block';
    } else if (city === 'belo-horizonte') {
        document.getElementById('buffet5').style.display = 'block';
        document.getElementById('buffet6').style.display = 'block';
    }
}

// Manipulação do menu lateral (sidebar)
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', function () {
        sidebar.classList.toggle('open');
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function (e) {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
});
