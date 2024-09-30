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

// Mostrar el botón cuando el usuario ha hecho scroll más allá del área visible de la pantalla
window.onscroll = function() {
  const scrollToTopButton = document.getElementById("scrollToTop");
  
  // Mostrar el botón si el scroll es mayor que el área visible de la ventana
  if (document.documentElement.scrollTop > window.innerHeight) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Función para hacer scroll hacia arriba de forma suave
document.getElementById("scrollToTop").onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Para un desplazamiento suave
  });
};

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

$(document).ready(function () {
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $(".carousel").carousel({
    duration: 200,
  });
});
