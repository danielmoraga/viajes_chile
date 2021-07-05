$(function () {

  $('[data-toggle="tooltip"]').tooltip(); //uso de tooltip

  $(function () {
    $('[data-toggle="popover"]').popover() //uso de popovers
  })

  $('#myModal').on('shown.bs.modal', function () { //uso de modal
    $('#myInput').trigger('focus')
  })


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


(function () {
  var qs, js, q, s, d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = "typef_orm",
    b = "https://embed.typeform.com/";
  if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q)
  }
})()

