/**
 *  Requirement: 
 *    down the mouse adn drag the picture left and right
 */

const items = document.querySelector(".items") as HTMLElement;
let isMouseDown = false;
let startX = 0;
let scrollLeft = 0;

const mouseLeave = "mouseleave", 
mouseUp = "mouseup",
mouseDown = "mousedown",
mouseMove = "mousemove";
const eventArray = [mouseDown, mouseLeave, mouseMove, mouseUp];

eventArray.forEach((eventType) => {
    items!.addEventListener(eventType, (e) => {
        const event = e as MouseEvent;
        if(eventType === mouseDown){
            isMouseDown = true;
            startX = event.pageX - items.offsetLeft;
            scrollLeft = items.scrollLeft; 
            items.classList.add('active');
        }
        else if(eventType === mouseMove){
            event.preventDefault();
            if(isMouseDown){
                let currentX = event.pageX - items.offsetLeft;
                let walks = (currentX-startX)*3;
                items.scrollLeft = scrollLeft -walks;
            }
        }
        else {
            items.classList.remove("active");
            isMouseDown = false; 
        }
    })
})