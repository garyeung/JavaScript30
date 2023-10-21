/**
 *  Requirement:
 *      hover on the link and highlight it
 *
 *  Solution:
 *      create a span element with highlight class
 *      all the <a> elements add mouseover event that when the cursor over one of them  move the lightlight element above it.
 *      add the corresponding <a>'s width, height and x y  position to the lightlight
 *
 */
var aElements = document.querySelectorAll('a');
var highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);
Array.from(aElements).forEach(function (link) {
    var rect = link.getBoundingClientRect();
    link.addEventListener('mouseover', function (e) {
        console.log(rect);
        var width = "".concat(rect.width, "px");
        var height = "".concat(rect.height, "px");
        var x = "".concat(rect.x, "px");
        var y = "".concat(rect.y, "px");
        highlight.style.width = width;
        highlight.style.height = height;
        highlight.style.transform = "translate(".concat(x, ",").concat(y, ")");
    });
});
