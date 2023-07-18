$(document).ready(function() {
  $('#carousel').carousel({
    interval: 15000, // Intervalo de cambio de imágenes (15 segundos)
    wrap: true // Permite que el carrusel haga un bucle infinito
  });

  // Ocultar los indicadores del carrusel
  $('#carousel ol.carousel-indicators').hide();
});
