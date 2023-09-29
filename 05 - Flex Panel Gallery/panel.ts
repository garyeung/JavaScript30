/**
 * Requirement:
 *   click each of panels that add or remove the class of open
 * 
 * Solution:
 *    select all the panel add click event;
 *    detect  if the panel have a class called open or not, if not add it, else remove    
 *    
 */

const panels = document.getElementsByClassName("panel");

const openClass = 'open';

const panelsArray = Array.from(panels);
panelsArray.forEach((panel) => {
    panel.addEventListener("click", (event) => {
        if (panel.classList.contains(openClass)){
            panel.classList.remove(openClass);
        }
        else{
            panel.classList.add(openClass);
        }

    })
})