/**
 *  Requirement:
 *    hover a nav then show the dropdown of the current nav 
 * 
 *  Solution:
 *    add mouseover in all nav list,
 *    then hover one add an enter class to it 
 *    detect it's child element with the class name called dropdown
 *     get the dropdown's width, height and x, y  position
 *      apply to dropdownbackground and make it appear
 *     add an active class to the list to make to dropdown appear.
 * 
 */
const dropdownBackground = document.querySelector('.dropdownBackground') as HTMLElement;

const navs = document.querySelectorAll('ul.cool > li') as NodeListOf<HTMLLIElement>;
const navRect = document.querySelector('.top')?.getBoundingClientRect();
const {x:topx,  y:topy} = navRect!;

Array.from(navs!).forEach((nav) => {
    nav.addEventListener('mouseover', handleNav);
    nav.addEventListener('mouseout', cancelNav);
})
function handleNav(e:MouseEvent){
    const nav = e.currentTarget as HTMLElement;
    nav.classList.add('trigger-enter');
    const rect = nav.querySelector('.dropdown')!.getBoundingClientRect()
    const {width, height, x, y} = rect;
    console.log(rect);
    Object.assign(dropdownBackground!.style, {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${x-topx}px, ${y-topy}px)`
    })
    dropdownBackground.classList.add('open');
    nav.classList.add('trigger-enter-active');
    //check the rect
    
}
function cancelNav(e:MouseEvent){
    const nav = e.currentTarget as HTMLElement;
    nav.classList.remove('trigger-enter', 'trigger-enter-active');
    dropdownBackground.classList.remove('open');
}
