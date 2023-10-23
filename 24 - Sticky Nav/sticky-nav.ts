/**
 * Requirement:
 *  scroll the screen when the nav element is on the top, fixed the position and show the logo.
 */
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo') as HTMLElement | null;
const navTop = nav!.offsetTop;

window.addEventListener('scroll', ()=> {
    stickNav(window.scrollY, navTop);
})

function stickNav(scrolled: number, top: number){
    if(scrolled >= top){
        toggleStyle(true);
    }
    else{
        toggleStyle(false);
    }
}
function toggleStyle(foure: boolean){
        document.body.classList.toggle('fixnav', foure);
}