/**
 *  Requirement:
 *     drawing in the canvas.
 *     the brush will change its radius and color when drawing
 *
    Solution:
       Require four even: mouse move, mouse down, mouse up and out
       need a state of whether drawing or not; track the cursor coordinate

       reqire variables of line width and hue color, each of them have a range when it reaches the limit, going back.
 *
 */
var canvas = document.getElementById("draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 100;
var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direction = true;
canvas.addEventListener("mousedown", function (event) {
    var _a;
    isDrawing = true;
    _a = [event.offsetX, event.offsetY], lastX = _a[0], lastY = _a[1];
});
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", function () {
    isDrawing = false;
});
canvas.addEventListener("mouseout", function () {
    isDrawing = false;
});
function drawing(event) {
    var _a;
    if (!isDrawing)
        return; // when the mouse is not mouse down, stop the function
    ctx.strokeStyle = "hsl(".concat(hue, ", 100%, 50%)");
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    _a = [event.offsetX, event.offsetY], lastX = _a[0], lastY = _a[1];
    hue++;
    if (hue >= 360)
        hue = 0;
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    }
    else {
        ctx.lineWidth--;
    }
}
;
