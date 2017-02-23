var nav = document.getElementById('Navigation');
var navLinks = document.getElementsByClassName('navigation__link');
navLinks = Array.from(navLinks);

console.log(nav.clientHeight);
var windowSize = window.innerHeight - nav.clientHeight;
window.addEventListener("scroll", function (e) {
  var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (scroll > windowSize) {
    nav.className = 'navigation--onscroll';
    console.log('working');

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
