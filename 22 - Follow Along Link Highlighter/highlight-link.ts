/**
 *  Requirement:
 *      hover on the link and highlight it
 *  
 *  Solution: 
 *      create a span element with highlight class
 *      all the <a> elements add mouseover event that when the cursor over one of them  move the lightlight element above it.
 *      add the corresponding <a>'s width, height and x y  position to the lightlight
 * 
 */

const aElements = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

Array.from(aElements).forEach((link) => {
    const rect = link.getBoundingClientRect();
    link.addEventListener('mouseover', (e) =>{
        console.log(rect);
        const width = `${rect.width}px`;
        const height = `${rect.height}px`;
        const x = `${rect.x}px`;
        const y = `${rect.y}px`;

        highlight.style.width = width;
        highlight.style.height = height;
        highlight.style.transform = `translate(${x},${y})`;
       
    })
})
