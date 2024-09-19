document.addEventListener('DOMContentLoaded', () => {
    alert('Bem-vindo ao site de Resultados do Projeto Educacional!');
});

$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
});