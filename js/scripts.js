// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('iframe');
    // Ajustar dinámicamente la altura del iframe basado en el contenido, si necesario
    iframe.onload = function() {
        // Esto es solo un ejemplo, el ajuste real puede necesitar más configuraciones
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    };
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });