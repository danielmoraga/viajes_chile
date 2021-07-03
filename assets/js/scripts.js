$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("h3").dblclick(function () {
    $(this).css({
      color: "red",
    });
  });

  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente");
  });

  $(".titulo").click(function () {
    $(".esconder").toggle("slow");
  });



});
