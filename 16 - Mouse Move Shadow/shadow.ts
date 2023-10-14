const text = document.querySelector("h1") as HTMLElement;
const hero = document.querySelector('.hero') as HTMLElement;
const range = 500;

hero.addEventListener("mousemove", handleShadow);

function handleShadow(e: MouseEvent){
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    const currentElement = e.target as HTMLElement;
    if(currentElement !== hero){
        x += currentElement.offsetLeft;
        y += currentElement.offsetTop;
        // let the x, y relative to hero(the same as parent element)
    }
    const xRange = Math.round((x/width*range)-(range/2));
    const yRange = Math.round((y/height*range)-(range/2));
    text.style.textShadow = `
    #CD5C08 ${xRange}px ${yRange}px 0,
    #F5E8B7 ${yRange}px ${xRange}px 0,
    #C1D8C3 ${-xRange}px ${-yRange}px 0,
    #6A9C89 ${-yRange}px ${-xRange}px 0
    `; 
    //console.log(x, y);
    
    
}
