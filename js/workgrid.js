$(document).ready(function() {
  var capsule = $('.grid-item').length;
  var i = 0;
  var delayCounter = 0;
  while (i < capsule) {
    document.getElementsByClassName('grid-item')[i].setAttribute("data-aos-delay", delayCounter);
    i++
    if (i % 3 == 0 && $(window).width() >= 1015) {
      delayCounter = 0;
    }
    if (i % 2 == 0 && $(window).width() <= 1015 && $(window).width() > 665) {
      delayCounter = 0;
    }
    if ($(window).width() <= 665) {
      delayCounter = 0;
    }
    delayCounter = delayCounter + 150;
  }
});
