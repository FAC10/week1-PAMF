// add fade in to nav bar on scroll
(function () {
  var nav = document.getElementById('Navigation');
  var navLinks = document.getElementsByClassName('navigation__link');
  navLinks = Array.from(navLinks);
  document.getElementById('navbox').style.display = 'none';
  var windowSize = window.innerHeight - nav.clientHeight;

  window.addEventListener("scroll", function (e) {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scroll > windowSize) {
      nav.className = 'navigation--onscroll';
      navLinks.forEach(function (e) {
        e.className = 'navigation__link navigation__link--white';
      });
      return;
    }
    nav.className = '';
    navLinks.forEach(function (e) {
      e.className = 'navigation__link';
    });
  });
})();

(function () {
  var personLinks = document.getElementsByClassName('person__link');
  personLinks = Array.from(personLinks);
  var topLeft = document.getElementsByClassName('person__topleft')[0];
  var topRight = document.getElementsByClassName('person__topright')[0];
  var bottomLeft = document.getElementsByClassName('person__bottomleft')[0];
  var bottomRight = document.getElementsByClassName('person__bottomright')[0];

  personLinks.forEach(function (e) {
    e.addEventListener('focus', function () {
      var frontSlide = e.parentNode.parentNode.parentNode.firstChild.nextSibling;

      if (frontSlide.className.includes('topleft')) {
        frontSlide.className += ' remove-tl';
      } else if (frontSlide.className.includes('topright')) {
        frontSlide.className += ' remove-tr';
      } else if (frontSlide.className.includes('bottomright')) {
        frontSlide.className += ' remove-br';
      } else if (frontSlide.className.includes('bottomleft')) {
        frontSlide.className += ' remove-bl';
      }
      e.parentNode.parentNode.className += ' stay';
    });
  });
})();
