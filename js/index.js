$(document).ready(function(){

    var myWidth = $(window).width();
    var myHeight = $(window).height();
    var headerHeight = $('#header').height();
    var centerHeight = $('#center').height() / -2 + 'px';

    $('#center').css('margin-top', centerHeight);
    $('.smooth').smoothScroll();
    if (myHeight > myWidth) {
      $('.burbuja-wrapper').attr('id', 'burbuja-wrapper2');
      $('.burbuja').attr('id', 'burbuja2');
    }
    if (myWidth > myHeight) {
      $('.burbuja-wrapper').attr('id', 'burbuja-wrapper');
      $('.burbuja').attr('id', 'burbuja');
    }

  $(window).resize(function() {
    myWidth = $(window).width();
    myHeight = $(window).height();
    headerHeight = $('#header').height();
    centerHeight = $('#center').height() / -2 + 'px';

    $('#center').css('margin-top', centerHeight);

    if (myHeight > myWidth) {
      $('.burbuja-wrapper').attr('id', 'burbuja-wrapper2');
      $('.burbuja').attr('id', 'burbuja2');
    }
    if (myWidth > myHeight) {
      $('.burbuja-wrapper').attr('id', 'burbuja-wrapper');
      $('.burbuja').attr('id', 'burbuja');
    }
  });

});
