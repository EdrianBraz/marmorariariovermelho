document.addEventListener("DOMContentLoaded", function() {
    // Coloque o ano que deseja subtrair aqui
    var anoInicial = 2005;

    // Obtenha o ano atual
    var anoAtual = new Date().getFullYear();

    // Calcule a diferença
    var diferenca = anoAtual - anoInicial;

    // Substitua o conteúdo do elemento com o ID "anosMercado"
    document.getElementById("anosMercado").textContent = diferenca;
});

document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery img');

    let currentIndex =  0;

    function nextSlide() {
        currentIndex = (currentIndex + 2) % images.length;
        updateGallery();
    }

    function updateGallery() {
        const imageWidth = images[0].width; // Assume que todas as imagens têm a mesma largura
        const translateValue = -currentIndex * imageWidth + 'px';
        gallery.style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(nextSlide, 4000); // Muda para o próximo slide a cada 3 segundos (ajuste conforme necessário)
});

// slide via swiper.js
document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.swiper-container', {
        // Configurações Swiper.js aqui
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        zoom: {
            maxRatio: 10, // Configurar o zoom máximo permitido
        },
        loop: true,
    });
});

// para realização da transição do texto //
document.addEventListener("DOMContentLoaded", function() {
    const frases = document.querySelectorAll('.frase');
    let index = 0;

    function mostrarProximaFrase() {
        frases[index].classList.remove('mostrar');
        index = (index + 4) % frases.length;
        frases[index].classList.add('mostrar');
    }

    // Mostra a primeira frase ao carregar a página
    frases[index].classList.add('mostrar');

    // Chama a função para trocar as frases a cada 3 segundos (3000 milissegundos)
    setInterval(mostrarProximaFrase, 4000);
});
