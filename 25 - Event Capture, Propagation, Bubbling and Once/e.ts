const all = document.body.querySelectorAll('div, button');

function callEventOnce(e: Event){
    const element = e.currentTarget as HTMLElement;
    if(element.hasAttribute('class')){
        console.log(element.getAttribute('class'));
    }
    else{
        console.log("Click!!!");
    }

}

Array.from(all).forEach((element) => {
    element.addEventListener('click', callEventOnce,{once: true} ); 
})