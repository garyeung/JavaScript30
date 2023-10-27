/**
 *  Requirement:
 *    down the mouse adn drag the picture left and right
 */
var items = document.querySelector(".items");
var isMouseDown = false;
var startX = 0;
var scrollLeft = 0;
var mouseLeave = "mouseleave", mouseUp = "mouseup", mouseDown = "mousedown", mouseMove = "mousemove";
var eventArray = [mouseDown, mouseLeave, mouseMove, mouseUp];
eventArray.forEach(function (eventType) {
    items.addEventListener(eventType, function (e) {
        var event = e;
        if (eventType === mouseDown) {
            isMouseDown = true;
            startX = event.pageX - items.offsetLeft;
            scrollLeft = items.scrollLeft;
            items.classList.add('active');
        }
        else if (eventType === mouseMove) {
            event.preventDefault();
            if (isMouseDown) {
                var currentX = event.pageX - items.offsetLeft;
                var walks = (currentX - startX) * 3;
                items.scrollLeft = scrollLeft - walks;
            }
        }
        else {
            items.classList.remove("active");
            isMouseDown = false;
        }
    });
});
