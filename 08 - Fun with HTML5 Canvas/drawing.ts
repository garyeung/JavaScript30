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

const canvas = document.getElementById("draw") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx!.lineCap = 'round';
ctx!.lineJoin = 'round';
ctx!.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
})
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
})
canvas.addEventListener("mouseout", () => {
    isDrawing = false;
})


function drawing(event: MouseEvent){
    if(!isDrawing) return; // when the mouse is not mouse down, stop the function
    ctx!.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx!.beginPath();
    ctx!.moveTo(lastX,lastY);
    ctx!.lineTo(event.offsetX, event.offsetY);
    ctx!.stroke();

    [lastX, lastY] = [event.offsetX, event.offsetY];
    hue++;
    if(hue >=360) hue = 0;

    if(ctx!.lineWidth >= 100 || ctx!.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){
        ctx!.lineWidth++;
    }else{ ctx!.lineWidth--; }

};