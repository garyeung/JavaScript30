/**
 * Requirement:
 *   click each of panels that add or remove the class of open
 *
 * Solution:
 *    select all the panel add click event;
 *    detect  if the panel have a class called open or not, if not add it, else remove
 *
 */
var panels = document.getElementsByClassName("panel");
var openClass = 'open';
var panelsArray = Array.from(panels);
panelsArray.forEach(function (panel) {
    panel.addEventListener("click", function (event) {
        if (panel.classList.contains(openClass)) {
            panel.classList.remove(openClass);
        }
        else {
            panel.classList.add(openClass);
        }
    });
});
