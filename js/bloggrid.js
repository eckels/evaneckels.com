$(document).ready(function() {
  var capsule = $('.article').length;
  var i = 0;
  var delayCounter = 0;
  while (i < capsule) {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
      document.getElementsByClassName('article')[i].setAttribute("data-aos", delayCounter);
    }
    document.getElementsByClassName('article')[i].setAttribute("data-aos-delay", delayCounter);
    i++
    if (i % 2 == 0 && $(window).width() >= 804) {
      delayCounter = 0;
    }
    if ($(window).width() <= 804) {
      delayCounter = 0;
    }
    delayCounter = delayCounter + 150;
  }
});
