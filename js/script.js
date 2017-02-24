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

// add focus functionality to links witin team section
(function () {
  var personLinks = document.getElementsByClassName('person__link');
  personLinks = Array.from(personLinks);
  var person = document.getElementsByClassName('person');
  person = Array.from(person);
  var tl = document.getElementsByClassName('person__topleft')[0];
  var tr = document.getElementsByClassName('person__topright')[0];
  var bl = document.getElementsByClassName('person__bottomleft')[0];
  var br = document.getElementsByClassName('person__bottomright')[0];

  function closeElement(element, pos) {
    element.classList.remove('remove-' + pos);
    element.nextSibling.nextSibling.classList.remove('stay');
  }
  // closes all sections within the team section
  function closeAll() {
    closeElement(tl, 'tl');
    closeElement(tr, 'tr');
    closeElement(bl, 'bl');
    closeElement(br, 'br');
  }


  person.forEach(function (e) {
    e.addEventListener('focus', function () {
      closeAll();
    });
  });
  personLinks.forEach(function (e) {
    e.addEventListener('focus', function () {
      var frontSlide = e.parentNode.parentNode.parentNode.parentNode.firstChild.nextSibling;
      if (frontSlide.className.includes('topleft')) {
        closeAll();
        frontSlide.classList.add('remove-tl');
      } else if (frontSlide.className.includes('topright')) {
        closeAll();
        frontSlide.classList.add('remove-tr');
      } else if (frontSlide.className.includes('bottomleft')) {
        closeAll();
        frontSlide.classList.add('remove-bl');
      } else if (frontSlide.className.includes('bottomright')) {
        closeAll();
        frontSlide.classList.add('remove-br');
      }
      e.parentNode.parentNode.parentNode.classList.add('stay');
    });
  });
})();
