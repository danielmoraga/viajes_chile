$(function () {

  $('[data-toggle="tooltip"]').tooltip(); //uso de tooltip

  $(function () {
    $('[data-toggle="popover"]').popover() //uso de popovers
  })

  $('#myModal').on('shown.bs.modal', function () { //uso de modal
    $('#myInput').trigger('focus')
  })

  $("h2").click(function () { //hago un toogle en los hr cuando se hace click en algun titulo h2
    $("hr").toggle("slow");
  });

  $(".colorcalipso").mouseover(function () { //cambio color de las card cuando se ponen sobre cada una
    $(this).css("background-color","blue");
    
  });


  $("a").on('click', function(event) { //funciones para slow scroll

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });


    

});




