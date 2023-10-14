var text = document.querySelector("h1");
var hero = document.querySelector('.hero');
var range = 500;
hero.addEventListener("mousemove", handleShadow);
function handleShadow(e) {
    var width = hero.offsetWidth, height = hero.offsetHeight;
    var x = e.offsetX, y = e.offsetY;
    var currentElement = e.target;
    if (currentElement !== hero) {
        x += currentElement.offsetLeft;
        y += currentElement.offsetTop;
        // let the x, y relative to hero(the same as parent element)
    }
    var xRange = Math.round((x / width * range) - (range / 2));
    var yRange = Math.round((y / height * range) - (range / 2));
    text.style.textShadow = "\n    #CD5C08 ".concat(xRange, "px ").concat(yRange, "px 0,\n    #F5E8B7 ").concat(yRange, "px ").concat(xRange, "px 0,\n    #C1D8C3 ").concat(-xRange, "px ").concat(-yRange, "px 0,\n    #6A9C89 ").concat(-yRange, "px ").concat(-xRange, "px 0\n    ");
    //console.log(x, y);
}
