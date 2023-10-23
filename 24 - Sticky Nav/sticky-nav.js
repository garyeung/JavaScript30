/**
 * Requirement:
 *  scroll the screen when the nav element is on the top, fixed the position and show the logo.
 */
var nav = document.querySelector('nav');
var logo = document.querySelector('.logo');
var navTop = nav.offsetTop;
window.addEventListener('scroll', function () {
    stickNav(window.scrollY, navTop);
});
function stickNav(scrolled, top) {
    if (scrolled >= top) {
        toggleStyle(true);
    }
    else {
        toggleStyle(false);
    }
}
function toggleStyle(foure) {
    document.body.classList.toggle('fixnav', foure);
}
