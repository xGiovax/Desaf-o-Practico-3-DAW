// Esperamos a que el documento esté completamente cargado
$(document).ready(function() {


  //Mostrar el nombre del álbum al hacer clic
  $(".album").click(function() {
    // Obtener el texto del título dentro del álbum
    const titulo = $(this).find("h2").text();

    // Mostrar una alerta con el nombre del álbum
    alert("Estás viendo el álbum: " + titulo);
  });


  //Efectos visuales al pasar el ratón (hover)
  $(".album").hover(
    // Cuando el ratón entra
    function() {
      // Obtener los valores de color y fondo definidos en los atributos data-*
      const glow = $(this).data("color");
      const fondo = $(this).data("bg");

      // Mostrar la información del álbum con un efecto de aparición (fadeIn)
      $(this).find(".info")
             .css("background", fondo)   // Aplica el color de fondo específico
             .stop(true, true)           // Detiene animaciones previas
             .fadeIn(400);               // Duración del efecto: 400 ms

      // Aplicar un filtro visual a la imagen (oscurecer y desenfocar)
      $(this).find("img")
             .css("filter", "brightness(0.5) blur(1px)");

      // Aplicar una sombra luminosa personalizada según el color del álbum
      $(this).css("box-shadow", `0 0 40px ${glow}`);
    },

    // Cuando el ratón sale
    function() {
      // Ocultar la información con un efecto de desvanecimiento (fadeOut)
      $(this).find(".info")
             .stop(true, true)
             .fadeOut(400);

      // Quitar los efectos visuales de la imagen
      $(this).find("img")
             .css("filter", "brightness(1) blur(0)");

      // Restaurar la sombra original
      $(this).css("box-shadow", "0 0 25px rgba(255,255,255,0.2)");
    }
  );

});
