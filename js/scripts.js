/*
// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('iframe');
    // Ajustar dinámicamente la altura del iframe basado en el contenido, si necesario
    iframe.onload = function() {
        // Esto es solo un ejemplo, el ajuste real puede necesitar más configuraciones
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    };
});
*/

document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Para un desplazamiento suave
  });
};

$(document).ready(function () {
  $(".carousel").carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $(".dropdown-trigger").dropdown();
});
