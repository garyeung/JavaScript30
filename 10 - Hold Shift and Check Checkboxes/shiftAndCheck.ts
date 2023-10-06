/**
 *  Requirement:
 *    first check one item
 *    then hold down the shift key
 *    check a lower item
 *    everything in between should be set to checked
 * 
 *  Solution:
 *    get all the checkbox in to an array
 *    all add an click event：
 *      if shift key is pressing and one above item have checked, check all item between your clikcing and the above.
 *     
 *    need shiftkey state
 */
const checkboxes:HTMLInputElement[] = Array.from(document.querySelectorAll('input[type="checkbox"]'));
//console.log(checkboxes);
let pressingShift = false;

window.addEventListener('keydown', (e) => 
{
    if(e.key === "Shift"){
        pressingShift = true;
    }
})
window.addEventListener('keyup', (e)=> {
    if(e.key === "Shift"){
        pressingShift = false;
    }
})

checkboxes.forEach((checkbox, item) => {
    checkbox.addEventListener("click", (event) =>{
        if(pressingShift){
            for(let i = item-1; i >= 0; i--){
                if(checkboxes[i].checked !== true){
                    checkboxes[i].checked = true;
                }
                else break;
            }
        }
    })
})



