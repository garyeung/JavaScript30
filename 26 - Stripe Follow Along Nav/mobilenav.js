var _a;
/**
 *  Requirement:
 *    hover a nav then show the dropdown of the current nav
 *
 *  Solution:
 *    add mouseover in all nav list,
 *    then hover one add an enter class to it
 *    detect it's child element with the class name called dropdown
 *     get the dropdown's width, height and x, y  position
 *      apply to dropdownbackground and make it appear
 *     add an active class to the list to make to dropdown appear.
 *
 */
var dropdownBackground = document.querySelector('.dropdownBackground');
var navs = document.querySelectorAll('ul.cool > li');
var navRect = (_a = document.querySelector('.top')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
var _b = navRect, topx = _b.x, topy = _b.y;
Array.from(navs).forEach(function (nav) {
    nav.addEventListener('mouseover', handleNav);
    nav.addEventListener('mouseout', cancelNav);
});
function handleNav(e) {
    var nav = e.currentTarget;
    nav.classList.add('trigger-enter');
    var rect = nav.querySelector('.dropdown').getBoundingClientRect();
    var width = rect.width, height = rect.height, x = rect.x, y = rect.y;
    console.log(rect);
    Object.assign(dropdownBackground.style, {
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        transform: "translate(".concat(x - topx, "px, ").concat(y - topy, "px)")
    });
    dropdownBackground.classList.add('open');
    nav.classList.add('trigger-enter-active');
    //check the rect
}
function cancelNav(e) {
    var nav = e.currentTarget;
    nav.classList.remove('trigger-enter', 'trigger-enter-active');
    dropdownBackground.classList.remove('open');
}
